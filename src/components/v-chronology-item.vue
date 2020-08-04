<template>
  <div
    @click="action"
     class="chronology__circle"
    :class="{
      'grid-column-1-5-r': (index + 1) % 6 == 3,
      'grid-column-1-5-l': (index + 1) % 6 == 0,
      'grid-column-1-3': (index + 1) % 6 == 5 || (index + 1) % 6 == 1,
      'grid-column-3-5': (index + 1) % 6 == 2 || (index + 1) % 6 == 4,
    }"
  >
     <div class="circle__big-circle"
      :class="{
        'circle_active': status == 'active',
        'circle_error': status == 'error'
      }"
    >
      <p class="circle__date">{{date}}</p>
      <div class="circle__mini-circle" :class="{'mini-circle_error': status == 'error'}"></div>
      <p class="circle__text">{{text}}</p>
    </div>
    <div>
            
    </div>
  </div>
</template>

<script>
export default {
  props: {
    index: {},
    status:{},
    date:{},
    text:{},
    action: {
      default: function() {
        return () => ({})
      }
    }
  }
}
</script>

<style scoped>
.circle__big-circle {
  width: 86px;
  height: 86px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--pale-lilac);
  margin-bottom: 100px;
  cursor: pointer;
}
.circle__mini-circle {
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
  top: 45px;
}

.circle_active {
  background-color: var(--marigold) !important;
}
.circle_error {
  background-color: #ff3a3033 !important;
}
.mini-circle_error {
  background-color: var(--orangey-red) !important;
}

.grid-column-1-5-r {
  grid-column: 1 / 5;
  display: flex;
  justify-content: flex-end !important;
}
.grid-column-1-5-l {
  grid-column: 1 / 5;
  display: flex;
  justify-content: flex-start !important;
}
.grid-column-1-3 {
  grid-column: 1 / 3;
  justify-self: center;
  margin-left: 130px;
}
.grid-column-3-5 {
  grid-column: 3 / 5;
  justify-self: start;
  margin-left: 70px;
}

.grid-column-1-3::after {
  display: block;
  content: '';
  width: 350px;
  height: 0px;
  position: absolute;
  margin-top: -144px;
  margin-left: 49px;
  border-right: 1px dashed #ff000000;
  border-top: 1px dashed #ff000000;
  border-bottom: 2px dashed;
  border-style: dashed;
  border-radius: 0 0 0px 0;
}
.grid-column-1-5-r:after {
  display: block;
  content: '';
  width: 105px;
  height: 181px;
  position: absolute;
  /* margin-top: 50px;
  margin-left: -41px; */
  border-left: 1px dashed #ff000000;
  border-top: 1px dashed #ff000000;
  border-bottom: 2px dashed;
  border-right: 2px dashed;
  border-style: dashed;
  border-radius: 0px 0px 100px 0px;
  margin: 50px 41px 0px 0px;
}
.grid-column-1-5-r::before {
  display: block;
  content: '';
  width: 105px;
  height: 181px;
  position: absolute;
  /* margin-top: -143px;
  margin-left: -41px; */
  border-bottom: 1px dashed #ff000000;
  border-left: 1px dashed #ff000000;
  border-top: 2px dashed;
  border-right: 2px dashed;
  border-style: dashed;
  border-radius: 0px 100px 0px 0px;
  margin: -143px 41px 0px 0px;
}
.grid-column-1-5-l:after {
  display: block;
  content: '';
  width: 210px;
  height: 180px;
  position: absolute;
  margin-top: 51px;
  margin-left: 43px;
  border-top: 1px dashed #ff000000;
  border-right: 1px dashed #ff000000;
  border-bottom: 2px dashed;
  border-left: 2px dashed;
  border-style: dashed;
  border-radius: 0px 0px 0px 100px;
}
.grid-column-1-5-l::before {
  display: block;
  content: '';
  width: 210px;
  height: 180px;
  position: absolute;
  margin-top: -143px;
  margin-left: 43px;
  border-bottom: 1px dashed #ff000000;
  border-right: 1px dashed #ff000000;
  border-top: 2px dashed;
  border-left: 2px dashed;
  border-style: dashed;
  border-radius: 100px 0px 0px 0px;
}
</style>