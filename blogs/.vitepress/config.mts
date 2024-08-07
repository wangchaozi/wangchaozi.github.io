import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "小王的碎碎念",
  description: "A VitePress Site",
  head: [["link", { rel: "icon", href: "../favicon.ico" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "生活", link: "/life/index" },
      { text: "技术", link: "/skills/api-examples.md" },
      { text: "研生", link: "/study/index.md" },
    ],

    sidebar: {
      // 当用户位于 `guide` 目录时，会显示此侧边栏
      "/life/": [
        {
          text: "我的生活",
          items: [
            { text: "介绍", link: "/life/index.html" },
            { text: "Two", link: "/guide/two" },
          ],
        },
      ],

      // 当用户位于 `config` 目录时，会显示此侧边栏
      "/skills/": [
        {
          text: "苦逼技术",
          items: [
            { text: "Markdown Examples", link: "/skills/markdown-examples" },
            { text: "Runtime API Examples", link: "/skills/api-examples" },
            { text: "实验室22级前端考核", link: "/skills/2022assess5.12" },
            { text: "实验室23级前端考核", link: "/skills/2023assess5.12" },
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
})
