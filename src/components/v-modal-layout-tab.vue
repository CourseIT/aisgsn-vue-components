<template>
  <div v-if="visible" :class="{'read-only': readOnly == true}" class="layout_tab">
    <div class="tab_name" :class="{'active': value == name}" @click="showTab">
      {{name}}
    </div>
    <div v-if="value == name" class="tab_content">
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
  color: var(--gray);
  margin-left: 15%;
  width: 14%;
  transition: all 0.2s ease;
  cursor: pointer;
}
.tab_name:hover {
  color: var(--light-grey);
}
.tab_name:active {
  color: var(--gray-orange);
}
.tab_content {
  position: fixed;
  border-radius: 4px;
  height: 80vh;
  left: 30%;
  width: 40%;
  z-index: 220;
  top: 10vh;
}
.tab_content .v-layout {
  max-height: 80vh;
}
.tab_content::-webkit-scrollbar {
  width: 0px;
  background: rgba(255, 255, 255, 0.0);
}
.active {
  color: var(--gray-orange);
}
.icons {
  position: absolute;
  right: 28%;
  top: 13vh;
}
</style>