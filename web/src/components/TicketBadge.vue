<template>
  <g-link to="/tickets" class="ticket-badge">
    <span>Get tickets</span>
  </g-link>
</template>

<style lang="scss" scoped>
.ticket-badge {
  display: block;
  width: 5rem;
  height: 5rem;
  transform: rotate(-12deg);
  background: var(--color-black);
  color: var(--color-white);
  text-align: center;
  border-radius: 666px;
  display: flex;
  align-items: center;
  padding: .5rem;
  box-sizing: content-box;
  transition: all .1s linear;

  span {
    display: block;
    margin-bottom: .5rem;
    text-align: center;
  }

  &:hover {
    transform: rotate(0);
    text-decoration: none;
  }
}
</style>