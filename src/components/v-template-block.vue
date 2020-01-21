<template>
  <div>
    <div class="search-block" :style='{width: `${width}`}'>
      <v-search class="search" width="403px"/>
    </div>
    <div class="templates-block" :style='{width: `${width}`}' >
      <div>
        <v-template-text :shadow="true" v-for="(text, index) in texts" :key="index" />
      </div>
    </div>
    <div class="icons_text-block">
      <v-icon icon="" class="icon-text"/>
      <v-icon icon="" class="icon-text"/>
    </div>
  </div>
</template>

<script>
const VTemplateText = () => import('./v-template-text')
const VIcon = () => import('./v-icon')
const VSearch = () => import('./v-search')

export default {
  props: ['width'],
  components: {
    VIcon,
    VTemplateText,
    VSearch
  },
  data: () =>({
    texts:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  })
}
</script>

<style scoped>
.search-block {
  z-index: 99;
  position: absolute;
  width: 454px;
  margin-top: -51px;
}
.templates-block {
  position: absolute;
  z-index: 99;
  width: 454px;
  max-width: 454px;
  min-width: 400px;
  overflow: auto;
  max-height: 672px;
  padding-right: 20px;
  padding-left: 20px;
  margin-left: -20px;
}
.templates-block::-webkit-scrollbar {
  width: 11px;
  height: 8px;
  background-color: rgba(0, 0, 0, 0);
}
.templates-block::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: var(--pale-lilac);
}
.templates-block .search {
  margin-bottom: 14.5px;
}
.icons_text-block {
  display: flex;
  position: absolute;
  margin-top: 682px;
  margin-left: 293px;
  z-index: 99;
}
.icon-text {
  cursor: pointer;
  font-family: var(--font-awesome-5-pro-light);
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.81;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
  margin-left: 22px;
}
</style>