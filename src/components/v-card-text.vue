<template>
  <p v-if="visible" :class="{'read-only': readOnly == true, 'bold': bold}">{{text}}</p>
</template>

<script>
export default {
  props: {
    text: {},
    bold: {},
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
  }
}
</script>

<style scoped>
.bold {
  font-weight: bold;
}
p {
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0);
  font-family: Roboto;
  font-size: 0.6875rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  text-align: left;
  color: var(--dark);
  margin-bottom: 2px;
}
</style>