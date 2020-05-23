import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _38219c34 = () => interopDefault(import('../pages/addmedicine.vue' /* webpackChunkName: "pages/addmedicine" */))
const _ea7256ee = () => interopDefault(import('../pages/addParticipant.vue' /* webpackChunkName: "pages/addParticipant" */))
const _5abd5a93 = () => interopDefault(import('../pages/ownershipTransfer.vue' /* webpackChunkName: "pages/ownershipTransfer" */))
const _1ff05fd7 = () => interopDefault(import('../pages/queryByKey.vue' /* webpackChunkName: "pages/queryByKey" */))
const _8037999a = () => interopDefault(import('../pages/retrieve.vue' /* webpackChunkName: "pages/retrieve" */))
const _a24bb8ec = () => interopDefault(import('../pages/searchMedicines.vue' /* webpackChunkName: "pages/searchMedicines" */))
const _76f870c2 = () => interopDefault(import('../pages/searchParticipants.vue' /* webpackChunkName: "pages/searchParticipants" */))
const _16972144 = () => interopDefault(import('../pages/trace.vue' /* webpackChunkName: "pages/trace" */))
const _cd31cf2a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/addmedicine",
    component: _38219c34,
    name: "addmedicine"
  }, {
    path: "/addParticipant",
    component: _ea7256ee,
    name: "addParticipant"
  }, {
    path: "/ownershipTransfer",
    component: _5abd5a93,
    name: "ownershipTransfer"
  }, {
    path: "/queryByKey",
    component: _1ff05fd7,
    name: "queryByKey"
  }, {
    path: "/retrieve",
    component: _8037999a,
    name: "retrieve"
  }, {
    path: "/searchMedicines",
    component: _a24bb8ec,
    name: "searchMedicines"
  }, {
    path: "/searchParticipants",
    component: _76f870c2,
    name: "searchParticipants"
  }, {
    path: "/trace",
    component: _16972144,
    name: "trace"
  }, {
    path: "/",
    component: _cd31cf2a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
