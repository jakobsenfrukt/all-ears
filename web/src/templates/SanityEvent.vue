<template>
  <Layout>
    <div class="event">
      <SuperImage
        v-if="$page.event.mainImage"
        :image="$page.event.mainImage"
        :width="900"
        class="event-image"
      />
      <div class="event-heading">
        <span class="event-category">
          <template v-if="$page.event.category === 'smallears'"
            >Small Ears:</template
          >
          <template v-else-if="$page.event.category === 'talks'"
            >Talk:</template
          >
        </span>
        <h1 class="event-name">
          {{ $page.event.title }}
        </h1>
      </div>
      <div class="event-text event-text-en">
        <BlockContent
          class="event-content"
          :blocks="$page.event._rawBodyEn"
          v-if="$page.event._rawBodyEn"
        />
      </div>
      <div class="event-text event-text-no">
        <BlockContent
          class="event-content"
          :blocks="$page.event._rawBodyNo"
          v-if="$page.event._rawBodyNo"
        />
      </div>
    </div>
  </Layout>
</template>

<script>
import Background from "~/components/Background";
import BlockContent from "~/components/BlockContent";
import SuperImage from "~/components/SuperImage";

export default {
  components: {
    Background,
    BlockContent,
    SuperImage,
  },
  metaInfo() {
    return {
      title: this.$page.event.title,
      meta: [
        {
          name: "og:image",
          key: "og:image",
          content: this.$page.event.mainImage
            ? this.$page.event.mainImage.asset.url
            : " ",
        },
      ],
    };
  },
};
</script>

<page-query>
query event ($id: ID!) {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  event: sanityEvent (id: $id) {
    title
    category
    mainImage {
      asset {
        _id
        url
        metadata {
          lqip
          dimensions {
            aspectRatio
          }
        }
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
.event {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 1rem;
  &-image {
    grid-column: 1 / span 4;
    width: 100%;
  }
  &-heading {
    grid-column: 1 / span 6;
    font-size: var(--font-l);
  }
  &-name {
    font-size: var(--font-l);

    .nationality {
      display: inline-block;
      vertical-align: top;
      font-size: 0.5em;
      line-height: 2;
    }
  }
  &-time {
    color: var(--color-highlight);
  }
  &-text {
    grid-column: span 3;

    &-no {
      color: var(--color-darkgray);
    }
  }
}

.event-category {
  font-style: italic;
}

@media (max-width: 800px) {
  .event {
    margin-top: -0.5rem;
    &-image {
      grid-column: 1 / span 6;
    }
    &-text {
      grid-column: 1 / -1;

      &-no {
        color: var(--color-darkgray);
      }
    }
  }
}
</style>
