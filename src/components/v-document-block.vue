<template>
  <div class="doc__block df">
    <div class="mr15">
      <img v-if="img" class="doc__img" :src="src" alt="">
      <div v-else class="doc__img">
        <p class="img-preview">DOCS PREVIEW</p>
      </div>
    </div>
    <div class="doc__btns">
      <v-icon class="icon-text" :hover_shadow="true" :hover_color="true" icon="У24" />
      <v-icon class="icon" :hover_shadow="true" :hover_color="true" :color=" img ? '#8e8e93' : '#21262c' " icon="" />
      <v-icon v-if="img" :hover_shadow="true" :hover_color="true" class="icon" icon="" />
      <div v-if="img">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <div
              class="icon"
              color="#e5e5ea"
              v-on="on"
            >
              <v-icon v-on="on" :hover_shadow="true" :hover_color="true" prompt="Лист визирования" class="icon list ml0" icon="" />
            </div>
            <v-icon :hover_shadow="true" :hover_color="true" v-on="on" class="icon" icon="" />
          </template>
          <div class="dropdown__block arrow-icon">
            <div v-for="(uesr, index) in users"  :key="index">
              <div class="dropdown__users">
                <div>
                  <p class="dropdown__user-title">{{uesr.title}}</p>
                  <p class="dropdown__user-name">{{uesr.name}}</p>
                </div>
                <v-icon class="icon" data-title="Проверить подпись" style="margin-top: 0px;" icon="" />
              </div>
            </div>
          </div>
        </v-menu>
      </div>
      <v-icon v-if="img" :hover_shadow="true" :hover_color="true" class="icon" icon="" />
      <v-icon v-if="img" :hover_shadow="true" :hover_color="true" class="icon" icon="" />
      <v-icon v-if="img" :hover_shadow="true" :hover_color="true" prompt="Подписано всеми участниками" class="icon" color="#ff6100" icon="" />
    </div>
  </div>
</template>

<script>
const VIcon = () => import('./v-icon')
export default {
  props: ['img', 'src'],
  components: {
    VIcon
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
.ml0 {
  margin-left: 0px !important;
}
/* .mt0 {
  margin-top: 0px;
}
.mr15 {
  margin-right: 15px;
}
.ml5{
  margin-left: 5px;
}
.ml2 {
  margin-left: 2px;
}
.ml0 {
  margin-left: 0;
}
.mt25 {
  margin-top: 25px !important;
} */
.doc__btns {
  align-items: center;
  margin-left: 15px;
}
.icon-text {
  cursor: pointer;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  margin-bottom: -5px;
}
.icon-btn {
  background: none;
  background-color: var(--pale-grey);
  box-shadow: none;
  text-align: center;
  opacity: 1;
  cursor: pointer;
}
.icon {
  cursor: pointer;
  font-family: var(--font-awesome-5-pro-light);
  margin-top: 9px;
  font-size: 21px;
  text-align: center;
}
.doc__block {
  margin-left: 25px;
  width: 232px;
  height: 328px;
  margin-bottom: 20px;
}
.doc__img {
  border-radius: 4px;
  display: flex;
  align-items: center;
  object-fit: contain;
  border: dashed 1px #707070;
  width: 100%;
  height: auto;
  width: 232px;
  height: 328px;
}
.img-preview {
  width: 204px;
  width: 100%;
  height: 111px;
  opacity: 0.28;
  font-family: Roboto;
  font-size: 48px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.13;
  letter-spacing: normal;
  text-align: center;
  color: var(--dark);
}
.v-menu__content {
  padding-left: 10px;
  margin-left: -13px;
}
.dropdown__block {
  padding: 20px 0px;
  padding-right: 60px;
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
  margin-bottom: 0px;
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
  margin-bottom: 0px;
}
.dropdown__users {
  display: flex;
  padding: 4px 8px;
  width: 200px;
  height: 36px;
  justify-content: space-between;
  margin-bottom: 5px;
  border-radius: 4px;
  box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.22) !important;
  background: #fff;
}
.arrow-icon::before {
  content: ''; 
  position: relative;
  left: 9px; 
  bottom: 5px;
  border: 10px solid transparent;
  border-bottom: 10px solid #fff;
}
.dropdown__users .icon {
  cursor: pointer;
  margin-top: 5px !important;
  position: relative;
  bottom: 6px;
  left: 10px;
}
.v-menu__content {
  box-shadow: none;
  margin-top: -40px;
}
[data-title] {
  position: relative;
}
[data-title]:hover::before {
  content: attr(data-title);
  position: absolute;
  bottom: 40px;
  left: -53px;
  display: inline-block;
  padding: 5px 16px;
  border-radius: 2px;
  background: #000;
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
  border-radius: 5px;
  color: #fff;
  font-size: 12px;
  font-family: sans-serif;
  white-space: nowrap;
}
[data-title]:hover::after {
  content: '';
  position: absolute;
  bottom: 25px;
  left: 10px;
  display: inline-block;
  color: #fff;
  border: 8px solid transparent;	
  border-bottom: 8px solid #000;
  transform: rotate(180deg);
}

</style>