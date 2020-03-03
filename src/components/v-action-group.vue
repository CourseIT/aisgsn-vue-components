<template>
  <div v-if="visible" :class="{'read-only': readOnly == true}">
    <div class="action-group" :style="{'width': width}">
      <div @click="show_btn = !show_btn" class="action-main-btn">
        <p class="action__title">{{title}}</p>
        <v-icon class="action__icon" icon="" width="21"/>
      </div>
      <div @click="show_btn = false" class="action-buttons" :style="{'width': width}" v-if="show_btn">
        <div>
          <slot>
            test
          </slot>
        </div>
      </div>
    </div>
    <div v-if="show_btn" @click="show_btn = false" class="action-bg"></div>
  </div>
</template>

<script>
const VIcon = () => import('./v-icon')

export default {
  props: {
    title: {},
    width: {},
    read_only: {},
    visible: {
      default: true
    }
  },
  components: {
    VIcon
  },
  data: () => ({
    show_btn: false,
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
    }
  }
}
</script>

<style scoped>
.action-group {
  width: 262px;
  z-index: 8;
}
.action-main-btn {
  outline: none;
  border-radius: 4px;
  background-color: var(--pale-lilac);
  width: 100%;
  height: 36px !important;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-right: 12px;
  margin-bottom: 6px;
  z-index: 8;
}
.action-main-btn:hover {
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.22) !important;
}
.action-main-btn:focus {
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.22) !important;
}
.action-main-btn:hover .action__icon {
  color: var(--bright-orange);
}
.action-main-btn:focus .action__icon {
  color: var(--bright-orange);
}
.action__title {
  font-family: Roboto;
  font-size: 0.6875rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: normal;
  text-align: center;
  color: var(--dark);
  width: 100%;
  margin-bottom: 0 !important;
}
.action__icon {
  font-family: var(--font-awesome-5-pro-light);
  font-size: 33px;
  width: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: normal;
  text-align: center;
  color: var(--dark);
}
.action-buttons {
  position: absolute;
  z-index: 8;
}
.action-bg {
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}
</style>