<template>
  <div class="date-and-radio">  
    <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <button class="date__btn" v-on="on">
            <p>{{date}} </p>
          <Icon class="icon" icon="" /></button>
        </template>
        <v-date-picker color="orange" v-model="date" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="orange" @click="menu = false">Закрыть</v-btn>
          <v-btn text color="orange" @click="$refs.menu.save(date)">Выбрать</v-btn>
        </v-date-picker>
      </v-menu>
      <v-radio-group
      row
      color="orange"
    >
      <v-radio class="radio" label="На месяц"></v-radio>
      <v-radio class="radio" label="На 1-е февраля"></v-radio>
      <v-radio class="radio" label="На 1-е апреля"></v-radio>
      <v-radio class="radio" label="На 1-е июля"></v-radio>
      <v-radio class="radio" label="На 1-е октября"></v-radio>
    </v-radio-group>
    <div class="icons-block">
      <Icon class="icon1" icon="" />
      <div class="hover-icon">
        <div class="hover-icon__bg">
          <Icon class="icon2" icon="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const Icon = () => import('../components/Icon')
export default {
  components: { Icon },
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
  }),
}
</script>

<style> 
.date-and-radio {
  display: flex;
  margin-bottom: 0px;
}
.date-and-radio .radio {
  margin-left: 20px;
  margin-bottom: 20px;
}
.date-and-radio label {
  margin-left: 5px;
}
.date-and-radio .mdi-radiobox-blank::before {
    content: "";
    background: #fff;
    width: 30px;
    border-radius: 5px;
    height: 30px;
}
.date-and-radio .v-input--selection-controls__ripple {
  background-color: rgba(0, 0, 0, 0);
  background: rgba(0, 0, 0, 0);
  opacity: 0;
  cursor: pointer;
  border-radius: 0px;
}
.date-and-radio .mdi-radiobox-marked::before {
  content: "\25CF";
  font-size: 28px;
  padding-left: 7px;
  width: 31px;
  height: 31px !important;
  color: var(--bright-orange) !important;
  background: #000;
  border-radius: 5px;
}
.date-and-radio .date__btn {
  outline: none;
  vertical-align: middle;
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  height: 50px;
  margin-top: 7px;
  min-width: 170px;
  background-color: #e5e5ea;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: normal;
  text-align: center;
  color: var(--dark);
  margin-right: 50px;
}
.date-and-radio .date__btn p {
  margin-bottom: 0;
  margin-top: 8px;
}
.date-and-radio .icon {
  font-family: var(--font-awesome-5-pro-light);
  margin-left: 20px;
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  text-align: center;
  color: var(--dark);
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
  margin-left: -18px;
  margin-right: 1px;
}
.date-and-radio .hover-icon:hover {
  display: block;
}
.date-and-radio .hover-icon {
  position: absolute;
  display: none;
  margin-left: 35px;
  text-align: center;
  padding-top: 10px;
}
.date-and-radio .hover-icon::after {
  content: ''; 
  position: relative;
  left: 0px; 
  bottom: 70px;
  border: 10px solid transparent;
  border-bottom: 10px solid #fff;
}
.date-and-radio .icon1:hover + .hover-icon{
  display: block;
}
.date-and-radio .hover-icon__bg {
  background-color: #fff;
  border-radius: 5px;
  padding: 2px 4px;
  transition: all 0.2s ease-out;
}
.date-and-radio .hover-icon__bg:hover {
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
}
</style>