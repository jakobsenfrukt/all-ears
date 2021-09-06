<template>
  <AltLayout>
    <LogoAlt />
    <ProgramAlt />
    <ProgramAlt />
    <ProgramAlt />
  </AltLayout>
</template>

<script>
import AltLayout from '~/layouts/Alt.vue'
import LogoAlt from '@/components/LogoAlt'
import ProgramAlt from '@/components/ProgramAlt'

export default {
  metaInfo: {
    title: 'All Ears'
  },
  components: {
    LogoAlt,
    ProgramAlt,
    AltLayout
  }
}
</script>
