<template>
  <li
    class="border-b-port-orange border-b-2 flex justify-between items-center h-20"
  >
    {{ skillObject.name }} <img width="25" :src="skillImage" alt="" />
  </li>
</template>

<script>
export default {
  name: "SingleSkill",
  props: {
    skillObject: {
      type: Object,
      required: true,
    },
  },
  computed: {
    skillImage() {
      return require("@/assets/img/" + this.skillObject.image + ".svg");
    },
  },
};
</script>
