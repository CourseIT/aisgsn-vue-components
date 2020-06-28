<template>
  <button class="calendar__month-btn" :class="{'no-active': !active}" :style='{width: `${width}`}'>
    <slot>Test</slot>
  </button>
</template>

<script>
export default {
  props: {
    width: {},
    active: {},
    text: {}
  },
}
</script>

<style scoped>
.calendar__month-btn {
  width: 100%;
  height: 44px;
  border-radius: 4px;
  background-color: var(--purpley);
  text-align: center;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: var(--white);
  text-transform: uppercase;
  outline: none;
  transition: all 0.1s ease;
}
.calendar__month-btn:hover {
  background-color: #a86eff;
}
.calendar__month-btn:active {
  background-color: #7038c5;
}
.calendar__month-btn p {
  margin-bottom: 0;
}
.no-active {
  background-color: var(--pale-lilac);
  color: var(--dark);
}
.no-active:hover {
  background-color: #dfdfec;
}
.no-active:active {
  background-color: #d1d1d1;
}
</style>