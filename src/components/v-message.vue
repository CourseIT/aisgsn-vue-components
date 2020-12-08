<template>
  <div>
    <div class="top__block df jcc">
      <div class="reverse w100">
        <transition-group name="v-transition-animate">
          <div v-for="(notification, index) in notifications" :key="index" class="message w100" :class="{'read-only': readOnly == true}">
            <div class="message__line" :style="`background: ${getColor(notification.status)}`"></div>
            <div class="message__text">
              <slot>
                {{notification.text}}
              </slot>
            </div>
          </div>
        </transition-group>
      </div>
    </div>
    <div v-if="text">
      <div class="message" :class="{'read-only': readOnly == true}">
        <div class="message__line" :style="`background: ${color}`"></div>
        <div class="message__text">
          <slot>
            {{text}}
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    read_only: {},
    text: {},
    status: {},
    notifications: {
      type: Array,
      default: () => {
        return []
      }
    },
    value: {},
    timeout: {
      default: 4000
    }
  },
  data: () => ({
    messages: [],
  }),
  mounted() {
    this.removeFirstEl()
  },
  watch: {
     notifications() {
        this.removeFirstEl()
     }
  },
  methods: {
    removeFirstEl() {
      let vm = this;
        if (this.notifications.length) {
          setTimeout(function () {
            window.console.log('remove');
            vm.notifications.splice(0, 1)
          }, vm.timeout)
        }
    },
    getColor(val) {
      switch (val) {
        case 'error':
          return '#ff3b30'
        case 'warning':
          return '#ffcc00'
        case 'success':
          return '#4cd964'
        case 'info':
          return '#007aff'
        default:
          return '#7893b1'
      }
    },
  },
  computed: {
    color() {
      switch (this.status) {
        case 'error':
          return '#ff3b30'
        case 'warning':
          return '#ffcc00'
        case 'success':
          return '#4cd964'
        case 'info':
          return '#007aff'
        default:
          return '#7893b1'
      }
    },
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
}
</script>

<style scoped>
.w100 {
  width: 100%;
}
.reverse {
  display: flex;
  flex-direction: column-reverse;
  max-width: 500px;
}
.top__block {
  position: fixed;
  z-index: 110;
  top: 0;
  left: 0;
  width: 30%;
  margin: 0 35%;
}
.message {
  display: inline-flex;
  border-radius: 4px;
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
  background-color: var(--white);
}
.message__line {
  width: 6px;
  margin-right: 20px;
  border-radius: 4px 0px 0px 4px;
}
.message__text {
  font-family: Roboto;
  font-size: 0.95rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  margin-bottom: 0px;
  padding: 20px 0px;
  margin-right: 20px;
}
.message__text p {
  margin-bottom: 0 !important;
}
.message__text h1 {
  margin-bottom: 0 !important;
}
.message__text h2 {
  margin-bottom: 0 !important;
}

.v-transition-animate-enter {
  transform: translateY(120px);
  opacity: 0;
}
.v-transition-animate-enter-active {
  transition: all .6s ease;
}
.v-transition-animate-enter-to {
  opacity: 1;
}
.v-transition-animate-leave {
  opacity: 1;
}
.v-transition-animate-leave-active {
  transition: transform .6s ease, opacity .6s, height .6s .2s;
}
.v-transition-animate-leave-to {
  opacity: 0;
}
</style>