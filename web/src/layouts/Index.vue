<template>
  <div class="layout">
    <div class="noise"></div>
    <div class="noise2"></div>
    <Headline index />
    <transition name="fade" appear>
      <main class="site-main">
        <slot />
      </main>
    </transition>
    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Headline from '~/components/Headline.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: {
    Headline,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.layout {
  background: var(--color-green);
  padding: .4rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto 1fr;

  @media (min-width: 800px) {
    padding: .6rem;
  }
  @media (min-width: 1200px) {
    padding: .8rem;
  }
}
.noise {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/images/noise.png');
  background-size: contain;
  background-attachment: fixed;
  animation: blur 2s linear infinite alternate;
}
.noise2 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/images/noise.png');
  background-size: contain;
  background-attachment: fixed;
  animation: blur2 2s linear infinite alternate;
}
.site-main {
  grid-column: 2 / span 3;
  grid-row: 2;
}

.fade-enter-active {
  transition: opacity .8s;
}

.fade-enter {
  opacity: 0;
}

@media (max-width: 600px) {
  .layout {
    display: block;
  }
}
@keyframes blur {
  from {
    filter: blur(2px);
    transform: translate(5px, 5px);
  }
  to {
    filter: blur(0);
    transform: translate(0, 0);
  }
}
@keyframes blur2 {
  from {
    filter: blur(4px);
    transform: translate(-5px, 5px);
  }
  to {
    filter: blur(0);
    transform: translate(0, 0);
  }
}
</style>
