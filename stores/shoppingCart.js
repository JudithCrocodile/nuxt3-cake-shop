import { defineStore } from "pinia";

export const useShoppingCartStore = defineStore(
  "shoppingCart",
  () => {
    const shoppingCartList = ref([]);

    const addCart = (item) => {
      console.log(item);
      shoppingCartList.value.push(item);
    };

    const getCartList = () => shoppingCartList.value;

    return {
      shoppingCartList,
      getCartList,
      addCart,
    };
  },
  {
    persist: {
      enabled: true,
      strategies: [
        {
          key: "shoppingCart",
          storage: process.client ? localStorage : null,
        },
      ],
    },
  }
);
