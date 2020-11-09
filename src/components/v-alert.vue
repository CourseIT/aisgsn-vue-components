<template>
  <div v-if="visible" :class="{'read-only': readOnly == true}" class="v-alert">
    <div :class="{'alert': style_type != 'style2', 'alert-style2': style_type == 'style2'}">
      <div class="alert__text">
        <slot>
          {{text}}
        </slot>
      </div>
      <div class="fr">
        <button class="alert__button" @click="closeAlert">
          <v-icon icon="" :hover_color="true" width="21" height="21" class="icon" />
        </button>
        <button class="alert__button" v-if="action_apply" @click="ApplyAlert">
          <v-icon icon="" :hover_color="true" width="21" height="21" class="icon" />
        </button>
      </div>
    </div>
    <transition name="modal">
      <div @click="closeAlert"  class="alert__bg"></div>
    </transition>
  </div>
</template>

<script>
const VIcon = () => import('./v-icon')

export default {
  props: {
    style_type: {},
    read_only: {},
    visible: {
      default: true
    },
    action_close: {},
    action_apply: {},
    text: {}
  },
  components: {
    VIcon,
  },
  data: () =>({
  }),
  mounted() {
    document.getElementsByTagName('html')[0].style.overflow = "hidden";
  },
  beforeDestroy() {
    document.getElementsByTagName('html')[0].removeAttribute("style")
  },
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
  methods: {
    closeAlert() {
      this.$emit('input', false)
      setTimeout(()=>{
        this.action_close()
      }, 0)
    },
    ApplyAlert() {
      this.$emit('input', false)
      setTimeout(()=>{
        this.action_apply()
      }, 0)
    }
  }
}
</script>

<style scoped>
.alert__button {
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-left: 25px;
  margin-bottom: 17px;
}
.fr {
  display: flex;
  position: absolute;
  right: 0;
  bottom: 0;
  margin-right: 20px;
}
.mt35 {
  margin-top: 35px;
}
.pl305 {
  margin-left: 305px;
}
.v-alert {
  z-index: 100;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
}
.v-alert::-webkit-scrollbar {
  background-color: rgba(0, 0, 0, 0);
}
.v-alert::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0);
}
.alert {
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
  background-color: var(--pale-lilac);
  border-radius: 4px;
  padding-bottom: 2px;
  padding-right: 0;
  padding-top: 60px;
  padding-bottom: 60px;
  position: absolute;
  width: 30%;
  z-index: 102;
  min-height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.alert__bg {
  position: fixed;
  z-index: 101;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: 0.8;
  background-color: rgba(0, 0, 0, 1);
  backdrop-filter: blur(10px)
}
.alert__text{
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  font-size: 24px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.13;
  letter-spacing: normal;
  text-align: center;
  color: var(--dark);
}
.alert__text p {
  margin-bottom: 0;
  padding: 0px 20px;
}
.icon {
  font-family: var(--font-awesome-5-pro-light);
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0);
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.81;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
}
</style>