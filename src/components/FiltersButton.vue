<template>
  <div>
    <div class="filter-btn__block">
      <button @click="filters__show = !filters__show" class="filter__btn">
        <p>Фильтры</p>
        <Icon class="icon" icon="" />
      </button>
      <div v-if="filters__show" class="filters__block">
        <SelectButtonW438 />
        <SelectButtonW438 />
        <SelectButtonW438 />
        <div class="df jcsb">
          <SelectButtonW132 class="" />
          <SelectButtonW132 class="" />
          <SelectButtonW132 class="" />
        </div>
        <div class="df jcsb">
          <SelectButtonW132 class="" />
          <SelectButtonW132 class="" />
          <SelectButtonW132 class="" />
        </div>
        <div class="df jcsb">
          <SelectButtonW132 class="" />
          <SelectButtonW132 class="" />
          <SelectButtonW132 class="" />
        </div>
        <div class="df jcfe">
          <Button class="mt70 mr22" text="Применить" />
          <Button class="mt70" text="СБРОСИТЬ ВСЕ" />
        </div>
      </div>
    </div>
    <div v-if="filters__show" @click="filters__show = false" class="close-block"></div>
  </div>
</template>

<script>
const Icon = () => import('../components/Icon')
const SelectButtonW132 = () => import('../components/SelectButtonW132')
const SelectButtonW438 = () => import('../components/SelectButtonW438')
const Button = () => import('../components/Button')

export default {
  components: { 
    Icon,
    SelectButtonW132,
    SelectButtonW438,
    Button
  },
  data: () => ({
    filters__show: false
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
}
.w132 {
  width: 132px;
}
.filter__btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 132px;
  height: 36px;
  background-color: var(--pale-lilac);
  padding-left: 20px;
  padding-right: 14px;
  border-radius: 4px;
  transition: all 0.2s ease-out;
  margin: 3px 0px;
  outline: none;
}
.filter__btn p {
  width: 80%;
  text-align: center;
  margin-bottom: 0;
  font-family: Roboto;
  font-size: 11px;
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
.filter__btn:hover {
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
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