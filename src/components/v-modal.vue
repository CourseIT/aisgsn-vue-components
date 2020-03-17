<template>
  <div v-if="visible" :class="{'read-only': readOnly == true}">
    <div class="modal">
      <slot>
        Modal
      </slot>
        <div class="fr">
          <button class="modal-button" v-if="action_delete" @click="action_delete">
            <v-icon icon="" class="icon" />
          </button>
          <button class="modal-button" @click="closeModal">
            <v-icon icon="" class="icon" />
          </button>
          <button class="modal-button" v-if="action_apply" @click="action_apply">
            <v-icon icon="" class="icon" />
          </button>
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
  }),
  mounted() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode == 27) {
        this.closeModal()
      }
    });
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
      this.$emit('input', false)
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
  
  margin-top: 31px;
}
.fr {
  display: flex;
  float: right;
}
.mt35 {
  margin-top: 35px;
}
.pl305 {
  margin-left: 305px;
}
.template_block-fix-modal {
  position: absolute;
  top: 0px;
  margin-left: -10px;
  z-index: 100;
}
.modal {
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
  background-color: var(--pale-lilac);
  border-radius: 4px;
  padding: 30px;
  padding-bottom: 2px;
  position: fixed;
  width: 50%;
  left: 0;
  top: 15vh;
  margin-left: 25%;
  z-index: 102;
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