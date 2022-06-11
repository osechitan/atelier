<script setup lang="ts">
import ArticleItem from "@/components/ArticleItem.vue";
const articles = ['test0', 'test1', 'test2', 'test3']
</script>
<template>
  <div v-for="(article, index) in articles" :key="index">
    <ArticleItem :article="article" :index="index" />
  </div>
</template>

<style scoped>

</style>