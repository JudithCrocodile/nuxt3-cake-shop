<template>
  <div class="bg-gray-100 min-h-screen pt-4">
    <div class="max-w-lg mx-auto">
      <div>
        <NuxtLink to="/home">
          <span class="mt-1 max-w-2xl text-sm leading-6 text-gray-500 pl-4"
            >Home</span
          >
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="float-right mt-1 max-w-2xl text-sm leading-6 text-gray-500 pl-4 px-2"
        >
          <span>About</span>
        </NuxtLink>

        <NuxtLink
          v-if="isLogin"
          to="/member"
          class="pl-4 float-right mt-1 max-w-2xl text-sm leading-6 text-gray-500 px-2"
        >
          <span>Member</span>
        </NuxtLink>
        <NuxtLink
          v-else
          to="/login"
          class="pl-4 float-right mt-1 max-w-2xl text-sm leading-6 text-gray-500 px-2"
        >
          <span>Login</span>
        </NuxtLink>
        <NuxtLink
          to="/shoppingCart"
          class="pl-4 float-right mt-1 max-w-2xl text-sm leading-6 text-gray-500 px-2"
        >
          <span>Cart</span>
        </NuxtLink>
      </div>

      <NuxtPage class="max-w-xl bg-white shadow mx-auto border p-6 rounded" />

      <div class="py-2 text-gray-500 text-center">@copyright 2023</div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const isLogin = useState("isLogin");
    return {
      isLogin,
    };
  },
};
</script>

<style></style>
