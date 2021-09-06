<template>
  <section class="program-grid">
    <div class="program-day">
      <div class="program-day-text">Friday 14. January</div>
      <div class="program-day-tickets">
        <a href="#">&rarr; &nbsp; Get tickets for Friday</a>
      </div>
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
  align-items: center;
  margin-bottom: 3rem;
}
.program-day {
  grid-column: 1 / span 3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  &-text {
    display: inline-block;
    padding: .2rem .4rem;
    background: var(--color-text);
    color: var(--color-highlight);
  }
  &-tickets {
    display: inline-block;
    padding: .2rem .4rem;
    color: var(--color-text);
    font-style: italic;
  }
}
@media (min-width: 800px) {
  .program-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>