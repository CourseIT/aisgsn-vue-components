<template>
  <div class="card__info" @click="action">
    <slot>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    action: {
      default: function() {
        return () => ({})
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