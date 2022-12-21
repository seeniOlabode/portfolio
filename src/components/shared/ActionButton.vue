<template>
  <button :class="type">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    type: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
button {
  height: 48px;
  max-width: 350px;
}
.primary {
  @apply border-solid border border-port-lines-dark px-8 flex items-center gap-8 h-12 text-xs font-bold w-full;
}

.primary:hover {
  background-color: rgba(57, 57, 80, 0.3);
}
</style>
