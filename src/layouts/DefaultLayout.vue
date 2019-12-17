<template>
  <div>
    <Header />
      <main class="df">
        <Menu drawer='false' />
        <div class="content">
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
.df {
  display: flex;
}
.content {
  margin-top: 115px;
  margin-left: 27px;
}
</style>