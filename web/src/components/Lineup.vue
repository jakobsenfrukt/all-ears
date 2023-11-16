<template>
  <section class="lineup">
    <ul class="lineup-list">
      <li v-for="artist in $static.frontpage.lineup" :key="artist.id">
        <g-link to="/artists"
          >{{ artist.title }}
          <sup class="nationality">({{ artist.nationality }})</sup></g-link
        >
      </li>
    </ul>
    <OtherEvents hideHeading />
  </section>
</template>

<static-query>
query {
  frontpage: sanityFrontpage (id: "frontpage") {
    lineup {
      id
      title
      nationality
    }
  }
}
</static-query>

<script>
import OtherEvents from "@/components/OtherEvents";

export default {
  components: {
    OtherEvents,
  },
};
</script>

<style lang="scss" scoped>
.lineup {
  margin: 0 0 0 auto;
  color: var(--color-highlight);
  text-align: right;
  position: relative;
  z-index: 100;
  max-width: 20rem;
  &-list {
    list-style: none;
    margin: 0 0 2rem;
    padding: 0;

    li {
      color: var(--color-highlight);

      &:nth-of-type(even) {
        color: var(--color-text);
      }
    }
  }
  a {
    font-size: var(--font-l);
    margin: 0;
    &:hover {
      text-decoration: none;
    }
  }
}
.nationality {
  display: inline-block;
  vertical-align: top;
  font-size: 0.5em;
  line-height: 2;
}
@media (max-width: 800px) {
  .lineup {
    margin: 0;
    text-align: left;
    margin-top: 60vw;
    a {
      font-size: var(--font-l);
    }
  }
}
</style>
