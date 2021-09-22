<template>
  <IndexLayout class="index">
    <g-link to="/lineup"><Logo class="index-logo" /></g-link>
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
  &-logo {
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    height: 100vh;
    z-index: 1;
  }
  &-lineup {
    text-align: right;
    font-size: 2rem;
    position: relative;
    z-index: 2;
  }
  &-tickets {
    text-align: right;
    position: absolute;
    right: -.5rem;
    bottom: -.5rem;
    margin: 0;
    z-index: 2;
  }
}
</style>
