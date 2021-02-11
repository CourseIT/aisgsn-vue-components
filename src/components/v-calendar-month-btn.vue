<template>
  <button class="calendar__month-btn" :class="[{'no-active': !active, 'read-only': readOnly == true}, dynamic_class]" :style='{width: `${width}`}'>
    <slot>Test</slot>
  </button>
</template>

<script>
export default {
  props: {
    read_only: {},
    width: {},
    text: {},
    month: {},
    dynamic_class: {}
  },
  data: () => ({
    active: false,
  }),
  mounted() {
    let date = new Date();
    let month = date.getMonth()
    this.checkActive(month)
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
  watch: {
    month(month) {
      this.checkActive(month)
    }
  },
  methods: {
    checkActive(month) {
      if(this.month == month) {
        this.active = true
      } else {
        this.active = false
      }
    }
  }
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
.calendar__month-btn p {
  margin-bottom: 0;
}
.no-active {
  background-color: var(--pale-lilac);
  color: var(--dark);
}
</style>