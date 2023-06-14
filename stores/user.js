import { defineStore } from "pinia";

export const useUserStore = defineStore(
  "user",
  () => {
    const user = ref({
      name: "Margot Foster",
      auth: false,
      id: 0,
    });
    
    setTimeout(()=>{
      user.value.auth = true
    },
    5000)

    const userData = () => user.value;

    return {
      user,
      userData,
    };
  },
  {
    persist: {
      enabled: true,
      strategies: [
        {
          key: "user",
          storage: process.client ? localStorage : null,
        },
      ],
    },
  }
);
