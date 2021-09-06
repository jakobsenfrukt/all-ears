<template>
  <div class="layout">
    <HeadlineAlt />
    <HeaderAlt />
    <transition name="fade" appear>
      <main class="site-main">
        <slot />
      </main>
    </transition>
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
import HeadlineAlt from '~/components/HeadlineAlt.vue'
import HeaderAlt from '~/components/HeaderAlt.vue'
export default {
  components: {
    HeadlineAlt,
    HeaderAlt
  }
}
</script>

<style lang="scss">
.layout {
  padding: .4rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto 1fr;
  grid-gap: 1rem;

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
