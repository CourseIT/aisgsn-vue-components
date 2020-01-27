<template>
  <div>
    <div class="modal">
      <slot>
        Modal
      </slot>
        <div class="close-block" v-if="template_show || template_show2 || template_show3 || template_show4 || template_show5 || template_show6" @click="closeTemplate"></div>
        <div class="fr">
          <div @click="action_delete">
            <v-icon icon="" class="icon" />
          </div>
          <div @click="closeModal">
            <v-icon icon="" class="icon" />
          </div>
          <div @click="action_apply">
            <v-icon icon="" class="icon" />
          </div>
        </div>
    </div>
    <transition name="modal">
      <div @click="closeModal"  class="modal__bg" :class="{pl305: $store.state.menu_visibility}"></div>
    </transition>
  </div>
</template>

<script>
const VIcon = () => import('@/components/v-icon')

export default {
  props: {
    action_delete: {
      type: Function,
      default: () => ({})
    },
    action_apply: {
      type: Function,
      default: () => ({})
    },
  },
  components: {
    VIcon,
  },
  data: () =>({
    text: '',
    template_show: false,
    template_show2: false,
    template_show3: false,
    template_show4: false,
    template_show5: false,
    template_show6: false,
    texts:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  }),
  methods: {
    closeModal() {
      this.$emit('toggleModal', false)
    },
    closeTemplate(){
      this.template_show = false
      this.template_show2 = false
      this.template_show3 = false
      this.template_show4 = false
      this.template_show5 = false
      this.template_show6 = false
    },
  }
}
</script>

<style scoped>
.fr {
  display: flex;
  float: right;
  margin-right: 38px;
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
  padding-right: 5px;
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
  margin: 10px;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
  margin-top: 46px;
}
.icon-modal {
  cursor: pointer;
  height: 36px;
  font-family: var(--font-awesome-5-pro-light);
  font-size: 33px;
  margin: 0px 10px;
  text-align: center;
  position: relative;
  bottom: 0px;
  margin-top: 20px;
}
</style>