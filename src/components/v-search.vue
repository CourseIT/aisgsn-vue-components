<template>
  <div class="search" :class="{w30: $store.state.menu_visibility}">
    <input type="text" placeholder="Материал">
    <div class="icon-btn">
      <v-icon class="icon" icon="" />
    </div>
  </div>
</template>

<script>
const VIcon = () => import('@/components/v-icon') 

export default {
  components: {
    VIcon
  }
}
</script>

<style scoped>
.w30 {
  width: 31.8vw !important;
}
.search {
  display: flex;
  transition: all 0.3s ease;
  width: 41.3vw;
}
.search input {
  font-family: Roboto;
  font-size: 15px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
  outline: none;
  height: 36px;
  border-radius: 4px 0px 0px 4px;
  background-color: #fff;
  padding: 0px 15px;
  width: 100%;
}
.icon-btn {
  width: 36px;
  height: 36px;
  background-color: var(--pale-lilac);
  border-radius: 0px 4px 4px 0px;
  margin: 0;
  display: flex;
  align-items: center;
}
.icon-btn:hover .icon {
  color: var(--bright-orange);
}
.icon {
  font-family: var(--font-awesome-5-pro-light);
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: normal;
  text-align: left;
  color: #000;
}
</style>