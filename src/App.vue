<template>
  <v-app>
    <component :is="layout">
      test1
      <router-view/>
    </component>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
  computed: {
    layout() {
      window.console.log(this.$route.meta.layout, '----')
      return this.$route.meta.layout || 'default-layout'
    }
  }
};
</script>
<style>

@import './colorVariables.css';
@import './styles.css';

</style>
