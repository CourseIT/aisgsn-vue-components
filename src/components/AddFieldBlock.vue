<template>
  <div>
    <div class="df inspection-program-block">
      <div class="w95">
        <p class="mb7 fwb">20.08.20 – 28.08.20</p>
        <p class="mb4">Любая необходимая информация</p>
        <p class="mb4">Любая необходимая информация</p>
        <p>Любая необходимая информация</p>
      </div>
      <div>
        <Icon icon="" class="icon-p"/>
        <div class="top10" @click="removeItem(item)">
          <Icon icon="" class="icon-p"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const Icon = () => import('../components/Icon')

export default {
  components: {
    Icon
  },
  props: ['item'],
  methods: {
    addItem() {
      this.item += 1
      this.inspection_items.push(this.item)
    },
    removeItem(item) {
      this.inspection_items = this.inspection_items.filter( x => x != item )
    }
  }
}
</script>

<style scoped>
.df {
  display: flex;
}
.fwb {
  font-weight: 500 !important;
}
.top10{
  position: relative;
  top: 10px;
}
.w95 {
  width: 95%;
}
.inspection-program-block {
  padding: 7px 13px;
  border-radius: 4px;
  background-color: var(--white);
}
.inspection-program-block p {
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0);
  font-family: Roboto;
  font-size: 11px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
  margin-bottom: 0;
}
.icon-p {
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0);
  font-family: var(--font-awesome-5-pro-light);
  cursor: pointer;
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
}
</style>