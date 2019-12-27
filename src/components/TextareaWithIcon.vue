<template>
  <div class="input-block">
    <p class="label">{{label}}</p>
    <div class="df">
      <v-textarea
        v-model="text"
        :placeholder="placeholder"
        :flat=true
        solo
        auto-grow
      ></v-textarea>
      <div class="icon" @click="template_show = true"><Icon :icon="icon" class="icon-block"/></div>
      <div class="templates-block" v-if="template_show">
        <TemplateText @selectText="selectText" v-for="(text, index) in texts" :key="index" />
      </div>
		</div>
    <div class="close-block" v-if="template_show" @click="template_show = false"></div>
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
}
.input-block {
  margin-bottom: -15px;
}

.icon {
  cursor: pointer;
  height: 40px;
  font-family: var(--font-awesome-5-pro-light);
  font-size: 35px;
  width: 5%;
  text-align: center;
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
  padding-right: 30px;
}
</style>