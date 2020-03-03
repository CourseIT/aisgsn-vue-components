<template>
  <div v-if="visible" :class="{'read-only': readOnly == true}" class="notifications">
    <v-badge
        color="var(--white)"
        overlap
    >
      <template v-slot:badge>
        <span v-if="messages.length > 0" style="color: #21262c">{{ messages.length }}</span>
      </template>
      <v-btn class="notifications__btn" text icon>
        <v-icon class="icon" icon="" color="var(--white)" />
      </v-btn>
    </v-badge>
  </div>
</template>

<script>
const VIcon = () => import('./v-icon')

export default {
  props: {
    read_only: {},
    visible: {
      default: true
    }
  },
  components: {
    VIcon
  },
  data: () => ({
    messages: [{},{},{}],
  }),
  computed: {
    readOnly() {
      if(typeof (this.read_only) == 'function') {
        return this.read_only()
      } else if (this.read_only) {
        return this.read_only
      } else {
        return false
      }
    }
  },
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
  width: 50px !important;
  height: 50px !important;
  background-color: #ff3b30;
}
</style>