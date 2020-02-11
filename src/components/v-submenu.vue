<template>
  <div class="mb20">
    <transition name="notifications">
      <div v-if="notifications.length > 0 && !open_submenu" class="link_notifications">
        <div v-if="notifications.length > 999" class="notifications_plus">+</div>
        {{notificationsLength}}
      </div>
    </transition>
    <div class="df jcsb cp menu__title" @click="openSubmenu">
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
  computed: {
    notificationsLength() {
      return this.notifications.length > 999 ? 999 : this.notifications.length
    }
  },
  methods: {
    openSubmenu() {
      if(!this.only_title) {
        this.open_submenu = !this.open_submenu
      }
    }
  }
}
</script>

<style scoped>
.notifications_plus {
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  color: var(--white);
  position: absolute;
  margin-top: -7px;
  margin-left: 12px;
}
.link_notifications {
  position: absolute;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 10px;
  margin-top: 6px;
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
.notifications-enter-active {
  transition: all 0.4s ease;
  opacity: 0;
}
.notifications-leave-active {
  opacity: 0;
  transition: all 0.5s ease-in-out;
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
  height: 36px;
  display: flex;
  align-items: center;  
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