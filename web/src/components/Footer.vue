<template>
  <footer class="site-footer">
    <span>Contact: <a href="mailto:contact@all-ears.no" target="_blank">contact@all-ears.no</a></span>
    <span>Design: <a href="https://runemortensen.no/" target="_blank">Rune Mortensen</a></span>
    <span>Code: <a href="https://elisejakob.no/" target="_blank">Elise Jakobsen</a></span>
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
  grid-column: 1 / span 4;
  z-index: 1;
  font-size: 13px;

  span {
    &:after {
      content: " | ";
      display: inline-block;
      margin: 0 .4em;
    }
    &:last-child {
      &:after {
        display: none;
      }
    }
    @media (max-width: 600px) {
      display: block;
      &:after {
        content: "";
      }
    }
  }
}
</style>
