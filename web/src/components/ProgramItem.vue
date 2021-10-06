<template>
  <article class="artist">
    <div class="artist-image">
      <g-image
        v-if="artist.mainImage"
        :src="$urlForImage(artist.mainImage, $static.metadata.sanityOptions).width(400).auto('format').url()"
        :alt="artist.mainImage.alt"
      />
    </div>
    <div class="artist-text">
      <span class="artist-concertstart">{{artist.concertStartTime}}</span>
      <h3 class="artist-name">{{ artist.title }} <sup class="nationality">({{ artist.nationality }})</sup></h3>
    </div>
    <g-link class="artist-link" :to="`/lineup/${artist.slug.current}`">Link</g-link>
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
  grid-column: span 1;
  display: block;
  position: relative;
  
  &-text {
    padding-top: .2rem;
  }
  &-name {
    color: var(--color-text);
    .nationality {
      display: inline-block;
      vertical-align: top;
      font-size: .5em;
      line-height: 2;
      color: var(--color-darkgray);
    }
  }
  &-image {
    display: block;
    max-width: 100%;
    padding-top: 80%;
    background: var(--color-darkgray);
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
  &-concertstart {
    color: var(--color-highlight);
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