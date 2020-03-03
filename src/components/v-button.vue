<template class="db">
	<button v-if="visible" @click="action" class="btn" :class="{'read-only': readOnly == true, 'border': !background_color, 'clear-btn': type == 'reset'}" :style='{background: `${background_color}`, color: `${color}`}'>
    <slot>
      {{text}}
    </slot>
  </button>
</template>

<script>
export default {
	props: {
    text: {
      type: String,
      default: 'Кнопка'
    },
    type: {},
    background_color: {},
    color: {},
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
  }
}
</script>

<style scoped>
.border {
  border: dashed 1px var(--dark);
}
.btn:hover {
  border: solid 1px var(--bright-orange);
  background: var(--bright-orange) !important;
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
}
.btn{
	width: 130px;
  height: 36px;
	outline: none;
  border-radius: 4px;
	font-family: Roboto;
  font-size: 0.6875rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  cursor: pointer;
  color: var(--dark);
  padding: 5px;
  padding-top: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
	text-transform: uppercase;
	transition: all 0.1s ease-out;
}
.btn:hover {
	color: var(--white);
}

.clear-btn{
  background-color: var(--pale-lilac);
  border: 1px solid var(--pale-lilac);
}
.clear-btn:hover{
  background-color: var(--blue-grey) !important;
  border: 1px solid var(--blue-grey);
}
</style>