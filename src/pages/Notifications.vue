<template>
  <div class="df">
    <div class="w66" :class="{pl305: $store.state.menu_visibility}">
      <Notification type="error"/>
      <Notification type="warning"/>
      <Notification type="success"/>
      <Notification type="info"/>
      <Notification type="error"/>
      <Notification type="warning"/>
      <Notification type="success"/>
      <Notification type="info"/>
      <Notification type="error"/>
      <Notification type="warning"/>
      <Notification type="success"/>
      <Notification type="info"/>
      <Notification type="error"/>
      <Notification type="warning"/>
      <Notification type="success"/>
      <Notification type="info"/>
      <Notification type="error"/>
      <Notification type="warning"/>
      <Notification type="success"/>
      <Notification type="info"/>
    </div>
  </div>
</template>

<script>
const Notification = () =>import('../components/Notification')
export default {
  components: {
    Notification
  },
  data: () => ({
    
  }),
}
</script>

<style scoped>
.w66 {
  width: 66%;
  transition: all 0.3s ease;
  height: 75vh;
  overflow-x: auto;
  padding-right: 25px;
}
.pl305 {
  padding-left: 305px;
}
</style>