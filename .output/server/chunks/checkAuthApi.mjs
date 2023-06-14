import { defineEventHandler, getCookie } from 'h3';

const checkAuthApi = defineEventHandler((event) => {
  let auth = getCookie(event, "access_token");
  return {
    result: auth.value
  };
});

export { checkAuthApi as default };
//# sourceMappingURL=checkAuthApi.mjs.map
