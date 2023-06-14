export default defineNuxtRouteMiddleware(async (to, from) => {
  const { data } = await useFetch("/api/checkAuthApi");

  const result = data.value.result;

  if (!result && to.path === "/member") {
    return navigateTo("/");
  }

  if (result && to.path === "/login") {
    return navigateTo("/member");
  }
});
