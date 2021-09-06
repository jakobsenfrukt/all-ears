<template>
  <section class="lineup">
    <ul class="lineup-list">
      <li v-for="artist in $static.artists.edges" :key="artist.id">
        <h2>{{ artist.node.title }}  <sup class="nationality">({{ artist.node.nationality }})</sup></h2>
      </li>
    </ul>
  </section>
</template>

<static-query>
query {
  artists: allSanityArtist(sortBy: "concertStart", order: ASC) {
    edges {
      node {
        id
        title
        nationality
        slug {
          current
        }
        concertStart(format: "D. MMMM YYYY")
        concertDate: concertStart(format: "dddd D. MMMM")
        concertStartTime: concertStart(format: "HH:mm")
        mainImage {
          asset {
            _id
            url
          }
          caption
          alt
          hotspot {
            x
            y
            height
            width
          }
          crop {
            top
            bottom
            left
            right
          }
        }
        _rawBodyEn
        _rawBodyNo
      }
    }
  }
}
</static-query>

<script>
import ProgramItem from '@/components/ProgramItem'

export default {
  components: {
    ProgramItem
  }
}
</script>

<style lang="scss" scoped>
.lineup {
  &-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
.nationality {
  display: inline-block;
  vertical-align: top;
  font-size: .5em;
  line-height: 2;
  color: var(--color-darkgray);
}
@media (min-width: 800px) {
  .program-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>