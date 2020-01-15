<template>
  <div class="textarea-with-icon">
    <div class="input-block">
    <p class="label">{{label}}</p>
    <div class="df">
      <textarea :placeholder="placeholder" v-model="text" cols="10" rows="4"></textarea>
      <div class="icon" @click="template_show = true">
        <Icon :icon="icon" :color="template_show ? '#fb6229' : '#21262c' " class="icon-block"/>
      </div>
      <div v-if="template_show">
        <div class="templates-block">
          <TemplateText @selectText="selectText" v-for="(text, index) in texts" :key="index" />
        </div>
        <div class="icons_text-block">
          <Icon icon="" class="icon-text"/>
          <Icon icon="" class="icon-text"/>
        </div>
      </div>
		</div>
    <div class="close-block" v-if="template_show" @click="template_show = false"></div>
  </div>
  </div>
</template>

<script>
const Icon = () => import('./Icon')
const TemplateText = () => import('./TemplateText')

export default {
	props: ['placeholder', 'value', 'icon', 'label'],
  components: {
    Icon,
    TemplateText
  },
  data: () =>({
    text: '',
    template_show: false,
    texts:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  }),
  watch: {
    text(){
      this.template_show = false
    }
  },
  methods: {
    selectText(text) {
      this.text = text
      this.template_show = false
    }
  }
}
</script>

<style scoped>
.df {
  display: flex;
}
.label {
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0);
  font-family: Roboto;
  font-size: 12px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  margin-bottom: 5px;
  width: 95%;
}
.input-block {
  margin-bottom: 15px;
}
.icons_text-block {
  display: flex;
  position: absolute;
  margin-top: 510px;
  margin-left: 255px;
  z-index: 99;
}
.icon-text {
  cursor: pointer;
  font-family: var(--font-awesome-5-pro-light);
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.81;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
  margin-left: 22px;
}
.icon {
  cursor: pointer;
  height: 40px;
  font-family: var(--font-awesome-5-pro-light);
  font-size: 33px;
  padding: 0px 25px;
  text-align: center;
  position: relative;
  bottom: 6px;
}
.close-block {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}
.templates-block {
  position: absolute;
  z-index: 99;
  left: 66%;
  max-width: 450px;
  min-width: 400px;
  overflow: auto;
  max-height: 500px;
  padding-right: 25px;
  padding-left: 22px;
}
.templates-block::-webkit-scrollbar {
  width: 11px;
  height: 8px;
  background-color: rgba(0, 0, 0, 0);
}
.templates-block::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: var(--pale-lilac); 
}
.input {
  color: red;
}
textarea {
  width: 100%;
  outline: none;
  padding: 9px 15px;
  border-radius: 4px;
  background-color: var(--white);
  font-family: Roboto;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  resize : none;
  height: 95px;
}
textarea::placeholder {
  font-size: 9px;
  color: var(--blue-grey);
}
</style>