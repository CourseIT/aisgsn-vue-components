<template>
  <div v-if="visible" class="tool-icons" :class="{'read-only': read_only == true, 'df': row}" :style='{"top": top, "left": left, "right": right, "bottom": bottom}'>
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
    row: {},
    read_only: {},
    visible: {
      default: true
    }
  }
}
</script>

<style scoped>
.tool-icons {
  position: fixed;
  z-index: 99;
}
.tool-icons div {
  margin: 5px;
  display: inline-block;
}
</style>