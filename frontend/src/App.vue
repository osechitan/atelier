<template>
  <v-app>
    <v-main>
      <NavigationBar/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavigationBar from './components/NavigationBar.vue'

export default defineComponent({
  name: 'App',

  components: {
    NavigationBar,
  },

  data () {
    return {
      //
    }
  },
})
</script>
