<template>
  <Layout>
    <div class="artist">
      <SuperImage
        v-if="$page.artist.mainImage"
        :image="$page.artist.mainImage"
        :width="900"
        class="artist-image"
      />
      <div class="artist-heading">
        <h1 class="artist-name">
          {{ $page.artist.title }}
          <sup class="nationality">({{ $page.artist.nationality }})</sup>
        </h1>
        <div class="artist-time">
          <!--<span>{{ getConcertStartTime($page.artist.concertStart) }}</span>-->
          <span>{{ $page.artist.concertDate }}</span>
        </div>
      </div>
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
import Background from "~/components/Background";
import BlockContent from "~/components/BlockContent";
import SuperImage from "~/components/SuperImage";

export default {
  components: {
    Background,
    BlockContent,
    SuperImage,
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
  metaInfo() {
    return {
      title: this.$page.artist.title,
      meta: [
        {
          name: "og:image",
          key: "og:image",
          content: this.$page.artist.mainImage
            ? this.$page.artist.mainImage.asset.url
            : " ",
        },
      ],
    };
  },
};
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
    concertStart
    concertDate: concertStart(format: "dddd D. MMMM")
    concertStartTime: concertStart(format: "HH:mm")
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
.artist {
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
      color: #bbb;
    }
  }
}
@media (max-width: 800px) {
  .artist {
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
