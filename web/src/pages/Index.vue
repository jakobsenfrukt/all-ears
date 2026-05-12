<template>
  <IndexLayout class="index-page">
    <section class="info-section">
      <block-content :blocks="$page.about._rawLead" class="about-lead" />
    </section>
    <!--<Lineup />-->
    <KHLogo />
  </IndexLayout>
</template>

<page-query>
query {
  frontpage: sanityFrontpage (id: "frontpage") {
    ogimg {
      asset {
        _id
        url
      }
    }
  }
  about: sanityAbout (id: "about") {
    _rawLead
  }
}
</page-query>

<script>
import IndexLayout from "@/layouts/Index";
import Background from "@/components/Background";
import Headline from "@/components/Headline";
import Logo from "@/components/Logo";
import Lineup from "@/components/Lineup";
import KHLogo from "@/components/KHLogo";
import BlockContent from "@/components/BlockContent";

export default {
  metaInfo() {
    return {
      title: "Home",
      meta: [
        {
          name: "og:image",
          key: "og:image",
          content: this.$page.frontpage.ogimg.asset.url,
        },
      ],
    };
  },
  components: {
    IndexLayout,
    Background,
    Headline,
    Logo,
    Lineup,
    KHLogo,
    BlockContent
  },
};
</script>

<style lang="scss" scoped>
.index-page {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  &-logo {
    position: fixed;
    top: 5vh;
    left: 0;
    color: white;
    height: 90vh;
    z-index: 1;
  }
}
.info-section {
  width: 66%;
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
  .info-section {
    width: 100%;
  }
}
</style>
