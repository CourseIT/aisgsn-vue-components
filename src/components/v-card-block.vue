<template>
  <div v-if="visible" :class="[{'read-only': readOnly == true}, dynamic_class]" :style='{width: `${width}`}'>
    <div class="df inspection-program-block">
      <slot>
        <div class="w100">
          <slot name="text">
          </slot>
        </div>
        <div class="">
          <div class="circle_block">
            <div v-if="action_select" @click="action_select">
              <div @click="select = !select" class="card_circle" :class="{'select_card' : select}">
                <div class="circle"></div>
              </div>
            </div>
          </div>

          <div class="edit_block">
            <div v-if="action_edit" @click="action_edit">
              <v-icon icon="" :hover_color="true" class="icon-e" :width="15" :height="15"/>
            </div>
          </div>
            
          <div class="remove_block">
            <div v-if="action_minus" @click="action_minus" class="bottom-icon">
              <v-icon icon="" :hover_color="true" class="icon-m" :width="15" :height="15"/>
            </div>
            <div v-if="action_add" @click="action_add" class="add-icon">
                <v-icon icon="" :hover_color="true" class="icon-m icon-add" :width="15" :height="15"/>
              </div>
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
    action_add: {},
    read_only: {},
    visible: {
      default: true
    },
    action_select: {},
    dynamic_class: {}
  },
  data: () => ({
    select: false
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
  }
}
</script>

<style scoped>
.circle_block , .edit_block , .remove_block {
  height: 33.3%;
  display: flex;
}
.circle_block {
  align-items: flex-start;
}
.edit_block {
  align-items: center;
}
.remove_block {
  align-items: flex-end;
}
.add-icon {
  position: absolute;
  z-index: 8;
  margin-left: 35px;
}
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
  /* top: 10px; */
  right: 2px;
}
.inspection-program-block {
  padding: 10px;
  min-height: 100px;
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
  font-size: 15px;
  width: 15px;
  height: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
  position: relative;
  /* bottom: 3px; */
  
}
.icon-m .hover_prompt .icon + .icon-e .icon {
  width: 15px;
  height: 15px;
}
.icon-e {
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0);
  font-family: var(--font-awesome-5-pro-light);
  cursor: pointer;
  font-size: 15px;
  width: 15px;
  height: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
  position: relative;
  left: -1px;
  /* bottom: 5px; */
}
.card_circle {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid var(--dark);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: -2.5px;
}
.card_circle:hover {
  border: 1px solid var(--bright-orange);
}
.card_circle .circle {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: var(--white);
}
.select_card {
  border: 1px solid var(--weird-green);
  background: var(--weird-green);
}
.l-6 {
  left: -6px;
}
</style>