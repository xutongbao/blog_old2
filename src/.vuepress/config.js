module.exports = {
  title: '徐同保的博客',
  description: 'web前端,vue,react,javascript,css',
  base: '/blog/',
  dest: './docs',
  themeConfig: {
    logo: '/xutongbao.jpg',
    nav: [
      {
        text: '博客',
        items: [
          { text: 'CSDN', link: 'https://blog.csdn.net/xutongbao' },
          { text: '掘金', link: 'https://juejin.cn/user/2181899635143325' },
          { text: '博客园', link: 'https://www.cnblogs.com/xutongbao/' },
          { text: '51CTO', link: 'https://blog.51cto.com/xutongbao' },
        ],
      },
      {
        text: '开源项目',
        items: [
          {
            text: '无代码创建表格（react）',
            link: 'https://xutongbao.github.io/air/',
          },
          {
            text: '小米书城（vue3）',
            link: 'https://xutongbao.github.io/#/light/login',
          },
          {
            text: '小米书城（vue3+vite）',
            link: 'https://xutongbao.github.io/vite/vite/#/light/login',
          },
          {
            text: '小米书城（nuxt）',
            link: 'https://xutongbao.github.io/nuxt/',
          },
        ],
      },
    ],
    displayAllHeaders: false,
    sidebar: [
      {
        title: '博客',
        path: '/light/',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          '/light/',
          '/light/test',
          '/light/type-inference',
          '/light/TS',
        ],
      },
    ],

    lastUpdated: '上次更新:',

    repo: 'xutongbao/blog',
    repoLabel: 'GitHub',
    docsRepo: 'xutongbao/blog',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'src',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    smoothScroll: true,
  },
}
