<template>
  <div>
    <v-header />
    <v-menu drawer='false' />
    <main class="df">
      <div class="content" :class="{ml320 : $store.state.menu_visibility}">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
const VMenu = () => import('@/components/v-menu')
const VHeader = () => import('@/components/v-header')
export default {
  name: 'DefaultLayout',
  components: {
    VMenu,
    VHeader
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
  margin-top: 175px;
  margin-left: 15px;
  width: 100%;
  padding: 0px 15px;
}
</style>