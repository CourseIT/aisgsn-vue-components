<template>
  <div class="search">
    <input type="text" placeholder="Материал">
    <div class="icon-btn">
      <Icon class="icon" icon="" />
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
.search {
  display: flex;
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
  border-radius: 4px;
  background-color: #fff;
  padding: 0px 15px;
  width: 33vw;
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
  font-family: var(--font-awesome-5-pro-regular);
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
  margin-left: 5px;
}
</style>