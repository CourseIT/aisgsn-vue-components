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
  background-color: var(--pre-light);
  padding: 15px;
  overflow-y: auto;
}
.v-layout::-webkit-scrollbar {
  width: 11px;
  height: 8px;
  background-color: rgba(0, 0, 0, 0);
  margin-right: 10px;
}
.v-layout::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color:var(--light-grey);
}
</style>