import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "小王的碎碎念",
  description: "A VitePress Site",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "前端场景题", link: "/skills/FrondEnd/scene-questions.md" },
      { text: "后端", link: "/skills/BackEnd/邂逅Nest.md" },  
      { text: "无聊的碎碎念", link: "/life/index" },
    ],

    sidebar: {
      "/life/": [
        {
          text: "我的生活",
          items: [
            { text: "介绍", link: "/life/index.html" },
            { text: "Two", link: "/guide/two" },
          ],
        },
      ],
      "/skills/FrontEnd/": [
        {
          text: "前端技术",
          items: [
            { text: "前端场景题", link: "/skills/BackEnd/scene-questions.md" },
            { text: "Nest基础知识", link: "/skills/BackEnd/Nest基础知识.md" },
          ],
        },
      ],
      "/skills/BackEnd/": [
        {
          text: "后端技术",
          items: [
            { text: "邂逅Nest", link: "/skills/BackEnd/邂逅Nest.md" },
            { text: "Nest基础知识", link: "/skills/BackEnd/Nest基础知识.md" },
          ],
        },
      ],
      "/study/": [
        {
          text: "我的考研之路",
          items: [
            { text: "心灵鸡汤", link: "/study/index.md" },
            { text: "七月份", link: "/study/July.md" },
          ],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/wangchaozi" }],
  },
});
