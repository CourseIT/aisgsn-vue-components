<template>
  <div class="v-group-collapse">
    <div class="v-group-collapse__header">
      <p>{{title}}</p>
       <v-icon class="v-group-collapse__icon" :class="{'v-group-collapse__icon--active': showBlock, 'v-group-collapse__icon--no-titile': !title}" font_size="21px" :hover_color="true" icon="" :action="toggleShow"/>
    </div>
    <transition name="groupCollapse">
      <div class="v-group-collapse__show-block" v-if="showBlock">
        <div class=" mt10">
          <slot>
          </slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
const VIcon = () => import('./v-icon')

export default {
  props: {
    title: {
      default: ''
    },
    collapsed: {
      default: false
    }
  },
  components: {
    VIcon,
  },
  data: () => ({
    showBlock: false
  }),
  mounted() {
    if(this.collapsed == true) {
      this.showBlock = false
      this.$emit('input', true)
    } else {
      this.showBlock = true
      this.$emit('input', false)
    }
  },
  collapsed: {
    show_block(val) {
      this.showBlock = !val
    }
  },
  methods: {
    toggleShow() {
      this.showBlock = !this.showBlock
      this.$emit('input', !this.showBlock)
    }
  }
}
</script>

<style scoped>
.v-group-collapse {
  padding: 20px 15px;
  border-radius: 4px;
  background-color: var(--pale-lilac);
}
.v-group-collapse__header {
  display: flex;
  align-items: center;
}
.v-group-collapse__header p {
  font-family: Roboto;
  font-size: 24px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.13;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
  margin: 0px;
  padding: 0px;
  margin-right: 20px;
}
.v-group-collapse__icon {
  transition: all 0.2s ease;
  transform: rotate(180deg);
  margin-top: 3px;
}
.v-group-collapse__show-block {
  overflow: hidden;
}
.v-group-collapse__icon--active {
  transform: rotate(0deg);
}
.v-group-collapse__icon--no-titile {
  position: relative;
  right: 27px;
}
.groupCollapse-enter-active {
  animation: open-group 1s;
}
.groupCollapse-leave-active {
  animation: open-group 1s reverse;
  transition: all 1s ease-in-out;
  opacity: 0;
}
@keyframes open-group {
  0% {
    max-height: 0px;
  }
  100% {
    max-height: 2000px;
  }
}
</style>