<template>
  <div>
    <div class="modal">
      <InputWithIcon placeholder="" icon="" label="п/п" />
      <InputWithIcon placeholder="" icon="" label="Наименование работ, подлежащих проверке, определяемых в соответствии с проектом Организации строительства" />
      <InputWithIcon placeholder="" icon="" label="Предмет каждой проверки" />
      <InputDateWithIcon placeholder="" icon="" label="Примерная дата проведения каждой проверки" />
      <InputWithIcon placeholder="" icon="" label="Ориентировочные затраты времени должностного Лица органа государственного строительного Надзора на проведение проверки" />
      <InputWithIcon placeholder="" icon="" label="Документы, подлежащие представлению при проведении проверок, предусмотренных программой проведения проверок" />
      <InputWithIcon placeholder="" icon="" label="Должностные лица или работники застройщика, технического заказчика либо лица, осуществляющего строительство, присутствие которых при проведении проверок,предусмотренных программой проведения проверок, является обязательным" />
      <div class="fr">
        <div>
          <Icon icon="" class="icon" />
        </div>
        <div @click="closeModal">
          <Icon icon="" class="icon" />
        </div>
        <div>
          <Icon icon="" class="icon" />
        </div>
      </div>
    </div>
    <div @click="closeModal"  class="modal__bg" :class="{pl305: $store.state.menu_visibility}"></div>
  </div>
</template>

<script>
const InputWithIcon = () => import('@/components/InputWithIcon')
const InputDateWithIcon = () => import('@/components/InputDateWithIcon')
const Icon = () => import('@/components/Icon')

export default {
  props: ['modal_show'],
  components: {
    InputWithIcon,
    InputDateWithIcon,
    Icon
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
  opacity: 0.7;
  background-color: var(--dark);
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