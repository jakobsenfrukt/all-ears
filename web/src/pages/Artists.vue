<template>
  <Layout page="artists">
    <Background page="artists" />
    <Program />
  </Layout>
</template>

<script>
import Background from '@/components/Background'
import Program from '@/components/Program'

export default {
  metaInfo: {
    title: 'Artists'
  },
  components: {
    Background,
    Program
  }
}
</script>
