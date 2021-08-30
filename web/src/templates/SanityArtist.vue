<template>
  <Layout>
    <div class="artist">
      <img
        v-if="$page.artist.mainImage"
        :src="$urlForImage($page.artist.mainImage, $page.metadata.sanityOptions).width(1200).auto('format').url()"
        :alt="$page.artist.mainImage.alt"
        class="artist-image"
      />
      <h1 class="artist-name">{{ $page.artist.title }} <sup class="nationality">({{ $page.artist.nationality }})</sup></h1>
      <div class="artist-text artist-text-en">
        <BlockContent
          class="artist-content"
          :blocks="$page.artist._rawBodyEn"
          v-if="$page.artist._rawBodyEn"
        />
      </div>
      <div class="artist-text artist-text-no">
        <BlockContent
          class="artist-content"
          :blocks="$page.artist._rawBodyNo"
          v-if="$page.artist._rawBodyNo"
        />
      </div>
    </div>
  </Layout>
</template>

<script>
import BlockContent from '~/components/BlockContent'

export default {
  components: {
    BlockContent
  },
  metaInfo() {
    return {
      title: this.$page.artist.title,
      meta: [
        {
          name: 'og:image',
          key: 'og:image',
          content: this.$page.artist.mainImage.asset.url
        }
      ]
    }
  }
}
</script>

<page-query>
query artist ($id: ID!) {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  artist: sanityArtist (id: $id) {
    title
    nationality
    concertStart(format: "D. MMMM YYYY")
    concertDate: concertStart(format: "dddd D. MMMM")
    concertStartTime: concertStart(format: "HH:mm")
    venue {
      title
    }
    mainImage {
      asset {
        _id
        url
      }
      alt
    }
    slug {
      current
    }
    _rawBodyEn
    _rawBodyNo
  }
}
</page-query>

<style lang="scss" scoped>
.artist {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 1rem;
  &-image {
    grid-column: 1 / span 4;
    width: 100%;
  }
  &-name {
    grid-column: 1 / span 6;
    font-size: 2rem;

    .nationality {
      display: inline-block;
      vertical-align: top;
      font-size: .5em;
      line-height: 2;
      color: var(--color-darkgray);
    }
  }
  &-text {
    grid-column: span 3;

    &-no {
      color: var(--color-darkgray);
    }
  }
}
</style>