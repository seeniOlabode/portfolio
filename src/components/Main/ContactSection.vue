<template>
  <section class="custom">
    <h2 class="font-bold text-2xl">Contact</h2>
    <div class="mt-8">
      <ul>
        <li>
          <a class="flex gap-4 mb-8" href="mailto:seeniolabode8734@gmail.com">
            <img src="@/assets/img/email.svg" alt="" />
            <div>
              <h6>Email</h6>
              <p>seeniolabode8734@gmail.com</p>
            </div>
          </a>
        </li>
        <li>
          <img src="@/assets/img/location.svg" alt="" />
          <div>
            <h6>Location</h6>
            <p>Nigeria</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script></script>

<style scoped>
ul li {
  @apply flex gap-4 mb-8;
}

ul li h6 {
  @apply font-semibold text-lg;
}

ul li p {
  @apply font-normal text-port-grey;
}
</style>
