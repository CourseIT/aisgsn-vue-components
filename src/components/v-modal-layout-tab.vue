<template>
  <div v-if="visible" :class="{'read-only': read_only == true}" class="layout_tab">
    <div class="tab_name" :class="{'active': value == name}" @click="showTab">
      {{name}}
    </div>
    <div v-if="value == name" class="tab_clontent">
      <slot>
      </slot>
    </div>
    <div v-if="value == name" class="icons">
      <slot name="icons">
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
  z-index: 120;
}
.tab_name {
  color: #c5b7ac;
  margin-left: 15%;
  width: 14%;
  transition: all 0.2s ease;
  cursor: pointer;
}
.tab_name:hover {
  color: var(--light-grey);
}
.tab_clontent {
  position: fixed;
  left: 30%;
  width: 40%;
  z-index: 220;
  top: 10vh;
}
.active {
  color: #c58b4a;
}
.icons {
  position: absolute;
  right: 28%;
  top: 13vh;
}
</style>