<template>
  <section class="lineup">
    <ul class="lineup-list">
      <li v-for="artist in $static.frontpage.lineup" :key="artist.id">
        <g-link to="/artists">
          {{ getFirstWords(artist.title) }}
          <span class="no-break">
            {{ getLastWord(artist.title) }}
            <sup class="nationality">({{ artist.nationality }})</sup>
          </span>
        </g-link>
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
  methods: {
    getFirstWords(title) {
      const words = title.split(" ");
      return words.slice(0, -1).join(" ");
    },
    getLastWord(title) {
      return title.split(" ").pop();
    }
  }
};
</script>

<style lang="scss" scoped>
.lineup {
  color: var(--color-highlight);
  position: relative;
  z-index: 100;
  &-list {
    list-style: none;
    margin: 0 0 2rem;
    padding: 0;

    li {
      color: var(--color-highlight);
      display: block;

      &:nth-of-type(even) {
        color: var(--color-text);
      }
    }
  }
  a {
    display: block;
    font-size: var(--font-m);
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
.no-break {
  white-space: nowrap;
}
@media (max-width: 600px) {
  .lineup {
    padding-bottom: 3rem;
  }
}
</style>
