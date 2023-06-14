import { _ as _export_sfc, u as useState } from './server.mjs';
import { ref, useSSRContext } from 'vue';
import { u as useSeoMeta } from './composables-336a0f10.mjs';
import { u as useFetch } from './fetch-707280a9.mjs';
import { u as useShoppingCartStore } from './shoppingCart-47a03f15.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
    const productDetail = useState("productDetail");
    const shoppingCartStore = useShoppingCartStore();
    let apiCalled = useState("apiCalled", () => false);
    const getDataTime = ref("");
    let count = 0;
    (async function() {
      if (apiCalled.value) {
        return;
      }
      count = ref(Math.round(Math.random() * 1e3));
      const { data, pending, error, refresh } = await useFetch(
        "/api/productDetailApi",
        "$wpXHD4Yxv9"
      );
      apiCalled.value = true;
      getDataTime.value = /* @__PURE__ */ new Date();
      productDetail.value = data.value;
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
        // and other stuff
      });
      return ref(data.value);
    })();
    return {
      productDetail,
      getDataTime,
      count,
      shoppingCartStore
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="bg-white"><div class="mx-auto max-w-2xl px-4 pt-0 pb-16 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8"><h3 class="text-2xl font-bold tracking-tight text-gray-900">Cake</h3>`);
  if ($setup.productDetail) {
    _push(`<div class="mt-6"><div class="group relative"><div class="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"><img${ssrRenderAttr("src", $setup.productDetail.imgUrl)}${ssrRenderAttr("alt", $setup.productDetail.name)} class="h-full w-full object-cover object-center lg:h-full lg:w-full"></div><div class="mt-4 flex justify-between"><div><h3 class="text-sm text-gray-700"><a href="#"><span aria-hidden="true" class="absolute inset-0"></span> ${ssrInterpolate($setup.productDetail.name)}</a></h3><p class="mt-1 text-sm text-gray-500">${ssrInterpolate($setup.productDetail.subTitle)}</p><p class="mt-1 text-sm text-gray-500">${ssrInterpolate($setup.productDetail.content)}</p></div><p class="text-sm font-medium text-gray-900">$35</p></div></div><button> addCart </button></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _id_ as default };
//# sourceMappingURL=_id_-6a3da29d.mjs.map
