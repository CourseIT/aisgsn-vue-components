<template>
  <div v-if="visible" :class="{'read-only': readOnly == true}">
    <div class="w262" :style="{'width': width}">
      <button @click="action" class="action-btn">
        <p class="action-btn__title">{{title}}</p>
        <v-icon class="action-btn__icon" :icon="icon" width="30"/>
      </button>
    </div>
  </div>
</template>

<script>
const VIcon = () => import('./v-icon')

export default {
  props: {
    title: {
      type: String,
    },
    width: {},
    icon: {},
    read_only: {},
    visible: {
      default: true
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
.w262 {
  width: 262px;
}
.action-btn {
  outline: none;
  border-radius: 4px;
  width: 100%;
  background: var(--white);
  height: 36px !important;
  display: flex;
  align-items: center;
  padding-right: 12px;
  margin-bottom: 6px;
  z-index: 9;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.22);
}
.action-btn:hover {
  background-color: var(--pale-lilac);
}
.action-btn:focus {
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.22);
}
.action-btn:hover .action-btn__title{
  color: var(--bright-orange);
}
.action-btn:focus .action-btn__title{
  color: var(--bright-orange);
}
.action-btn:hover .action-btn__icon {
  color: var(--bright-orange);
}
.action-btn:focus .action-btn__icon {
  color: var(--bright-orange);
}
.action-btn__title {
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
.action-btn__icon {
  font-family: var(--font-awesome-5-pro-light);
  font-size: 21px;
  width: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: normal;
  text-align: center;
  color: var(--dark);
}
</style>