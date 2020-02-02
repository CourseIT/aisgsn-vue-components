<template>
  <p :class="{'bold': bold}">{{text}}</p>
</template>

<script>
export default {
  props: ['text', 'bold']
}
</script>

<style scoped>
.bold {
  font-weight: bold;
}
p {
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0);
  font-family: Roboto;
  font-size: 11px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  text-align: left;
  color: var(--dark);
  margin-bottom: 4px;
}
</style>