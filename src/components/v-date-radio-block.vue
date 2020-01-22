<template>
  <div class="date-and-radio">
      <v-date-button class="mr40"/>
      <div class="checkup-card-list__radio"> 
        <v-radio-buttons :labels="labels" class="g-radio"/>
      </div>
    <div class="icons-block">
      <v-icon class="icon1" :hover_shadow="true" :hover_color="true" icon="" />
      <div class="hover-icon">
        <div class="hover-icon__bg">
          <v-icon class="icon2" icon="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const VIcon = () => import('@/components/v-icon')
const VDateButton = () => import('@/components/v-date-button')
const VRadioButtons = () => import('@/components/v-radio-buttons')

export default {
  components: {
    VIcon,
    VDateButton,
    VRadioButtons
  },
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    radios: '',
    labels: ['На месяц', 'На 1-е февраля', 'На 1-е апреля', 'На 1-е июля', 'На 1-е октября', 'На 1-е января']
  }),
}
</script>

<style>
.mr40 {
  margin-right: 40px;
}
.date-and-radio {
  display: flex;
  margin-bottom: 0px;
}
.checkup-card-list__radio {
  position: relative;
  bottom: 3px;
}
.date-and-radio .radio {
  margin-left: 20px;
  margin-bottom: 20px;
}
.date-and-radio label {
  margin-left: 5px;
  margin-top: 7px;
  font-family: Roboto;
  font-size: 11px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
}
.v-date-picker-header__value {
  font-family: Roboto;
  font-size: 12px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: center;
  color: var(--dark);
}
.v-date-picker-header__value button {
  font-weight: normal;
  text-transform: capitalize;
}
.v-date-picker-header .v-btn--icon::before {
  width: 0px;
}
.v-btn--icon.v-size--default .v-icon, .v-btn--fab.v-size--default .v-icon{
  width: 22px !important;
  border-radius: 0px;
  padding: 0px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  margin: 0px 10px;
}
.v-date-picker-header .v-ripple__container{
  display: none;
}
.input-date .theme--light.v-input--is-disabled .v-label, .theme--light.v-input--is-disabled input, .theme--light.v-input--is-disabled textarea {
  color: #000;
}
.icons-block {
  position: relative;
  bottom: 12px;
}
.date-and-radio .icon1 {
  font-family: var(--font-awesome-5-pro-light);
  margin-left: 20px;
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.1;
  letter-spacing: normal;
  text-align: left;
  color: #20262c;
  margin-top: 15px;
  cursor: pointer;
}
.date-and-radio .icon1 .icon {
  cursor: pointer;
  z-index: 9;
  padding-left: 5px;
}
.date-and-radio .icon2 {
  font-family: var(--font-awesome-5-pro-light);
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.1;
  letter-spacing: normal;
  text-align: center;
  color: #20262c;
  cursor: pointer;
  margin-left: -3px;
  margin-right: 1px;
}
.date-and-radio .hover-icon:hover {
  display: block;
  z-index: 1;
}
.date-and-radio .hover-icon {
  position: absolute;
  display: none;
  width: 30px;
  margin-left: 22px;
  text-align: center;
  padding-top: 10px;
}
.date-and-radio .hover-icon::after {
  content: ''; 
  position: absolute;
  left: 5px; 
  bottom: 38px;
  border: 10px solid transparent;
  border-bottom: 10px solid #fff;
}
.date-and-radio .icon1:hover + .hover-icon{
  display: block;
}
.date-and-radio .hover-icon__bg {
  background-color: #fff;
  border-radius: 5px;
  padding: 2px 0px;
  transition: all 0.2s ease-out;
}
.date-and-radio .hover-icon__bg:hover {
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
}
</style>