<template>
  <div class="analytics-block">
    <div class="df">
      <div class="mt22mr10">
        <div class="main-dot"></div>
        <div class="border-y"></div>
        <div class="df m-d-b">
          <div class="dot"></div>
          <div class="border-x"></div>
        </div>
      </div>
      <div class="title-text">
        <h1 class="analytics-title">{{analytics.title}}</h1>
        <h1 class="analytics-title">{{analytics.desc}}</h1>
      </div>
    </div>
    <ul class="ml30 df">
      <div class="border-y1"></div>
      <div>
        <li v-for="(list, index) in analytics.lists" :key="index">

          <div class="df color-block1">
            <div class="block1" :style="`background-color: red`">
              <span :style="`color: red`">XXX</span>
            </div>
            <div class="block2" :style="`background-color: red`">
              <span>XXX</span>
              <div class="plus">+x</div>
            </div>
          </div>

          <div class="df">
            <div class="dot"></div>
            <div class="border-x"></div>
            <div class="opacity-circle-x1">
              <div class="circle-x1">
                {{list.x}}
              </div>
            </div>
            <span class="li-title">{{list.number}}</span>
            <span class="li-title">{{list.title}}</span>
          </div>
          <ul class="ml32 df">
            <div class="border-y2"></div>
            <div>
              <li v-for="(sublist, index) in list.list" :key="index">

                <div class="df color-block2">
                  <div class="block1" :style="`background-color: red`">
                    <span :style="`color: red`">XXX</span>
                  </div>
                  <div class="block2" :style="`background-color: red`">
                    <span>XXX</span>
                    <div class="plus">+x</div>
                  </div>
                </div>


                <div class="df">
                  <div class="dot"></div>
                  <div class="border-x"></div>
                  <div class="opacity-circle-x2">
                    <div class="circle-x2">
                      {{sublist.x}}
                    </div>
                  </div>
                  <span class="li-text">{{sublist.number}}</span>
                  <span class="li-text">{{sublist.title}}</span>
                </div>
                <ul class="ml27 df">
                  <div class="border-y3"></div>
                  <div>
                    <li v-for="(subsublist, index) in sublist.list" :key="index">

                      <div class="df color-block3">
                        <div class="block1" :style="`background-color: red`">
                          <span :style="`color: red`">XXX</span>
                        </div>
                        <div class="block2" :style="`background-color: red`">
                          <span>XXX</span>
                          <div class="plus">+x</div>
                        </div>
                      </div>


                      <div class="df">
                        <div class="df">
                          <div class="dot"></div>
                          <div class="border-x"></div>
                          <div class="opacity-circle-x3">
                            <div class="circle-x3">
                              {{subsublist.x}}
                            </div>
                          </div>
                        </div>
                        <span class="li-text">{{subsublist.number}}</span>
                        <span class="li-text">{{subsublist.title}}</span>
                      </div>
                    </li>
                  </div>
                </ul>
              </li>
            </div>
          </ul>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    analytics: {
      title: 'РАЗДЕЛ 1.',
      desc: 'Сведения о количестве проведенных проверок юридических лиц и индивидуальных предпринимателей',
      lists: [
        {
          x: 'XXX',
          number: '1.1',
          title: 'Общее количество внеплановых проверок - всего, в том числе по следующим основаниям:',
          list: [
            {
              x: 'XX',
              number: '1.1.1',
              title: 'по контролю за исполнением предписаний, выданных по результатам проведенной ранее проверки',
              list: []
            },
            {
              x: 'XX',
              number: '1.1.2',
              title: 'по заявлениям (обращениям) физических и юридических лиц, по информации органов государственной власти, местного самоуправления, средств массовой информации об указанных фактах - всего, в том числе:',
              list: [
                {
                  x: 'XX',
                  number: '1.1.2.1',
                  title: 'о возникновении угрозы причинения вреда жизни, здоровью граждан, вреда животным, растениям, окружающей среде, объектам культурного наследия (памятникам истории и культуры) народов Российской Федерации, безопасности государства, а также угрозы чрезвычайных ситуаций Природного и техногенного характера'
                },
                {
                  x: 'XX',
                  number: '1.1.2.2',
                  title: 'о причинении вреда жизни и здоровью граждан, вреда животным,  растениям, окружающей среде, объектам культурного наследия (памятникам истории и культуры) народов Российской Федерации, имуществу физических и юридических лиц, безопасности государства, а также возникновение чрезвычайных ситуаций природного и техногенного характера'
                },
                {
                  x: 'XX',
                  number: '1.1.2.3',
                  title: 'о нарушении прав потребителей (в случае обращения граждан, права которых нарушены)'
                },
                {
                  x: 'XX',
                  number: '1.1.2.4',
                  title: 'о нарушении трудовых прав граждан'
                }
              ]
            },
            {
              x: 'XX',
              number: '1.1.3',
              title: 'на основании приказов (распоряжений) руководителя органа государственного Контроля (надзора),  изданного в соответствии с поручениями Президента Российской Федерации, Правительства Российской Федерации'
            },
            {
              x: 'XX',
              number: '1.1.4',
              title: 'на основании приказов (распоряжений) руководителя органа государственного контроля (надзора),  изданного в соответствии с требованием органов прокуратуры'
            },
            {
              x: 'XX',
              number: '1.1.5',
              title: 'по иным основаниям, установленным законодательством Российской Федерации'
            }
          ]
        },
        {
          x: 'XXX',
          number: '1.2',
          title: 'Количество проверок, проведенных совместно с другими органами Государственного контроля (надзора), муниципального контроля',
          list: [
            {
              x: 'XX',
              number: '1.2.1',
              title: 'из них внеплановых'
            }
          ]
        },
        {
          x: 'XXX',
          number: '1.3',
          title: 'Общее количество документарных проверок',
          list: []
        },
        {
          x: 'XXX',
          number: '1.4',
          title: 'Общее количество выездных проверок',
          list: []
        }
      ]
    },
    
  }),
}
</script>

<style scoped>
.mt22mr10{
  margin-top: 22px;
  margin-right: 10px;
}
.ml32 {
  margin-left: 32px;
}
.ml30 {
  margin-left: 30px;
}
.ml27 {
  margin-left: 27px;
}
.df {
  display: flex;
}
.dt {
  display: table;
}
.vm {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
.mr0 {
  margin-right: 0;
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
.li-title {
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
  margin: 12px 5px;
}
.li-text {
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
  margin: 12px 5px;
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
  top: 41px;
  left: 8px;
}
.dot {
  width: 5px;
  height: 5px;
  background-color: var(--dark);
  margin-top: 16px;
  border-radius: 50%;
  margin-left: -2px;
}
.border-y {
  width: 1px;
  height: 65px;
  border-left: 1px dashed;
  position: relative;
  left: 8px;
  margin-bottom: -60px;
}
.border-y1 {
  width: 1px;
  height: auto;
  border-left: 1px dashed;
  margin-bottom: 85px;
  position: relative;
  bottom: 11px;
  margin-top: 50px;
}
.border-y2 {
  width: 1px;
  height: auto;
  border-left: 1px dashed;
  margin-bottom: 55px;
}
.border-y3 {
  width: 1px;
  height: auto;
  margin-top: -24px;
  border-left: 1px dashed;
  margin-bottom: 40px;
}
.border-x {
  height: 1px;
  width: 20px;
  border-bottom: 1px dashed;
  margin-top: 18px;
  margin-right: -5px;
}
.opacity-circle-x1 {
  display: inline-block;
  padding: 4px;
  background-color: #4cd96360;
  border-radius: 50%;
}
.circle-x1 {
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
  background-color: var(--weird-green);
  z-index: 99;
  position: relative;
}
.opacity-circle-x2 {
  display: inline-block;
  padding: 4px;
  background-color: #ffcc0060;
  border-radius: 50%;
  width: 33px;
  height: 33px;
}
.circle-x2 {
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
  background-color: var(--marigold);
  z-index: 99;
  position: relative;
}
.opacity-circle-x3 {
  display: inline-block;
  padding: 3px;
  background-color: #0079ff60;
  border-radius: 50%;
  width: 26px;
  height: 26px;
  margin-top: 6px;
}
.circle-x3 {
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
  background-color: #0079ff;
  z-index: 99;
  position: relative;
}


.analytics-block {
  padding-left: 330px;
}
.color-block1 {
  margin-bottom: 20px;
  position: relative;
  left: -350px;
  top: 55px;
}
.color-block2 {
  margin-bottom: 20px;
  position: relative;
  left: -380px;
  top: 55px;
}
.color-block3 {
  margin-bottom: 20px;
  position: relative;
  left: -410px;
  top: 55px;
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
  left: 42px;
  bottom: 10px;
}
</style>