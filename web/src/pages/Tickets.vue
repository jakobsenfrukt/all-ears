<template>
  <Layout page="tickets">
    <section class="tickets-content">
      <block-content :blocks="$page.tickets._rawBody" />
    </section>
    <section class="ticket-options">
      <div class="ticket-option" v-if="$page.tickets.festivalpass.url">
        <svg
          class="link-icon"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M482.441 232.441L434.065 280.817L284.207 130.961L284.207 500L215.793 500L215.793 130.959L65.9348 280.817L17.5587 232.441L201.624 48.3765L201.624 48.376L250 -0.000101713L482.441 232.441Z"
            fill="currentColor"
          />
        </svg>
        <a
          :href="$page.tickets.festivalpass.url"
          target="_blank"
          class="ticket-link"
          >{{ $page.tickets.festivalpass.text }}</a
        >
        <p class="prices">{{ $page.tickets.festivalpass.price }}</p>
      </div>
      <div v-if="$page.tickets.daypasses.some((i) => i.url !== null)">
        <h2>Day pass</h2>
        <ul class="ticket-option-list">
          <li
            v-for="(item, index) in $page.tickets.daypasses"
            :key="index"
            class="ticket-option"
          >
            <template v-if="item.url">
              <svg
                class="link-icon"
                viewBox="0 0 500 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M482.441 232.441L434.065 280.817L284.207 130.961L284.207 500L215.793 500L215.793 130.959L65.9348 280.817L17.5587 232.441L201.624 48.3765L201.624 48.376L250 -0.000101713L482.441 232.441Z"
                  fill="currentColor"
                />
              </svg>
              <a :href="item.url" target="_blank" class="ticket-link">{{
                item.text
              }}</a>
              <p class="prices">{{ item.price }}</p>
            </template>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query {
  tickets: sanityTickets (id: "tickets") {
    title
    _rawBody
    festivalpass {
      text
      url
      price
    }
    daypasses {
      text
      url
      price
    }
  }
}
</page-query>

<script>
import Background from "@/components/Background";
import BlockContent from "@/components/BlockContent";

export default {
  components: {
    Background,
    BlockContent,
  },
  metaInfo: {
    title: "Tickets",
  },
};
</script>

<style lang="scss" scoped>
.tickets-content {
  margin-right: calc((100% / 3) + 1rem);
  margin-bottom: 1.5rem;
}
.tickets h2 {
  font-size: 1rem;
  margin: 2rem 0 1rem;
}
.ticket-link {
  font-size: var(--font-l);
}
.ticket-option {
  position: relative;
  padding-left: 1.5rem;
}
.ticket-option-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.link-icon {
  display: inline-block;
  position: absolute;
  left: 0;
  top: 0.25rem;
  width: 1rem;
  height: 1rem;
  margin: 0 0.5rem 0.3rem 0;
  vertical-align: middle;
  transform: rotate(90deg);
}
@media (max-width: 800px) {
  .tickets {
    &-content {
      margin-right: 0;
    }
  }
}
</style>
