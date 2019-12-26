<template>
  <v-content class="login">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <div class="login-form" fluid>
          <div class="tc">
            <img src="../assets/logo.svg" alt="">
            <p class="login__title">
              Автоматизированная <br>
              информационная система <br>
              «Госстройнадзор»
            </p>
            <Icon class="icon" icon="" />
          </div>
          <v-form>
            <input
              v-model="name"
              class="login__input"
              type="email"
              placeholder="Логин"
              required
            />
            <input
              v-model="password"
              class="login__input"
              type="password"
              placeholder="Пароль"
              required
            />
            <v-btn class="login__btn" color="#ff6100" @click="$router.push({name: 'Home'})">Войти</v-btn>
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

<style scoped>
.tc {
  text-align: center;
}
.icon{
  margin: 10vh 0px;
  font-size: 38px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.58;
  letter-spacing: normal;
  text-align: center;
  font-family: var(--font-awesome-5-pro);
}
.icon span {
  width: 38px;
  height: 38px;
}
.login{
  background-color: var(--pale-grey);
  height: 100vh;
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
  color: var(--dark);
  margin-top: 16px;
}
.login__input {
  display: inline-block;
  outline: none;
  width: 100%;
  padding: 5px;
  margin-bottom: 30px;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  transition: all 0.2s ease-out;
  border-bottom: 1px solid #4e4e4e;
}
.login__input:hover {
  border-bottom: 1px solid #ff62004b;
}
.login__input:focus {
  border-bottom: 1px solid #ff6100;
}
.v-text-field input {
  text-align: center;
}
.v-form {
  width: 350px;
  text-align: center;
}
.login__btn {
  margin-top: 10vh;
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
  color: var(--dark);
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