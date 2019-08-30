// import  url   from '@@/static/comm.js/'
const pkg = require('./package')
// const url = require('./static/comm.js')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: '媒介兔-全行业&全流程_获客整合营销平台',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '媒介兔(www.meijietu.cn)通过整合微信公众号、微博、小红书、短视频、直播、新闻源等全网媒体优质资源，优化广告方案，跟踪媒体广告效果，联合领先的硬软件提供商，提供精准、安全、省心的获客营销方案。' },
      {hid:'keywords',name:'keywords',content:'KOL,广告投放平台,营销推广,微信公众号,微博,小红书,视频,网红直播,短视频'}
      // { httpEquiv:'pragma', content:'no-cache'},
      // { httpEquiv:'Cache-Control', content:'no-cache, must-revalidate'},
      // { httpEquiv:'expires', content:'0'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#5141ed' },

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'assets/common.css',
    'assets/icon/iconfont.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // '@/plugins/element-ui'
    { src: '@/plugins/element-ui', ssr: true},
    '~/plugins/axios',
    // { src: '@/plugins/vue-mavon-editor', srr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],
  axios:{
    baseURL: 'http://develop_webapi.meijietu.cn/api'         //测试
    // baseURL: 'https://back.meijietu.cn/api'                     //线上
    // baseURL: url
  },
  /*
  ** Build configuration
  */
//  判断是否是PC端路由中间件
  router: {
    middleware: ["device"],
  },
  build: {
    transpile: [/^element-ui/],
    extractCSS: { allChunks: true },
    /*
    ** You can extend webpack config here
    */

    extend(config, ctx) {
    }
  }
}
