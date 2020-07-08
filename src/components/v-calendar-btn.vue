<template>
  <button @click="$emit('click')" class="v-calendar-btn" :disabled="disabled" :class="{'btn-disabled': disabled}">
    <slot>
    </slot>
  </button>
</template>

<script>
export default {
  props:{
    disabled:{}
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
  padding: 5px 12px;
  display: flex;
  align-items: center;
  transition: all 0.2s ease;
  border-radius: 4px;
}
.v-calendar-btn:hover{
  background-color: var(--purpley);
  color: var(--white);
}
.btn-disabled:hover {
  background-color: transparent;
  color: var(--dark);
}
</style>