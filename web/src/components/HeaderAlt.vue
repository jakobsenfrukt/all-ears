<template>
  <header class="site-header">
    <nav class="site-nav">
      <g-link class="nav-link" to="/lineup">Lineup</g-link>
      <g-link class="nav-link" to="/alt">Tickets</g-link>
      <g-link class="nav-link" to="/info/">Info</g-link>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.site-header {
  grid-column: 2 / span 3;
  margin-bottom: 1rem;
}
.site-nav {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.nav-link {
  display: block;
  background: var(--color-text);
  color: var(--color-background);
  padding: .2rem .4rem;
  &:hover {
    text-decoration: none;
    &:before {
      content: "->";
    }
  }
}
</style>