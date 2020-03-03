<template>
  <div v-if="visible" :class="{'read-only': readOnly == true}">
    <transition name="notifications">
      <div v-if="notifications.length > 0" class="link_notifications">
        <div v-if="notifications.length > 999" class="notifications_plus">+</div>
        {{notificationsLength}}
      </div>
    </transition>
    <li @click="action" class="v-link">
      {{text}}
    </li>
  </div>
</template>

<script>
export default {
  props: {
    text: {},
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

}
</script>

<style scoped>
.v-link {
  font-family: Roboto;
  font-size: 0.75rem;
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
  margin-left: 5px;
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
.v-link:hover {
  color: var(--bright-orange)
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
  width: 17px;
  height: 17px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 30px;
  margin-top: -2px; 
  background-color: #578bc8;
  font-family: Roboto;
  font-size: 9px;
  padding-bottom: 1px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  color: var(--white);
}
@keyframes submenu-notifications {
  0% {
    opacity: 0;
    margin-left: 40px;
  }
  100% {
    opacity: 1;
    margin-left: 0px;
  }
}
</style>