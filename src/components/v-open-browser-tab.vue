<template>
  <div class="v-open-browser-tab" :class="[dynamic_class]">
    <a :href="browserUrl" target="_blank">
      <v-icon icon="" font_size="21px" prompt="Открыть текущую страницу в новой вкладке" />
    </a>
  </div>
</template>

<script>
const VIcon = () => import('./v-icon')

export default {
  components: {
    VIcon
  },
  props: {
    dynamic_class: {}
  },
  computed: {
    browserUrl() {
      return window.location.href
    }
  },
  methods: {
    openNewTab() {
      let tempInput = document.createElement('textarea');
      let body = document.querySelector('body');

      tempInput.style.fontSize = '12pt';
      tempInput.style.border = '0';
      tempInput.style.padding = '0';
      tempInput.style.margin = '0';
      tempInput.style.position = 'absolute';
      tempInput.style.left = '-9999px';
      tempInput.setAttribute('readonly', '');

      tempInput.value = window.location.href;
      body.parentNode.appendChild(tempInput);
      tempInput.select();
      tempInput.setSelectionRange(0, 99999);
      document.execCommand('copy');
      tempInput.parentNode.removeChild(tempInput);
    }
  }
}
</script>

<style scoped>
.v-open-browser-tab a {
  color: var(--dark);
  text-decoration: none;
}
</style>