<template>
  <Layout>
    <section class="about">
      <nav class="about-nav">
        <a @click="toAnchor('#practical')">Practical</a>
        <a @click="toAnchor('#about')">About</a>
        <a @click="toAnchor('#contact')">Contact</a>
      </nav>
      <div class="content about-content">
        <section id="practical" class="about-section">
          <block-content :blocks="$page.about._rawBody" />
        </section>
        <section id="about" class="about-section">
          <block-content :blocks="$page.about._rawBody" />
        </section>
        <section id="contact" class="about-section">
          <block-content :blocks="$page.about._rawBody" />
        </section>
      </div>
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
  methods: {
    toAnchor(anchor) {
      document.querySelector(anchor).scrollIntoView({
          behavior: 'smooth'
      })
    }
  },
  metaInfo: {
    title: 'About'
  }
}
</script>

<style lang="scss" scoped>
.about {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  &-content {
    order: 1;
    grid-column: 1 / span 2;
    margin-bottom: 4.5rem;
  }
  &-section {
    &:not(:first-of-type) {
      padding-top: 4.5rem;
    }
  }
  &-nav {
    order: 2;
    grid-column: 3 / span 1;
    width: calc(25%);
    position: fixed;
    right: .75rem;
    padding-left: 1rem;

    a {
      display: block;
      font-size: var(--font-l);
      cursor: pointer;
      &:hover {
        text-decoration: underline;
        text-underline-position: below;
        text-underline-offset: .1rem;
        text-decoration-thickness: var(--border-width);
      }
    }
  }
  &-lead {
    color: var(--color-highlight);
    margin-bottom: 2rem;
  }
}
</style>