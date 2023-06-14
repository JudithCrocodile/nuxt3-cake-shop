import { defineComponent, ref, createElementBlock, mergeProps, useSSRContext } from 'vue';
import { u as useShoppingCartStore } from './shoppingCart-47a03f15.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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

const __nuxt_component_0 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _sfc_main = {
  setup() {
    const shoppingCartStore = useShoppingCartStore();
    const isClient = false;
    return {
      shoppingCartStore,
      isClient
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4" }, _attrs))} data-v-d5b66b75><div class="bg-white" data-v-d5b66b75><div class="mx-auto max-w-2xl px-4 pb-16 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8" data-v-d5b66b75><h2 class="text-2xl font-bold tracking-tight text-gray-900" data-v-d5b66b75> Shopping Cart </h2>`);
  _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
  if (!$setup.isClient) {
    _push(`<div data-v-d5b66b75>server loading</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shoppingCart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const shoppingCart = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d5b66b75"]]);

export { shoppingCart as default };
//# sourceMappingURL=shoppingCart-bc3faae4.mjs.map
