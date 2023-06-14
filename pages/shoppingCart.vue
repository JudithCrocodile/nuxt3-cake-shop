<template>
  <div class="p-4">
    <div class="bg-white">
      <div
        class="mx-auto max-w-2xl px-4 pb-16 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8"
      >
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">
          Shopping Cart
        </h2>
        <ClientOnly>
          <div
            v-if="shoppingCartStore.shoppingCartList.length"
            class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8"
          >
            <div
              v-for="item in shoppingCartStore.shoppingCartList"
              :key="item.id"
            >
              <NuxtLink class="group relative" :to="`/product/${item.id}`">
                <div
                  class="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
                >
                  <img
                    :src="item.imgUrl"
                    alt="product"
                    class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div class="mt-4 flex justify-between">
                  <div>
                    <h3 class="text-sm text-gray-700">
                      <a href="#">
                        <span
                          aria-hidden="true"
                          class="absolute inset-0"
                        ></span>
                        {{ item.name }}
                      </a>
                    </h3>
                    <!--<p class="mt-1 text-sm text-gray-500">{{ item.content }}</p>-->
                  </div>
                  <p class="text-sm font-medium text-gray-900">$35</p>
                </div>
              </NuxtLink>
            </div>
          </div>

          <div class="mt-6" v-else>
            <p class="text-sm">no item in cart</p>
            <div>
              <NuxtLink
                to="/"
                class="mt-1 max-w-2xl text-l leading-6 text-gray-500"
              >
                <span>shop now</span>
              </NuxtLink>
            </div>
          </div>
        </ClientOnly>

        <div v-if="!isClient">server loading</div>
      </div>
    </div>
  </div>
</template>

<script>
import { useShoppingCartStore } from "@/stores/shoppingCart";

export default {
  setup() {
    const shoppingCartStore = useShoppingCartStore();
    const isClient = process.client;

    return {
      shoppingCartStore,
      isClient,
    };
  },
};

// list = data;
</script>

<style lang="postcss" scoped>
.badge {
  @apply inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700;
  &:hover {
    @apply bg-gray-300;
  }
}
</style>
