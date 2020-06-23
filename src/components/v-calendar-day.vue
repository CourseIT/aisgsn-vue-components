<template>
  <div class="calendar__day" :class="{'day-active': active}">
    <div class="day__name" :class="{'day-active': active}">{{day_name}}</div>
    <div class="day__date">{{day_date}}</div>
  </div>
</template>

<script>
export default {
  props:{
    day_name: {
      default: 'ПН'
    },
    day_date: {
      default: '28'
    },
    active: {}
  }
}
</script>

<style scoped>
.calendar__day {
  width: 44px;
  height: 88px;
  margin-right: 43px;
  border-radius: 4px;
  color: var(--dark);
}
.day__name, .day__date{
  font-family: Roboto;
  font-size: 15px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  width: 44px;
  height: 44px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.day__name{
  background-color: var(--pale-lilac);
}
.day-active {
  background-color: var(--purpley);
  color: var(--white);
}
</style>