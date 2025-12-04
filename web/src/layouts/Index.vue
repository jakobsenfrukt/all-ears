<template>
  <div class="layout">
    <Background page="index" />
    <Header2026 />
    <transition name="fade" appear>
      <main class="site-main">
        <slot />
      </main>
    </transition>
    <SplashScreen />
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
import Footer from "~/components/Footer.vue";
import SplashScreen from "../components/SplashScreen.vue";
import Header2026 from "../components/Header2026.vue";
export default {
  components: {
    Background,
    Headline,
    Footer,
    SplashScreen,
    Header2026
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
}

.fade-enter-active {
  transition: opacity 0.8s;
}

.fade-enter {
  opacity: 0;
}
</style>
