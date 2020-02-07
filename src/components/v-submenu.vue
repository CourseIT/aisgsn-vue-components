<template>
  <div class="mb20">
    <div v-if="notifications.length > 0" class="link_notifications">{{notifications.length}}</div>
    <div class="df jcsb cp menu__title" @click="open_submenu = !open_submenu">
      <h1 @click="action">{{title}}</h1>
      <v-icon v-if="!only_title" font_size="26px" class="icon__dots" icon="" :class="{'color-orange': open_submenu}" />
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
    only_title: {},
    notifications: {
      default: function() {
        return () => []
      }
    },
    action: {
      default: function() {
        return () => ({})
      }
    }
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
.link_notifications {
  position: absolute;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 12px;
  background-color: #578bc8;
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  color: var(--white);
}
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
.menu__title h1{
  width: 100%;
  font-family: Roboto;
  font-size: 0.9375rem;
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