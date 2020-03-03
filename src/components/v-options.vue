<template>
  <button v-if="visible" :class="{'read-only': readOnly == true}" @click="action" class="select-btn select_shadow">
    <div class="df aic w100 hover-btn jcc">
      {{option}}
    </div>
  </button>
</template>

<script>
export default {
  props : {
    option: {},
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
  },
}
</script>

<style scoped>
.select-btn {
  width: 100%;
  height: 36px;
  background-color: var(--white);
  display: flex;
  margin-bottom: 6px;
  text-align: center;
  align-items: center;
  font-family: Roboto;
  outline: none;
  border-radius: 4px;
  font-size: 0.6875rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: normal;
  color: var(--dark);
  cursor: pointer;
  z-index: 9;
}
.select-btn:hover .select__icon-colse{
  background: var(--pale-lilac);
}
.select-btn .select__icon-colse {
  padding-top: 0;
}
.select-btn:hover {
  background: var(--pale-lilac);
  color: var(--bright-orange);
}
.select_shadow {
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.22);
}
</style>