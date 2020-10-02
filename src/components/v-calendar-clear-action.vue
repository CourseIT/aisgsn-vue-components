<template>
  <div class="calendar__clear-acion" :class="{'w1': pick_date == 3, 'read-only': readOnly == true}"></div>
</template>

<script>
export default {
  props: {
    read_only: {},
    pick_date: {
      default: 0
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
.w1 {
  width: 1% !important;
  margin-right: 0px !important;
  border-radius: 0px !important;;
}
.calendar__clear-acion {
  width: 2.5%;
  height: 80px;
  margin-right: 0.5%;
  border-radius: 8px;
  background-color: var(--pale-lilac);
}

</style>