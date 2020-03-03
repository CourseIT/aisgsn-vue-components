<template>
  <div v-if="visible" :class="{'read-only': readOnly == true}" class="notification">
    <div class="df">
      <v-btn class="notification__btn" :style="`background: ${color}`" text icon>
        <v-icon class="icon" :icon="icon" color="var(--white)" />
      </v-btn>
      <p class="notification__text"><strong class="mr5">{{title}} </strong> {{text}}</p>
    </div>
    <v-icon class="icon-close" icon="" :color="color" />
  </div>
</template>

<script>
const VIcon = () => import('./v-icon')

export default {
  props: {
    type: {},
    read_only: {},
    visible: {
      default: true
    }
  },
  components: {
    VIcon
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
    color() {
      switch (this.type) {
        case 'error':
          return '#ff3b30'
        case 'warning':
          return '#ffcc00'
        case 'success':
          return '#4cd964'
        case 'info':
          return '#007aff'
        default:
          return '#000'
      }
    },
    icon() {
      switch (this.type) {
        case 'error':
          return ''
        case 'warning':
          return ''
        case 'success':
          return ''
        case 'info':
          return ''
        default:
          return ''
      }
    },
    title() {
      switch (this.type) {
        case 'error':
          return 'Предупреждение!'
        case 'warning':
          return 'Внимание!'
        case 'success':
          return 'Успех!'
        case 'info':
          return 'Информация!'
        default:
          return 'title'
      }
    },
    text() {
      switch (this.type) {
        case 'error':
          return 'Красный индикатор предупреждает о негативной ситуации'
        case 'warning':
          return 'Желтый индикатор привлекает внимание к ситуации'
        case 'success':
          return 'Зеленый индикатор оповещает о чем-то позитивном'
        case 'info':
          return 'Синий индикатор информирует о каком-то нейтральном событии'
        default:
          return 'text'
      }
    }
  }
}
</script>

<style scoped>
.notification {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--white);
  border-radius: 35px 0px 0px 35px;
  margin-bottom: 10px;
}
.notification .v-btn__content {
  height: 50px !important;
}
.icon {
  font-family: var(--font-awesome-5-pro-light);
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.1;
  letter-spacing: normal;
  text-align: left;
}
.icon-close {
  font-family: var(--font-awesome-5-pro-light);
  float: right;
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.1;
  letter-spacing: normal;
  text-align: left;
  margin: 0px 14px;
  cursor: pointer;
}
.notification__btn {
  width: 50px !important;
  height: 50px !important;
  background: red;
}
.notification__text {
  margin-bottom: 0;
  display: flex;
  align-items: center;
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: center;
  color: var(--dark);
  margin-left: 17px;
}
</style>