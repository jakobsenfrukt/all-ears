<template>
  <footer class="site-footer">
    <nav v-if="index" class="index-links">
      <div class="link">
        <svg
          class="link-icon"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M482.441 232.441L434.065 280.817L284.207 130.961L284.207 500L215.793 500L215.793 130.959L65.9348 280.817L17.5587 232.441L201.624 48.3765L201.624 48.376L250 -0.000101713L482.441 232.441Z"
            fill="currentColor"
          />
        </svg>
        <g-link to="/artists">View lineup</g-link>
      </div>
      <div class="link">
        <svg
          class="link-icon"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M482.441 232.441L434.065 280.817L284.207 130.961L284.207 500L215.793 500L215.793 130.959L65.9348 280.817L17.5587 232.441L201.624 48.3765L201.624 48.376L250 -0.000101713L482.441 232.441Z"
            fill="currentColor"
          />
        </svg>
        <g-link to="/tickets">Get tickets</g-link>
      </div>
      <div class="link">
        <svg
          class="link-icon"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M482.441 232.441L434.065 280.817L284.207 130.961L284.207 500L215.793 500L215.793 130.959L65.9348 280.817L17.5587 232.441L201.624 48.3765L201.624 48.376L250 -0.000101713L482.441 232.441Z"
            fill="currentColor"
          />
        </svg>
        <g-link to="/info">More info</g-link>
      </div>
    </nav>
    <nav v-else class="some">
      <a
        :href="$static.general.social.instagram"
        aria-label="Instagram"
        class="some-link"
        target="_blank"
      >
        Instagram
      </a>
      <a
        :href="$static.general.social.facebook"
        aria-label="Facebook"
        class="some-link"
        target="_blank"
      >
        Facebook
      </a>
    </nav>
  </footer>
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
export default {
  props: {
    index: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.site-footer {
  position: fixed;
  bottom: 1rem;
  grid-column: 1 / span 1;
  grid-row: span 2;
  z-index: 10;
}
.index-links {
}
.link {
  font-size: var(--font-l);

  &-icon {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    margin: 0 0.5rem 0.3rem 0;
    vertical-align: middle;
    transform: rotate(90deg);
  }
}
.some {
  &-link {
    display: block;
    margin: 0.2rem 1rem 0 0;
  }
  &-icon {
    display: block;
    width: 2rem;
    height: 2rem;
  }
}
@media (max-width: 800px) {
  .site-footer {
    position: absolute;
    bottom: 0.75rem;
  }
}
</style>
