import { defineEventHandler } from 'h3';

let id = 0;
const memberApi = defineEventHandler(() => {
  console.log("defineEventHandler member");
  id += 1;
  return {
    id,
    name: `Margot Foster`,
    email: `margotfoster@example.com`,
    address: `1301 Barbara Jordan Blvd #302, Austin, Texas`,
    about: "Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu."
  };
});

export { memberApi as default };
//# sourceMappingURL=memberApi.mjs.map
