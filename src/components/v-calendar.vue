<template>
  <div class="calendar">


    <div class="calendar__day day-active">
      <div class="day__name day-active">ПН</div>
      <div class="day__date">28</div>
    </div>


    <div class="calendar__user">
      <div class="user__left-border"></div>
      <div class="user__info">
        <div class="info__avatar">
          <img src="" alt="">
        </div>
        <div>
          <p class="info__name">Куликов Б. Ю.</p>
          <p class="info__position">Должность</p>
        </div>
      </div>
    </div>


    <div class="calendar__action">
      <div class="action__top">
        <div class="action__icon">
          <v-icon icon="" font_size="11px"/>
        </div>
        <p class="action__date">20.08.20 – 28.08.20</p>
      </div>
      <p class="action__name">ВНИИЭФ</p>
      <p class="action__desc">Название проверки</p>
      <div class="action__bottom"></div>
      <div class="action__bottom"></div>
    </div>


    <div class="calendar__clear-day"></div>



  </div>
</template>

<script>
const VIcon = () => import('./v-icon')

export default {
  components: {
    VIcon
  },
}
</script>

<style scoped>
.calendar__day {
  width: 44px;
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


.calendar__user {
  width: 278px;
  height: 80px;
  border-radius: 4px;
  display: flex;
  background-color: var(--white);
}
.user__left-border {
  width: 12px;
  height: 80px;
  background-color: #7893b1;
  margin-right: 18px;
}
.user__info {
  display: flex;
  align-items: center;
}
.info__avatar {
  width: 42px;
  height: 42px;
  border: solid 0.5px var(--blue-grey);
  border-radius: 50%;
  margin-right: 15px;
}
.info__name {
  font-family: Roboto;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
  margin-bottom: 6px;
}
.info__position {
  font-family: Roboto;
  font-size: 11px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
  margin-bottom: 0;
}



.calendar__action {
  width: 538px;
  height: 80px;
  border-radius: 4px;
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
  background-color: var(--white);
  overflow: hidden;
}
.action__top {
  display: flex;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 7px;
  margin-left: 5px;
}
.action__icon {
  width: 19px;
  height: 19px;
  background-color: var(--weird-green);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 5px;
}
.action__date {
  font-family: Roboto;
  font-size: 11px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
  margin-bottom: 0px;
}
.action__name {
  font-family: Roboto;
  font-size: 15px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
  margin-bottom: 0;
  margin-left: 13px;
}
.action__desc {
  font-family: Roboto;
  font-size: 11px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
  margin-bottom: 2px;
  margin-left: 13px;
  margin-top: -5px;
}
.action__bottom {
  width: 100%;
  height: 7px;
  background-color: var(--weird-green);
}
.calendar__clear-day {
  width: 102px;
  height: 80px;
  border-radius: 8px;
  background-color: var(--pale-lilac);
}
</style>