<template>
  <div class="p-4">
    <div class="bg-white">
      <div
        class="mx-auto max-w-2xl px-4 pb-16 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8"
      >
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">
          Product List
        </h2>

        <div
          class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8"
        >
          <div v-for="item in list" :key="item.id">
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
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      {{ item.name }}
                    </a>
                  </h3>
                </div>
                <p class="text-sm font-medium text-gray-900">$35</p>
              </div>
            </NuxtLink>
          </div>
        </div>

        <!-- More products... -->
        <button
          class="mt-6 rounded-sm bg-blue-500 py-3 px-8 text-xl font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          @click="loadMore"
        >
          LOAD MORE
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const pageNo = 1;
    let list = ref([]);

    const loadMore = async () => {
      const { data, pending, error, refresh } = await useFetch(
        "/api/productApi",
        {
          params: {
            page: 1,
          },
        }
      );
      list.value = [...list.value, ...data.value];
    };

    loadMore();

    return {
      loadMore,
      list,
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
