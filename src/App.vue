<template>
  <TheNavigation/>
  <router-view/>
</template>

<style>

</style>

<script>
import TheNavigation from '@/components/TheNavigation.vue'

export default {
  components: {TheNavigation}
}
</script>