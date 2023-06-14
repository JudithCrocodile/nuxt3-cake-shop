export default defineEventHandler((event) => {
  let auth = getCookie(event, "access_token");

  return {
    result: auth.value,
  };
});
