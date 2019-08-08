import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _3f0f83c5 = () => interopDefault(import('..\\pages\\cooperation.vue' /* webpackChunkName: "pages_cooperation" */))
const _95aa5c62 = () => interopDefault(import('..\\pages\\kefu.vue' /* webpackChunkName: "pages_kefu" */))
const _07cd8def = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages_login_index" */))
const _17f4a96b = () => interopDefault(import('..\\pages\\m\\index.vue' /* webpackChunkName: "pages_m_index" */))
const _13757179 = () => interopDefault(import('..\\pages\\problem\\index.vue' /* webpackChunkName: "pages_problem_index" */))
const _8c3bf6e4 = () => interopDefault(import('..\\pages\\salesman\\index.vue' /* webpackChunkName: "pages_salesman_index" */))
const _bfaf74cc = () => interopDefault(import('..\\pages\\shopcar\\index.vue' /* webpackChunkName: "pages_shopcar_index" */))
const _948e3b1e = () => interopDefault(import('..\\pages\\user\\index.vue' /* webpackChunkName: "pages_user_index" */))
const _1203aed8 = () => interopDefault(import('..\\pages\\login\\forgot_password.vue' /* webpackChunkName: "pages_login_forgot_password" */))
const _d9f5fbd4 = () => interopDefault(import('..\\pages\\login\\register.vue' /* webpackChunkName: "pages_login_register" */))
const _6cd06f0f = () => interopDefault(import('..\\pages\\problem\\advertisers.vue' /* webpackChunkName: "pages_problem_advertisers" */))
const _0b901f31 = () => interopDefault(import('..\\pages\\problem\\agreement.vue' /* webpackChunkName: "pages_problem_agreement" */))
const _6211c656 = () => interopDefault(import('..\\pages\\problem\\companyProfile.vue' /* webpackChunkName: "pages_problem_companyProfile" */))
const _7ec26590 = () => interopDefault(import('..\\pages\\problem\\financialSecurity.vue' /* webpackChunkName: "pages_problem_financialSecurity" */))
const _0e5e2698 = () => interopDefault(import('..\\pages\\problem\\mediaOwner.vue' /* webpackChunkName: "pages_problem_mediaOwner" */))
const _61415f3c = () => interopDefault(import('..\\pages\\problem\\transactionRules.vue' /* webpackChunkName: "pages_problem_transactionRules" */))
const _4c8cf622 = () => interopDefault(import('..\\pages\\salesman\\buyer.vue' /* webpackChunkName: "pages_salesman_buyer" */))
const _73dc570c = () => interopDefault(import('..\\pages\\salesman\\creatSoftArticleMeal.vue' /* webpackChunkName: "pages_salesman_creatSoftArticleMeal" */))
const _947e9f12 = () => interopDefault(import('..\\pages\\salesman\\goodsmanage.vue' /* webpackChunkName: "pages_salesman_goodsmanage" */))
const _6b5b8cf3 = () => interopDefault(import('..\\pages\\salesman\\seller.vue' /* webpackChunkName: "pages_salesman_seller" */))
const _884390ea = () => interopDefault(import('..\\pages\\salesman\\softArticleMeal.vue' /* webpackChunkName: "pages_salesman_softArticleMeal" */))
const _82311738 = () => interopDefault(import('..\\pages\\search\\selfmeida.vue' /* webpackChunkName: "pages_search_selfmeida" */))
const _81dea176 = () => interopDefault(import('..\\pages\\search\\selfproduct.vue' /* webpackChunkName: "pages_search_selfproduct" */))
const _7db2e2cb = () => interopDefault(import('..\\pages\\search\\service\\index.vue' /* webpackChunkName: "pages_search_service_index" */))
const _1fe5cfa4 = () => interopDefault(import('..\\pages\\search\\softarticle.vue' /* webpackChunkName: "pages_search_softarticle" */))
const _3920371d = () => interopDefault(import('..\\pages\\search\\video.vue' /* webpackChunkName: "pages_search_video" */))
const _3140910a = () => interopDefault(import('..\\pages\\search\\weibo.vue' /* webpackChunkName: "pages_search_weibo" */))
const _7bc2bfb0 = () => interopDefault(import('..\\pages\\search\\weixin.vue' /* webpackChunkName: "pages_search_weixin" */))
const _eaa7cad0 = () => interopDefault(import('..\\pages\\shopcar\\return.vue' /* webpackChunkName: "pages_shopcar_return" */))
const _543a2551 = () => interopDefault(import('..\\pages\\user\\2.vue' /* webpackChunkName: "pages_user_2" */))
const _28a4eeb5 = () => interopDefault(import('..\\pages\\user\\2-1.vue' /* webpackChunkName: "pages_user_2-1" */))
const _5d8b29f6 = () => interopDefault(import('..\\pages\\user\\3-1.vue' /* webpackChunkName: "pages_user_3-1" */))
const _5d994177 = () => interopDefault(import('..\\pages\\user\\3-2.vue' /* webpackChunkName: "pages_user_3-2" */))
const _5da758f8 = () => interopDefault(import('..\\pages\\user\\3-3.vue' /* webpackChunkName: "pages_user_3-3" */))
const _db1d3592 = () => interopDefault(import('..\\pages\\user\\4-1.vue' /* webpackChunkName: "pages_user_4-1" */))
const _db010690 = () => interopDefault(import('..\\pages\\user\\4-2.vue' /* webpackChunkName: "pages_user_4-2" */))
const _dae4d78e = () => interopDefault(import('..\\pages\\user\\4-3.vue' /* webpackChunkName: "pages_user_4-3" */))
const _dac8a88c = () => interopDefault(import('..\\pages\\user\\4-4.vue' /* webpackChunkName: "pages_user_4-4" */))
const _daac798a = () => interopDefault(import('..\\pages\\user\\4-5.vue' /* webpackChunkName: "pages_user_4-5" */))
const _7150bf10 = () => interopDefault(import('..\\pages\\user\\5-1.vue' /* webpackChunkName: "pages_user_5-1" */))
const _7134900e = () => interopDefault(import('..\\pages\\user\\5-2.vue' /* webpackChunkName: "pages_user_5-2" */))
const _7118610c = () => interopDefault(import('..\\pages\\user\\5-3.vue' /* webpackChunkName: "pages_user_5-3" */))
const _70fc320a = () => interopDefault(import('..\\pages\\user\\5-4.vue' /* webpackChunkName: "pages_user_5-4" */))
const _54728355 = () => interopDefault(import('..\\pages\\user\\6.vue' /* webpackChunkName: "pages_user_6" */))
const _54809ad6 = () => interopDefault(import('..\\pages\\user\\7.vue' /* webpackChunkName: "pages_user_7" */))
const _548eb257 = () => interopDefault(import('..\\pages\\user\\8.vue' /* webpackChunkName: "pages_user_8" */))
const _3e8fed12 = () => interopDefault(import('..\\pages\\search\\service\\fa.vue' /* webpackChunkName: "pages_search_service_fa" */))
const _4ed3bbc5 = () => interopDefault(import('..\\pages\\search\\service\\keyan.vue' /* webpackChunkName: "pages_search_service_keyan" */))
const _00490f37 = () => interopDefault(import('..\\pages\\search\\service\\pptword.vue' /* webpackChunkName: "pages_search_service_pptword" */))
const _1a0cee54 = () => interopDefault(import('..\\pages\\search\\service\\vip.vue' /* webpackChunkName: "pages_search_service_vip" */))
const _17c01421 = () => interopDefault(import('..\\pages\\search\\service\\word.vue' /* webpackChunkName: "pages_search_service_word" */))
const _4833725c = () => interopDefault(import('..\\pages\\goods\\_goodsid.vue' /* webpackChunkName: "pages_goods__goodsid" */))
const _0a4159e3 = () => interopDefault(import('..\\pages\\information\\_information.vue' /* webpackChunkName: "pages_information__information" */))
const _252d97c8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/cooperation",
      component: _3f0f83c5,
      name: "cooperation"
    }, {
      path: "/kefu",
      component: _95aa5c62,
      name: "kefu"
    }, {
      path: "/login",
      component: _07cd8def,
      name: "login"
    }, {
      path: "/m",
      component: _17f4a96b,
      name: "m"
    }, {
      path: "/problem",
      component: _13757179,
      name: "problem"
    }, {
      path: "/salesman",
      component: _8c3bf6e4,
      name: "salesman"
    }, {
      path: "/shopcar",
      component: _bfaf74cc,
      name: "shopcar"
    }, {
      path: "/user",
      component: _948e3b1e,
      name: "user"
    }, {
      path: "/login/forgot_password",
      component: _1203aed8,
      name: "login-forgot_password"
    }, {
      path: "/login/register",
      component: _d9f5fbd4,
      name: "login-register"
    }, {
      path: "/problem/advertisers",
      component: _6cd06f0f,
      name: "problem-advertisers"
    }, {
      path: "/problem/agreement",
      component: _0b901f31,
      name: "problem-agreement"
    }, {
      path: "/problem/companyProfile",
      component: _6211c656,
      name: "problem-companyProfile"
    }, {
      path: "/problem/financialSecurity",
      component: _7ec26590,
      name: "problem-financialSecurity"
    }, {
      path: "/problem/mediaOwner",
      component: _0e5e2698,
      name: "problem-mediaOwner"
    }, {
      path: "/problem/transactionRules",
      component: _61415f3c,
      name: "problem-transactionRules"
    }, {
      path: "/salesman/buyer",
      component: _4c8cf622,
      name: "salesman-buyer"
    }, {
      path: "/salesman/creatSoftArticleMeal",
      component: _73dc570c,
      name: "salesman-creatSoftArticleMeal"
    }, {
      path: "/salesman/goodsmanage",
      component: _947e9f12,
      name: "salesman-goodsmanage"
    }, {
      path: "/salesman/seller",
      component: _6b5b8cf3,
      name: "salesman-seller"
    }, {
      path: "/salesman/softArticleMeal",
      component: _884390ea,
      name: "salesman-softArticleMeal"
    }, {
      path: "/search/selfmeida",
      component: _82311738,
      name: "search-selfmeida"
    }, {
      path: "/search/selfproduct",
      component: _81dea176,
      name: "search-selfproduct"
    }, {
      path: "/search/service",
      component: _7db2e2cb,
      name: "search-service"
    }, {
      path: "/search/softarticle",
      component: _1fe5cfa4,
      name: "search-softarticle"
    }, {
      path: "/search/video",
      component: _3920371d,
      name: "search-video"
    }, {
      path: "/search/weibo",
      component: _3140910a,
      name: "search-weibo"
    }, {
      path: "/search/weixin",
      component: _7bc2bfb0,
      name: "search-weixin"
    }, {
      path: "/shopcar/return",
      component: _eaa7cad0,
      name: "shopcar-return"
    }, {
      path: "/user/2",
      component: _543a2551,
      name: "user-2"
    }, {
      path: "/user/2-1",
      component: _28a4eeb5,
      name: "user-2-1"
    }, {
      path: "/user/3-1",
      component: _5d8b29f6,
      name: "user-3-1"
    }, {
      path: "/user/3-2",
      component: _5d994177,
      name: "user-3-2"
    }, {
      path: "/user/3-3",
      component: _5da758f8,
      name: "user-3-3"
    }, {
      path: "/user/4-1",
      component: _db1d3592,
      name: "user-4-1"
    }, {
      path: "/user/4-2",
      component: _db010690,
      name: "user-4-2"
    }, {
      path: "/user/4-3",
      component: _dae4d78e,
      name: "user-4-3"
    }, {
      path: "/user/4-4",
      component: _dac8a88c,
      name: "user-4-4"
    }, {
      path: "/user/4-5",
      component: _daac798a,
      name: "user-4-5"
    }, {
      path: "/user/5-1",
      component: _7150bf10,
      name: "user-5-1"
    }, {
      path: "/user/5-2",
      component: _7134900e,
      name: "user-5-2"
    }, {
      path: "/user/5-3",
      component: _7118610c,
      name: "user-5-3"
    }, {
      path: "/user/5-4",
      component: _70fc320a,
      name: "user-5-4"
    }, {
      path: "/user/6",
      component: _54728355,
      name: "user-6"
    }, {
      path: "/user/7",
      component: _54809ad6,
      name: "user-7"
    }, {
      path: "/user/8",
      component: _548eb257,
      name: "user-8"
    }, {
      path: "/search/service/fa",
      component: _3e8fed12,
      name: "search-service-fa"
    }, {
      path: "/search/service/keyan",
      component: _4ed3bbc5,
      name: "search-service-keyan"
    }, {
      path: "/search/service/pptword",
      component: _00490f37,
      name: "search-service-pptword"
    }, {
      path: "/search/service/vip",
      component: _1a0cee54,
      name: "search-service-vip"
    }, {
      path: "/search/service/word",
      component: _17c01421,
      name: "search-service-word"
    }, {
      path: "/goods/:goodsid?",
      component: _4833725c,
      name: "goods-goodsid"
    }, {
      path: "/information/:information?",
      component: _0a4159e3,
      name: "information-information"
    }, {
      path: "/",
      component: _252d97c8,
      name: "index"
    }],

    fallback: false
  })
}
