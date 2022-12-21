<template>
  <section class="custom">
    <div
      class="flex justify-between flex-col gap-6 sm:flex-row sm:items-center"
    >
      <h2 class="font-bold text-2xl">Qualifications</h2>
      <select-component
        class="select"
        :options="selectOptions"
        @select="(value) => setQualification(value)"
      />
    </div>

    <div class="mt-14">
      <work-experience
        v-show="displayedQualification == 'work experience'"
        class="slideInClass"
      />
      <education
        v-show="displayedQualification == 'education'"
        class="slideInClass"
      />
    </div>
  </section>
</template>

<script>
import SelectComponent from "@/components/shared/SelectComponent.vue";
import WorkExperience from "@/components/Main/WorkExperience.vue";
import Education from "@/components/Main/EducationComponent.vue";

export default {
  name: "QualificationSectio",
  components: {
    SelectComponent,
    WorkExperience,
    Education,
  },
  data() {
    return {
      selectOptions: ["work experience", "education"],
      displayedQualification: "work experience",
    };
  },
  methods: {
    setQualification(value) {
      this.displayedQualification = value;
    },
  },
};
</script>

<style scoped>
.slideInClass {
  animation: slideIn 0.7s ease-in-out;
}

@keyframes slideIn {
  0% {
    transform: translate(0, 1000px);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
}

section.custom {
  min-height: 300px;
}

@media (min-width: 640px) {
}
</style>
