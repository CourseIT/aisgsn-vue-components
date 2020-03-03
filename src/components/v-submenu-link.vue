<template>
  <div v-if="visible" :class="{'read-only': readOnly == true}">
    <transition name="notifications">
      <div v-if="notifications.length > 0 && !open_submenu" class="link_notifications" :class="{'mt7': !only_title}">
        <div v-if="notifications.length > 999" class="notifications_plus">+</div>
        {{notificationsLength}}
      </div>
    </transition>
    <div class="df jcsb cp" @click="openSubmenu">
      <li @click="action" class="submenu__link t03s">{{text}}</li>
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
const VIcon = () => import ('./v-icon')

export default {
  props: {
    text: {},
    only_title: {},
    read_only: {},
    visible: {
      default: true
    },
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
    readOnly() {
      if(typeof (this.read_only) == 'function') {
        return this.read_only()
      } else if (this.read_only) {
        return this.read_only
      } else {
        return false
      }
    },
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
.mt7 {
  margin-top: 7px !important;
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
.notifications_plus {
  font-family: Roboto;
  font-size: 10px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  color: var(--white);
  position: absolute;
  margin-top: -6px;
  margin-left: 11px;
}
.link_notifications {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 7px;
  margin-top: 3px;
  background-color: #578bc8;
  font-family: Roboto;
  font-size: 10px;
  padding-bottom: 1px;
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
@keyframes submenu-link {
  0% {
    opacity: 0;
    padding-left: 40px;
  }
  100% {
    opacity: 1;
    padding-left: 0px;
  }
}
.submenu__link {
  font-family: Roboto;
  font-size: 0.9375rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: var(--blue-grey);
  list-style-type: none;
  margin: 5px 0px;
  cursor: pointer;
  animation: submenu-link 1s ease;
}
.submenu__link:hover {
  color: var(--bright-orange)
}
.submenu {
  overflow-y: hidden;
}
.submenu ul {
  padding-left: 15px;
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
</style>