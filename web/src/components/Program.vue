<template>
  <section class="program">
    <div v-for="(artists, day, index) in artistsByDay()" :key="index" class="program-grid">
      <div class="program-day">
        {{ day }}
      </div>
      <ProgramItem
        v-for="artist in artists"
        :key="artist.id"
        :artist="artist.node"
      />
    </div>
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
        concertStart
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
  },
  methods: {
    artistsByDay() {
      const groupBy = function(artists, day) {
        return artists.reduce(function(result, artist) {
          (result[artist.node[day]] = result[artist.node[day]] || []).push(artist);
          return result;
        }, {});
      }
      console.log(groupBy(this.$static.artists.edges, 'concertDate'))
      return groupBy(this.$static.artists.edges, 'concertDate')
    }
  }
}
</script>

<style lang="scss" scoped>
.program-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  align-items: top;
  margin-bottom: 3rem;
  font-size: var(--font-l);
}
.program-day {
  grid-column: 1 / -1;
  color: var(--color-highlight);
}
@media (max-width: 800px) {
  .program-grid {
    grid-template-columns: repeat(2, 1fr);
    column-gap: .5rem;
  }
  .program-day {
    &:after {
      margin-left: .3rem;
    }
  }
}
</style>