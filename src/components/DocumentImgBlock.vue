<template>
  <div class="doc__block df">
    <div class="mr15">
      <img class="doc__img" src="../assets/doc.png" alt="">
    </div>
    <div class="doc__btns">
      <Icon class="icon-text mt0" icon="У24" />
      <Icon class="icon mt0 ml5" color="#8e8e93" icon="" />
      <Icon class="icon mt0 ml5" icon="" />
      <div>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn
              class="icon-btn"
              color="#e5e5ea"
              v-on="on"
            >
              <Icon v-on="on" class="icon mt0" icon="" />
            </v-btn>
            <Icon v-on="on" class="icon mt0 ml5" icon="" />
          </template>
          <div v-for="(uesr, index) in users" class="dropdown__users" :key="index">
            <div>
              <p class="dropdown__user-title">{{uesr.title}}</p>
              <p class="dropdown__user-name">{{uesr.name}}</p>
            </div>
            <Icon class="icon" title="Проверить подпись" style="margin-top: 0px;" icon="" />
          </div>
        </v-menu>
      </div>
      <Icon class="icon mt0 ml5" icon="" />
      <Icon class="icon mt0 ml5" icon="" />
      <Icon class="icon mt0 ml5" color="#ff6100" icon="" />
    </div>
  </div>
</template>

<script>
const Icon = () => import('./Icon')
export default {
  components: {
    Icon
  },
  data: () => ({
    users: [
      { title: 'Утверждено', name: 'Сотрудник А. А.' },
      { title: 'Согласовано', name: 'Сотрудник Б. Б.' },
      { title: 'Согласовано', name: 'Сотрудник В. В.' },
      { title: 'Согласовано', name: 'Сотрудник Г. Г.' },
      { title: 'Согласовано', name: 'Сотрудник Д. Д.' },
      { title: 'Согласовано', name: 'Сотрудник Е. Е.' }
    ]
  })
}
</script>

<style scoped>
.df {
  display: flex;
}
.mt0 {
  margin-top: 0px;
}
.mr15 {
  margin-right: 15px;
}
.ml5{
  margin-left: 5px;
}
.icon-text {
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
}
.icon-btn {
  background: none;
  background-color: #efeff4 !important;
  box-shadow: none;
  padding: 0px !important;
  width: 20px;
  padding-right: 17px !important;
  min-width: 10px !important;
  opacity: 1;
}
.icon-btn .v-btn:hover {
  background: none !important;
  background-color: none !important;
}
.icon {
  font-family: "Font Awesome 5 Pro";
  margin-top: 9px;
  font-size: 21px;
  width: 5%;
  text-align: center;
}
.doc__block {
  margin-top: 100px;
  margin-left: 25px;
}
.doc__img {
  border-radius: 4px;
  object-fit: contain;
  border: dashed 1px #707070;
  width: 100%;
  height: auto;
}
.dropdown__user-title {
  font-family: Roboto;
  font-size: 12px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  margin-bottom: 5px;
}
.dropdown__user-name   {
  font-family: Roboto;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  margin-bottom: 5px;
}
.dropdown__users {
  display: flex;
  padding: 2px;
  width: 200px;
  justify-content: space-between;
  margin-bottom: 5px;
  border-radius: 4px;
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.12);
  background: #fff;
}
.dropdown__users .icon {
  cursor: pointer;
  margin-right: 20px !important;
  margin-top: 5px !important;
}
.v-menu__content {
  box-shadow: none !important;
}
</style>