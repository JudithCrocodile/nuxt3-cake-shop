<template>
  <div>
    <div class="bg-white">
      <div
        class="mx-auto max-w-2xl px-4 pt-0 pb-16 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8"
      >
        <h3 class="text-2xl font-bold tracking-tight text-gray-900">Cake</h3>

        <div class="mt-6" v-if="productDetail">
          <div class="group relative">
            <div
              class="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
            >
              <img
                :src="productDetail.imgUrl"
                :alt="productDetail.name"
                class="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    {{ productDetail.name }}
                  </a>
                </h3>
                <p class="mt-1 text-sm text-gray-500">
                  {{ productDetail.subTitle }}
                </p>
                <p class="mt-1 text-sm text-gray-500">
                  {{ productDetail.content }}
                </p>
              </div>
              <p class="text-sm font-medium text-gray-900">$35</p>
            </div>
          </div>

          <button @click="shoppingCartStore.addCart(productDetail)">
            addCart
          </button>

          <!-- More products... -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useShoppingCartStore } from "@/stores/shoppingCart";

export default {
  setup() {
    const productDetail = useState("productDetail");
    const shoppingCartStore = useShoppingCartStore();
    let apiCalled = useState("apiCalled", () => false);

    const getDataTime = ref("");
    let count = 0;

    (async function () {
      if (apiCalled.value) {
        return;
      }
      count = ref(Math.round(Math.random() * 1000));
      const { data, pending, error, refresh } = await useFetch(
        "/api/productDetailApi"
      );
      apiCalled.value = true;
      getDataTime.value = new Date();

      productDetail.value = data.value;

      useSeoMeta({
        title: () => data.value?.name,
        description: () => data.value?.about,
        ogTitle: () => data.value?.name,
        ogDescription: () => data.value?.about,
        // and other stuff
      });

      return ref(data.value);
    })();

    return {
      productDetail,
      getDataTime,
      count,
      shoppingCartStore,
    };
  },
};
</script>
