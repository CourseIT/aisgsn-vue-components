<template>
  <div>
    <Header />
    <Menu drawer='false' />
    <main class="df">
      <div class="content" :class="{ml320 : $store.state.menu_visibility}">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
const Menu = () => import('@/components/Menu')
const Header = () => import('@/components/Header')
export default {
  name: 'DefaultLayout',
  components: {
    Menu,
    Header
  },
  data: () => ({
    //
  }),
};
</script>

<style>
.ml320 {
  padding-left: 320px !important;
  transition: all 0.3s ease;
}
.df {
  display: flex;
}
.content {
  transition: all 0.3s ease;
  margin-top: 165px;
  margin-left: 15px;
  width: 100%;
  padding: 0px 15px;
}
</style>