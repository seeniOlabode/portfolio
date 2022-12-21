<template>
  <header
    class="border-b border-b-solid border-b-port-lines-dark h-20 flex items-center justify-between px-8 sm:px-14 md:px-20 lg:px-40"
  >
    <div>
      <img src="@/assets/img/logo.svg" alt="" />
    </div>

    <button class="md:hidden" @click="toggleNav()">
      <img class="w-8" src="@/assets/img/bx-menu.svg" alt="" />
    </button>

    <nav
      class="fixed md:static h-screen md:h-auto w-screen md:w-auto flex top-0 left-0 bottom-0 items-start"
      v-show="navOpen"
    >
      <ul
        class="flex md:gap-8 font-bold opacity-75 flex-col w-full px-20 relative md:flex-row md:px-0 mt-16 md:mt-0"
      >
        <button class="absolute right-20 top-0 md:hidden" @click="closeNav()">
          <img src="@/assets/img/close.svg" alt="" />
        </button>
        <li @click="closeNav()"><a href="#home">HOME</a></li>
        <li @click="closeNav()"><a href="#skills">SKILLS</a></li>
        <li @click="closeNav()">
          <a href="#qualifications">QUALIFICATIONS</a>
        </li>
        <li @click="closeNav()"><a href="#projects">PROJECTS</a></li>
        <li @click="closeNav()"><a href="#contact">CONTACT</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "WebsiteHeader",
  data() {
    return {
      navOpen: true,
      windowWidth: window.innerWidth,
      appStyleHeight: "100vh",
      appStyleScroll: "",
    };
  },
  methods: {
    openNav() {
      this.navOpen = true;
      this.checkApp();
    },
    closeNav() {
      if (this.windowWidth < 768) {
        this.navOpen = false;
        this.checkApp();
      }
    },
    toggleNav() {
      this.navOpen = this.navOpen ? false : true;
      this.checkApp();
    },
    onResize() {
      this.windowWidth = window.innerWidth;
      this.checkApp();
    },
    checkApp() {
      if (this.windowWidth < 768 && this.navOpen) {
        this.appStyleHeight = "100vh";
        this.appStyleScroll = "scroll";
      }
    },
  },
  watch: {
    windowWidth(newval) {
      if (newval >= 768) {
        this.navOpen = true;
      } else {
        this.navOpen = false;
      }
      this.checkApp();
      console.log("switch");
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
    if (this.windowWidth >= 768) {
      this.navOpen = true;
    } else {
      this.navOpen = false;
    }
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>

<style scoped>
:global(#app) {
  height: v-bind(appStyleHeight);
  overflow: v-bind(appStyleScroll);
}

nav {
  background: rgba(0, 0, 0, 0.95);
  z-index: 100;
  animation: slideInTwo 0.1s;
}

ul li:nth-child(1) {
  animation-duration: 0.2s;
}

ul li:nth-child(2) {
  animation-duration: 0.3s;
}

ul li:nth-child(3) {
  animation-duration: 0.4s;
}

ul li:nth-child(4) {
  animation-duration: 0.5s;
}

ul li:nth-child(5) {
  animation-duration: 0.6s;
}

ul li {
  @apply border-b w-full py-6 flex items-center gap-0 cursor-pointer md:border-none;
  animation: slideIn 0.5s;
}

ul li:hover {
  @apply text-port-orange;
}

@media (min-width: 768px) {
  nav {
    background: none;
    animation: none;
  }
  ul li {
    animation: none;
    @apply text-sm font-bold;
  }
}

@keyframes slideIn {
  0% {
    transform: translate(1000px, 0);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
}

@keyframes slideInTwo {
  0% {
    transform: translate(10000px, 0);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
}
</style>
