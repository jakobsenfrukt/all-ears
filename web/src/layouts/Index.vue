<template>
  <div class="layout">
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
import Headline from "~/components/Headline.vue";
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Headline,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.layout {
  background-image: url("/images/bg/bg-index.jpg");
  background-size: 1900px 1200px;
  background-attachment: fixed;
  padding: var(--spacing-m);

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto 1fr;
}
.site-main {
  grid-column: 2 / span 3;
  grid-row: 2;
}

.fade-enter-active {
  transition: opacity 0.8s;
}

.fade-enter {
  opacity: 0;
}

@media (max-width: 800px) {
  .layout {
    grid-template-columns: 1fr;
    background-image: none !important;
  }
  .site-main {
    grid-column: 1 / -1;
  }
}
</style>
