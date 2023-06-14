<template>
  <div class="p-4">home</div>
</template>

<script>
export default {
  setup() {
    const router = useRouter();
    router.push("/home");
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
