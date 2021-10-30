<template>
  <IndexLayout class="index-page">
    <Background page="index" />
    <Logo noise class="index-page-logo" />
    <Lineup />
    <MunchLogo />
  </IndexLayout>
</template>

<script>
import IndexLayout from '@/layouts/Index'
import Background from '@/components/Background'
import Headline from '@/components/Headline'
import Logo from '@/components/Logo'
import Lineup from '@/components/Lineup'
import MunchLogo from '@/components/MunchLogo'

export default {
  metaInfo: {
    title: 'Home',
    meta: [
        {
          name: 'og:image',
          key: 'og:image',
          content: 'https://all-ears.no/images/og-img.jpg'
        }
      ]
  },
  components: {
    IndexLayout,
    Background,
    Headline,
    Logo,
    Lineup,
    MunchLogo
  }
}
</script>

<style lang="scss" scoped>
.index-page {
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
@media (max-width: 600px) {
  .index-page {
    &-logo {
      position: fixed;
      top: 5vh;
      left: 12vw;
      color: white;
      width: 80vw;
      height: auto;
      z-index: 1;
    }
    &-lineup {
      text-align: left;
      max-width: 90%;
      margin: 26vh 0 0;
    }
  }
}
</style>
