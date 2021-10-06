<template>
  <div class="headline" :class="{index: index}">
    <a href="/">
      <span class="highlight">All</span>
      <span class="highlight">Ears</span>
    </a>
    <span>Festival</span>
    <span>for</span>
    <span>improvised</span>
    <span>music</span>
    <span class="highlight">MUNCH</span>
    <span>Oslo</span>
    <span>Norway</span>
    <span class="highlight">14.–16.</span>
    <span class="highlight">January</span>
    <span class="highlight">2022</span>
  </div>
</template>

<script>
export default {
  props: {
    index: Boolean
  }
}
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
    span {
      &.highlight {
        color: var(--color-white);
      }
    }
  }
}
</style>