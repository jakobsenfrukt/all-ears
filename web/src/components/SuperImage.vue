<template>
  <figure
    :style="{
      'background-image': `url(${image.asset.metadata.lqip})`,
      'padding-top': `calc(100% / ${
        image.asset.metadata.dimensions.aspectRatio
      })`,
    }"
  >
    <img
      v-if="height"
      :src="
        $urlForImage(image, $static.metadata.sanityOptions)
          .width(width)
          .height(height)
          .auto('format')
          .url()
      "
      :alt="image.alt"
      loading="lazy"
    />
    <img
      v-else
      :src="
        $urlForImage(image, $static.metadata.sanityOptions)
          .width(width)
          .auto('format')
          .url()
      "
      :alt="image.alt"
      loading="lazy"
    />
  </figure>
</template>

<static-query>
query {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
}
</static-query>

<script>
export default {
  props: {
    image: Object,
    width: Number,
    height: Number,
  },
};
</script>

<style lang="scss" scoped>
figure {
  position: relative;
  background-size: 100%;
  margin: 0;

  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
