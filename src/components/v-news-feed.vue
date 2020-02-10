<template>
  <div class="news_feed">
    <h1 class="title">{{title}}</h1>
    <div class="news_list" :style='{"width": `${news_width}`, "height": `${news_height}`}'>
      <slot></slot>
    </div>
  </div>
</template>

<script>


export default {
  props: {
    title: {
      default: 'Новостная лента города Липецка и Липецкой области'
    },
    news_width: {},
    news_height: {}
  },
  data: () => ({
    search: '',
    
  }),
}
</script>

<style scoped>
.news_list {
  width: 860px;
  height: 840px;
  padding-right: 20px;
  overflow-y: scroll;
}
.news_list::-webkit-scrollbar {
  width: 11px;
  height: 8px;
  background-color: rgba(0, 0, 0, 0);
}
.news_list::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: var(--brown-light);
}
.title {
  width: 453px;
  font-family: Roboto;
  font-size: 24px !important;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.13;
  letter-spacing: normal;
  text-align: left;
  color: var(--brown-dark);
  margin-bottom: 37px;
}
</style>