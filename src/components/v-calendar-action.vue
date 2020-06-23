<template>
  <div>
    <div v-if="action_date" class="calendar__action" :style='{width: `${days * 87}px`}'>
      <div class="action__top">
        <div class="action__icon">
          <v-icon icon="" font_size="11px"/>
        </div>
        <p class="action__date">{{action_date}}</p>
      </div>
      <p class="action__name">{{action_name}}</p>
      <p class="action__desc">{{action_desc}}</p>
      <div class="action__bottom"></div>
      <div class="action__bottom"></div>
    </div>
    <div v-else class="calendar__clear-acion"></div>
  </div>
  
</template>

<script>
const VIcon = () => import('./v-icon')

export default {
  components: {
    VIcon
  },
  props: {
    action_date: {},
    action_name: {
      default: 'ВНИИЭФ'
    },
    action_desc:{
      default: 'Название проверки'
    },
    days: {
      default: 0
    }
  }
}
</script>

<style scoped>
.calendar__action {
  width: 80px;
  height: 80px;
  border-radius: 4px;
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
  background-color: var(--white);
  overflow: hidden;
  margin-right: 7px;
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

.calendar__clear-acion {
  width: 80px;
  height: 80px;
  margin-right: 7px;
  border-radius: 8px;
  background-color: var(--pale-lilac);
}
</style>