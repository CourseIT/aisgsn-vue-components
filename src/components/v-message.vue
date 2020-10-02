<template>
  <div class="message" :class="{'read-only': readOnly == true}">
    <div class="message__line" :style="`background: ${color}`"></div>
    <div class="message__text">
      <slot>
        {{text}}
      </slot>
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    read_only: {},
    text: {},
    status: {}
  },
  computed: {
    color() {
      switch (this.status) {
        case 'error':
          return '#ff3b30'
        case 'warning':
          return '#ffcc00'
        case 'success':
          return '#4cd964'
        case 'info':
          return '#007aff'
        default:
          return '#7893b1'
      }
    },
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

<style scoped>
.message {
  display: inline-flex;
  border-radius: 4px;
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
  background-color: var(--white);
}
.message__line {
  width: 6px;
  margin-right: 20px;
  border-radius: 4px 0px 0px 4px;
}
.message__text {
  font-family: Roboto;
  font-size: 0.95rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  margin-bottom: 0px;
  padding: 20px 0px;
  margin-right: 20px;
}
.message__text p {
  margin-bottom: 0 !important;
}
.message__text h1 {
  margin-bottom: 0 !important;
}
.message__text h2 {
  margin-bottom: 0 !important;
}
</style>