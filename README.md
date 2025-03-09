



## ⌨️ Keybindings
| Hotkey                                            | Action                                  |
| ------------------------------------------------- | --------------------------------------- |
| <kbd>Numrow</kbd> \| <kbd>MouseWheel</kbd> \| <kbd>Click</kbd> | Switch tabs                |
| <kbd>s</kbd>                                      | Search Dialog                           |
| <kbd>q</kbd>                                      | Config Dialog (enable in userconfig.js) |
| <kbd>Esc</kbd>                                    | Close Dialogs                           |




## 🔍 Search Dialog
![image](assets/search-dialog.png)

The search dialog allows you to display a search bar with various search engines defined in the configuration. To select each one, you simply need to prefix the query with the corresponding `!<id>`.
By default, the defined search engines are:
- `!g`: google
- `!d`: duckduckgo
- `!y`: youtube
- `!r`: reddit
- `!p`: pinterest



## ⚙️ Configuration Dialog
![config-dialog](assets/config-dialog.png)

The default configuration file is [userconfig.js](userconfig.js), but you can change it in the configuration dialog. You can find more information about how the file works in the [original repository](https://github.com/b-coimbra/dawn). The available components are tabs, a clock, and weather.

Additionally, there are two different new options:
- `fastlink`: To set the link of the Pokeball button.
- `localIcons`: To optimize the loading time of the icons, you can check it out [here](#local-icons).