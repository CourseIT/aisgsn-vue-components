<template>
  <div class="v-layout" :style="{'width': width, 'height': height}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    width: {},
    height: {}
  }
}
</script>

<style>
.v-layout {
  width: 670px;
  border-radius: 4px;
  border: dashed 1px var(--dark2);
  background-color: #f5f4ed;
  padding: 15px;
  overflow-y: auto;
}
.v-layout::-webkit-scrollbar {
  width: 11px;
  height: 8px;
  background-color: rgba(0, 0, 0, 0);
}
.v-layout::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color:#e7e5dc;
}
</style>