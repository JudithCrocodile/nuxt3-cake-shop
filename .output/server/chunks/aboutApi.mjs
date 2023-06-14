import { defineEventHandler } from 'h3';

let counter = 0;
const aboutApi = defineEventHandler(() => {
  counter += 1;
  return {
    name: "Ryan",
    gender: "\u7537",
    email: "ryanchien8125@gmail.com",
    counter
  };
});

export { aboutApi as default };
//# sourceMappingURL=aboutApi.mjs.map
