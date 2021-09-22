<template>
  <g-link to="/lineup" class="ticket-badge">
    <span>Get tickets</span>
  </g-link>
</template>

<style lang="scss" scoped>
.ticket-badge {
  display: block;
  width: 8rem;
  height: 8rem;
  transform: rotate(-12deg);
  background: var(--color-black);
  color: var(--color-white);
  text-align: center;
  border-radius: 666px;
  display: flex;
  align-items: center;
  padding: 1rem;
  box-sizing: content-box;
  transition: all .1s ease-in-out;

  span {
    display: block;
    margin-bottom: .5rem;
  }

  &:hover {
    transform: rotate(0);
    text-decoration: none;
  }
}
</style>