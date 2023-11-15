<template>
  <div class="headline" :class="{ index: index }">
    <div class="headline-half headline-half--left">
      <a href="/">
        <span class="highlight">All</span>
        <span class="highlight">Ears</span>
      </a>
      <span>Festival</span>
      <span>for</span>
      <span>improvised</span>
      <span>music</span>
    </div>
    <div class="headline-half headline-half--right">
      <span class="highlight">MUNCH</span>
      <span>Oslo</span>
      <span>Norway</span>
      <span class="highlight">12-14</span>
      <span class="highlight">January</span>
      <span class="highlight">2024</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    index: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.headline {
  position: fixed;
  z-index: 1000;
  grid-row: span 2;
  font-size: var(--font-l);
  span {
    display: block;
    &.highlight {
      color: var(--color-highlight);
    }
  }
  a {
    &:hover {
      text-decoration: none;
    }
  }
  &.index {
    padding: var(--spacing-m);
  }
}
@media (max-width: 800px) {
  .headline {
    position: relative;
    margin-bottom: 6rem;
    font-size: var(--font-xl);
    grid-row: span 1;
    &.index {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin-bottom: 1rem;
      padding: var(--spacing-s);
      .headline-half {
        &--right {
          text-align: right;
        }
      }
    }
  }
}
</style>
