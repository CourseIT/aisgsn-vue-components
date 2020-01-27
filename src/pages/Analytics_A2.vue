<template>
  <div class="analytics">
    <h1 class="analytics__title">Государственный строительный надзор на объектах ФЯО</h1>
    <div class="df">
      <div class="analytics__links">
        <button>ФГУП «ГХК»</button>
        <button>ФГУП «РФЯЦ-ВНИИТФ»</button>
        <button>ФГУП «РФЯЦ-ВНИИЭФ»</button>
        <button>ФГУП «ПО «Маяк»</button>
        <button>ФГУП «НИТИ им. А.П. Александрова»</button>
        <button>ФГУП «ВНИИА им. Н.Л. Духова»</button>
        <button>ФГУП «ПСЗ»</button>
        <button>ФГУП «ЭХП»</button>
        <button>ФГУП «Атомфлот»</button>
      </div>
      <v-analytics :analytics="analytics" />
    </div>
  </div>
</template>

<script>
const VAnalytics = () => import('@/components/v-analytics')

export default {
  name: 'Analytics_A2',
  components: { VAnalytics },
  data: () => ({
    analytics: {
      title: '',
      desc: '',
      year: ['2019', '2020'],
      list: [
        {
          x: 'xxx',
          plus: '+x',
          circle_text : 'XXX',
          color: '#4cd964',
          section: '1.1',
          text: 'Количество объектов'
        },
        {
          x: 'xxx',
          plus: '+x',
          circle_text : 'XXX',
          color: '#4cd964',
          section: '1.2',
          text: 'Выездные проверки'
        },
        {
          x: 'xxx',
          plus: '+x',
          circle_text : 'XX',
          color: '#ffcc00',
          section: '1.2.1',
          text: 'План на год'
        },
        {
          x: 'xxx',
          plus: '+x',
          circle_text : 'XX',
          color: '#ffcc00',
          section: '1.2.2',
          text: 'План на отчетный период'
        },
        {
          x: 'xxx',
          plus: '+x',
          circle_text : 'XX',
          color: '#ffcc00',
          section: '1.2.3',
          text: 'Факт на отчетный период'
        },
        {
          x: 'xxx',
          plus: '+x',
          color: '#4cd964',
          circle_text : 'XXX',
          section: '1.3',
          text: 'Количество выявленных нарушений'
        },
        {
          x: 'xxx',
          plus: '+x',
          circle_text : 'XXX',
          color: '#4cd964',
          section: '1.4',
          text: 'Количество неустраненных нарушений'
        },
        {
          x: 'xxx',
          plus: '+x',
          circle_text : 'XXX',
          color: '#4cd964',
          section: '1.5',
          text: 'Количество вводных объектов ФЯО'
        },
        {
          x: 'xxx',
          plus: '+x',
          circle_text : 'XXX',
          color: '#4cd964',
          section: '1.6',
          text: 'Выдано ЗОС'
        },
        {
          x: 'xxx',
          plus: '+x',
          circle_text : 'XXX',
          color: '#4cd964',
          section: '1.7',
          text: 'Выдано ЗОС'
        }
      ]
    }
  })
}
</script>

<style scoped>
.analytics {
  padding-bottom: 200px;
}
.analytics__title {
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0);
  font-family: Roboto;
  font-size: 24px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.13;
  letter-spacing: normal;
  text-align: left;
  color: red;
  color: var(--dark);
  margin-bottom: 60px;
}
.analytics__links {
  min-width: 270px;
  padding-top: 85px;
  margin-right: 65px;
}
.analytics__links button{
  font-family: Roboto;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.33;
  letter-spacing: normal;
  display: block;
  margin: 5px 0px;
  text-align: left;
  color: var(--dark);
  cursor: pointer;
  transition: all 0.1s ease-out;
}
.analytics__links button:hover {
  font-weight: 900;
  color: var(--bright-orange);
}
.analytics__links button:focus {
  font-weight: 900;
  color: var(--bright-orange);
}
</style>