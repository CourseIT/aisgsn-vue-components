<template>
  <div>
    <v-badge
        color="#fff"
        overlap
    >
      <template v-slot:badge>
        <span v-if="messages.length > 0" style="color: #21262c">{{ messages.length }}</span>
      </template>
      <v-btn class="notifications__btn" text icon>
        <Icon class="icon" icon="" color="#fff" />
      </v-btn>
    </v-badge>
  </div>
</template>

<script>
const Icon = () => import('./Icon')
export default {
  components: {
    Icon
  },
  data: () => ({
    messages: [{},{},{}],
  })
}
</script>

<style scoped>
.icon {
  font-family: var(--font-awesome-5-pro-light);
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.1;
  letter-spacing: normal;
  text-align: left;
}
.notifications__btn {
  background-color: #ff3b30;
}
</style>