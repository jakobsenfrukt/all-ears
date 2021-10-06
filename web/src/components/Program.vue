<template>
  <section class="program-grid">
    <div class="program-day">
      Friday 14. January
    </div>
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
.program-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  align-items: top;
  margin-bottom: 3rem;
  font-size: var(--font-l);
}
.program-day {
  grid-column: 1 / span 3;
  color: var(--color-highlight);
  display: flex;
  &:after {
    content: "";
    display: block;
    background: var(--color-highlight);
    width: auto;
    flex: 1;
    align-self: center;
    height: 5px;
    margin-left: 1rem;
  }
}
@media (min-width: 800px) {
  .program-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>