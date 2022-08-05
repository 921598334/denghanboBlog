module.exports = {
  "title": "BobO",
  "description": "BobO的个人博客",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        //网页title上的头像
        "href": "/avatar2.png"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      // {
      //   "text": "其他说明",
      //   "icon": "reco-message",
      //   "items": [
      //     {
      //       "text": "其他说明-reco",
      //       "link": "/docs/theme-reco/"
      //     }
      //   ]
      // },
      {
        "text": "关于我",
        "icon": "reco-message",
        // "items": [
        //   {
        //     "text": "GitHub",
        //     "link": "https://github.com/recoluan",
        //     "icon": "reco-github"
        //   }
        // ]
        "link": "/us/"
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api",
        "api copy"

      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "文章类别"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "智能结构与控制实验室",
        "desc": "老东家.",
        "email": "1156743527@qq.com",
        "avatar": "/avatar2.png",
        "link": "https://www.ssclab.cn"
      },
      // {
      //   "title": "vuepress-theme-reco",
      //   "desc": "A simple and beautiful vuepress Blog & Doc theme.",
      //   "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
      //   "link": "https://vuepress-theme-reco.recoluan.com"
      // }
    ],
    //导航栏上的头像
    "logo": "/avatar2.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "BoBO",
    //正文中的头像
    "authorAvatar": "/avatar1.png",
    "record": "BobO的个人博客",
    "startYear": "2022"
  },
  "markdown": {
    "lineNumbers": true
  }
}