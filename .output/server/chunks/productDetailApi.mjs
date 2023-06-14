import { defineEventHandler } from 'h3';

const productDetailApi = defineEventHandler((event) => {
  event.context.query;
  console.log("defineEventHandler productDetail");
  console.log(event.context.params);
  const productList = [
    {
      id: 1,
      name: `CUPCAKES`,
      subTitle: "Frosted Cupcakes.",
      imgUrl: "https://images.unsplash.com/photo-1682655012874-46a4b1c86ee7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      content: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. `
    }
  ];
  const result = productList[0];
  return result;
});

export { productDetailApi as default };
//# sourceMappingURL=productDetailApi.mjs.map
