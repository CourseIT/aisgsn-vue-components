<template>
  <div>
    <div class="templates-block">
      <div>
        <TemplateText v-for="(text, index) in texts" :key="index" />
      </div>
    </div>
    <div class="icons_text-block">
      <Icon icon="" class="icon-text"/>
      <Icon icon="" class="icon-text"/>
    </div>
  </div>
</template>

<script>
const TemplateText = () => import('./TemplateText')
const Icon = () => import('./Icon')

export default {
  components: {
    Icon,
    TemplateText
  },
  data: () =>({
    texts:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  })
}
</script>

<style scoped>
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
  padding-bottom: 10px;
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
.icons_text-block {
  display: flex;
  position: absolute;
  margin-top: 672px;
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