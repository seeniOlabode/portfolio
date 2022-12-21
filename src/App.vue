<template>
  <div :class="openStyle">
    <website-header />
    <main-body />
    <my-footer />
  </div>
</template>

<script>
import WebsiteHeader from "@/components/WebsiteHeader.vue";
import MainBody from "@/components/Main/MainBody.vue";
import MyFooter from "@/components/FooterSection.vue";

import { reactive } from "vue";

export const store = reactive({
  cvDisplay: false,
  openStyle: function () {
    let output = "";
    if (this.cvDisplay) {
      output = "h-screen w-screen top-0 left-0 absolute overflow-scroll";
    }
    return output;
  },
  closeDisplay: function () {
    this.cvDisplay = false;
  },
  openDisplay: function () {
    this.cvDisplay = true;
  },
});

export default {
  name: "App",
  components: { WebsiteHeader, MainBody, MyFooter },
  data() {
    return {
      store: store,
    };
  },
  computed: {
    openStyle() {
      let output = "";
      if (this.store.cvDisplay) {
        output = "h-screen w-screen top-0 left-0 absolute overflow-hidden";
      }
      return output;
    },
  },
};
</script>

<style>
body {
  @apply bg-port-black;
}

#app {
  font-family: "Poppins", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @apply bg-port-black text-white;
}
</style>
