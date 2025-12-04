<template>
  <div class="background" :class="page">
    <img
      v-if="page === 'index'"
      src="/images/2026/Bakgrunn1.png"
    />
    <img v-else src="/images/2026/Bakgrunn2.png" />
  </div>
</template>

<script>
export default {
  props: {
    page: String,
  },
  mounted() {
    this.updateHtmlBackground();
  },

  watch: {
    page() {
      this.updateHtmlBackground();
    },
  },

  methods: {
    updateHtmlBackground() {
      const html = document.documentElement;

      if (this.page === "index") {
        html.style.background = "var(--color-orange)";
      } else {
        html.style.background = "var(--color-gray)";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.background {
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: 0;
  background-color: var(--color-gray);

  &.index {
    background-color: var(--color-orange);
  }

  img {
    position: absolute;
    width: 100%;
    height: 105%;
    object-fit: cover;
    top: 0;
    left: 0;
    object-position: 20% 0;
  }
}
@media (max-width: 800px) {
  .background {
    display: block;
    img {
      object-position: 30% 0;
    }
  }
}
</style>
