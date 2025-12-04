<template>
  <header class="site-header">
    <a href="/" class="headline">
      <div class="headline-half headline-half--left">
          <span class="highlight">All Ears</span>
          <span>Festival for Improvised Music</span>
      </div>
      <div class="headline-half headline-half--right">
        <span class="highlight">Kunstnernes Hus</span>
        <span>Oslo, Norway</span>
        <span class="highlight">8&ndash;11 January 2026</span>
      </div>
    </a>
    <nav class="site-nav">
      <div class="nav-link"><LinkIcon /><g-link to="/artists">View artists</g-link></div>
      <div class="nav-link"><LinkIcon /><g-link to="/tickets">Get tickets</g-link></div>
      <div class="nav-link"><LinkIcon /><g-link to="/info/">Info</g-link></div>
      <div class="nav-link"><LinkIcon />
        <a
          :href="$static.general.social.instagram"
          aria-label="Instagram"
          class="some-link"
          target="_blank"
        >Instagram</a>
      </div>
      <div class="nav-link"><LinkIcon />
        <a
          :href="$static.general.social.facebook"
          aria-label="Facebook"
          class="some-link"
          target="_blank"
        >Facebook</a>
      </div>
    </nav>
  </header>
</template>

<static-query>
query {
  metadata {
    sanityOptions{
      projectId
      dataset
    }
  }
  general: sanityGeneral(id: "general") {
    social {
      instagram
      facebook
    }
  }
}
</static-query>

<script>
import LinkIcon from "@/components/LinkIcon";

export default {
  components: {
    LinkIcon,
  },
};
</script>

<style lang="scss" scoped>
.headline {
  font-size: var(--font-m);
  line-height: 1.2;
  span {
    display: block;
    &.highlight {
      color: var(--color-highlight);
    }
  }
  &:hover {
    text-decoration: none;
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
.site-header {
  grid-column: 1 / -1;
  margin-bottom: 1.6rem;
  font-size: var(--font-m);
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
}
.site-nav {
  min-width: 8rem;
}
.nav-link {
  font-size: var(--font-m);
  display: block;
  a:hover {
    text-decoration: underline;
    text-underline-offset: 0.1em;
    text-decoration-thickness: 0.1em;
  }
}
@media (max-width: 800px) {
  .headline {
    position: relative;
    font-size: var(--font-m);
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
  .site-nav {
    min-width: 6rem;
  }
}
</style>
