import { _ as _export_sfc, u as useState, e as useRouter, b as useNuxtApp, f as useRequestEvent } from './server.mjs';
import { ref, useSSRContext } from 'vue';
import { u as useSeoMeta } from './composables-336a0f10.mjs';
import { u as useFetch } from './fetch-707280a9.mjs';
import { parse, serialize } from 'cookie-es';
import { appendHeader } from 'h3';
import destr from 'destr';
import { isEqual } from 'ohash';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'defu';
import './config.mjs';
import 'scule';

const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a2;
  var _a;
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts) || {};
  const cookie = ref((_a2 = cookies[name]) != null ? _a2 : (_a = opts.default) == null ? void 0 : _a.call(opts));
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (!isEqual(cookie.value, cookies[name])) {
        writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:redirected", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  var _a;
  {
    return parse(((_a = useRequestEvent()) == null ? void 0 : _a.req.headers.cookie) || "", opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return serialize(name, value, { ...opts, maxAge: -1 });
  }
  return serialize(name, value, opts);
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    appendHeader(event, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
const _sfc_main = {
  setup() {
    let memberData = useState("memberData");
    const getDataTime = ref("");
    let count = 0;
    let apiCalled = useState("apiCalled", () => false);
    (async () => {
      if (apiCalled.value) {
        return;
      }
      count = ref(Math.round(Math.random() * 1e3));
      const { data, pending, error, refresh } = await useFetch(
        "/api/memberApi",
        "$9mlpF05ZZa"
      );
      apiCalled.value = true;
      getDataTime.value = /* @__PURE__ */ new Date();
      memberData.value = data.value;
      useSeoMeta({
        title: () => {
          var _a;
          return (_a = data.value) == null ? void 0 : _a.name;
        },
        description: () => {
          var _a;
          return (_a = data.value) == null ? void 0 : _a.about;
        },
        ogTitle: () => {
          var _a;
          return (_a = data.value) == null ? void 0 : _a.name;
        },
        ogDescription: () => {
          var _a;
          return (_a = data.value) == null ? void 0 : _a.about;
        }
      });
      return data.value;
    })();
    const logout = function() {
      const auth = useCookie("auth", { maxAge: 60 });
      auth.value = null;
      const isLogin = useState("isLogin");
      isLogin.value = false;
      const router = useRouter();
      router.push("/home");
    };
    return {
      memberData,
      getDataTime,
      count,
      logout
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="px-4 sm:px-0"><div><button class="float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"> Logout </button></div><h3 class="text-base font-semibold leading-7 text-gray-900"> Member Information </h3><p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500"> Personal details. </p></div><div class="mt-6 border-t border-gray-100">`);
  if ($setup.memberData) {
    _push(`<dl class="divide-y divide-gray-100"><div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"><dt class="text-sm font-medium leading-6 text-gray-900">Full name</dt><dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">${ssrInterpolate($setup.memberData.name)}</dd></div><div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"><dt class="text-sm font-medium leading-6 text-gray-900"> Email address </dt><dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">${ssrInterpolate($setup.memberData.email)}</dd></div><div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"><dt class="text-sm font-medium leading-6 text-gray-900">Address</dt><dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">${ssrInterpolate($setup.memberData.address)}</dd></div><div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"><dt class="text-sm font-medium leading-6 text-gray-900">About</dt><dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">${ssrInterpolate($setup.memberData.about)}</dd></div></dl>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/member.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const member = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { member as default };
//# sourceMappingURL=member-8a0f3161.mjs.map
