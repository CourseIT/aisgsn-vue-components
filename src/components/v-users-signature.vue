<template>
  <div v-if="visible" :class="[{'read-only': readOnly == true}, dynamic_class]" class="dropdown__block arrow-icon">
    <slot>
      <v-user-signature title="Утверждено" name="Сотрудник А. А." />
      <v-user-signature title="Согласовано" name="Сотрудник А. А." />
      <v-user-signature title="Согласовано" name="Сотрудник А. А." />
      <v-user-signature title="Согласовано" name="Сотрудник А. А." />
      <v-user-signature title="Согласовано" name="Сотрудник А. А." />
    </slot>
  </div>
</template>

<script>
const VUserSignature = () => import('./v-user-signature')

export default {
  props: {
    read_only: {},
    visible: {
      default: true
    },
    dynamic_class: {}
  },
  components: {
    VUserSignature
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
.dropdown__block {
  padding: 0px 0px;
}
.arrow-icon::before {
  content: ''; 
  position: relative;
  left: 9px; 
  bottom: 3px;
  border: 6px solid transparent;
  border-bottom: 6px solid var(--white);
}
</style>