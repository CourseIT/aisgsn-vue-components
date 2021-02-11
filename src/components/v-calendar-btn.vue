<template>
  <button @click="$emit('click')" class="v-calendar-btn" :disabled="disabled" :class="[{'btn-disabled': disabled, 'read-only': readOnly == true}, dynamic_class]">
    <slot>
    </slot>
  </button>
</template>

<script>
export default {
  props:{
    read_only: {},
    disabled:{},
    dynamic_class: {}
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
.v-calendar-btn{
  outline: none;
  border: none;
  font-family: Roboto;
  font-size: 0.938rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: var(--dark);
  text-transform: uppercase;
  padding: 5px 0px;
  display: flex;
  align-items: center;
  transition: all 0.2s ease;
  border-radius: 4px;
}
.v-calendar-btn:hover{
  color: var(--bright-orange);
}
.btn-disabled:hover {
  background-color: transparent;
  color: var(--dark);
}
</style>