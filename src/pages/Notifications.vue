<template>
  <div class="df">
    <div class="notifications" :class="{pl305: $store.state.menu_visibility}">
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
const Notification = () =>import('@/components/Notification')
export default {
  components: {
    Notification
  },
  data: () => ({
    
  }),
}
</script>

<style scoped>
.notifications {
  width: 66%;
  transition: all 0.3s ease;
  height: 75vh;
  overflow-x: auto;
  padding-right: 25px;
}
.notifications::-webkit-scrollbar {
  width: 11px;
  height: 8px;
  background-color: rgba(0, 0, 0, 0);
}
.notifications::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: var(--pale-lilac); 
}
.pl305 {
  padding-left: 305px;
}
</style>