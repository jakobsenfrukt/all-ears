<template>
  <div class="splash">
    <img class="desktop" src="/images/2026/Splash-screen-desktop.png" />
    <img class="mobile" src="/images/2026/Splash-screen-mobil.png" />
  </div>
</template>

<script>
export default {
  mounted() {
    document.documentElement.style.backgroundColor = "#ECCD35";
    setTimeout(() => {
      document.documentElement.style.transition = "background-color 0.3s ease";
      document.documentElement.style.backgroundColor = "var(--color-orange)";
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
  background: #ECCD35;

  opacity: 1;
  animation: fadeOut .3s ease forwards;
  animation-delay: 1.5s;
  pointer-events: none;

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
