<template>
  <section class="custom">
    <h2 class="font-bold text-2xl">Projects</h2>
    <ul class="mt-12 w-full">
      <single-project
        v-for="project in projects"
        :key="project.name + project.preview"
        :projectObject="project"
        class="w-full sm:flex"
      />
    </ul>
  </section>
</template>

<script>
import SingleProject from "@/components/shared/SingleProject.vue";
import data from "@/data.json";

export default {
  name: "ProjectsSection",
  components: {
    SingleProject,
  },
  data() {
    return {
      projects: data.projects,
    };
  },
};
</script>

<style></style>
