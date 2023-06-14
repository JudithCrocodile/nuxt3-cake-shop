<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <p>useState</p>
      <span class="text-9xl font-semibold text-emerald-400">{{ count1 }}</span>
    </div>
    <div class="flex flex-col items-center">
      <p>no useState</p>
      <span class="text-9xl font-semibold text-emerald-400">{{ count2 }}</span>
    </div>
  </div>
</template>

<script setup>
const count1 = useState("count", () => Math.round(Math.random() * 1000));
const count2 = ref(Math.round(Math.random() * 1000));
</script>
