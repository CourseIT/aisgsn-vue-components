<template>
  <div>
    <div class="icon" :style='{color: `${color}`}'>{{icon}}</div>
  </div>
</template>

<script>
export default {
  props: ['icon', 'color', 'desc', 'desc-theme']
}
</script>

<style scoped>
.icon {
  display: block;
  user-select: none;
  cursor: pointer;
}
</style>