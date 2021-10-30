<template>
  <Layout page="tickets">
    <Background page="tickets" />
    <section class="about">
      <h1>(ticket links go here)</h1>
    </section>
  </Layout>
</template>

<script>
import Background from '@/components/Background'

export default {
  components: {
    Background
  },
  metaInfo: {
    title: 'Tickets'
  }
}
</script>

<style lang="scss" scoped>
.about {
  margin-right: calc((100%/3) + 1rem);
}
</style>