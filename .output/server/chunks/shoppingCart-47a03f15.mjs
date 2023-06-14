import { ref } from 'vue';
import { g as defineStore } from './server.mjs';

const useShoppingCartStore = defineStore(
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
      addCart
    };
  },
  {
    persist: {
      enabled: true,
      strategies: [
        {
          key: "shoppingCart",
          storage: null
        }
      ]
    }
  }
);

export { useShoppingCartStore as u };
//# sourceMappingURL=shoppingCart-47a03f15.mjs.map
