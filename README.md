



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



## ⬇️ Installation and Setup

This project is designed for ease of use. Simply download and open in a browser. No server-side setup is required.

1. **Clone or Download:**
   - **Clone the Repository:**
     ```bash
     git clone https://github.com/kiroris/startpage
     ```
   - **Download as ZIP (Simpler for Users):**  Download the project as a ZIP file from the repository and extract it to a local folder.

2. **Open `index.html`:**  Navigate to the project folder and open the `index.html` file in your preferred web browser.  This will load the start page.

3. You can use the google extention  named `custom new Tab url` which allows you to set a local file as the startup page or you can direcly upload the project using github pages in your own repo using your custom configs :)


If you want to reduce the loading time of the icons, you could install the icon font locally and activate the option "localIcons": true in the config to disable the remote styles.


## 🖼 Local Icons
If you want to reduce the loading time of the icons, you could install the [icon font](https://github.com/kiroris/startpage/tree/master/src/fonts) locally and activate the option `"localIcons": true` in the config to disable the remote styles.


## 👤 Credits
Improvised on [Dawn](https://github.com/b-coimbra/dawn), [Terminal127](https://github.com/Terminal127/tokyonight-startpage), and [Taurus](https://github.com/AllJavi/tartarus-startpage)
  [AllJavi](https://github.com/AllJavi) thx for README.


