<template>
  <div v-if="visible" :class="{'read-only': read_only == true}" class="dropdown__block arrow-icon">
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
    }
  },
  components: {
    VUserSignature
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
  bottom: 5px;
  border: 10px solid transparent;
  border-bottom: 10px solid var(--white);
}
</style>