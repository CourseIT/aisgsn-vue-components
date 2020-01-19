<template>
  <div class="field-block">
    <v-search class="search"/>
    <v-template-text v-for="(text, index) in texts" :key="index" />
  </div>
</template>

<script>
const VTemplateText = () => import('./v-template-text')
const VSearch = () => import('./v-search')

export default {
  components: {
    VTemplateText,
    VSearch
  },
  data: () =>({
    texts:[1,2,3,4,5,6,7,8,9,10,11,12]
  })
}
</script>

<style scoped>
.field-block {
  width: 621.5px;
}
.search {
  margin-top: -51px;
  margin-bottom: 14.5px;
}
</style>