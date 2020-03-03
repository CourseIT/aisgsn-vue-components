<template>
  <div v-if="visible" :class="{'read-only': readOnly == true}" class="field-block">
    <v-search class="search"/>
    <div class="text-block">
      <v-template-text v-for="(text, index) in texts" padding_right="5px" :key="index" />
    </div>
    <div class="icons_text-block">
      <v-icon icon="" class="icon-text"/>
      <v-icon icon="" class="icon-text"/>
    </div>
  </div>
</template>

<script>
const VTemplateText = () => import('./v-template-text')
const VSearch = () => import('./v-search')
const VIcon = () => import('./v-icon')

export default {
  props: {
    read_only: {},
    visible: {
      default: true
    }
  },
  components: {
    VTemplateText,
    VSearch,
    VIcon
  },
  data: () =>({
    texts:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
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
.field-block {
  width: 621.5px;
}
.text-block {
  height: 502px;
  overflow-y: scroll;
  padding-bottom: 10px;
  padding-left: 10px;
  margin-left: -10px;
  padding-right: 15px;
}
.search {
  margin-bottom: 14.5px;
  padding-right: 26px;
}
.icons_text-block {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  
  padding-right: 26px;
}
.icon-text {
  cursor: pointer;
  font-family: var(--font-awesome-5-pro-light);
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.81;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
  margin-left: 22px;
  width: 29px;
}

.text-block::-webkit-scrollbar {
  width: 11px;
  height: 8px;
  background-color: rgba(0, 0, 0, 0);
}
.text-block::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: var(--pale-lilac);
}
</style>