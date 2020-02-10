<template>
<div>
  <div v-if="notifications.length > 0" class="link_notifications">
    <div v-if="notifications.length > 999" class="notifications_plus">+</div>
    {{notificationsLength}}
  </div>
  <li @click="action" class="submenu__link t03s">{{text}}</li>
</div>
</template>

<script>
export default {
  props: {
    text: {},
    text_size: {},
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
    notificationsLength() {
      return this.notifications.length > 999 ? 999 : this.notifications.length
    }
  },
}
</script>

<style scoped>
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
  left: 27px;
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
  animation: submenu-notifications 1s ease;
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
</style>