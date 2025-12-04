<template>
  <header class="site-header" :class="{ menuopen: menuOpen }">
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
    <div class="menu-toggle" @click="toggleMenu()" role="button">
      <template v-if="menuOpen">
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="97.2652" y="49.1817" width="500" height="68" transform="rotate(45 97.2652 49.1817)" fill="currentColor"/>
          <rect x="450.818" y="97.2649" width="500" height="68" transform="rotate(135 450.818 97.2649)" fill="currentColor"/>
        </svg>
      </template>
      <template v-else>
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="41" y="221" width="418" height="68" fill="currentColor"/>
          <rect x="41" y="63" width="418" height="68" fill="currentColor"/>
          <rect x="41" y="369" width="418" height="68" fill="currentColor"/>
        </svg>
      </template>
    </div>
    <nav class="site-nav" :class="{ menuopen: menuOpen }">
      <div class="nav-link"><g-link to="/artists">View artists</g-link></div>
      <div class="nav-link"><g-link to="/tickets">Get tickets</g-link></div>
      <div class="nav-link"><g-link to="/info/">Info</g-link></div>
      <div class="nav-link">
        <a
          :href="$static.general.social.instagram"
          aria-label="Instagram"
          class="some-link"
          target="_blank"
        >Instagram</a>
      </div>
      <div class="nav-link">
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
  data() {
    return {
      menuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
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
  margin-bottom: 3.2rem;
  font-size: var(--font-m);
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
}
.site-nav {
  padding-left: 2rem;
  text-align: right;
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
.menu-toggle {
  display: none;
  color: currentColor;
  cursor: pointer;

  svg {
    width: 1rem;
    height: 1rem;
  }
}
@media (max-width: 600px) {
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
  .menu-toggle {
    display: block;
  }
  .site-nav {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-100%);
    transition: all .3s ease;
    opacity: 0;

    &.menuopen {
      transform: translateY(0);
      opacity: 1;
    }
  }
  .nav-link {
    font-size: var(--font-xl);
  }
  .site-header {
    transition: all .3s ease;
    &.menuopen {
      padding-top: 8.4rem;
    }
  }
}
</style>
