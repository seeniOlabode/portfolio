<template>
  <div class="experience-holder">
    <div class="exp">
      <h5 class="title">University of Ilorin</h5>
      <p class="company">Kwara, Nigeria</p>
      <p class="date">2018 - 2023</p>
    </div>
    <div class="back-bone h-full flex flex-col items-center">
      <div class="rounded-full bg-port-orange mark"></div>
      <div class="h-full back-line"></div>
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
  @apply flex justify-center items-center;
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
