const size = 5;

export default defineEventHandler((event) => {
  console.log("defineEventHandler");
  console.log(event.req);
  console.log(event.req.params);
  console.log("-----------------");
  // const page = event.req.body.page;

  return [
    {
      id: 1,
      name: `Product - 1`,
      imgUrl:
        "https://images.unsplash.com/photo-1682655012874-46a4b1c86ee7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      content: `Product - 1`,
    },
  ];
});
