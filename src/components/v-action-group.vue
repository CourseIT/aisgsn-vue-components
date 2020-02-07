<template>
<div>
  <div class="action-group" :style="{'width': width}">
    <button @click="show_btn = !show_btn" class="action-main-btn">
      <p class="action__title">{{title}}</p>
      <v-icon class="action__icon" icon="" width="21"/>
    </button>
    <div @click="show_btn = false" class="action-buttons" :style="{'width': width}" v-if="show_btn">
      <slot>
        <v-action-button title="Подписать документ" icon=""/>
        <v-action-button title="Вернуть на доработку" icon=""/>
      </slot>
    </div>
  </div>
  <div v-if="show_btn" @click="show_btn = false" class="action-bg"></div>
</div>
</template>

<script>
const VIcon = () => import('@/components/v-icon')
const VActionButton = () => import('@/components/v-action-button')

export default {
  props: ['title', 'width'],
  components: {
    VIcon,
    VActionButton
  },
  data: () =>({
    show_btn: false,
  }),
  methods: {
    test() {
      window.console.log('test')
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
  margin-bottom: 0;
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