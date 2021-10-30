<template>
  <div class="background" :class="page"></div>
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
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  background-image: url('/images/bg/bg-5.jpg');
  background-size: 1900px 1200px;
  background-attachment: fixed;
  &.index {
    background-image: url('/images/bg/bg-index.jpg');
  }
  &.artists {
    background-image: url('/images/bg/bg-artists.jpg');
  }
  &.tickets {
    background-image: url('/images/bg/bg-tickets.jpg');
  }
  &.info {
    background-image: url('/images/bg/bg-info.jpg');
  }
}
</style>