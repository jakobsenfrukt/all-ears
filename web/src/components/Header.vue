<template>
  <header class="site-header">
    <nav class="site-nav">
      <g-link class="nav-link" to="/lineup">Lineup</g-link>
      <g-link class="nav-link" to="/tickets">Tickets</g-link>
      <g-link class="nav-link" to="/info/">Info</g-link>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.site-header {
  grid-column: 2 / span 3;
  margin-bottom: 2rem;
  font-size: var(--font-l);
}
.site-nav {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.nav-link {
  display: block;
  &:hover {
    text-decoration: underline;
    text-underline-position: below;
    text-underline-offset: .1rem;
    text-decoration-thickness: var(--border-width);
  }
}
@media (max-width: 600px) {
  .site-header {
    grid-column: 1 / span 4;
    width: 100%;
  }
  .site-nav {
    display: flex;
    justify-content: space-between;
  }
  .nav-link {
    text-decoration: underline;
    text-underline-position: below;
    text-underline-offset: .1rem;
    text-decoration-thickness: var(--border-width);
    &:nth-of-type(2) {
      text-align: center;
    }
    &:nth-of-type(3) {
      text-align: right;
    }
  }
}
</style>