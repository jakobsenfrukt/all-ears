<template>
  <article class="event">
    <!--<div class="event-image">
      <SuperImage
        v-if="event.mainImage"
        :image="event.mainImage"
        :width="400"
        :height="300"
      />
    </div>-->
    <div class="event-text">
      <!--<span class="event-concertstart">{{
        getConcertStartTime(event.concertStart)
      }}</span>-->
      <h3 class="event-name">
        {{ event.title }}
      </h3>
    </div>
    <g-link class="event-link" :to="`/events/${event.slug.current}`"
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
    event: Object,
  },
};
</script>

<style lang="scss" scoped>
.event {
  grid-column: span 1;
  display: block;
  position: relative;

  &-text {
    padding-top: 0.2rem;
  }
  &-name {
    font-size: var(--font-l);
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
