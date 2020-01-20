<template>
  <div class="mb20">
    <div class="df jcsb cp menu__title" @click="open_submenu = !open_submenu">
      <h1 :style="`font-size: ${text_size}px`">{{title}}</h1>
      <v-icon v-if="!only_title" class="icon__dots" icon="" :class="{'color-orange': open_submenu}" />
    </div>
    <transition name="submenu">
      <div class="submenu" v-if="open_submenu">
        <ul>
          <slot>
          </slot>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
const VIcon = () => import('@/components/v-icon')
export default {
  props: {
    title: {},
    text_size: {},
    only_title: {}
  },
  components: {
    VIcon
  },
  data: () => ({
    open_submenu: false,
  }),
}
</script>

<style scoped>
.submenu-enter-active {
  animation: open-submenu 1s;
}
.submenu-leave-active {
  animation: open-submenu 0.5s reverse;
  transition: all 0.5s ease-in-out;
  opacity: 0;
  padding-left: 20px;
}
@keyframes open-submenu {
  0% {
    max-height: 0px;
  }
  100% {
    max-height: 350px;
  }
}
.mb20 {
  margin-bottom: 20px;
}
.color-orange {
  color: var(--bright-orange);
}
.icon__dots {
  font-family: var(--font-awesome-5-pro);
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.47;
  letter-spacing: normal;
  text-align: left;
  transition: all 0.2s ease-out;
}
.menu__title {
  width: 100%;
  font-family: Roboto;
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.47;
  letter-spacing: 0.5px;
  text-align: left;
  text-transform: uppercase;
}
.menu__title:hover .icon__dots{
  color: var(--bright-orange)
}
.submenu {
  max-height: 350px;
  overflow-y: hidden;
}
.submenu-open {
  max-height: 400px;
}
.submenu ul {
  padding-left: 15px;
}
</style>