<template>
  <div>
    <div class="df inspection-program-block">
      <slot>
        <div class="w95">
          <p class="mb7 fwb">{{item.date}}</p>
          <p class="mb4">{{item.number}}</p>
          <p class="mb4">{{item.method}}</p>
          <p class="mb4">{{item.signature}}</p>
          <p>{{item.text}}</p>
        </div>
        <div>
          <v-icon icon="" class="icon-p"/>
          <div class="bottom-icon">
            <v-icon icon="" class="icon-p"/>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
const VIcon = () => import('@/components/v-icon')

export default {
  name: 'v-card-block',
  components: {
    VIcon
  },
  props: {
    item: {
      default: function () { 
        return {
          date: '20.08.20 – 28.08.20',
          number: 'Номер объекта контроля',
          method: 'Метод',
          signature: 'Подпись',
          text: 'Любая необходимая информация',
          id: 0
        }
      }
    }
  }
}
</script>

<style scoped>
.mb7 {
  margin-bottom: 6px !important;
}
.mb4  {
  margin-bottom: 4px !important;
}
.fwb {
  font-weight: 500 !important;
}
.bottom-icon{
  position: relative;
  top: 17px;
  right: 2px;
}
.inspection-program-block {
  padding: 6px 13px;
  height: 100px;
  border-radius: 4px;
  background-color: var(--white);
}
.inspection-program-block:hover {
  cursor: pointer;
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
}
.inspection-program-block p {
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0);
  font-family: Roboto;
  font-size: 11px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
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