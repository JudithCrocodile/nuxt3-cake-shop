<template>
  <button class="btn btn-blue">
    <slot>Button</slot>
  </button>
</template>

<style lang="postcss" scoped>
.btn {
  @apply font-bold py-2 px-4 rounded;
  &.btn-blue {
    @apply bg-slate-200 text-slate-500;
    &:hover {
      @apply bg-slate-400;
      @apply text-white;
    }
  }
}
</style>
