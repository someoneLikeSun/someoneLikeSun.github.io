const { defaultTheme } = require('@vuepress/theme-default')
// import vmyself from 'vmyself'
const sourceDir = './docs'
module.exports = {
  lang: 'zh-CN',
  title: '你好',
  description: '这是我的第一个 VuePress 站点',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: "Evan's blog",
      description: 'web前端技术博客,专注web前端学习与总结。JavaScript,js,ES6,TypeScript,vue,React,python,css3,html5,Node,git,github等技术文章。',
    }
  },
  // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）
  base: '/',
  // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
    [
      'meta',
      {
        name: 'keywords',
        content: '前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown',
      },
    ],
    ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }], // 百度统计的站长验证（你可以去掉）
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
    // [
    //   'script',
    //   {
    //     'data-ad-client': 'ca-pub-7828333725993554',
    //     async: 'async',
    //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    //   },
    // ], // 网站关联Google AdSense 与 html格式广告支持（你可以去掉）
  ],
  theme: defaultTheme({
    themePlugins:{
      activeHeaderLinks:false,//是否启用 @vuepress/plugin-active-header-links 。
      backToTop:false,//是否启用 @vuepress/plugin-back-to-top 。
      container:[],
      externalLinkIcon:true,
      git:true,
      //为图片提供可缩放的功能
      mediumZoom:true,

    },
    // 导航栏中 Logo 的链接
    // 404 页面的 返回首页 链接
    home: '/',
    navbar: [
      // { text: '首页', link: '/' },
      {
        text: '页面',
        children: [
          { text: 'HTML', link: '/pages/8309a5b876fc95e3/' },

          {
            text: 'CSS', link: '/pages/0a83b083bdf257cb/'
            //当路由匹配pages时，会显示激活状态
            // , activeMatch: '/pages/' 
          },
        ],
      },
    ],
    logo: '/img/logo.png', // 导航栏logo
    logoDark:'/img/logo.png',//页面模式使用的导航栏logo
    // 如果设置为 true ，将会在导航栏展示一个切换夜间模式的按钮，并会根据 prefers-color-scheme 自动设置初始模式。
    darkMode:true,//是否开启夜间模式切换的功能
    toggleDarkMode:'toggle dark mode',//切换夜间模式按钮的标题文字

    repo: 'vuejs/vuepress',//github仓库地址
    repoLabel:'1as',//仓库地址的名称
    sidebar: 'auto',//如果你设置为 'auto'，侧边栏会根据页面标题自动生成。为了手动配置侧边栏元素，你可以将其设置为 侧边栏数组 
    toggleSidebar:'toggle sidebar',//切换侧边栏按钮的标题文字。
    //设置根据页面标题自动生成的侧边栏的最大深度。
    //最大值取决于你通过 markdown.extractHeaders.level 提取了哪些级别的标题。
    //你可以通过页面的 sidebarDepth frontmatter 来覆盖这个全局配置。
    sidebarDepth:2,

    //markdown中的自定义容器的配置
    tip:'TIP',
    warning:'WARNING',
    danger:'DANGER',




    notFound:['Not Found'],//404 页面的提示信息。当用户进入 404 页面时，会从数组中随机选取一条信息进行展示。
    backToHome:['Back to home'],//404 页面中 返回首页 链接的文字。

    //编辑此页的按钮配置 start-------------------------
    editLink:true,//你可以通过页面的 editLink frontmatter 来覆盖这个全局配置。
    editLinkText:'Edit this page',
    // 如果你不设置该选项，则会根据 docsRepo 配置项来推断 Pattern 。但是如果你的文档仓库没有托管在常用的平台上，比如 GitHub 、 GitLab 、 Bitbucket 、 Gitee 等，那么你必须设置该选项才能使 编辑此页 链接正常工作。
    // editLinkPattern:''
    // 文档源文件的仓库 URL .它将会用于生成 编辑此页 的链接。如果你不设置该选项，则默认会使用 repo 配置项。但是如果你的文档源文件是在一个不同的仓库内，你就需要设置该配置项了。
    // docsRepo:
    // docsBranch //文档源文件的仓库分支。
    // docsDir  //文档源文件存放在仓库中的目录名。
    //编辑此页的按钮配置 end-------------------------------
    contributors:false,//你可以通过页面的 contributors frontmatter 来覆盖这个全局配置。要注意的是，如果你已经将该选项设为了 false ，那么这个功能会被完全禁用，并且无法在 locales 或页面 frontmatter 中启用。
    contributorsText:'Contributors',//贡献者列表 标签的文字

    lastUpdated:true,//是否启用 最近更新时间戳 。你可以通过页面的 lastUpdated frontmatter 来覆盖这个全局配置。要注意的是，如果你已经将该选项设为了 false ，那么这个功能会被完全禁用，并且无法在 locales 或页面 frontmatter 中启用。
    lastUpdatedText:'Last Updated'
    // 在这里进行配置
  }),

  //ExternalLinkIcon  是否在当前页面的外部链接的后面添加外部链接图标
  openInNewWindow:'open in new window',//ExternalLinkIcon. 链接内的sr-only文字 


  //指定临时文件目录。
  temp: `${sourceDir}/.vuepress/.temp`,
  cache: `${sourceDir}/.vuepress/.cache`,

  //打包编译时默认的目录
  dest: `${sourceDir}/.vuepress/dist`,
  public: `${sourceDir}/.vuepress/public`,

  /** 
   * 开发环境下的参数配置 start 
  */
  // 该配置项主要提供给开发者使用。同时，我们使用了 debug 模块打印 Debug 日志，可以通过 DEBUG=vuepress* 环境变量来启用。
  debug: true,
  host: '127.0.0.1',
  port: '18001',
  open: true,
  // templateDev:'@vuepress/client/templates/dev.html',
  /** 
   * 开发环境下的参数配置 END
  */

  /**
   * 打包编译时的配置 START
   */
  //  一个函数，用来控制哪些文件是需要生成对应的 <link rel="preload"> 标签的。设置为 true 或者 false 来完全启用或禁用它。
  //  默认情况下，只有当前页面所需的文件会被预加载。所以在绝大部分情况下，你只需要使用 true 就可以了。
  shouldPreload: (file, type) => { console.log(file); return true },
  // 一个函数，用来控制哪些文件是需要生成对应的 <link rel="prefetch"> 标签的。设置为 true 或者 false 来完全启用或禁用它。
  // 如果你将它设置为 true ，所有其它页面所需的文件都会被预拉取。这对于小型站点来说是十分有帮助的，因为它会大大提升页面切换的速度。但是在你的网站有很多页面时不建议你这么做。
  shouldPrefetch: (file, type) => { console.log(file); return true },
  // templateBuild:'@vuepress/client/templates/build.html'

  /**
   * 打包编译时的配置 END
   * 
   */

  // pagePatterns
  //什么resolve @
}
