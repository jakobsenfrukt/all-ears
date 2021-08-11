<template>
  <header class="site-header">
    <div class="poster">
      <span class="highlight">All</span>
			<span class="highlight">Ears</span>
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
    <nav class="nav">
      <g-link class="nav-link" to="/">Home</g-link>
      <g-link class="nav-link" to="/about/">About</g-link>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.site-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
}

.poster {
  span {
    display: block;
    &.highlight {
      color: var(--color-white);
    }
  }
}

.nav-link {
  margin-left: 20px;
}
</style>