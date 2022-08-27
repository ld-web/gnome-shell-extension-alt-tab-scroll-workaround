# GNOME Shell Extension Alt+Tab Scroll Workaround

> Temporary fix for a bug that buffers the scroll between different windows (e.g., Chrome and VS Code).

The bug is described in several open issues:
- https://github.com/Microsoft/vscode/issues/28795
- https://github.com/pop-os/pop/issues/2331
- https://github.com/atom/atom/issues/15482
- GitLab: [GNOME/mutter#401](https://gitlab.gnome.org/GNOME/mutter/-/issues/401)
- Chromium: [chromium#608246](https://bugs.chromium.org/p/chromium/issues/detail?id=608246)
- Chromium: [chromium#807187](https://bugs.chromium.org/p/chromium/issues/detail?id=807187)

## Installation

Clone and enter this repository:
```
git clone https://github.com/lucasresck/gnome-shell-extension-alt-tab-scroll-workaround.git
cd gnome-shell-extension-alt-tab-scroll-workaround
```

Install the extension:
```
make install
```

Restart the GNOME Shell:

- Press `Alt+F2`;
- Type `r` and press `Enter`.

> At this point, the extension should be enabled. If not:
> ```
> make enable
> ```

## License
GPLv3
