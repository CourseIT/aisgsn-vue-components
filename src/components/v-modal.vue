<template>
  <div>
    <div class="modal">
      <v-input-with-icon placeholder="" icon="" label="п/п" />
      <v-input-with-icon placeholder="" icon="" label="Наименование работ, подлежащих проверке, определяемых в соответствии с проектом Организации строительства" />
      <v-input-with-icon placeholder="" icon="" label="Предмет каждой проверки" />
      <v-input-date-with-icon placeholder="" icon="" label="Примерная дата проведения каждой проверки" />
      <v-input-with-icon placeholder="" icon="" label="Ориентировочные затраты времени должностного Лица органа государственного строительного Надзора на проведение проверки" />
      <v-input-with-icon placeholder="" icon="" label="Документы, подлежащие представлению при проведении проверок, предусмотренных программой проведения проверок" />
      <v-input-with-icon placeholder="" icon="" label="Должностные лица или работники застройщика, технического заказчика либо лица, осуществляющего строительство, присутствие которых при проведении проверок,предусмотренных программой проведения проверок, является обязательным" />
      <div class="fr">
        <div>
          <v-icon icon="" class="icon" />
        </div>
        <div @click="closeModal">
          <v-icon icon="" class="icon" />
        </div>
        <div>
          <v-icon icon="" class="icon" />
        </div>
      </div>
    </div>
    <transition name="modal">
      <div @click="closeModal"  class="modal__bg" :class="{pl305: $store.state.menu_visibility}"></div>
    </transition>
  </div>
</template>

<script>
const VInputWithIcon = () => import('@/components/v-input-with-icon')
const VInputDateWithIcon = () => import('@/components/v-input-date-with-icon')
const VIcon = () => import('@/components/v-icon')

export default {
  components: {
    VInputWithIcon,
    VInputDateWithIcon,
    VIcon
  },
  methods: {
    closeModal() {
      this.$emit('toggleModal', false)
    },
  }
}
</script>

<style scoped>
.fr {
  display: flex;
  float: right;
  margin-right: 38px;
}
.pl305 {
  margin-left: 305px;
}
.modal {
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
  background-color: var(--pale-lilac);
  border-radius: 4px;
  padding: 20px;
  position: fixed;
  width: 50%;
  left: 0;
  top: 15vh;
  margin-left: 25%;
  z-index: 100;
}
.modal__bg {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: 0.8;
  background-color: rgba(0, 0, 0, 1);
  backdrop-filter: blur(10px)
}
.icon {
  font-family: var(--font-awesome-5-pro-light);
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0);
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.81;
  margin: 10px;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
}
</style>