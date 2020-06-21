<template>
  <div v-if="visible" :class="{'read-only': readOnly == true}" class="v-modal">
    <div class="modal" @click="closeModal">
      <div class="modal__block" @click="noCloseModal">
      <slot>
        Modal
      </slot>
      <div class="fr">
        <button class="modal-button" v-if="action_delete" @click="action_delete">
          <v-icon icon="" class="icon" :hover_color="true" />
        </button>
        <button class="modal-button mr-ml-0" @click="closeModal">
          <v-icon icon="" :hover_color="true" class="icon" />
        </button>
        <button class="modal-button" v-if="action_apply" @click="action_apply">
          <v-icon icon="" :hover_color="true" class="icon" />
        </button>
      </div>
    </div>
    </div>
    <transition name="modal">
      <div @click="closeModal"  class="modal__bg"></div>
    </transition>
  </div>
</template>

<script>
const VIcon = () => import('./v-icon')

export default {
  props: {
    read_only: {},
    visible: {
      default: true
    },
    action_delete: {},
    action_apply: {},
  },
  components: {
    VIcon,
  },
  data: () =>({
    modal_show: '',
    no_close: false
  }),
  mounted() {
    document.addEventListener("keydown", this.closeModalOnKey());
    document.getElementsByTagName('html')[0].style.overflow = "hidden";
    
  },
  beforeDestroy() {
    document.getElementsByTagName('html')[0].removeAttribute("style")
  },
  watch: {
    modal_show(val) {
      this.$emit('input', val)
    }
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
    closeModal() {
      if(this.no_close){
        this.modal_show = true
      } else {
        this.modal_show = false
      }
    },
    noCloseModal() {
      this.modal_show = true
      this.no_close = true
      setTimeout(()=>{
        this.no_close = false
      },0)
      
    },
    closeModalOnKey() {
      return (e) => {
        if (e.keyCode == 27) {
          this.closeModal()
        }
      }
    }
  }
}
</script>

<style scoped>
.modal-button {
  display: flex;
  align-items: center;
  margin: 10px;
  margin-top: 5px;
  margin-top: 25px;
  outline-color: var(--bright-orange);
  outline-width: 0.5px;
}
.mr-ml-0{
  margin-right: 0px;
  margin-left: 0px;
}
.fr {
  display: flex;
  float: right;
  margin-right: 40px;
}
.mt35 {
  margin-top: 35px;
}
.pl305 {
  margin-left: 305px;
}
.v-modal {
  z-index: 100;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
}
.modal {
  position: absolute;
  width: 100%;
  left: 0;
  z-index: 102;
}
.modal__block {
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
  background-color: var(--pale-lilac);
  border-radius: 4px;
  padding: 30px;
  padding-right: 0;
  padding-bottom: 90px;
  width: 50%;
  margin-top: 15vh;
  margin-bottom: 15vh;
  margin-left: 25%;
}
.v-modal::-webkit-scrollbar {
  width: 11px;
  height: 8px;
  background-color: rgba(0, 0, 0, 0);
}
.v-modal::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: var(--pale-lilac);
}
.modal__bg {
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
.close-block {
  position: fixed;
  z-index: 90;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
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