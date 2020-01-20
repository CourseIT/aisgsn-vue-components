<template class="db">
	<button class="btn" :class="{'border': !background_color}" :style='{background: `${background_color}`, color: `${color}`}'>
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
    background_color: {},
    color: {}
  }
}
</script>

<style scoped>
.db {
  display: block;
}
.border {
  border: dashed 1px var(--dark);
}
.btn:hover {
  border: solid 1px var(--bright-orange);
  background: var(--bright-orange) !important;
}
.btn{
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
	width: 130px;
  height: 34px;
	outline: none;
  border-radius: 4px;
	font-family: Roboto;
  font-size: 11px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: center;
  color: var(--dark);
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
	text-transform: uppercase;
	transition: all 0.1s ease-out;
}
.btn:hover {
	color: #fff;
  opacity: 0.8;
}
</style>