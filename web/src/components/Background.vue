<template>
  <div class="background" :class="page">
    <img
      v-if="page === 'index'"
      src="/images/2024/Webside-bakgrunn-forside.png"
    />
    <img v-else src="/images/2024/Webside-bakgrunn-undersider.png" />
    <!--<img v-if="page === 'index'" src="/images/bg/bg-index.jpg" />
    <img v-else-if="page === 'artists'" src="/images/bg/bg-artists.jpg" />
    <img v-else-if="page === 'tickets'" src="/images/bg/bg-tickets.jpg" />
    <img v-else-if="page === 'info'" src="/images/bg/bg-info.jpg" />
    <img v-else src="/images/bg/bg-5.jpg" />-->
  </div>
</template>

<script>
export default {
  props: {
    page: String,
  },
};
</script>

<style lang="scss" scoped>
.background {
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: var(--color-red);

  &.index {
    background-color: var(--color-blue);
  }

  img {
    position: absolute;
    width: 100%;
    height: 105%;
    object-fit: cover;
    top: 0;
    left: 0;
    object-position: 20% 0;
  }
}
@media (max-width: 800px) {
  .background {
    display: block;
    img {
      object-position: 30% 0;
    }
  }
}
</style>
