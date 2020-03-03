<template>
  <div v-if="visible" :class="{'read-only': readOnly == true}" :style='{width: `${width}`}'>
    <div class="search">
      <input type="text" v-model="value" :placeholder="placeholder">
      <div v-if="value != ''" class="icon-btn" @click="value = ''">
        <v-icon class="icon" width="15" icon="" />
      </div>
    </div>
  </div>
</template>

<script>
const VIcon = () => import('./v-icon') 

export default {
  props: {
    placeholder: {},
    width: {},
    read_only: {},
    visible: {
      default: true
    }
  },
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
  }),
  computed: {
    readOnly() {
      if(typeof (this.read_only) == 'function') {
        return this.read_only()
      } else if (this.read_only) {
        return this.read_only
      } else {
        return false
      }
    }
  },
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
  color: var(--dark2);
  outline: none;
  height: 26px;
  border-radius: 4px;
  background-color: var(--white);
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