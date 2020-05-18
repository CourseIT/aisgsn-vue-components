<template>
  <div class="chronology">
    <div v-for="(item,index) in list" :key="index"
      class="chronology__item"
      :class="{
          'grid-column_1-5_r': (index + 1) % 6 == 3,
          'grid-column_1-5_l': (index + 1) % 6 == 0,
          'grid-column_1-3': (index + 1) % 6 == 5 || (index + 1) % 6 == 1,
          'grid-column_3-5': (index + 1) % 6 == 2 || (index + 1) % 6 == 4,
        }"
    >
      <div class="chronology__circle"
        :class="{
          'circle-active': item.status == 'active',
          'circle-error': item.status == 'error'
        }"
      >
        <p class="circle__date">{{item.date}}</p>
        <div class="circle__mini_circle" :class="{'mini_circle-error': item.status == 'error'}"></div>
        <p class="circle__text">{{item.text}}</p>
      </div>
      <div>
        
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    list: {
      default: []
    }
  }
}
</script>

<style scoped>
.grid-column_1-5_r {
  grid-column: 1 / 5;
  display: flex;
  justify-content: flex-end !important;
  margin-right: 420px;
}
.grid-column_1-5_l {
  grid-column: 1 / 5;
  display: flex;
  justify-content: flex-start !important;
}
.grid-column_1-3 {
  grid-column: 1 / 3;
  justify-self: center;
}
.grid-column_3-5 {
  grid-column: 3 / 5;
  justify-self: start;
}


.grid-column_1-3::after {
  display: block;
  content: '';
  width: 26vw;
  height: 0px;
  position: absolute;
  margin-top: -144px;
  margin-left: 49px;
  border-right: 1px solid #ff000000;
  border-top: 1px solid #ff000000;
  border-bottom: 2px solid;
  border-style: dashed;
  border-radius: 0 0 0px 0;
}
.grid-column_1-5_r:after {
  display: block;
  content: '';
  width: 22vw;
  height: 181px;
  position: absolute;
  margin-top: 50px;
  margin-left: -41px;
  border-left: 1px solid #ff000000;
  border-top: 1px solid #ff000000;
  border-bottom: 2px solid;
  border-right: 2px solid;
  border-style: dashed;
  border-radius: 0px 0px 100px 0px;
}
.grid-column_1-5_r::before {
  display: block;
  content: '';
  width: 22vw;
  height: 181px;
  position: absolute;
  margin-top: -144px;
  margin-left: -41px;
  border-bottom: 1px solid #ff000000;
  border-left: 1px solid #ff000000;
  border-top: 2px solid;
  border-right: 2px solid;
  border-style: dashed;
  border-radius: 0px 100px 0px 0px;
}
.grid-column_1-5_l:after {
  display: block;
  content: '';
  width: 22vw;
  height: 180px;
  position: absolute;
  margin-top: 51px;
  margin-left: 43px;
  border-top: 1px solid #ff000000;
  border-right: 1px solid #ff000000;
  border-bottom: 2px solid;
  border-left: 2px solid;
  border-style: dashed;
  border-radius: 0px 0px 0px 100px;
}
.grid-column_1-5_l::before {
  display: block;
  content: '';
  width: 22vw;
  height: 180px;
  position: absolute;
  margin-top: -143px;
  margin-left: 43px;
  border-bottom: 1px solid #ff000000;
  border-right: 1px solid #ff000000;
  border-top: 2px solid;
  border-left: 2px solid;
  border-style: dashed;
  border-radius: 100px 0px 0px 0px;
}

.chronology {
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: repeat(4, 1fr);
}
.chronology__circle {
  width: 86px;
  height: 86px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--pale-lilac);


  margin-bottom: 100px;
}


.circle-active {
  background-color: var(--marigold) !important;
}
.circle-error {
  background-color: #ff3a3033 !important;
}
.mini_circle-error {
  background-color: var(--orangey-red) !important;
}
.circle__mini_circle {
  width: 13px;
  height: 13px;
  border: solid 1px #1d1d1b;
  border-radius: 50%;
  background-color: var(--white);
  position: absolute;
  z-index: 8;
}
.circle__date {
  min-width: 60px;
  max-width: 70px;
  font-family: Roboto;
  font-size: 12px;
  text-align: left;
  color: var(--dark);
  position: relative;
  left: 125px;
  bottom: 20px;
}
.circle__text {
  min-width: 150px;
  max-width: 151px;
  height: 36px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
  position: relative;
  left: 67px;
  top: 40px;
}
</style>