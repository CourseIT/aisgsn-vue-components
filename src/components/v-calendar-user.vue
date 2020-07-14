<template>
  <div class="calendar__user">
    <div class="user__left-border"></div>
    <div class="user__info">
      <div class="info__avatar">
        <img src="" alt="">
      </div>
      <div class="w150">
        <p class="info__name">{{user_name}}</p>
        <p class="info__position">{{user_position}}</p>
      </div>
      <div v-if="action_delete" class="user__button">
        <v-icon icon="" font_size="16px"/>
      </div>
    </div>
  </div>
</template>

<script>
const VIcon = () => import('./v-icon')

export default {
  components: {
    VIcon
  },
  props: {
    user_image: {},
    user_name: {
      default: 'Куликов Б. Ю.'
    },
    user_position: {
      default: 'Должность'
    },
    action_delete: {
      default: false
    }
  }
}
</script>

<style scoped>
.w150 {
  width: 150px;
  margin-right: 3px;
}
.calendar__user {
  min-width: 270px;
  max-width: 271px;
  height: 80px;
  border-radius: 4px;
  display: flex;
  background-color: var(--white);
  margin-right: 45px;
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
.user__button {
  width: 30px;
  height: 30px;
  border-radius: 24px;
  background-color: #f44336;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--pale-grey);
}
</style>