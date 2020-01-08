<template>
  <div>
    <Icon class="icon" icon="" />
    <div class="icon__desc">
      <span>Создать документ</span>
    </div>
  </div>
</template>

<script>
const Icon = () => import('../components/Icon')
export default {
  components: {
    Icon
  }
}
</script>

<style scoped>
.icon {
  font-family: var(--font-awesome-5-pro-light);
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.62;
  letter-spacing: normal;
  text-align: center;
  color: var(--dark);
  cursor: pointer;
  margin-top: 2px;
}
.icon:hover + .icon__desc {
  display: block;
}
.icon__desc {
  display: none;
  position: absolute;
  z-index: 9;
  width: 132px;
  height: 24px;
  padding: 6px 0px;
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
  margin-top: -65px;
  margin-left: -55px;
}
.icon__desc::after {
  content: '';
  position: absolute;
  top: 23px;
  left: 55px;
  display: inline-block;
  color: #fff;
  border: 8px solid transparent;	
  border-bottom: 8px solid #fff;
  transform: rotate(180deg);
}
</style>