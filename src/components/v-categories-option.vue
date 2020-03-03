<template>
  <button v-if="visible" :class="{'read-only': readOnly == true}" @click="$emit('input', option)" class="categories-btn">
    <div class="circle-block">
      <div v-if="value == option || list.includes(option)" class="circle"></div>
    </div>
    <div @click="action" class="df aic w100 hover-btn jcc">
      {{option}}
    </div>
  </button>
</template>

<script>
export default {
  props : {
    value: {
      default: ''
    },
    list: {
      default: []
    },
    option: {},
    read_only: {},
    visible: {
      default: true
    },
    action: {
      default: function() {
        return () => ({})
      }
    }
  },
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
  }
}
</script>

<style scoped>
.categories-btn {
  width: 100%;
  height: 36px;
  background-color: var(--white);
  display: flex;
  margin-bottom: 6px;
  text-align: center;
  align-items: center;
  font-family: Roboto;
  outline: none;
  border-radius: 4px;
  font-size: 0.6875rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: normal;
  color: var(--dark);
  cursor: pointer;
  z-index: 9;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.22);
}
.categories-btn:hover {
  color: var(--bright-orange);
}
.circle-block {
  position: absolute;
  left: 10px;
  width: 22px;
  height: 22px;
  border-radius: 4px;
  background-color: var(--pale-lilac);
  display: flex;
  align-items: center;
  justify-content: center;
}
.circle {
  width: 10px;
  height: 10px;
  background-color: var(--bright-orange);
  border-radius: 50%;
}
</style>