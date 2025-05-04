import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "小王的碎碎念",
  description: "A VitePress Site",
  head: [["link", { rel: "icon", href: "/public/logo.png" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "无聊的碎碎念", link: "/life/index" },
      {
        text: "顽强的好技术",
        items: [
          { text: "前端", link: "/skills/FrondEnd/markdown-examples.md" },
          { text: "后端", link: "/skills/BackEnd/api-examples.md" },
        ],
      },
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
            { text: "Markdown Examples", link: "/skills/markdown-examples" },
            { text: "Runtime API Examples", link: "/skills/api-examples" },
          ],
        },
      ],
      "/skills/BackEnd/": [
        {
          text: "后端技术",
          items: [
            { text: "认识Java", link: "/skills/BackEnd/认识Java.md" },
            { text: "Java基础概念", link: "/skills/BackEnd/Java基础概念.md" },
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
