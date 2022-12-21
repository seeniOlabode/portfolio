<template>
  <li class="flex flex-col sm:flex-row gap-4 mb-16 items-center sm:gap-9">
    <div class="basis-1/2 grow"><img :src="preview" alt="" /></div>
    <div class="basis-1/2 grow">
      <h5 class="font-bold text-lg">{{ projectObject.name }}</h5>
      <p class="text-sm mt-2 text-port-grey">{{ projectObject.description }}</p>
      <div class="mt-8 w-full flex gap-5">
        <a target="_blank" :href="projectObject.github"
          ><button>GITHUB</button></a
        >
        <a target="_blank" :href="projectObject.live"
          ><button>LIVE SITE</button></a
        >
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "SingleProject",
  props: {
    projectObject: {
      type: Object,
      required: true,
    },
  },
  computed: {
    preview() {
      return require("@/assets/img/" + this.projectObject.preview + ".png");
    },
  },
};
</script>

<style scoped>
button {
  @apply border border-solid border-port-lines-dark text-xs font-bold;
  height: 48px;
  width: 138px;
}

button:hover {
  background-color: rgba(57, 57, 80, 0.3);
}
</style>
