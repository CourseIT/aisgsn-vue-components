<template>
  <div v-if="visible" class="tool-icons" :class="{'read-only': readOnly == true, 'df': row}" :style='{"top": top, "left": left, "right": right, "bottom": bottom}'>
      <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    top: {},
    left: {},
    right: {},
    bottom: {},
    row: {
      default: true
    },
    read_only: {},
    visible: {
      default: true
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
  },
}
</script>

<style scoped>
.dg {
  display: grid;
}
.tool-icons {
  position: fixed;
  z-index: 99;
}
.tool-icons div {
  margin: 5px;
  transition: all 0.3s ease;
}
</style>