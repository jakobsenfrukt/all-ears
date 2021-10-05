<template>
  <div class="layout">
    <Headline />
    <Header />
    <transition name="fade" appear>
      <main class="site-main">
        <slot />
        <div class="to-top">
          <span>Til toppen</span>
          <svg class="to-top-icon" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M482.441 232.441L434.065 280.817L284.207 130.961L284.207 500L215.793 500L215.793 130.959L65.9348 280.817L17.5587 232.441L201.624 48.3765L201.624 48.376L250 -0.000101713L482.441 232.441Z" fill="black"/>
          </svg>
        </div>
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
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Headline,
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.layout {
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

.to-top {
  width: 100%;
  margin-top: 4rem;
  border-top: 6px solid var(--color-green);
  padding: .5rem;
  text-align: right;

  &-icon {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 0 .3rem .5rem;
    vertical-align: middle;
  }
}

.fade-enter-active {
  transition: opacity .8s;
}

.fade-enter {
  opacity: 0;
}
</style>
