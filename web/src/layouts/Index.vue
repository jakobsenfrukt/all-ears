<template>
  <div class="layout">
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
</style>
