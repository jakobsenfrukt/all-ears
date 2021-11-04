<template>
  <div class="background" :class="page">
    <img v-if="page === 'index'" src="/images/bg/bg-index.jpg" />
    <img v-else-if="page === 'artists'" src="/images/bg/bg-artists.jpg" />
    <img v-else-if="page === 'tickets'" src="/images/bg/bg-tickets.jpg" />
    <img v-else-if="page === 'info'" src="/images/bg/bg-info.jpg" />
    <img v-else src="/images/bg/bg-5.jpg" />
  </div>
</template>

<script>
export default {
  props: {
    page: String
  }
}
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

  img {
    position: absolute;
    width: 900px;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
  }

  display: none;
}
@media (max-width: 800px) {
  .background {
    display: block;
  }
}
</style>