import { defineConfig } from "vitepress";

export default defineConfig({
  title: "小王的碎碎念",
  description: "A VitePress Site",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "前端基础题", link: "/skills/FrontEnd/basic/html.md" }, // 修正为FrontEnd
      { text: "前端场景题", link: "/skills/FrontEnd/scene-questions.md" },
      { text: "后端", link: "/skills/BackEnd/邂逅Nest.md" },  
      { text: "无聊的碎碎念", link: "/life/index" },
    ],

    sidebar: {
      // 生活分类
      "/life/": [
        {
          text: "我的生活",
          items: [
            { text: "介绍", link: "/life/index.html" },
            { text: "Two", link: "/guide/two" },
          ],
        },
      ],
      
      // 前端基础题分类
      "/skills/FrontEnd/basic/": [ // 修正路径层级
        {
          text: "前端基础",
          items: [
            { text: "HTML基础知识", link: "/skills/FrontEnd/basic/html.md" }, // 修正为FrontEnd
            { text: "CSS基础知识", link: "/skills/FrontEnd/basic/css.md" },
            { text: "JavaScript基础知识", link: "/skills/FrontEnd/basic/js.md" },
          ],
        },
      ],
      
      // 前端场景题分类
      "/skills/FrontEnd/": [
        {
          text: "前端进阶",
          items: [
            { text: "前端场景题", link: "/skills/FrontEnd/scene-questions.md" }, // 修正为FrontEnd
            { text: "Nest基础知识", link: "/skills/BackEnd/Nest基础知识.md" }, // 移动到后端分类
          ],
        },
      ],
      
      // 后端分类
      "/skills/BackEnd/": [
        {
          text: "后端技术",
          items: [
            { text: "邂逅Nest", link: "/skills/BackEnd/邂逅Nest.md" },
            { text: "Nest基础知识", link: "/skills/BackEnd/Nest基础知识.md" },
          ],
        },
      ],
      
      // 学习分类
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