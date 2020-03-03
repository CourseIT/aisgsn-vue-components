<template>
  <div v-if="visible" :class="{'read-only': readOnly == true, 'border-dashed': border}" class="v-layout" :style="{'width': width, 'height': height}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    width: {},
    height: {},
    border: {},
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

<style>
.border-dashed {
  border: dashed 1px var(--dark2);
}
.v-layout {
  width: 670px;
  border-radius: 4px;
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