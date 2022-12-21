<template>
  <div class="experience-holder">
    <div class="exp">
      <h5 class="title">Frontend Developer Intern</h5>
      <p class="company">Qucoon, Nigeria</p>
      <p class="date">July 2022 - October 2022</p>
    </div>
    <div class="back-bone">
      <div class="rounded-full bg-port-orange mark"></div>
      <div class="h-full back-line"></div>
      <div class="rounded-full bg-port-orange mark"></div>
    </div>
    <div class="exp sef">
      <h5 class="title">UNIVACITI SEF Training</h5>
      <p class="company">UNIVACITI, Nigeria</p>
      <p class="date">April 2022</p>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.mark {
  width: 10px;
  height: 10px;
}

.experience-holder {
  display: grid;
  grid-template-columns: 1fr 10px 1fr;
  grid-template-rows: auto auto;
  gap: 30px;
  justify-content: center;
}

.back-line {
  width: 2px;
  @apply bg-port-orange;
}

.sef {
  grid-row-start: 2;
  grid-column-start: 3;
}

.back-bone {
  width: 10px;
  @apply flex flex-col justify-center items-center;
  grid-row: span 2;
}

.exp .title {
  @apply font-bold text-lg;
}

.exp .company {
  @apply font-medium text-port-grey text-sm;
}

.exp .date {
  display: flex;
  @apply items-center text-sm font-medium;
}

.exp .date img {
  margin-right: 8px;
  width: 20px;
}
</style>
