let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
    temperature: {
    location: 'Belarus, Gomel',
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#ea6962",
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      d: ["https://duckduckgo.com/html?q=", "DuckDuckGo"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      r: ["https://www.reddit.com/search/?q=", "Reddit"],
      p: ["https://www.pinterest.es/search/pins/?q=", "Pinterest"],
    },
  },
  keybindings: {
    "s": "search-bar",
    //"q": "config-tab",
  },
  disabled: [],
  localIcons: false,
  fastlink: "https://chat.openai.com/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-2.gif",
      categories: [{
        name: "Social Media",
        links: [
          {
            name: "autistici",
            url: "https://vc.autistici.org/",
            icon: "message-circle",
            icon_color: "#7daea3",
          },
          {
            name: "discord",
            url: "https://discord.com/channels/@me",
            icon: "brand-discord",
            icon_color: "#8C9EFF",
          },
          {
            name: "reddit",
            url: "https://www.reddit.com/",
            icon: "brand-reddit",
            icon_color: "#e78a4e",
          },
          {
            name: "telegram",
            url: "https://web.telegram.org",
            icon: "brand-telegram",
            icon_color: "#7db9ff", // Updated to a bright blue
          },
        ],
      }, {
        name: "Games",
        links: [
          {
            name: "steam",
            url: "https://store.steampowered.com",
            icon: "brand-steam",
            icon_color: "#7aa2f7", // Updated to a bright blue
          },
          {
            name: "chess",
            url: "https://www.chess.com/home",
            icon: "chess-queen-filled",
            icon_color: "#a9b665",
          },
          {
            name: "epic",
            url: "https://store.epicgames.com",
            icon: "brand-fortnite",
            icon_color: "#e0af68", // Updated to a gold
          },
          {
            name: "GG",
            url: "https://ggapp.io/pivoshenko",
            icon: "device-gamepad",
            icon_color: "#d3869b", // Updated to a muted green
          },
          {
            name: "faceit",
            url: "https://www.faceit.com/",
            icon: "check",
            icon_color: "#e78a4e",
          },
        ],
      }, {
        name: "Video",
        links: [
          {
            name: "youtube",
            url: "https://www.youtube.com/",
            icon: "brand-youtube-filled",
            icon_color: "#ea6962",
          },
          {
            name: "twitch",
            url: "https://www.twitch.tv/",
            icon: "brand-twitch",
            icon_color: "#d3869b",
          },
          {
            name: "disney+",
            url: "https://www.disneyplus.com/home",
            icon: "brand-disney",
            icon_color: "#7daea3",
          },
          {
            name: "netflix",
            url: "https://www.netflix.com/",
            icon: "brand-netflix",
            icon_color: "#ea6962",
          },
          {
            name: "primevideo",
            url: "https://www.primevideo.com/region/eu/?ref_=dv_web_unknown",
            icon: "brand-amazon",
            icon_color: "#7daea3",
          },
        ],
      }],
    },
    {
      name: "tools",
      background_url: "src/img/banners/cbg-6.gif",
      categories: [
        {
          name: "programming",
          links: [
            {
              name: "vscode",
              url: "https://vscode.dev/",
              icon: "brand-vscode",
              icon_color: "#3BA4D9",
            },
            {
              name: "rust",
              url: "https://doc.rust-lang.org/book/",
              icon: "brand-rust",
              icon_color: "#e78a4e",
            },
            {
              name: "go",
              url: "https://go.dev/doc/",
              icon: "brand-golang",
              icon_color: "#6AD9CC",
            },
          ],
        },
        {
          name: "design",
          links: [
            {
              name: "colorhunt",
              url: "https://colorhunt.co/",
              icon: "color-picker",
              icon_color: "#a9b665",
            },
            {
              name: "pinterest",
              url: "https://www.pinterest.es/",
              icon: "brand-pinterest",
              icon_color: "#ea6962",
            },
            {
              name: "adobe color",
              url: "https://color.adobe.com/es/create/color-wheel",
              icon: "brand-adobe",
              icon_color: "#7daea3",
            },
            {
              name: "terminalsexy",
              url: "https://terminal.sexy",
              icon: "prompt",
              icon_color: "#e78a4e",
            },
          ],
        },
        {
          name: "ai tools",
          links: [
            {
              name: "gemini",
              url: "https://gemini.google.com/",
              icon: "circle-letter-g",
              icon_color: "#ea6962",
            },
            {
              name: "chatgpt",
              url: "https://chatgpt.com",
              icon: "brand-openai",
              icon_color: "#89b482",
            },
            {
              name: "codeium",
              url: "https://codeium.com/live",
              icon: "code-dots",
              icon_color: "#6AD9CC",
            },
            {
              name: "leonardo",
              url: "https://app.leonardo.ai/",
              icon: "brush",
              icon_color: "#d3869b",
            },
            {
              name: "copilot",
              url: "https://copilot.microsoft.com/",
              icon: "brand-github-copilot",
              icon_color: "#3BA4D9",
            },
            {
              name: "claude",
              url: "https://claude.ai/new",
              icon: "brain",
              icon_color: "#ff9e64", // Updated to a soft orange
            },
            {
              name: "deepl",
              url: "https://www.deepl.com/",
              icon: "git-merge",
              icon_color: "#7DB6E1",
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-7.gif",
      categories: [
        {
          name: "repositories",
          links: [
            {
              name: "github",
              url: "https://github.com/",
              icon: "brand-github",
              icon_color: "#7daea3",
            },
            {
              name: "gitlab",
              url: "https://gitlab.com/",
              icon: "brand-gitlab",
              icon_color: "#e78a4e",
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "phind",
              url: "https://www.phind.com/",
              icon: "brand-openai",
              icon_color: "#89b482",
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: "#e0af68", // Updated to a soft pink
            },
            {
              name: "NixOS Wiki",
              url: "https://nixos.wiki/",
              icon: "square-rounded-letter-n",
              icon_color: "#7DB6E1",
            },
            {
              name: "ArchWiki",
              url: "https://wiki.archlinux.org",
              icon: "navigation-minus",
              icon_color: "#73daca", // Updated to a teal
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "brand-leetcode",
              icon_color: "#e0af68",
            },
            {
              name: "monkeytype",
              url: "https://monkeytype.com/",
              icon: "keyboard",
              icon_color: "#7DB6E1",
            },
            {
              name: "codewars",
              url: "https://www.codewars.com/",
              icon: "swords",
              icon_color: "#F05656",
            },
            {
              name: "hackthebox",
              url: "https://app.hackthebox.com",
              icon: "box",
              icon_color: "#a9b665",
            },
            {
              name: "tryhackme",
              url: "https://tryhackme.com/dashboard",
              icon: "brand-onedrive",
              icon_color: "#ea6962",
            },
            {
              name: "hackerrank",
              url: "https://www.hackerrank.com/dashboard",
              icon: "code-asterix",
              icon_color: "#a9b665",
            },
            {
              name: "cryptohack",
              url: "https://cryptohack.org/challenges/",
              icon: "brain",
              icon_color: "#e78a4e",
            },
          ],
        },
      ],
    },
    {
      name: "myself",
      background_url: "src/img/banners/cbg-9.gif",
      categories: [
        {
          name: "mails",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com/mail/u/0/",
              icon: "brand-gmail",
              icon_color: "#ea6962",
            },
            {
              name: "protonmail",
              url: "https://mail.proton.me/u/0/inbox",
              icon: "mail",
              icon_color: "#d3869b",
            },
            {
              name: "tempmail",
              url: "https://temp-mail.org/",
              icon: "clock",
              icon_color: "#89b482",
            },
          ],
        },
        {
          name: "storage",
          links: [
            {
              name: "drive",
              url: "https://drive.google.com/drive/u/0/my-drive",
              icon: "brand-google-drive",
              icon_color: "#e78a4e",
            },
            {
              name: "dropbox",
              url: "https://www.dropbox.com/h?role=personal&di=left_nav",
              icon: "box-seam",
              icon_color: "#7daea3",
            },
            {
              name: "photo",
              url: "https://photos.google.com/u/1",
              icon: "photo-filled",
              icon_color: "#ea6962",
            },
          ],
        },
        {
          name: "stuff",
          links: [
            {
              name: "linkedin",
              url: "https://www.linkedin.com/feed/",
              icon: "brand-linkedin",
              icon_color: "#7daea3",
            },
            {
              name: "hh",
              url: "https://hh.ru/",
              icon: "zoom-code",
              icon_color: "#ea6962",
            },
            {
              name: "rabota",
              url: "rabota.by",
              icon: "square-letter-r",
              icon_color: "#89b482",
            },
          ],
        },
      ],
    },
  ],
};


const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);
    
(function() {
  var css = document.createElement('link');
  css.href = 'src/css/tabler-icons.min.css';
  css.rel = 'stylesheet';
  css.type = 'text/css';
  if (!CONFIG.config.localIcons)
    document.getElementsByTagName('head')[0].appendChild(css);
})();
    
CONFIG.setBackground(CONFIG.config.tabsBackground);
    
    
    // // Merge saved config with default config, preferring saved values
    // const CONFIG = new Config(Object.assign({}, default_config, saved_config));
    
    // // Load Tabler icons CSS
    // (function() {
    //   if (!CONFIG.config.localIcons) {
    //     const css = document.createElement('link');
    //     css.href = 'https://cdn.jsdelivr.net/npm/@tabler/icons@latest/iconfont/tabler-icons.min.css';
    //     css.rel = 'stylesheet';
    //     css.type = 'text/css';
    //     document.head.appendChild(css);
    //   }
    // })();
    
    // // Save config to localStorage whenever it changes
    // CONFIG.onChange = function(newConfig) {
    //   localStorage.setItem("CONFIG", JSON.stringify(newConfig));
    // };