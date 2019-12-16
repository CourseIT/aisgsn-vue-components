<template>
  <div>
    <span class="icon" :style='{color: `${color}`}'>{{icon}}</span>
  </div>
</template>

<script>
export default {
  props: ['icon', 'color']
}
</script>

<style scoped>
</style>