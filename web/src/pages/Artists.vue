<template>
  <Layout page="artists">
    <Program />
    <OtherEvents />
  </Layout>
</template>

<script>
import Background from "@/components/Background";
import Program from "@/components/Program";
import OtherEvents from "@/components/OtherEvents";

export default {
  metaInfo: {
    title: "Artists",
  },
  components: {
    Background,
    Program,
    OtherEvents,
  },
};
</script>
