import { u as useState } from './server.mjs';
import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "count",
  __ssrInlineRender: true,
  setup(__props) {
    const count1 = useState("count", () => Math.round(Math.random() * 1e3));
    const count2 = ref(Math.round(Math.random() * 1e3));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white py-24" }, _attrs))}><div class="flex flex-col items-center"><p>useState</p><span class="text-9xl font-semibold text-emerald-400">${ssrInterpolate(unref(count1))}</span></div><div class="flex flex-col items-center"><p>no useState</p><span class="text-9xl font-semibold text-emerald-400">${ssrInterpolate(unref(count2))}</span></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/count.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=count-c4fc87f1.mjs.map
