<template>
  <div v-if="visible" :class="{'read-only': readOnly == true}">
    <div class="template-block" :class="{'tb-shadow': shadow}">
      <div @click="action" class="w90">
        <p>{{text}}</p>
      </div>
      <div class="icons-block">
        <v-icon :action="action_minus" icon="" height="11" width="11" class="icon-b mb15"/>
        <div class="handle">
          <v-icon icon="" height="15" width="11" class="icon-b drag-icon"/>
        </div>
      </div>
    </div>
    <div class="bg"></div>
  </div>
</template>

<script>
const VIcon = () => import('./v-icon')

export default {
  props: {
    shadow: {},
    read_only: {},
    text: {
      default: function() {
        return 'Шаблонный текст'
      }
    },
    visible: {
      default: true
    },
    action: {
      default: function() {
        return () => ({})
      }
    },
    action_minus: {
      default: function() {
        return () => ({})
      }
    }
  },
  components: {
    VIcon
  },
  data: () => ({
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

<style>
.mb15 {
  margin-top: 5px;
  margin-bottom: 10px;
}
.drag-icon div .icon{
  cursor: grab;
}
.drag-icon div .icon:active{
  cursor: grabbing;
}
.tb-shadow{
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
}
.template-block:hover {
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
}
.template-block:hover .icon-b {
  color: var(--bright-orange);
}
.template-block {
  padding-top: 2px;
  display: flex;
  justify-content: space-between;
  background: var(--white);
  padding: 4px 10px;
  padding-right: 11px;
  border-radius: 4px;
  width: 100%;
  height: 50px;
  z-index: 8;
  position: relative;
  overflow: auto;  
  transition: all 0.2s ease-out;
  cursor: pointer;
  margin-bottom: 6px;
}
.template-block:hover{
  background: var(--pale-lilac);
}
.template-block p {
  font-family: Roboto;
  font-size: 0.600rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.89;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
}
.template-block:hover p {
  color: var(--bright-orange);
}
.icon-b {
  font-weight: 300;
  font-size: 15px;
  font-family: var(--font-awesome-5-pro-light);
}
</style>