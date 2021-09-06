<template>
  <div class="headline">
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

<style lang="scss" scoped>
.headline {
  position: fixed;
  grid-row: span 2;
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
}
@media (max-width: 800px) {
  .headline {
    font-size: 1rem;
  }
}
</style>