<template>
  <div>
    <!-- service side call api，並傳送到 client side，client side 不打api -->
    <div class="px-4 sm:px-0">
      <div>
        <button
          @click="logout"
          class="float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Logout
        </button>
      </div>

      <h3 class="text-base font-semibold leading-7 text-gray-900">
        Member Information
      </h3>
      <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
        Personal details.
      </p>

      <!-- <p>count: {{ count }}</p> -->
    </div>
    <div class="mt-6 border-t border-gray-100">
      <dl class="divide-y divide-gray-100" v-if="memberData">
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">Full name</dt>
          <dd
            class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
          >
            {{ memberData.name }}
          </dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">
            Email address
          </dt>
          <dd
            class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
          >
            {{ memberData.email }}
          </dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">Address</dt>
          <dd
            class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
          >
            {{ memberData.address }}
          </dd>
        </div>
        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">About</dt>
          <dd
            class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
          >
            {{ memberData.about }}
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    let memberData = useState("memberData");
    const getDataTime = ref("");
    let count = 0;
    let apiCalled = useState("apiCalled", () => false);

    (async () => {
      if (apiCalled.value) {
        return;
      }

      count = ref(Math.round(Math.random() * 1000));
      const { data, pending, error, refresh } = await useFetch(
        "/api/memberApi"
      );
      apiCalled.value = true;
      getDataTime.value = new Date();

      memberData.value = data.value;

      useSeoMeta({
        title: () => data.value?.name,
        description: () => data.value?.about,
        ogTitle: () => data.value?.name,
        ogDescription: () => data.value?.about,
      });
      return data.value;
    })();

    definePageMeta({
      middleware: [
        function (to, from) {
          // Custom inline middleware
        },
        "auth",
      ],
    });

    const logout = function () {
      const auth = useCookie("auth", { maxAge: 60 });

      auth.value = null;

      const isLogin = useState("isLogin");
      isLogin.value = false;

      const router = useRouter();
      router.push("/home");
    };

    return {
      memberData,
      getDataTime,
      count,
      logout,
    };
  },
};
</script>
