<template>
  <div class="relative">
    <div
      class="custom-select border-solid border border-port-lines-dark flex uppercase h-12 items-center justify-between px-8 text-xs font-bold cursor-pointer relative"
      @click="toggleOptions()"
    >
      {{ selectedOption }}
      <img
        class="chevron"
        :class="{ rotate: optionsOpen }"
        src="@/assets/img/chevron-down.svg"
        alt=""
      />
    </div>
    <div
      v-show="optionsOpen"
      class="options absolute top-0 bg-port-black w-full border border-solid border-port-lines-dark p-4"
      :class="[
        { 'h-0': optionsOpen === false },
        { 'h-auto': optionsOpen === true },
      ]"
      @mouseleave="turnOffOptions()"
    >
      <ul class="uppercase flex flex-col gap-4">
        <li
          v-for="option in options"
          :key="option"
          class="text-xs font-bold cursor-pointer option-li px-8 py-4"
          :class="[
            { 'order-1': option === selectedOption },
            { 'order-2': option != selectedOption },
          ]"
          @click="selectOption(option)"
        >
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectComponent",
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
  emits: ["select"],
  data() {
    return {
      selectedOption: "",
      optionsOpen: false,
    };
  },
  mounted() {
    this.selectedOption = this.options[0];
  },
  methods: {
    toggleOptions() {
      this.optionsOpen = this.optionsOpen ? false : true;
    },
    selectOption(value) {
      this.selectedOption = value;
      this.toggleOptions();
      this.$emit("select", value);
    },
    turnOffOptions() {
      this.optionsOpen = false;
    },
  },
};
</script>

<style scoped>
.custom-select:hover,
.option-li:hover {
  background-color: rgba(57, 57, 80, 0.3);
}

.chevron {
  transition: all 0.2s ease-in-out;
  margin-left: 10px;
}

.options {
  transition: height 0.5s;
  min-width: 300px;
}

@media (min-width: 640px) {
  .options {
    right: 0;
  }
}

.rotate {
  transform: rotate(180deg);
}
</style>
