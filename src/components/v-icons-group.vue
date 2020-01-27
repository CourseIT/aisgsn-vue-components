<template>
  <div class="icons-block">
    <slot name="main-icon">
      <v-icon class="icon1" :hover_shadow="true" :hover_color="true" icon="" />
    </slot>
      <div class="hover-icon">
        <div class="hover-icon__bg">
          <slot>
            <v-icon font_size="21px" :hover_color="true" icon="" />
          </slot>
        </div>
      </div>
    </div>
</template>

<script>
const VIcon = () => import('@/components/v-icon')

export default {
  components: {
    VIcon
  },
}
</script>

<style scoped>
.icons-block {
  display: inline-block;
  position: relative;
  bottom: 12px;
}
.icon1 {
  font-family: var(--font-awesome-5-pro-light);
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.1;
  letter-spacing: normal;
  text-align: left;
  color: #20262c;
  margin-top: 15px;
  cursor: pointer;
}
.icon1 .icon {
  cursor: pointer;
  z-index: 9;
  padding-left: 5px;
}
.hover-icon:hover {
  display: block;
  z-index: 1;
}
.hover-icon {
  position: absolute;
  display: none;
  width: 36px;
  text-align: center;
  padding-top: 10px;
}
.hover-icon::before {
  content: ''; 
  position: absolute;
  left: 8px; 
  top: -7px;
  border: 10px solid transparent;
  border-bottom: 10px solid #fff;
}
.icon1:hover + .hover-icon{
  display: block;
}
.hover-icon:hover + .icon1{
  background-color: var(--pale-grey);
  border-radius: 4px;
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
}
.hover-icon__bg {
  background-color: #fff;
  border-radius: 5px;
  padding: 2px 0px;
  transition: all 0.2s ease-out;
}
.hover-icon__bg:hover {
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
}
</style>