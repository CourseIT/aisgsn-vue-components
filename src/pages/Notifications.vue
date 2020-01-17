<template>
  <div class="df">
    <div class="notifications" :class="{pl305: $store.state.menu_visibility}">
      <v-notification type="error"/>
      <v-notification type="warning"/>
      <v-notification type="success"/>
      <v-notification type="info"/>
      <v-notification type="error"/>
      <v-notification type="warning"/>
      <v-notification type="success"/>
      <v-notification type="info"/>
      <v-notification type="error"/>
      <v-notification type="warning"/>
      <v-notification type="success"/>
      <v-notification type="info"/>
      <v-notification type="error"/>
      <v-notification type="warning"/>
      <v-notification type="success"/>
      <v-notification type="info"/>
      <v-notification type="error"/>
      <v-notification type="warning"/>
      <v-notification type="success"/>
      <v-notification type="info"/>
    </div>
  </div>
</template>

<script>
const VNotification = () =>import('@/components/v-notification')
export default {
  components: {
    VNotification
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