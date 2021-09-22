<template>
  <Layout>
    <section class="about">
      <header class="about-header">
        <div class="about-lead"><block-content :blocks="$page.about._rawLead" /></div>
      </header>
      <div class="content about-content"><block-content :blocks="$page.about._rawBody" /></div>
    </section>
  </Layout>
</template>

<page-query>
query {
  about: sanityAbout (id: "about") {
    title
    _rawLead
    _rawBody
  }
}
</page-query>

<script>
import BlockContent from '@/components/BlockContent'

export default {
  components: {
    BlockContent
  },
  metaInfo: {
    title: 'About'
  }
}
</script>

<style lang="scss" scoped>
.about {
  margin-right: calc((100%/3) + 1rem);

  &-lead {
    color: var(--color-green);
    margin-bottom: 2rem;
  }
}
</style>