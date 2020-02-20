<template>
  <div class="legend">
    <v-icon class="icon" icon="" hover_color="true" />
    <div class="legend__block">
      <slot>
        <div class="color__block" v-for="(item, index) in list" :key="index">
          <div class="color" :style="{'background': item.color}"></div>
          <div class="text">{{item.text}}</div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
const VIcon = () => import('./v-icon')

export default {
  components: {
    VIcon
  },
  data: () => ({
		list: [
      {
        color: '#38bd3f',
        text: 'Получен ответ'
      },
      {
        color: '#de251d',
        text: 'Отправлено'
      },
      {
        color: '#fac400',
        text: 'Ожидает ответа'
      },
      {
        color: '#5ac8fa',
        text: 'В обработке'
      },
      {
        color: '#0079ff',
        text: 'Сохранено'
      },
    ],
	}),
}
</script>

<style scoped>
.legend {
  display: inline-block;
}
.icon {
  font-family: var(--font-awesome-5-pro-light);
  font-size: 21px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.1;
  letter-spacing: normal;
  text-align: left;
  color: #c58b4a;
	width: 36px;
  height: 36px;
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
  background-color: var(--white);
	border-radius: 4px;
}
.icon:hover + .legend__block {
  display: block;
}
.legend__block {
  display: none;
  position: absolute;
  border-radius: 4px;
  box-shadow: 0 7px 10px 0 rgba(34, 34, 34, 0.22);
  background-color: var(--white);
  padding: 15px 20px;
  margin-top: 10px;
}

.color__block {
  display: flex;
  margin: 5px;
  align-items: center;
}
.color {
  width: 36px;
  height: 36px;
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
  margin-right: 20px;
  border-radius: 4px;
}
.text {
  font-family: Roboto;
  font-size: 12px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark2);
}
</style>