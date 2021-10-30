<template>
  <section class="lineup">
    <ul class="lineup-list">
      <li v-for="artist in $static.frontpage.lineup" :key="artist.id">
        <g-link to="/artists">{{ artist.title }}  <sup class="nationality">({{ artist.nationality }})</sup></g-link>
      </li>
      <!--<li><g-link to="/artists">View all</g-link></li>-->
    </ul>
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

<style lang="scss" scoped>
.lineup {
  margin: 0;
  color: var(--color-highlight);
  text-align: right;
  position: relative;
  z-index: 100;
  &-list {
    list-style: none;
    margin: 0;
    padding: 0;
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
  font-size: .5em;
  line-height: 2;
}
</style>