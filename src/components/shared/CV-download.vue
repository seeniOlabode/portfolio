<template>
  <div
    id="modal-container"
    v-if="store.cvDisplay"
    class="w-screen h-screen absolute cv-container top-0 left-0 bottom-0 flex items-center justify-center px-4"
    @click="closeCV"
  >
    <div class="modal border-port-lines-dark border py-6 px-8">
      <div>
        <label for="password" class="font-bold">Password :</label>

        <div class="pass-input py-2 px-4 border-port-lines-dark border">
          <input
            id="password"
            ref="passInput"
            type="password"
            placeholder="Password"
          />
        </div>
        <action-button-vue class="mt-6" type="primary">
          <img src="@/assets/img/bx-download.svg" alt="" />
          Download
        </action-button-vue>
      </div>
    </div>
  </div>
</template>

<script>
import ActionButtonVue from "./ActionButton.vue";

import { store } from "@/App.vue";

export default {
  name: "CvDownload",
  components: { ActionButtonVue },
  data() {
    return {
      store: store,
    };
  },
  mounted() {
    this.$refs.passInput.focus();
  },
  methods: {
    closeCV(e) {
      if (e.target.id == "modal-container") {
        this.store.closeDisplay();
      }
    },
  },
};
</script>

<style scoped>
:global(#app) {
  height: 100vh;
  overflow: scroll;
}

.cv-container {
  background: rgba(0, 0, 0, 0.95);
  z-index: 1000000;
}

input {
  background: none;
  outline: none;
}

.modal {
  width: 100%;
  animation: fadeIn 0.2s ease-in;
}

.pass-input {
  overflow: scroll;
  width: 100%;
  margin-top: 10px;
}

.pass-input input {
  width: 100%;
}

@keyframes fadeIn {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
