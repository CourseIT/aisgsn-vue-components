<template>
  <div>
    <div class="icon" :style='{color: `${color}`}'>{{icon}}</div>
  </div>
</template>

<script>
export default {
  props: ['icon', 'color', 'desc', 'desc-theme']
}
</script>

<style scoped>
.icon {
  display: block;
  user-select: none;
  cursor: pointer;
}
.icon:hover + .desc__block {
  display: block;
}
.icon-desc__block {
  display: none;
  width: 400px;
  position: absolute;
  display: flex;
  align-items: center;
}
.icon__desc-light {
  display: none;
  position: relative;
  width: 200px;
  padding: 7px 0px;
  height: 24px;
  border-radius: 4px;
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
  background-color: var(--white);
  font-family: Roboto;
  font-size: 11px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: center;
  color: var(--dark);
  bottom: 70px;
  right: 85px;
}
.icon__desc-light::after {
  content: '';
  position: absolute;
  top: 22px;
  left: 90px;
  display: inline-block;
  color: #fff;
  border: 8px solid transparent;	
  border-bottom: 8px solid #fff;
  transform: rotate(180deg);
}
</style>