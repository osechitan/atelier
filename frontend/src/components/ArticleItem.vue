<script setup lang="ts">
import { RouterLink } from "vue-router";
interface Props {
  article: string
  index: number
}
const props = defineProps<Props>()
</script>

<template>
  <RouterLink :to="{name: 'Article', params: {id: props.index}}">{{ props.article }}</RouterLink>
</template>

<style scoped>

</style>