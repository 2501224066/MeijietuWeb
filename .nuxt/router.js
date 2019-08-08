import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _10114da1 = () => interopDefault(import('..\\pages\\cooperation.vue' /* webpackChunkName: "pages_cooperation" */))
const _b69fb11a = () => interopDefault(import('..\\pages\\kefu.vue' /* webpackChunkName: "pages_kefu" */))
const _5704ff93 = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages_login_index" */))
const _73ce8d0f = () => interopDefault(import('..\\pages\\m\\index.vue' /* webpackChunkName: "pages_m_index" */))
const _72970a1d = () => interopDefault(import('..\\pages\\problem\\index.vue' /* webpackChunkName: "pages_problem_index" */))
const _3ef3806a = () => interopDefault(import('..\\pages\\salesman\\index.vue' /* webpackChunkName: "pages_salesman_index" */))
const _016c4384 = () => interopDefault(import('..\\pages\\shopcar\\index.vue' /* webpackChunkName: "pages_shopcar_index" */))
const _f28aa766 = () => interopDefault(import('..\\pages\\user\\index.vue' /* webpackChunkName: "pages_user_index" */))
const _42dedd38 = () => interopDefault(import('..\\pages\\login\\forgot_password.vue' /* webpackChunkName: "pages_login_forgot_password" */))
const _18167df2 = () => interopDefault(import('..\\pages\\login\\register.vue' /* webpackChunkName: "pages_login_register" */))
const _7444069a = () => interopDefault(import('..\\pages\\problem\\advertisers.vue' /* webpackChunkName: "pages_problem_advertisers" */))
const _592cc5d5 = () => interopDefault(import('..\\pages\\problem\\agreement.vue' /* webpackChunkName: "pages_problem_agreement" */))
const _01a6069e = () => interopDefault(import('..\\pages\\problem\\companyProfile.vue' /* webpackChunkName: "pages_problem_companyProfile" */))
const _679faf98 = () => interopDefault(import('..\\pages\\problem\\financialSecurity.vue' /* webpackChunkName: "pages_problem_financialSecurity" */))
const _74565474 = () => interopDefault(import('..\\pages\\problem\\mediaOwner.vue' /* webpackChunkName: "pages_problem_mediaOwner" */))
const _6cc6ad84 = () => interopDefault(import('..\\pages\\problem\\transactionRules.vue' /* webpackChunkName: "pages_problem_transactionRules" */))
const _5ecb00cb = () => interopDefault(import('..\\pages\\salesman\\buyer.vue' /* webpackChunkName: "pages_salesman_buyer" */))
const _4bd5a51e = () => interopDefault(import('..\\pages\\salesman\\creatSoftArticleMeal.vue' /* webpackChunkName: "pages_salesman_creatSoftArticleMeal" */))
const _7e64d753 = () => interopDefault(import('..\\pages\\salesman\\goodsmanage.vue' /* webpackChunkName: "pages_salesman_goodsmanage" */))
const _ef0ce6d2 = () => interopDefault(import('..\\pages\\salesman\\seller.vue' /* webpackChunkName: "pages_salesman_seller" */))
const _93c8df32 = () => interopDefault(import('..\\pages\\salesman\\softArticleMeal.vue' /* webpackChunkName: "pages_salesman_softArticleMeal" */))
const _45896940 = () => interopDefault(import('..\\pages\\search\\selfmeida.vue' /* webpackChunkName: "pages_search_selfmeida" */))
const _2508dd21 = () => interopDefault(import('..\\pages\\search\\selfproduct.vue' /* webpackChunkName: "pages_search_selfproduct" */))
const _6cd8d122 = () => interopDefault(import('..\\pages\\search\\service\\index.vue' /* webpackChunkName: "pages_search_service_index" */))
const _5605460a = () => interopDefault(import('..\\pages\\search\\softarticle.vue' /* webpackChunkName: "pages_search_softarticle" */))
const _5e520c0e = () => interopDefault(import('..\\pages\\search\\video.vue' /* webpackChunkName: "pages_search_video" */))
const _6e115834 = () => interopDefault(import('..\\pages\\search\\weibo.vue' /* webpackChunkName: "pages_search_weibo" */))
const _4a374f58 = () => interopDefault(import('..\\pages\\search\\weixin.vue' /* webpackChunkName: "pages_search_weixin" */))
const _0fbd9674 = () => interopDefault(import('..\\pages\\shopcar\\return.vue' /* webpackChunkName: "pages_shopcar_return" */))
const _bcf985a6 = () => interopDefault(import('..\\pages\\user\\2.vue' /* webpackChunkName: "pages_user_2" */))
const _48077f91 = () => interopDefault(import('..\\pages\\user\\2-1.vue' /* webpackChunkName: "pages_user_2-1" */))
const _7cedbad2 = () => interopDefault(import('..\\pages\\user\\3-1.vue' /* webpackChunkName: "pages_user_3-1" */))
const _7cfbd253 = () => interopDefault(import('..\\pages\\user\\3-2.vue' /* webpackChunkName: "pages_user_3-2" */))
const _7d09e9d4 = () => interopDefault(import('..\\pages\\user\\3-3.vue' /* webpackChunkName: "pages_user_3-3" */))
const _9c5813da = () => interopDefault(import('..\\pages\\user\\4-1.vue' /* webpackChunkName: "pages_user_4-1" */))
const _9c3be4d8 = () => interopDefault(import('..\\pages\\user\\4-2.vue' /* webpackChunkName: "pages_user_4-2" */))
const _9c1fb5d6 = () => interopDefault(import('..\\pages\\user\\4-3.vue' /* webpackChunkName: "pages_user_4-3" */))
const _9c0386d4 = () => interopDefault(import('..\\pages\\user\\4-4.vue' /* webpackChunkName: "pages_user_4-4" */))
const _9be757d2 = () => interopDefault(import('..\\pages\\user\\4-5.vue' /* webpackChunkName: "pages_user_4-5" */))
const _328b9d58 = () => interopDefault(import('..\\pages\\user\\5-1.vue' /* webpackChunkName: "pages_user_5-1" */))
const _326f6e56 = () => interopDefault(import('..\\pages\\user\\5-2.vue' /* webpackChunkName: "pages_user_5-2" */))
const _32533f54 = () => interopDefault(import('..\\pages\\user\\5-3.vue' /* webpackChunkName: "pages_user_5-3" */))
const _32371052 = () => interopDefault(import('..\\pages\\user\\5-4.vue' /* webpackChunkName: "pages_user_5-4" */))
const _bc88c99e = () => interopDefault(import('..\\pages\\user\\6.vue' /* webpackChunkName: "pages_user_6" */))
const _bc6c9a9c = () => interopDefault(import('..\\pages\\user\\7.vue' /* webpackChunkName: "pages_user_7" */))
const _bc506b9a = () => interopDefault(import('..\\pages\\user\\8.vue' /* webpackChunkName: "pages_user_8" */))
const _b6efca24 = () => interopDefault(import('..\\pages\\search\\service\\fa.vue' /* webpackChunkName: "pages_search_service_fa" */))
const _ca971f2e = () => interopDefault(import('..\\pages\\search\\service\\keyan.vue' /* webpackChunkName: "pages_search_service_keyan" */))
const _5261aa4a = () => interopDefault(import('..\\pages\\search\\service\\pptword.vue' /* webpackChunkName: "pages_search_service_pptword" */))
const _4c07167a = () => interopDefault(import('..\\pages\\search\\service\\vip.vue' /* webpackChunkName: "pages_search_service_vip" */))
const _3f378a06 = () => interopDefault(import('..\\pages\\search\\service\\word.vue' /* webpackChunkName: "pages_search_service_word" */))
const _60f7c2ae = () => interopDefault(import('..\\pages\\goods\\_goodsid.vue' /* webpackChunkName: "pages_goods__goodsid" */))
const _047eb2bf = () => interopDefault(import('..\\pages\\information\\_information.vue' /* webpackChunkName: "pages_information__information" */))
const _22e2da10 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
      component: _10114da1,
      name: "cooperation"
    }, {
      path: "/kefu",
      component: _b69fb11a,
      name: "kefu"
    }, {
      path: "/login",
      component: _5704ff93,
      name: "login"
    }, {
      path: "/m",
      component: _73ce8d0f,
      name: "m"
    }, {
      path: "/problem",
      component: _72970a1d,
      name: "problem"
    }, {
      path: "/salesman",
      component: _3ef3806a,
      name: "salesman"
    }, {
      path: "/shopcar",
      component: _016c4384,
      name: "shopcar"
    }, {
      path: "/user",
      component: _f28aa766,
      name: "user"
    }, {
      path: "/login/forgot_password",
      component: _42dedd38,
      name: "login-forgot_password"
    }, {
      path: "/login/register",
      component: _18167df2,
      name: "login-register"
    }, {
      path: "/problem/advertisers",
      component: _7444069a,
      name: "problem-advertisers"
    }, {
      path: "/problem/agreement",
      component: _592cc5d5,
      name: "problem-agreement"
    }, {
      path: "/problem/companyProfile",
      component: _01a6069e,
      name: "problem-companyProfile"
    }, {
      path: "/problem/financialSecurity",
      component: _679faf98,
      name: "problem-financialSecurity"
    }, {
      path: "/problem/mediaOwner",
      component: _74565474,
      name: "problem-mediaOwner"
    }, {
      path: "/problem/transactionRules",
      component: _6cc6ad84,
      name: "problem-transactionRules"
    }, {
      path: "/salesman/buyer",
      component: _5ecb00cb,
      name: "salesman-buyer"
    }, {
      path: "/salesman/creatSoftArticleMeal",
      component: _4bd5a51e,
      name: "salesman-creatSoftArticleMeal"
    }, {
      path: "/salesman/goodsmanage",
      component: _7e64d753,
      name: "salesman-goodsmanage"
    }, {
      path: "/salesman/seller",
      component: _ef0ce6d2,
      name: "salesman-seller"
    }, {
      path: "/salesman/softArticleMeal",
      component: _93c8df32,
      name: "salesman-softArticleMeal"
    }, {
      path: "/search/selfmeida",
      component: _45896940,
      name: "search-selfmeida"
    }, {
      path: "/search/selfproduct",
      component: _2508dd21,
      name: "search-selfproduct"
    }, {
      path: "/search/service",
      component: _6cd8d122,
      name: "search-service"
    }, {
      path: "/search/softarticle",
      component: _5605460a,
      name: "search-softarticle"
    }, {
      path: "/search/video",
      component: _5e520c0e,
      name: "search-video"
    }, {
      path: "/search/weibo",
      component: _6e115834,
      name: "search-weibo"
    }, {
      path: "/search/weixin",
      component: _4a374f58,
      name: "search-weixin"
    }, {
      path: "/shopcar/return",
      component: _0fbd9674,
      name: "shopcar-return"
    }, {
      path: "/user/2",
      component: _bcf985a6,
      name: "user-2"
    }, {
      path: "/user/2-1",
      component: _48077f91,
      name: "user-2-1"
    }, {
      path: "/user/3-1",
      component: _7cedbad2,
      name: "user-3-1"
    }, {
      path: "/user/3-2",
      component: _7cfbd253,
      name: "user-3-2"
    }, {
      path: "/user/3-3",
      component: _7d09e9d4,
      name: "user-3-3"
    }, {
      path: "/user/4-1",
      component: _9c5813da,
      name: "user-4-1"
    }, {
      path: "/user/4-2",
      component: _9c3be4d8,
      name: "user-4-2"
    }, {
      path: "/user/4-3",
      component: _9c1fb5d6,
      name: "user-4-3"
    }, {
      path: "/user/4-4",
      component: _9c0386d4,
      name: "user-4-4"
    }, {
      path: "/user/4-5",
      component: _9be757d2,
      name: "user-4-5"
    }, {
      path: "/user/5-1",
      component: _328b9d58,
      name: "user-5-1"
    }, {
      path: "/user/5-2",
      component: _326f6e56,
      name: "user-5-2"
    }, {
      path: "/user/5-3",
      component: _32533f54,
      name: "user-5-3"
    }, {
      path: "/user/5-4",
      component: _32371052,
      name: "user-5-4"
    }, {
      path: "/user/6",
      component: _bc88c99e,
      name: "user-6"
    }, {
      path: "/user/7",
      component: _bc6c9a9c,
      name: "user-7"
    }, {
      path: "/user/8",
      component: _bc506b9a,
      name: "user-8"
    }, {
      path: "/search/service/fa",
      component: _b6efca24,
      name: "search-service-fa"
    }, {
      path: "/search/service/keyan",
      component: _ca971f2e,
      name: "search-service-keyan"
    }, {
      path: "/search/service/pptword",
      component: _5261aa4a,
      name: "search-service-pptword"
    }, {
      path: "/search/service/vip",
      component: _4c07167a,
      name: "search-service-vip"
    }, {
      path: "/search/service/word",
      component: _3f378a06,
      name: "search-service-word"
    }, {
      path: "/goods/:goodsid?",
      component: _60f7c2ae,
      name: "goods-goodsid"
    }, {
      path: "/information/:information?",
      component: _047eb2bf,
      name: "information-information"
    }, {
      path: "/",
      component: _22e2da10,
      name: "index"
    }],

    fallback: false
  })
}
