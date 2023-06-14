import { _ as _export_sfc, a as __nuxt_component_0 } from './server.mjs';
import { ref, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { u as useFetch } from './fetch-707280a9.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
    let list = ref([]);
    const loadMore = async () => {
      const { data, pending, error, refresh } = await useFetch(
        "/api/productApi",
        {
          params: {
            page: 1
          }
        },
        "$0YtKmVU32F"
      );
      list.value = [...list.value, ...data.value];
    };
    loadMore();
    return {
      loadMore,
      list
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4" }, _attrs))} data-v-1ad4bf84><div class="bg-white" data-v-1ad4bf84><div class="mx-auto max-w-2xl px-4 pb-16 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8" data-v-1ad4bf84><h2 class="text-2xl font-bold tracking-tight text-gray-900" data-v-1ad4bf84> Product List </h2><div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8" data-v-1ad4bf84><!--[-->`);
  ssrRenderList($setup.list, (item) => {
    _push(`<div data-v-1ad4bf84>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      class: "group relative",
      to: `/product/${item.id}`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80" data-v-1ad4bf84${_scopeId}><img${ssrRenderAttr("src", item.imgUrl)} alt="product" class="h-full w-full object-cover object-center lg:h-full lg:w-full" data-v-1ad4bf84${_scopeId}></div><div class="mt-4 flex justify-between" data-v-1ad4bf84${_scopeId}><div data-v-1ad4bf84${_scopeId}><h3 class="text-sm text-gray-700" data-v-1ad4bf84${_scopeId}><a href="#" data-v-1ad4bf84${_scopeId}><span aria-hidden="true" class="absolute inset-0" data-v-1ad4bf84${_scopeId}></span> ${ssrInterpolate(item.name)}</a></h3></div><p class="text-sm font-medium text-gray-900" data-v-1ad4bf84${_scopeId}>$35</p></div>`);
        } else {
          return [
            createVNode("div", { class: "min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80" }, [
              createVNode("img", {
                src: item.imgUrl,
                alt: "product",
                class: "h-full w-full object-cover object-center lg:h-full lg:w-full"
              }, null, 8, ["src"])
            ]),
            createVNode("div", { class: "mt-4 flex justify-between" }, [
              createVNode("div", null, [
                createVNode("h3", { class: "text-sm text-gray-700" }, [
                  createVNode("a", { href: "#" }, [
                    createVNode("span", {
                      "aria-hidden": "true",
                      class: "absolute inset-0"
                    }),
                    createTextVNode(" " + toDisplayString(item.name), 1)
                  ])
                ])
              ]),
              createVNode("p", { class: "text-sm font-medium text-gray-900" }, "$35")
            ])
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div><button class="mt-6 rounded-sm bg-blue-500 py-3 px-8 text-xl font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2" data-v-1ad4bf84> LOAD MORE </button></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const home = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1ad4bf84"]]);

export { home as default };
//# sourceMappingURL=home-62bb62e4.mjs.map
