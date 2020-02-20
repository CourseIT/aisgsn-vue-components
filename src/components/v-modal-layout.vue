<template>
  <div >
    <div class="modal_layout" :class="{ml312: $store.state.menu_visibility}">
      <slot>
      </slot>
    </div>
    <transition name="modal">
      <div class="modal__bg" :class="{ml312: $store.state.menu_visibility}"></div>
    </transition>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.modal_layout {
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
.modal_layout__bg {
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
</style>