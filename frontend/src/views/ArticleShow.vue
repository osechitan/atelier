<script setup lang="ts">
import Article0 from "@/components/Articles/Article0.vue";
import Article1 from "@/components/Articles/Article1.vue";
import Article2 from "@/components/Articles/Article2.vue";
import Article3 from "@/components/Articles/Article3.vue";

interface Props {
  id: string
}
const props = defineProps<Props>()
let articleComponent = Article0
switch (props.id) {
  case '1':
    articleComponent = Article1;
    break;
  case '2':
    articleComponent = Article2;
    break;
  case '3':
    articleComponent = Article3;
    break;
}
</script>
<template>
  <component :is="articleComponent"></component>
</template>

<style scoped>

</style>