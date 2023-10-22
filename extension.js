// Copyright (C) 2022  Lucas Emanuel Resck
// Copyright (C) 2022  vakokako
// Copyright (C) 2021  Taiki Sugawara

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import Clutter from 'gi://Clutter';

import {
    Extension,
    InjectionManager,
} from 'resource:///org/gnome/shell/extensions/extension.js';

import * as AltTab from 'resource:///org/gnome/shell/ui/altTab.js';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

export default class AltTabScrollWorkaroundExtension extends Extension {

    enable() {
        this._injectionManager = new InjectionManager();

        const seat = Clutter.get_default_backend().get_default_seat();
        const vdevice = seat.create_virtual_device(
            Clutter.InputDeviceType.POINTER_DEVICE
        );

        this._injectionManager.overrideMethod(
            AltTab.WindowSwitcherPopup.prototype,
            '_finish',
            (originalMethod) => {
                return function (timestamp) {
                    const [x, y] = global.get_pointer();
                    vdevice.notify_absolute_motion(global.get_current_time(), x, y);
                    Main.activateWindow(this._items[this._selectedIndex].window);
                    originalMethod.call(  
                        this,
                        timestamp
                    );
                };
            }
        );
    }

    disable() {
        this._injectionManager.clear();
        this._injectionManager = null;
    }
}
