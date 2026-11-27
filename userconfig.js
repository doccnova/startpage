let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: 'Minsk',
    scale: "C",
  },
  clock: {
    format: "h:i",
    iconColor: "#ea6962",
  },
  search: {
    engines: {
      d: ["https://noai.duckduckgo.com/?q=", "DuckDuckGo (No AI)"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      r: ["https://www.reddit.com/search/?q=", "Reddit"],
      p: ["https://www.pinterest.com/search/pins/?q=", "Pinterest"],
    },
  },
  keybindings: {
    "s": "search-bar",
    "q": "config-tab",
  },
  disabled: [],
  localIcons: true,
  fastlink: "https://duck.ai/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-4.gif",
      categories: [{
        name: "Social Media",
        links: [
          {
            name: " mastodon",
            url: "https://mastodon.social",
            icon: "",
            icon_color: "#6F00FF",
          },
          {
            name: " vk",
            url: "https://vk.com/feed",
            icon: "",
            icon_color: "#7daea3",
          },
          {
            name: "󰑍 reddit",
            url: "https://www.reddit.com/",
            icon: "brand-reddit",
            icon_color: "#e78a4e",
          },
          {
            name: " youtube",
            url: "https://www.youtube.com/",
            icon: "",
            icon_color: "#ea6962",
          },
          {
            name: " twitch",
            url: "https://www.twitch.tv/",
            icon: "",
            icon_color: "#d3869b",
          },
        ],
      }, {
        name: "Video",
        links: [
          {
            name: " odysee",
            url: "https://odysee.com/",
            icon: "",
            icon_color: "#FF6600",
          },
          {
            name: "󰟥 piped",
            url: "https://piped.ducks.party/",
            icon: "",
            icon_color: "#7daea3",
          },
        ],
      }],
    },
    {
      name: "design",
      background_url: "src/img/banners/cbg-4.gif",
      categories: [
        {
          name: "inspiration",
          links: [
            {
              name: " pinterest",
              url: "https://www.pinterest.es/",
              icon: "",
              icon_color: "#ea6962",
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "󰴱 colorhunt",
              url: "https://colorhunt.co/",
              icon: "",
              icon_color: "#ea6962",
            },
            {
              name: " chromora",
              url: "https://color.adobe.com/ru/create/color-wheel",
              icon: "",
              icon_color: "#7daea3",
            },
            {
              name: " terminalsexy",
              url: "https://terminal.sexy",
              icon: "",
              icon_color: "#e78a4e",
            },
          ],
        },
        {
          name: "resources 3d",
          links: [
            {
              name: "󰟽 thingiverse",
              url: "https://www.thingiverse.com/",
              icon: "",
              icon_color: "#7daea3",
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-4.gif",
      categories: [
        {
          name: "repositories",
          links: [
            {
              name: " github",
              url: "https://github.com/",
              icon: "",
              icon_color: "#7daea3",
            },
            {
              name: " gitea",
              url: "https://gitea.com/",
              icon: "",
              icon_color: "#00FF91",
            },
            {
              name: " codeberg",
              url: "https://codeberg.org",
              icon: "",
              icon_color: "#0D65FF"
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: " qml",
              url: "https://doc.qt.io/qt-6/qml-tutorial.html",
              icon: "",
              icon_color: "#7daea3",
            },
            {
              name: " quickshell",
              url: "https://quickshell.org/docs",
              icon: "",
              icon_color: "#ea6962",
            },
            {
              name: " epam",
              url: "https://learn.epam.com/",
              icon: "",
              icon_color: "#7daea3",
            },
          ],
        },
      ],
    },
    {
      name: "myself",
      background_url: "src/img/banners/cbg-4.gif",
      categories: [
        {
          name: "mail",
          links: [
            {
              name: " tuta",
              url: "https://app.tuta.com",
              icon: "",
              icon_color: "#ea6962",
            },
            {
              name: " proton",
              url: "https://mail.proton.me/",
              icon: "",
              icon_color: "#6F00FF"
            }
          ],
        },
        {
          name: "storage",
          links: [
            {
              name: "photos",
              url: "https://192.168.0.108:9200/files/spaces/personal/admin/%D0%AD%D0%BC%D0%B8%D1%80%D1%85%D0%B0%D0%BD/%D0%A4%D0%BE%D1%82%D0%BE?fileId=b0b157e6-bae1-494e-9452-7227b2eee315%242af1c9a6-7d00-4687-90da-29cf6182f419!67b39243-850d-4558-9fc6-e941d122f869&items-per-page=100&view-mode=resource-tiles&tiles-size=2",
              icon: "photo-filled",
              icon_color: "#00bcff",
            },
          ],
        },
        {
          name: "разное",
          links: [
            {
              name: "solo",
              url: "https://solo.to/casanovaltd",
              icon: "circle-dashed-number-1",
              icon_color: "#002BFF",
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
})();
