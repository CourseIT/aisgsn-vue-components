<template>
  <v-content class="login">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <div class="login-form" fluid>
          <div class="tc">
            <img src="../assets/logo.png" alt="">
            <p class="login__title">
              Автоматизированная <br>
              информационная система <br>
              «Госстройнадзор»
            </p>
            <Icon class="icon" icon="" />
          </div>
          <v-form>
            <v-text-field
              v-model="name"
              class="login__input"
              type="email"
              placeholder="Логин"
              color="#ff6100"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              class="login__input"
              color="#ff6100"
              type="password"
              placeholder="Пароль"
              required
            ></v-text-field>
            <v-btn class="login__btn" color="#ff6100">Войти</v-btn>
            <div class="login__hint">
              <p>
                Не можете вспомнить свой пароль?<br>
                Обратитесь к системному администратору!
              </p>
            </div>
          </v-form>
        </div>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
const Icon = () => import('../components/Icon')
export default {
  components: {
    Icon
  },
  data: () => ({
    name: '',
    password: ''
  })
}
</script>

<style>
.tc {
  text-align: center;
}
.icon{
  margin: 100px 0px !important;
  font-size: 38px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.58;
  letter-spacing: normal;
  text-align: center;
  font-family: "Font Awesome 5 Pro";
}
.icon span {
  width: 38px;
  height: 38px;
}
.login{
  background-color: #efeff4;
}
.login__title {
  font-family: Roboto;
  font-size: 11px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.27;
  letter-spacing: normal;
  text-align: center;
  color: #21262c;
  margin-top: 16px;
}
.login__input input {
  font-family: Roboto;
  font-size: 15px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
}
.v-form {
  width: 350px;
  text-align: center;
}
.login__btn {
  margin-top: 100px;
  background-color: #ff6100;
  font-family: Roboto;
  font-size: 11px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.18;
  letter-spacing: normal;
  text-align: center;
  color: #fff !important;
  padding: 11px 50px !important;
}
.login__hint {
  margin-top: 35px;
  color: #21262c;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
}
</style>