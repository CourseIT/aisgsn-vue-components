<template>
  <div>
    <Header />
      <main class="df">
        <Menu drawer='false' />
        <div class="content" :class="{ml320 : $store.state.menu_visibility}">
          <Breadcrumbs />
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
const Menu = () => import('@/components/Menu')
const Header = () => import('@/components/Header')
const Breadcrumbs = () => import('@/components/Breadcrumbs')
export default {
  name: 'DefaultLayout',
  components: {
    Menu,
    Header,
    Breadcrumbs
  },
  data: () => ({
    //
  }),
};
</script>

<style>
.ml320 {
  margin-left: 320px !important;
  transition: all 0.2s ease-out;
}
.df {
  display: flex;
}
.content {
  transition: all 0.2s ease-out;
  margin-top: 115px;
  margin-left: 15px;
  width: 100%;
  padding: 0px 15px;
}
</style>