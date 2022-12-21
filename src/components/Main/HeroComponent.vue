<template>
  <section class="custom">
    <div class="sm:flex relative sm:gap-8">
      <div class="sm:absolute sm:-left-14 bottom-0 top-0 items-center flex">
        <ul class="flex gap-9 mx-auto justify-center mt-12 sm:flex-col">
          <li><img src="@/assets/img/bxl-github.svg" alt="" /></li>
          <li><img src="@/assets/img/bxl-twitter.svg" alt="" /></li>
          <li><img src="@/assets/img/bxl-linkedin-square.svg" alt="" /></li>
        </ul>
      </div>
      <div
        class="focal-graphic w-full flex justify-center sm:basis-1/2 sm:order-2 relative"
      >
        <img
          class="relative bottom-11 left-0 right-0"
          src="@/assets/img/bighead.svg"
          alt=""
        />
      </div>

      <div class="mt-10 sm:basis-1/2 sm:order-1">
        <h1 class="font-bold text-4xl">Hi, I'm Seeni</h1>
        <h4 class="font-semibold text-port-grey text-base mt-2">
          Frontend Engineer and Graphic Designer
        </h4>
        <p class="mt-4 text-sm text-port-grey text-justify">
          I enjoy crafting beautiful and smooth user interfaces and experiences,
          I employ my design savviness and frontend skills in transforming UI/UX
          designs into responsive websites.
        </p>
        <!-- <action-button class="mt-10" type="primary" @click="store.openDisplay()"
          ><img src="@/assets/img/bx-download.svg" alt="" /> DOWNLOAD MY
          CV</action-button
        > -->

        <a
          href="https://firebasestorage.googleapis.com/v0/b/bode-project-a4bc4.appspot.com/o/Olabode-Oluwaseeni-Resume-.pdf?alt=media&token=6fb870db-8e3d-4fe2-9221-0dfea6bcf504"
          class="primary mt-10"
          download=""
          ><img src="@/assets/img/bx-download.svg" alt="" />DOWNLOAD MY CV</a
        >
      </div>
    </div>
    <c-v-download-vue v-if="store.cvDisplay" />
  </section>
</template>

<script>
// import ActionButton from "@/components/shared/ActionButton.vue";
import CVDownloadVue from "../shared/CV-download.vue";
import { store } from "@/App.vue";

export default {
  name: "HeroComponent",
  components: { CVDownloadVue },
  data() {
    return {
      store: store,
    };
  },
};
</script>

<style scoped>
:global(section.custom) {
  @apply px-10 my-16 mb-28 sm:px-14 lg:px-64 pt-8;
}

section.custom:first-child {
  @apply pt-0;
}

:global(.text-port-grey) {
  opacity: 0.95;
}

a {
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
