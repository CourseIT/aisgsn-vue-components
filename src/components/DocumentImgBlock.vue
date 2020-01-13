<template>
  <div class="doc__block df">
    <div class="mr15">
      <img v-if="img" class="doc__img" src="../assets/doc.png" alt="">
      <div v-else class="doc__img">
        <p class="img-preview">DOCS PREVIEW</p>
      </div>
    </div>
    <div class="doc__btns">
      <Icon desc="test" class="icon-text mt0" icon="У24" />
      <Icon class="icon mt25 ml2" :color=" img ? '#8e8e93' : '#21262c' " icon="" />
      <Icon v-if="img" class="icon mt0 ml5" icon="" />
      <div v-if="img">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <div
              class="icon-btn"
              color="#e5e5ea"
              v-on="on"
            >
              <Icon v-on="on" class="icon list mt0" icon="" />
              <div class="list__desc">
                <span>Лист визирования</span>
              </div>
            </div>
            <Icon v-on="on" class="icon mt0 ml5" icon="" />
          </template>
          <div class="dropdown__block arrow-icon">
            <div v-for="(uesr, index) in users"  :key="index">
              <div class="dropdown__users">
                <div>
                  <p class="dropdown__user-title">{{uesr.title}}</p>
                  <p class="dropdown__user-name">{{uesr.name}}</p>
                </div>
                <Icon class="icon" data-title="Проверить подпись" style="margin-top: 0px;" icon="" />
              </div>
            </div>
          </div>
        </v-menu>
      </div>
      <Icon v-if="img" class="icon mt0 ml5" icon="" />
      <Icon v-if="img" class="icon mt0 ml5" icon="" />
      <Icon v-if="img" class="icon star mt0 ml2" color="#ff6100" icon="" />
      <div class="star__desc">
        <span>Подписано всеми участниками</span>
      </div>
    </div>
  </div>
</template>

<script>
const Icon = () => import('./Icon')
export default {
  props: ['img'],
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
.ml2 {
  margin-left: 2px;
}
.ml0 {
  margin-left: 0;
}
.mt25 {
  margin-top: 25px !important;
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
  position: absolute;
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
  width: 5%;
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
  padding-right: 50px;
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
  left: 3px; 
  bottom: 5px;
  border: 10px solid transparent;
  border-bottom: 10px solid #fff;
}
.dropdown__users .icon {
  cursor: pointer;
  margin-right: 20px;
  margin-top: 5px !important;
  position: relative;
  bottom: 6px;
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
  bottom: 30px;
  left: -60px;
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
  bottom: 15px;
  left: 2px;
  display: inline-block;
  color: #fff;
  border: 8px solid transparent;	
  border-bottom: 8px solid #000;
  transform: rotate(180deg);
}
.star:hover + .star__desc {
  display: block;
}
.star__desc {
  display: none;
  position: relative;
  width: 200px;
  padding: 7px 0px;
  height: 24px;
  border-radius: 4px;
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
  background-color: var(--white);
  font-family: Roboto;
  font-size: 11px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: center;
  color: var(--dark);
  bottom: 70px;
  right: 85px;
}
.star__desc::after {
  content: '';
  position: absolute;
  top: 22px;
  left: 90px;
  display: inline-block;
  color: #fff;
  border: 8px solid transparent;	
  border-bottom: 8px solid #fff;
  transform: rotate(180deg);
}

.list:hover + .list__desc {
  display: block;
}
.list__desc {
  display: none;
  position: absolute;
  width: 132px;
  height: 24px;
  padding: 6px 0px;
  border-radius: 4px;
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
  background-color: var(--white);
  font-family: Roboto;
  font-size: 11px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: center;
  color: var(--dark);
  margin-top: -70px;
  margin-left: -55px;
}
.list__desc::after {
  content: '';
  position: absolute;
  top: 22px;
  left: 55px;
  display: inline-block;
  color: #fff;
  border: 8px solid transparent;	
  border-bottom: 8px solid #fff;
  transform: rotate(180deg);
}
</style>