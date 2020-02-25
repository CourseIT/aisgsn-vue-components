<template>
  <div class="tool-icons" :class="{'df': row}" :style='{"top": top, "left": left, "right": right, "bottom": bottom}'>
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
    row: {}
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
}
</style>