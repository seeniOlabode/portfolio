<template>
  <section class="custom">
    <h2 class="font-bold text-2xl">Skills</h2>

    <ul class="mt-8 sm:flex sm:flex-wrap sm:gap-5">
      <single-skill
        v-for="skill in skills"
        :key="skill.name + skill.image"
        :skillObject="skill"
        class="uppercase font-semibold sm:basis-1/3 grow"
      />
    </ul>
  </section>
</template>

<script>
import SingleSkill from "@/components/shared/SingleSkill.vue";
import data from "@/data.json";

export default {
  name: "SkillSection",
  components: { SingleSkill },
  data() {
    return {
      skills: data.skills,
    };
  },
};
</script>

<style></style>
