<template>
  <div class="headline">
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
      <span class="highlight">14.–16.</span>
      <span class="highlight">January</span>
      <span class="highlight">2022</span>
    </div>
  </div>
</template>

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
}
@media (max-width: 600px) {
  .headline {
    grid-row: span 1;
    grid-column: 1 / -1;
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 1rem;
    &-half {
      &--right {
        text-align: right;
      }
    }
    &--index {
      background: none;
    }
  }
}
</style>