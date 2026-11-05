<template>
  <div
    v-if="visible"
    class="splash"
    :class="{ fading }"
    @click="dismiss"
    @animationstart="fading = true"
    @animationend="visible = false"
  >
    <img class="desktop" src="/images/Splash-screen-desktop.png" />
    <img class="mobile" src="/images/Splash-screen-mobil.png" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
      fading: false,
    };
  },
  methods: {
    dismiss() {
      this.visible = false;
      document.documentElement.style.backgroundColor = "var(--color-pink)";
    },
  },
  mounted() {
    document.documentElement.style.backgroundColor = "var(--color-pink)";
    setTimeout(() => {
      document.documentElement.style.transition = "background-color 0.3s ease";
      document.documentElement.style.backgroundColor = "var(--color-black)";
    }, 1500);
  },
};
</script>


<style lang="scss" scoped>
.splash {
  position: fixed;
  width: 100dvw;
  height: 100dvh;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: 9000;
  background: var(--color-pink);

  opacity: 1;
  animation: fadeOut .3s ease forwards;
  animation-delay: 1.5s;
  cursor: pointer;

  &.fading {
    pointer-events: none;
  }

  .mobile {
    display: none;
  }
  .desktop {
    display: block;
  }
  img {
    position: absolute;
    width: 100%;
    height: 105%;
    object-fit: cover;
    top: 0;
    left: 0;
    object-position: center;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@media (max-width: 800px) {
  .splash {
    .mobile {
      display: block;
    }
    .desktop {
      display: none;
    }
  }
}
</style>
