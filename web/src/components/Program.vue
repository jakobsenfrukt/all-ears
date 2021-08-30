<template>
  <section class="program-grid">
    <ProgramItem
      v-for="artist in $static.artists.edges"
      :key="artist.id"
      :artist="artist.node"
    />
  </section>
</template>

<static-query>
query {
  artists: allSanityArtist(sortBy: "concertStart", order: ASC) {
    edges {
      node {
        id
        title
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
.program-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  align-items: center;
}
@media (min-width: 800px) {
  .program-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (min-width: 1200px) {
  .program-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (min-width: 1400px) {
  .program-grid {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>