<template>
  <div class="calendar__day" :class="{
                                        'day-active': active,
                                        'day-off': day_name == 'СБ' || day_name == 'ВС'
                                      }">
    <div class="day__name" :class="{'day-active': active}">{{day_name}}</div>
    <div class="day__date">{{day_date}}</div>
    <!-- <div class="day__actions" v-if="actions !== 0">
      {{actions}}
    </div> -->
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
    actions: 0
  }),
  mounted() {
    // let date = new Date();
    // this.actual_date = date.getDate()
    // if(this.day_date == 13){
    //   this.actions = 3
    // }
    // if(this.day_date == 5){
    //   this.actions = 5
    // }
    // if(this.day_date == 14){
    //   this.actions = 1
    // }
    // if(this.day_date == 20){
    //   this.actions = 5
    // }
    // if(this.day_date == 24){
    //   this.actions = 4
    // }
  }
}
</script>

<style scoped>
.calendar__day {
  width: 2.5%;
  height: 88px;
  border-radius: 4px;
  color: var(--dark);
  margin-right: 0.5%;
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
  width: 100%;
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
.day__actions {
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  float: right;
  position: relative;
  bottom: 97px;
  left: 7px;
  color: var(--dark);
  background-color: var(--white);
  font-family: Roboto;
}
</style>