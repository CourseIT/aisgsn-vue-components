<template>
  <div class="calendar__clear-acion" :class="{'w1': pick_date == 3}"></div>
</template>

<script>
export default {
  props: {
    pick_date: {
      default: 0
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