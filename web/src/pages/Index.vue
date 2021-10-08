<template>
  <IndexLayout class="index">
    <Logo noise class="index-logo" />
    <Lineup class="index-lineup" />
    <TicketBadge class="index-tickets" />
  </IndexLayout>
</template>

<script>
import IndexLayout from '@/layouts/Index'
import Headline from '@/components/Headline'
import Logo from '@/components/Logo'
import Lineup from '@/components/Lineup'
import TicketBadge from '@/components/TicketBadge'

export default {
  metaInfo: {
    title: 'All Ears'
  },
  components: {
    IndexLayout,
    Headline,
    Logo,
    Lineup,
    TicketBadge
  }
}
</script>

<style lang="scss" scoped>
.index {
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
  &-lineup {
    font-size: 2rem;
    position: relative;
    z-index: 2;
    text-align: right;
  }
  &-tickets {
    text-align: right;
    position: fixed;
    right: -.5rem;
    bottom: -.5rem;
    margin: 0;
    z-index: 2;
  }
}
@media (max-width: 600px) {
  .index {
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
