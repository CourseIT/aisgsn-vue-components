<template>
	<button class="btn">{{text}}</button>
</template>

<script>
export default {
	props: ['text']

}
</script>

<style scoped>
.btn{
	width: 132px;
  height: 34px;
	outline: none;
  border-radius: 4px;
  border: dashed 1px var(--dark);
	font-family: Roboto;
  font-size: 11px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.18;
  letter-spacing: normal;
  text-align: center;
  color: var(--dark);
	text-transform: uppercase;
	transition: all 0.1s ease-out;
}
.btn:hover {
	color: #fff;
	background-color: var(--bright-orange);
	border-color: var(--bright-orange);
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
}
</style>