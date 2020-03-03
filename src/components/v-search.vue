<template>
  <div v-if="visible" :class="{'read-only': readOnly == true}" :style='{width: `${width}`}'>
    <div class="search">
      <input type="text" v-model="value" :placeholder="placeholder">
      <div class="icon__prompt-block">
        <div class="arrow"></div>
        <div class="icon__prompt">
          <span>Фильтрация по тексту</span>
        </div>
      </div>
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
}
.search input {
  font-family: Roboto;
  font-size: 0.9375rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
  outline: none;
  height: 36px;
  border-radius: 4px;
  background-color: var(--white);
  padding: 0px 10px;
  padding-right: 35px;
  width: 100%;
}
.search:hover .icon__prompt-block {
  display: block;
}
.icon-btn {
  width: 15px;
  height: 36px;
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
.icon__prompt-block {
  display: none;
  width: 400px;
  position: absolute; 
  margin-left: 0px;
  margin-top: -35px;
}
.icon__prompt {
  position: absolute;
  z-index: 9;
  padding: 6px 12px;
  border-radius: 4px;
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
  background-color: var(--white);
  font-family: Roboto;
  font-size: 11px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: center;
  color: var(--dark);
}
.arrow {
  position: absolute;
  top: 23px;
  margin-left: 55px;
  display: inline-block;
  color: var(--white);
  z-index: 99;
  border: 8px solid transparent;	
  border-bottom: 8px solid var(--white);
  transform: rotate(180deg);
}
</style>