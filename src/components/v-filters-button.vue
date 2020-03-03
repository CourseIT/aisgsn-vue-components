<template>
  <div v-if="visible" :class="{'read-only': readOnly == true}">
    <div class="filter-btn__block">
      <button @click="filters__show = !filters__show" class="filter__btn">
        <p>Фильтры</p>
        <v-icon class="icon" width="22" icon="" />
      </button>
      <div v-if="filters__show" class="filters__block" :style='{top: `${top}`, bottom: `${bottom}`, left: `${left}`, right: `${right}`}'>
        <slot>
          filters__btns
        </slot>
        <div>
          <p class="record">{{info}}</p>
        </div>
        <div class="df jcsb">
          <div class="df mt70">
            <v-icon class="time-icon" width="21" icon="" />
            <div>
              <p class="time-text">Время выдачи</p>
              <p class="time-text">{{time}}</p>
            </div>
          </div>
          <slot name="butons">
            <v-button :action="action_reset" class="mt70 clear-btn" text="СБРОСИТЬ ВСЕ" />
            <v-button :action="action_apply" class="mt70" text="Применить" />
          </slot>
        </div>
      </div>
    </div>
    <div v-if="filters__show" @click="filters__show = false" class="close-block"></div>
  </div>
</template>

<script>
const VIcon = () => import('./v-icon')
const VButton = () => import('./v-button')

export default {
  props: {
    top: {},
    left: {},
    bottom: {},
    right: {},
    info: {},
    time: {},
    read_only: {},
    visible: {
      default: true
    },
    action_reset: {
      default: function() {
        return () => ({})
      }
    },
    action_apply: {
      default: function() {
        return () => ({})
      }
    },
  },
  components: { 
    VIcon,
    VButton,
  },
  data: () => ({
    filters__show: false,
  }),
  computed: {
    readOnly() {
      if(typeof (this.read_only) == 'function') {
        return this.read_only()
      } else if (this.read_only) {
        return this.read_only
      } else {
        return false
      }
    }
  },
}
</script>

<style scoped>
.mr22 {
  margin-right: 22px;
}
.mt70 {
  margin-top: 70px;
}
.filter-btn__block {
  z-index: 100;
  position: relative;
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
  cursor: pointer;
}
.filter__btn p {
  width: 80%;
  text-align: center;
  margin-bottom: 0;
  font-family: Roboto;
  font-size: 0.6875rem;
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
  color: var(--dark2);
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
  box-shadow: 0 7px 10px 0 rgba(34, 34, 34, 0.22);
  background-color: var(--white);
  border-radius: 4px;
  margin-top: 3px;
  padding: 18px 23px;
}
.close-block {
  position: fixed;
  background: none;
  background: rgba(0, 0, 0, 0.4);
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.filters__block .clear-btn{
  background-color: var(--pale-lilac);
  border: 1px solid var(--pale-lilac);
}
.filters__block .clear-btn:hover{
  background-color: var(--blue-grey) !important;
  border: 1px solid var(--blue-grey);
}
</style>