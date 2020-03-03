<template>
  <transition name="modal_layout">
    <div v-if="visible" :class="{'read-only': readOnly == true}">
      <div class="modal_layout">
        <slot>
        </slot>
      </div>
      <div class="close_icon">
        <v-icon icon="" :action="closeModal" class="icon" />
      </div>
    </div>
  </transition>
</template>

<script>
const VIcon = () => import('./v-icon')

export default {
  props: {
    read_only: {},
    visible: {
      default: true
    }
  },
  components: { VIcon },
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

<style>
.modal_layout-enter-active, .modal_layout-leave-active{
  transition: all 0.5s ease;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
}
.modal_layout-enter, .modal_layout-leave-to{
  opacity: 0;
}
.modal_layout {
  position: fixed;
  z-index: 101;
  padding-top: 10vh;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px)
}
.close_icon {
  position: fixed;
  right: 10%;
  top: 5vh;
  color: #fff;
  font-size: 35px;
  z-index: 110;
}
.close_icon:hover {
  color: #c58b4a;
}
</style>