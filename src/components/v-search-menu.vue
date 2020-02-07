<template>
<div :style='{width: `${width}`}'>
  <div class="search">
    <input type="text" v-model="value" :placeholder="placeholder">
    <div v-if="value != ''" class="icon-btn" @click="value = ''">
      <v-icon class="icon" width="15" icon="" />
    </div>
  </div>
</div>
</template>

<script>
const VIcon = () => import('@/components/v-icon') 

export default {
  props: ['width', 'placeholder'],
  components: {
    VIcon
  },
  watch:{
    value(value) {
      this.$emit('input', value)
    }
  },
  data: () => ({
    value: '',
  })
}
</script>

<style scoped>
.search {
  display: flex;
  transition: all 0.3s ease;
  width: 100%;
  margin-bottom: 30px;
}
.search input {
  font-family: Roboto;
  font-size: 0.6875rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: normal;
  text-align: left;
  color: #38393b;
  outline: none;
  height: 26px;
  border-radius: 4px;
  background-color: #fff;
  padding: 0px 10px;
  padding-right: 35px;
  width: 100%;
}
.icon-btn {
  width: 15px;
  height: 26px;
  display: flex;
  position: relative;
  margin-left: -25px;
  align-items: center;
}
.icon-btn:hover .icon {
  color: var(--bright-orange);
}
.icon {
  font-family: var(--font-awesome-5-pro-light);
  font-size: 15px;
  width: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: normal;
  text-align: left;
  color: #000;
}
</style>