<template>
  <div>
    <div class="filter-btn__block">
      <button @click="filters__show = !filters__show" class="filter__btn">
        <p>Фильтры</p>
        <v-icon class="icon" width="22" icon="" />
      </button>
      <div v-if="filters__show" class="filters__block">
        <v-select v-model="value1" defailt_value="Выбор" text_center="true" width="438px" :list="buttons"/>
        <v-select v-model="value2" defailt_value="Выбор" text_center="true" width="438px" :list="buttons"/>
        <v-select v-model="value3" defailt_value="Выбор" text_center="true" width="438px" :list="buttons"/>
        <div class="df jcsb">
          <v-select v-model="value4" defailt_value="Выбор" width="132px" :list="buttons"/>
          <v-select v-model="value5" defailt_value="Выбор" width="132px" :list="buttons"/>
          <v-select v-model="value6" defailt_value="Выбор" width="132px" :list="buttons"/>
        </div>
        <div class="df jcsb">
          <v-select v-model="value7" defailt_value="Выбор" width="132px" :list="buttons"/>
          <v-select v-model="value8" defailt_value="Выбор" width="132px" :list="buttons"/>
          <v-select v-model="value9" defailt_value="Выбор" width="132px" :list="buttons"/>
        </div>
        <div class="df jcsb">
          <v-select v-model="value10" defailt_value="Выбор" width="132px" :list="buttons"/>
          <v-select v-model="value11" defailt_value="Выбор" width="132px" :list="buttons"/>
          <v-select v-model="value12" defailt_value="Выбор" width="132px" :list="buttons"/>
        </div>
        <div>
          <p class="record">Количество записей и любая другая информация</p>
        </div>
        <div class="df jcsb">
          <div class="df mt70">
            <v-icon class="time-icon" width="21" icon="" />
            <div>
              <p class="time-text">Время выдачи</p>
              <p class="time-text">12:25</p>
            </div>
          </div>
          <v-button class="mt70" background_color="#8e8e93" color="#fff" text="СБРОСИТЬ ВСЕ" />
          <v-button class="mt70" background_color="#ff6100" color="#fff" text="Применить" />
        </div>
      </div>
    </div>
    <div v-if="filters__show" @click="filters__show = false" class="close-block"></div>
  </div>
</template>

<script>
const VIcon = () => import('@/components/v-icon')
const VButton = () => import('@/components/v-button')
const VSelect = () => import('@/components/v-select')

export default {
  components: { 
    VIcon,
    VButton,
    VSelect
  },
  data: () => ({
    value1: '',
    value2: '',
    value3: '',
    value4: '',
    value5: '',
    value6: '',
    value7: '',
    value8: '',
    value9: '',
    value10: '',
    value11: '',
    value12: '',
    buttons: ['Выбор', 'Выбор', 'Выбор', 'Выбор'],
    filters__show: false,
  }),
}
</script>

<style scoped>
.df {
  display: flex;
}
.jcfe {
  justify-content: flex-end;
}
.mr22 {
  margin-right: 22px;
}
.mt70 {
  margin-top: 70px;
}
.jcsb {
  justify-content: space-between;
  padding-right: 1px;
}
.filter__btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 132px;
  height: 36px;
  background-color: var(--pale-lilac);
  padding: 0px 10px;
  border-radius: 4px;
  transition: all 0.2s ease-out;
  margin: 0px;
  margin-bottom: 7px;
  outline: none;
}
.filter__btn p {
  width: 80%;
  text-align: center;
  margin-bottom: 0;
  font-family: Roboto;
  font-size: 11px;
  padding-left: 22px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: normal;
  color: var(--dark);
}
.icon {
  font-family: var(--font-awesome-5-pro-light);
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  text-align: center;
  color: var(--dark);
  transition: all 0.2s ease-out;
}
.time-icon {
  font-family: var(--font-awesome-5-pro-light);
  font-size: 21px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
}
.time-text {
  font-family: Roboto;
  font-size: 15px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
  margin-bottom: 0;
  margin-left: 12px;
}
.record {
  font-family: Roboto;
  font-size: 11px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: normal;
  text-align: left;
  color: #38393b;
  margin-top: 30px;
}
.filter__btn:hover {
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
}
.filter__btn:focus {
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.22) !important;
}
.filter__btn:hover .icon {
  color: var(--bright-orange);
}
.filter__btn:focus .icon {
  color: var(--bright-orange);
}
.filters__block {
  z-index: 8;
  position: absolute;
  width: 485px;
  margin-left: -353px;
  box-shadow: 0 7px 10px 0 rgba(34, 34, 34, 0.22);
  background-color: var(--white);
  border-radius: 4px;
  margin-top: 3px;
  padding: 18px 23px;
}
.close-block {
  position: absolute;
  background: none;
  z-index: 6;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>