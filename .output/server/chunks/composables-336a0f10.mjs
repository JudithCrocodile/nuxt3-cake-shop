import { b as useNuxtApp } from './server.mjs';
import { useSeoMeta as useSeoMeta$1 } from '@unhead/vue';

function useHead(input, options) {
  return useNuxtApp()._useHead(input, options);
}
const useSeoMeta = (meta) => {
  return useSeoMeta$1(meta);
};

export { useHead as a, useSeoMeta as u };
//# sourceMappingURL=composables-336a0f10.mjs.map
