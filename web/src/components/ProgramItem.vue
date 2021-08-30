<template>
  <article class="artist">
    <div class="artist-image">
      <g-image
        v-if="artist.mainImage"
        class="artist-image"
        :src="$urlForImage(artist.mainImage, $static.metadata.sanityOptions).width(400).auto('format').url()"
        :alt="artist.mainImage.alt"
      />
    </div>
    <div class="artist-text">
      <h3 class="artist-name">{{ artist.title }}</h3>
      <span class="artist-concertstart">{{artist.concertStartTime}}</span>
      <span class="artist-concertstart">{{artist.concertStart}}</span>
    </div>
    <g-link class="artist-link" :to="`/read/${artist.slug.current}`">Link</g-link>
  </article>
</template>

<static-query>
{
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
}
</static-query>

<script>
import BlockContent from '@/components/BlockContent'

export default {
  components: {
    BlockContent
  },
  props: {
    artist: Object
  }
}
</script>

<style lang="scss" scoped>
.artist {
  display: block;
  position: relative;
  
  &-text {
    padding-top: .2rem;
  }
  &-name {
    color: var(--color-text);
  }
  &-lead {
    font-size: 1rem;
  }
  &-image {
    display: block;
    max-width: 100%;
  }
  &-link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 0;
  }
}
</style>