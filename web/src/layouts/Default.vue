<template>
  <div class="layout" :class="page">
    <Background />
    <Header2026 class="header" />
    <transition name="fade" appear>
      <main class="site-main">
        <slot />
        <Totop />
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
import Background from "@/components/Background.vue";
import Headline from "~/components/Headline.vue";
import Header2026 from "~/components/Header2026.vue";
import Footer from "~/components/Footer.vue";
import Totop from "@/components/Totop.vue";

export default {
  components: {
    Background,
    Headline,
    Header2026,
    Footer,
    Totop,
  },
  props: {
    page: String,
  },
};
</script>

<style lang="scss" scoped>
.layout {
  padding: var(--spacing-m);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto 1fr;
}
.site-main {
  grid-column: 1 / -1;
  grid-row: 2;
  min-height: 100vh;
  margin-bottom: 2rem;
}
@media (max-width: 800px) {
  .layout {
    grid-template-rows: auto;
    background-image: none !important;
  }
  .site-main {
    grid-column: 1 / -1;
    grid-row: 3;
  }
  .header {
    order: 1;
  }
  .site-main {
    order: 2;
    grid-row: 2;
  }
  .headline {
    order: 3;
  }
  .footer {
    order: 4;
  }
}

.fade-enter-active {
  transition: opacity 0.8s;
}

.fade-enter {
  opacity: 0;
}
@media (max-width: 600px) {
  .layout {
    padding: calc(var(--spacing-m)*2);
  }
}
</style>
