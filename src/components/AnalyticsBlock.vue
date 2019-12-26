<template>
  <div class="analytics-block">
    <div class="df">
      <div class="df mr50">
        <div class="block1-title">
          <p>{{analytics.year[0]}}</p>
        </div>
        <div class="block2-title">
          <p>{{analytics.year[1]}}</p>
        </div>
      </div>
      <div  v-if="analytics.title" class="mt22mr10">
        <div class="main-dot"></div>
        <div class="border-y"></div>
        <div class="df m-d-b">
          <div class="dot"></div>
          <div class="border-x"></div>
        </div>
      </div>
      <div v-if="analytics.title" class="title-text">
        <h1 class="analytics-title">{{analytics.title}}</h1>
        <h1 class="analytics-title">{{analytics.desc}}</h1>
      </div>
    </div>
    <div class="df" v-for="(item, index) in analytics.list" :key="index">
      <div class="df mr70">
        <div class="block1" :style="`background-color: ${item.color}60`">
          <span :style="`color: ${item.color}`">{{item.x}}</span>
        </div>
        <div class="block2" :style="`background-color: ${item.color}`">
          <span>{{item.x}}</span>
          <div class="plus">{{item.plus}}</div>
        </div>
      </div>
      <div :class="{mr25: item.section.length == 3, mr63: item.section.length == 5, mr100: item.section.length == 7}">
        <div class="df aic">
          <div v-if="item.section !== '1.1'" class="border-yy"></div>
          <div v-if="item.section !== '1.1' && item.section.length == 5" class="border-yy r38"></div>
          <div v-if="item.section !== '1.1' && item.section.length == 7" class="border-yy r37"></div>
          <div v-if="item.section !== '1.1' && item.section.length == 7" class="border-yy r76"></div>
            <div>
              <div v-if="item.section === '1.1' && item.section.length == 3" class="dot-r1"></div>
              <div v-if="item.section !== '1.1' && item.section.length == 3" class="dot-r2"></div>
              <div v-if="item.section !== '1.1' && item.section.length == 5" class="dot-r3"></div>
              <div v-if="item.section !== '1.1' && item.section.length == 7" class="dot-r4"></div>
              <div class="border-x"></div>
            </div>
            <div :class="{opacityCircleX1: item.section.length == 3, opacityCircleX2: item.section.length == 5, opacityCircleX3: item.section.length == 7}" :style="`background-color: ${item.color}60`">
              <div :class="{circleX1: item.section.length == 3, circleX2: item.section.length == 5, circleX3: item.section.length == 7}" :style="`background-color: ${item.color}`">
                {{item.circle_text}}
              </div>
            </div>
            <span :class="{liTitle: item.section.length == 3, liText: item.section.length >= 4}">{{item.section}}</span>
            <span :class="{liTitle: item.section.length == 3, liText: item.section.length >= 4}">{{item.text}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    analytics: {
      title: 'РАЗДЕЛ 1.',
      desc: 'Сведения о количестве проведенных проверок юридических лиц и индивидуальных предпринимателей',
      year: ['2019', '2020'],
      list: [
        {
          x: 'xxx',
          plus: '+x',
          circle_text : 'XXX',
          color: '#4cd964',
          section: '1.1',
          text: 'Общее количество внеплановых проверок - всего, в том числе по следующим основаниям:'
        },
        {
          x: 'xxx',
          plus: '+x',
          circle_text : 'XX',
          color: '#ffcc00',
          section: '1.1.1',
          text: 'по контролю за исполнением предписаний, выданных по результатам проведенной ранее проверки'
        },
        {
          x: 'xxx',
          plus: '+x',
          circle_text : 'XX',
          color: '#ffcc00',
          section: '1.1.2',
          text: 'по заявлениям (обращениям) физических и юридических лиц, по информации органов государственной власти, местного самоуправления, средств массовой информации об указанных фактах - всего, в том числе:'
        },
        {
          x: 'xxx',
          plus: '+x',
          circle_text : 'XX',
          color: '#0079ff',
          section: '1.1.2.1',
          text: 'о возникновении угрозы причинения вреда жизни, здоровью граждан, вреда животным, растениям, окружающей среде, объектам культурного наследия (памятникам истории и культуры) народов Российской Федерации, безопасности государства, а также угрозы чрезвычайных ситуаций Природного и техногенного характера'
        },
        {
          x: 'xxx',
          plus: '+x',
          circle_text : 'XX',
          color: '#0079ff',
          section: '1.1.2.2',
          text: 'о причинении вреда жизни и здоровью граждан, вреда животным,  растениям, окружающей среде, объектам культурного наследия (памятникам истории и культуры) народов Российской Федерации, имуществу физических и юридических лиц, безопасности государства, а также возникновение чрезвычайных ситуаций природного и техногенного характера'
        },
        {
          x: 'xxx',
          plus: '+x',
          color: '#0079ff',
          circle_text : 'XX',
          section: '1.1.2.3',
          text: 'о нарушении прав потребителей (в случае обращения граждан, права которых нарушены)'
        },
        {
          x: 'xxx',
          plus: '+x',
          circle_text : 'XX',
          color: '#0079ff',
          section: '1.1.2.4',
          text: 'о нарушении трудовых прав граждан'
        },
        {
          x: 'xxx',
          plus: '+x',
          circle_text : 'XX',
          color: '#ffcc00',
          section: '1.1.3',
          text: 'на основании приказов (распоряжений) руководителя органа государственного Контроля (надзора),  изданного в соответствии с поручениями Президента Российской Федерации, Правительства Российской Федерации'
        },
        {
          x: 'xxx',
          plus: '+x',
          circle_text : 'XX',
          color: '#ffcc00',
          section: '1.1.4',
          text: 'на основании приказов (распоряжений) руководителя органа государственного контроля (надзора),  изданного в соответствии с требованием органов прокуратуры'
        },
        {
          x: 'xxx',
          plus: '+x',
          circle_text : 'XX',
          color: '#ffcc00',
          section: '1.1.5',
          text: 'по иным основаниям, установленным законодательством Российской Федерации'
        },
        {
          x: 'xxx',
          plus: '+x',
          circle_text : 'XXX',
          color: '#4cd964',
          section: '1.2',
          text: 'Количество проверок, проведенных совместно с другими органами Государственного контроля (надзора), муниципального контроля'
        },
        {
          x: 'xxx',
          plus: '+x',
          circle_text : 'XX',
          color: '#ffcc00',
          section: '1.2.1',
          text: 'из них внеплановых'
        },
        {
          x: 'xxx',
          plus: '+x',
          circle_text : 'XXX',
          color: '#4cd964',
          section: '1.3',
          text: 'Общее количество документарных проверок'
        },
        {
          x: 'xxx',
          plus: '+x',
          circle_text : 'XXX',
          color: '#4cd964',
          section: '1.4',
          text: 'Общее количество выездных проверок'
        },
      ]
    }
  }),
}
</script>

<style scoped>
.mt22mr10{
  margin-top: 22px;
  margin-right: 10px;
}
.df {
  display: flex;
}
.analytics-title {
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0);
  font-family: Roboto;
  font-size: 15px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
  max-width: 470px;
}
ul {
  padding: 0px;
}
li {
  list-style-type: none;
  margin: 20px 0px;
}
.main-dot {
  width: 17px;
  height: 17px;
  border: solid 1px #1d1d1b;
  background-color: #fff;
  border-radius: 50%;
}
.m-d-b {
  position: relative;
  top: 63px;
  left: 8px;
}
.m-d-b .dot {
  bottom: 5px;
  right: 2px;
}
.dot {
  width: 5px;
  height: 5px;
  background-color: var(--dark);
  border-radius: 50%;
  position: relative;
  right: 3px;
}
.dot-r1 {
  width: 5px;
  height: 5px;
  background-color: var(--dark);
  border-radius: 50%;
  position: relative;
  right: 1px;
}
.dot-r2 {
  width: 5px;
  height: 5px;
  background-color: var(--dark);
  border-radius: 50%;
  position: relative;
  right: 2px;
}
.dot-r3 {
  width: 5px;
  height: 5px;
  background-color: var(--dark);
  border-radius: 50%;
  position: relative;
  right: 3px;
}
.dot-r4 {
  width: 5px;
  height: 5px;
  background-color: var(--dark);
  border-radius: 50%;
  position: relative;
  right: 4px;
}
.border-y {
  width: 1px;
  height: 61px;
  border-left: 1px dashed;
  position: relative;
  left: 8px;
  margin-bottom: -60px;
}
.border-yy {
  width: 1px;
  height: 60px;
  border-left: 1px dashed;
  position: relative;
  bottom: 30px;
  right: -1px;
}
.border-x {
  height: 1px;
  width: 20px;
  border-top: 1px dashed;
  position: relative;
  bottom: 3px;
}



.r38{
  right: 38px;
}
.r37{
  right: 37px;
}
.r76{
  right: 76px;
}

.aic {
  align-items: center;
}
.opacityCircleX1 {
  display: inline-block;
  padding: 4px;
  border-radius: 50%;
  width: 38px;
  height: 38px;
}
.circleX1 {
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0);
  font-family: Roboto;
  font-size: 9px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: right;
  color: #fff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  padding: 8px 6px;
  z-index: 99;
  position: relative;
}
.opacityCircleX2 {
  display: inline-block;
  padding: 4px;
  border-radius: 50%;
  width: 33px;
  height: 33px;
}
.circleX2 {
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0);
  font-family: Roboto;
  font-size: 9px;
  font-weight: normal;
  font-stretch: normal;
  text-align: center;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  color: #fff;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  padding: 6px;
  z-index: 99;
  position: relative;
}
.opacityCircleX3 {
  display: inline-block;
  padding: 3px;
  border-radius: 50%;
  width: 26px;
  height: 26px;
}
.circleX3 {
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0);
  font-family: Roboto;
  font-size: 9px;
  font-weight: normal;
  font-stretch: normal;
  text-align: center;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  width: 20px;
  height: 20px;
  color: #fff;
  border-radius: 50%;
  padding: 3px 4px;
  z-index: 99;
  position: relative;
}

.liTitle {
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0);
  font-family: Roboto;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
  display: flex;
  align-items: center;
  margin: 12px 5px;
}
.liText {
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0);
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
  margin: 0px 5px;
}
.mr25 {
  padding-left: 25px;
}
.mr63 {
  padding-left: 63px;
}
.mr100 {
  padding-left: 100px;
}
.mr50 {
  margin-right: 50px;
}
.mr70 {
  margin-right: 70px;
  margin-top: 10px;
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
.block1-title p {
  margin-left: 7px;
  padding-top: 20px;
  margin-bottom: 0;
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
.block2-title p {
  margin-right: 10px;
  padding-top: 20px;
  margin-bottom: 0;
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
  height: 30px;
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
  height: 30px;
  margin-bottom: 20px;
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