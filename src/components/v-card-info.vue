<template>
  <div :class="[{'card__info': style_type != 'style2', 'card__info-style2': style_type == 'style2', 'read-only': readOnly == true}, dynamic_class]" @click="action">
    <slot>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    read_only: {},
    style_type: {},
    action: {
      default: function() {
        return () => ({})
      }
    },
    dynamic_class: {}
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
.card__info {
  padding: 9px 10px;
  border-radius: 4px;
  background-color: var(--white);
  margin-bottom: 6px;
  transition: all 0.1s ease;
}
.card__info:hover {
  cursor: pointer;
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
  background-color: var(--pale-lilac);
}
.card__info:hover + .text {
  color: var(--bright-orange);
}
</style>