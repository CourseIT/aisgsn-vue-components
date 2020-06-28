<template>
  <div class="calendar__day" :class="{
                                        'day-active': active,
                                        'day-off': day_name == 'СБ' || day_name == 'ВС'
                                      }">
    <div class="day__name" :class="{'day-active': active}">{{day_name}}</div>
    <div class="day__date">{{day_date}}</div>
  </div>
</template>

<script>
export default {
  props:{
    day_name: {},
    day_date: {},
    active: {}
  },
  data: () => ({
    actual_date: '',
  }),
  mounted() {
    let date = new Date();
    this.actual_date = date.getDate()
  }
}
</script>

<style scoped>
.calendar__day {
  width: 28px;
  height: 88px;
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
  width: 28px;
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
.day-off {
  opacity: 0.5;
}
</style>