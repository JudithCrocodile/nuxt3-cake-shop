import { executeAsync } from 'unctx';
import { h as defineNuxtRouteMiddleware, n as navigateTo } from './server.mjs';
import { u as useFetch } from './fetch-707280a9.mjs';
import 'vue';
import 'ofetch';
import 'hookable';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'vue/server-renderer';
import 'defu';
import './config.mjs';
import 'destr';
import 'scule';
import 'ohash';

const auth = defineNuxtRouteMiddleware(async (to, from) => {
  let __temp, __restore;
  const { data } = ([__temp, __restore] = executeAsync(() => useFetch("/api/checkAuthApi", "$CYp3kUY8uE")), __temp = await __temp, __restore(), __temp);
  const result = data.value.result;
  if (!result && to.path === "/member") {
    return navigateTo("/");
  }
  if (result && to.path === "/login") {
    return navigateTo("/member");
  }
});

export { auth as default };
//# sourceMappingURL=auth-2c1dbe88.mjs.map
