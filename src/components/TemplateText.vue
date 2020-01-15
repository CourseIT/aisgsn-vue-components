<template>
  <div class="template-block">
    <div class="w90" @click="selectText">
      <p>{{text}}</p>
    </div>
    <div class="icons-block">
      <Icon icon="" class="icon mb10"/>
      <Icon icon="" class="icon"/>
      <Icon icon="" class="icon"/>
    </div>
  </div>
</template>

<script>
const Icon = () => import('./Icon')

export default {
  components: {
    Icon
  },
  data: () => ({
    text: 'Шаблонный текст 1 …'
  }),
  methods:{
    selectText() {
      this.$emit('selectText', this.text)
    },
  }
}
</script>

<style scoped>
.w90{
  width: 90%;
}
.mb10{
  margin-bottom: 10px;
}
.template-block {
  display: flex;
  justify-content: space-between;
  background: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  width: 100%;
  overflow: auto;  
  margin-bottom: 6px;
  transition: all 0.2s ease-out;
  cursor: pointer;
}
.template-block:hover{
  background: #f5f5f5;
}
.template-block:hover p {
  color: var(--bright-orange);
}
.icon {
  cursor: pointer;
  font-family: var(--font-awesome-5-pro-light);
}
</style>