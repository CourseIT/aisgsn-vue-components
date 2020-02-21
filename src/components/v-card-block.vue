<template>
  <div :style='{width: `${width}`}'>
    <div class="df inspection-program-block">
      <slot>
        <div class="w95">
          <slot name="text">
          </slot>
        </div>
        <div class="dg">
          <div class="df">
            <div v-if="action_edit" @click="action_edit">
              <v-icon icon="" class="icon-e"/>
            </div>
            <div @click="action_select">
              <div @click="select = !select" class="card_circle" :class="{'select_card' : select}">
                <div class="circle"></div>
              </div>
            </div>
          </div>
          <div v-if="action_minus" @click="action_minus" class="bottom-icon">
            <v-icon icon="" class="icon-m"/>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
const VIcon = () => import('./v-icon')


export default {
  name: 'v-card-block',
  components: {
    VIcon
  },
  props: {
    width: {},
    action_minus: {},
    action_edit: {},
    action_select: {
      default: function() {
        return () => ({})
      }
    }
  },
  data: () => ({
    select: false
  })
}
</script>

<style scoped>
.dg {
  display: grid;
}
.mb7 {
  margin-bottom: 6px !important;
}
.mb4  {
  margin-bottom: 4px !important;
}
.fwb {
  font-weight: 500 !important;
}
.bottom-icon{
  position: relative;
  top: 17px;
  right: 2px;
}
.inspection-program-block {
  padding: 6px 10px;
  min-height: 60px;
  border-radius: 4px;
  background-color: var(--white);
}
.inspection-program-block:hover {
  cursor: pointer;
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
}
.icon-m {
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0);
  font-family: var(--font-awesome-5-pro-light);
  cursor: pointer;
  font-size: 21px;
  width: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
  position: relative;
  left: 37px;
  bottom: 5px;
  
}
.icon-e {
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0);
  font-family: var(--font-awesome-5-pro-light);
  cursor: pointer;
  font-size: 21px;
  width: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
  position: relative;
  left: -6px;
  bottom: 4px;
}
.card_circle {
  width: 21px;
  height: 21px;
  border-radius: 50%;
  border: 1px solid var(--dark);
  margin-top: 4px;
  margin-left: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card_circle .circle {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: var(--white);
}
.select_card {
  border: 1px solid var(--weird-green);
  background: var(--weird-green);
}
</style>