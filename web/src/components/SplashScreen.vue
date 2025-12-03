<template>
  <div class="splash">
    <img class="desktop" src="/images/2026/Splash-screen-desktop.png" />
    <img class="mobile" src="/images/2026/Splash-screen-mobil.png" />
  </div>
</template>

<style lang="scss" scoped>
.splash {
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: 9000;

  opacity: 1;
  animation: fadeOut 1s ease forwards;
  animation-delay: 1s;
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
