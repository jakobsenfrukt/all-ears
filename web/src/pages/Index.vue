<template>
  <Layout>
    <Logo />
    <Lineup />
  </Layout>
</template>

<script>
import Logo from '@/components/Logo'
import Lineup from '@/components/Lineup'

export default {
  metaInfo: {
    title: 'All Ears'
  },
  components: {
    Logo,
    Lineup
  }
}
</script>
