<template>
  <section class="events">
    <div v-if="!hideHeading" class="events-heading">
      Other events
    </div>
    <div
      v-for="(events, category, index) in eventsByCategory()"
      :key="index"
      class="events-grid"
    >
      <div class="event-category">
        <template v-if="category === 'smallears'"
          >Small Ears:</template
        >
        <template v-else-if="category === 'talks'"
          >Talks:</template
        >
      </div>
      <EventItem v-for="event in events" :key="event.id" :event="event.node" />
    </div>
  </section>
</template>

<static-query>
query {
  events: allSanityEvent(sortBy: "startTime", order: ASC) {
    edges {
      node {
        id
        title
        slug {
          current
        }
        category
        mainImage {
          asset {
            _id
            url
            metadata {
              lqip
              dimensions {
                aspectRatio
              }
            }
          }
          caption
          alt
          hotspot {
            x
            y
            height
            width
          }
          crop {
            top
            bottom
            left
            right
          }
        }
        _rawBodyEn
        _rawBodyNo
      }
    }
  }
}
</static-query>

<script>
import EventItem from "@/components/EventItem";

export default {
  components: {
    EventItem,
  },
  props: {
    hideHeading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    eventsByCategory() {
      const groupBy = function(events, category) {
        return events.reduce(function(result, event) {
          (result[event.node[category]] =
            result[event.node[category]] || []).push(event);
          return result;
        }, {});
      };
      return groupBy(this.$static.events.edges, "category");
    },
  },
};
</script>

<style lang="scss" scoped>
.events-grid {
  align-items: top;
  margin-bottom: 1rem;
  font-size: var(--font-l);
}
.events-heading {
  font-size: var(--font-l);
  margin-bottom: 1rem;
}
.event-category {
  font-style: italic;
}
@media (max-width: 800px) {
  .events-grid {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 0.5rem;
  }
  .event-day {
    &:after {
      margin-left: 0.3rem;
    }
  }
}
</style>
