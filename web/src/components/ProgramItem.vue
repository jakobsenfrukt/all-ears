<template>
  <article class="artist">
    <div class="artist-image">
      <SuperImage
        v-if="artist.mainImage"
        :image="artist.mainImage"
        :width="400"
        :height="300"
      />
    </div>
    <div class="artist-text">
      <!--<span class="artist-concertstart">{{
        getConcertStartTime(artist.concertStart)
      }}</span>-->
      <h3 class="artist-name">
        {{ artist.title }}
        <sup class="nationality">({{ artist.nationality }})</sup>
      </h3>
    </div>
    <g-link class="artist-link" :to="`/artists/${artist.slug.current}`"
      >Link</g-link
    >
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
import BlockContent from "@/components/BlockContent";
import SuperImage from "@/components/SuperImage";

export default {
  components: {
    BlockContent,
    SuperImage,
  },
  props: {
    artist: Object,
  },
  methods: {
    getConcertStartTime(concertStart) {
      var date = new Date(concertStart);
      var minute = date.getUTCMinutes();
      var hour = date.getUTCHours() + 1;
      if (minute > 0) {
        return hour + ":" + minute;
      } else {
        return hour + ":00";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.artist {
  grid-column: span 1;
  display: block;
  position: relative;

  &-text {
    padding-top: 0.2rem;
  }
  &-name {
    font-size: var(--font-m);
    color: var(--color-text);
    .nationality {
      display: inline-block;
      vertical-align: top;
      font-size: 0.5em;
      line-height: 2;
    }
  }
  &-image {
    display: block;
    max-width: 100%;
    padding-top: 80%;
    background: var(--color-darkgray);
    position: relative;

    figure {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding-top: 0 !important;
    }
  }
  &-concertstart {
    color: var(--color-highlight);
    font-size: var(--font-m);
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
