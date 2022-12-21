<template>
  <main class="container mx-auto md:mt-40">
    <hero-component id="home" />
    <skills-section id="skills" />
    <qualifications-section id="qualifications" />
    <projects-section id="projects" />
    <contact-section id="contact" />
  </main>
</template>

<script>
import HeroComponent from "@/components/Main/HeroComponent.vue";
import SkillsSection from "@/components/Main/SkillsSection.vue";
import QualificationsSection from "@/components/Main/QualificationsSection.vue";
import ProjectsSection from "@/components/Main/ProjectsSection.vue";
import ContactSection from "@/components/Main/ContactSection.vue";

export default {
  name: "MainBody",
  components: {
    HeroComponent,
    SkillsSection,
    QualificationsSection,
    ProjectsSection,
    ContactSection,
  },
};
</script>

<style></style>
