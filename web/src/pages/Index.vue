<template>
  <IndexLayout class="index-page">
    <h1>All Ears returns in 2023!<br />Stay tuned!</h1>
  </IndexLayout>
</template>

<script>
import IndexLayout from "@/layouts/Index";
import Background from "@/components/Background";
import Headline from "@/components/Headline";
import Logo from "@/components/Logo";
import Lineup from "@/components/Lineup";
import MunchLogo from "@/components/MunchLogo";

export default {
  metaInfo: {
    title: "Home",
    meta: [
      {
        name: "og:image",
        key: "og:image",
        content: "https://all-ears.no/images/og-img.jpg",
      },
    ],
  },
  components: {
    IndexLayout,
    Background,
    Headline,
    Logo,
    Lineup,
    MunchLogo,
  },
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  grid-column: 1 / -1;
}
.index-page {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  padding-bottom: 6rem;
  &-logo {
    position: fixed;
    top: 5vh;
    left: 0;
    color: white;
    height: 90vh;
    z-index: 1;
  }
}
@media (max-width: 800px) {
  .index-page {
    &-logo {
      position: absolute;
      top: 2rem;
      left: 10%;
      height: auto;
      width: 105%;
      color: white;
      z-index: 1;
    }
  }
}
</style>
