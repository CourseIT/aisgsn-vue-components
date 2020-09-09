<template>
  <button v-if="visible" :class="{'read-only': readOnly == true, 'categories-btn': style_type != 'style2', 'categories-btn-style2': style_type == 'style2'}" @click="$emit('input', option)">
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
    style_type: {},
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
.categories-btn .circle-block {
  background-color: var(--pale-lilac);
}
.circle-block {
  position: absolute;
  left: 10px;
  width: 22px;
  height: 22px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.categories-btn .circle-block .circle{
  background-color: var(--bright-orange);
}
.circle {
  width: 10px;
  background-color: var(--bright-orange);
  height: 10px;
  border-radius: 50%;
}
</style>