<template>
  <div class="login-ismo">
    <div class="login__content">
      <div class="tac">
        <img src="../../public/logo.svg" alt="">
        <p class="login__titie">ИСМО</p>
        <p class="login__titie2">Липецкой области</p>
      </div>
      <p class="content__title">ФНС</p>
      <p class="content__text">Сведения о наличии (отсутствии) 
задолженности по уплате налогов, сборов, страховых взносов, пеней, штрафов, 
процентов</p>
      <p class="content__text">Сведения о сумме фактически уплаченных юридическим лицом налогов</p>
      <p class="content__text">Сведения о среднесписочной численности работников за предыдущий календарный год</p>
      <p class="content__title">ПФР</p>
      <p class="content__text">СНИЛС застрахованного лица   с учетом дополнительных сведений о месте рождения, документе, удостоверяющем 
личность</p>
      <p class="content__title">МВД</p>
      <p class="content__text">Сведения о наличии (отсутствии) судимости и (или) факта уголовного преследования либо о прекращении уголовного преследования, сведения о 
нахождении в розыске</p>
      <p class="content__title">ДРУГИЕ ВИДЫ СВЕДЕНИЙ</p>

      <p class="content__title content__button">Переход в старую версию ИСМО <v-icon class="icon" hover_color="true" icon="" /></p>
      
    </div>
  </div>
</template>

<script>
const VIcon = () => import('@/components/v-icon')

export default {
  components: {
    VIcon,
  },
  data: () => ({
    error: false,
    name: '',
    password: ''
  })
}
</script>

<style scoped>
.tac {
  text-align: center;
}
.login-ismo {
  padding: 30px 0px;
}
.login-ismo {
  background-color: #f5f4ed;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login__content {
  width: 300px;
}
.login__titie {
  font-family: Roboto;
  font-size: 18px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: normal;
  text-align: center;
  color: #38393b;
  margin-bottom: 0px;
}
.login__titie2 {
  font-family: Roboto;
  font-size: 11px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: normal;
  text-align: center;
  color: #38393b;
  margin-bottom: 120px;
}
.content__title {
  font-family: Roboto;
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  color: #38393b;
  margin-bottom: 13px;
  margin-top: 10px;
}
.content__text {
  font-family: Roboto;
  font-size: 15px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #38393b;
  transition: all 0.1s ease;
  margin-bottom: 13px;
}
.content__text:hover {
  color: #c58b4a;
  cursor: pointer;
}
.content__button {
  display: flex;
  align-items: center;
  position: relative;
  bottom: 40px;
  left: 400px;
}
.icon:hover .icon {
  color: red;
}
</style>