<template>
  <div class="analytics-year-block">
    <div class="df">
      <div class="block1-title">
        <span>2019</span>
      </div>
      <div class="block2-title">
        <span>2020</span>
      </div>
    </div>
    <div v-for="(item, index) in data" :key="index" class="df mb20">
      <div class="block1" :style="`background-color: ${item.color}60`">
        <span :style="`color: ${item.color}`">{{item.title}}</span>
      </div>
      <div class="block2" :style="`background-color: ${item.color}`">
        <span>{{item.title}}</span>
        <div class="plus">+x</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    data: [
      { title: 'xxx', color: '#4cd964' },
      { title: 'xxx', color: '#ffcc00' },
      { title: 'xxx', color: '#ffcc00' },
      { title: 'xxx', color: '#0079ff' },
      { title: 'xxx', color: '#0079ff' },
      { title: 'xxx', color: '#0079ff' },
      { title: 'xxx', color: '#0079ff' },
      { title: 'xxx', color: '#ffcc00' },
      { title: 'xxx', color: '#ffcc00' },
      { title: 'xxx', color: '#ffcc00' },
      { title: 'xxx', color: '#4cd964' },
      { title: 'xxx', color: '#ffcc00' },
      { title: 'xxx', color: '#4cd964' },
      { title: 'xxx', color: '#4cd964' },
    ]
  })
}
</script>

<style>
.df {
  display: flex;
}
.jcsa {
  justify-content: space-around;
}
.mb20 {
  margin-bottom: 20px;
}
.analytics-year-block {
  max-width: 250px;
  margin-right: 50px;
  margin-top: 20px;
}
.block1-title {
  font-family: Roboto;
  font-size: 15px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: center;
  color: var(--dark);
  width: 113px;
  padding: 5px;
  margin-bottom: 30px;
}
.block1-title span {
  margin-left: 7px;
}
.block2-title {
  font-family: Roboto;
  font-size: 15px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: center;
  color: var(--dark);
  width: 144px;
  padding: 5px;
  margin-bottom: 30px;
}
.block2-title span {
  margin-right: 10px;
}
.block1 {
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0);
  font-family: Roboto;
  font-size: 15px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: center;
  width: 113px;
  padding: 5px;
  background-color: var(--weird-green);
  clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 80% 100%, 0% 100%);
}
.block2 {
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0);
  font-family: Roboto;
  font-size: 15px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: center;
  width: 144px;
  padding: 5px;
  color: #fff;
  background-color: var(--weird-green);
  margin-left: -12px;
  clip-path: polygon(15% 0%, 100% 0%, 100% 0%, 100% 100%, 0% 100%);
}
.block2 span {
  margin-left: 12px;
}
.block2 .plus {
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0);
  font-family: Roboto;
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
  position: relative;
  display: inline-block;
  left: 45px;
  bottom: 10px;
}
</style>