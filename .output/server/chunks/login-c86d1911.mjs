import { _ as _export_sfc, u as useState, e as useRouter } from './server.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-707280a9.mjs';
import { ssrRenderAttrs } from 'vue/server-renderer';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'defu';
import './config.mjs';
import 'destr';
import 'scule';
import 'ohash';

const _sfc_main = {
  setup() {
    const login2 = async function() {
      console.log("login");
      const { data, pending, error, refresh } = await useFetch("/api/loginApi", "$MnW08vEsNn");
      console.log("data", data.value);
      const isLogin = useState("isLogin");
      isLogin.value = true;
      const router = useRouter();
      router.push("/member");
    };
    return {
      login: login2
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white" }, _attrs))}><form class="rounded"><div class="mb-4"><label class="block text-gray-700 text-sm font-bold mb-2" for="username"> Username </label><input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"></div><div class="mb-6"><label class="block text-gray-700 text-sm font-bold mb-2" for="password"> Password </label><input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"><p class="text-red-500 text-xs italic">Please choose a password.</p></div><div class="flex items-center justify-between"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"> Log In </button><a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#"> Forgot Password? </a></div></form></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { login as default };
//# sourceMappingURL=login-c86d1911.mjs.map
