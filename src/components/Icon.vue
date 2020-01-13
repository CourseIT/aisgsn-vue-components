<template>
  <div>
    <div class="icon" :style='{color: `${color}`}'>{{icon}}</div>
  </div>
</template>

<script>
export default {
  props: ['icon', 'color', 'desc', 'desc-color']
}
</script>

<style scoped>
.icon {
  user-select: none;
  cursor: pointer;
}
</style>