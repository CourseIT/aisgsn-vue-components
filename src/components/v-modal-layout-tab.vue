<template>
  <div v-if="visible" :class="{'read-only': read_only == true}" class="layout_tab">
    <div class="tab_name" @click="showTab">
      {{name}}
    </div>
    <div v-if="value == name" class="tab_clontent">
      <slot>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {},
    value: {},
    read_only: {},
    visible: {
      default: true
    }
  },
  methods: {
    showTab() {
      this.$emit('input', this.name)
    }
  }
}
</script>

<style scoped>
.layout_tab {
  z-index: 110;
}
.tab_name {
  color: #c5b7ac;
}
.tab_clontent {
  position: absolute;
  left: 30%;
  color: red;
}
</style>