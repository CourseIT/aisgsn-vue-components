<template>
  <v-icon icon="" :class="[dynamic_class]" font_size="21px" prompt="Копировать текущую ссылку" :action="copyLink" />
</template>

<script>
const VIcon = () => import('./v-icon')

export default {
  props: {
    action: {
      default: function() {
        return () => ({})
      }
    },
    dynamic_class: {}
  },
  components: {
    VIcon
  },
  methods: {
    copyLink() {
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
      this.action()
    }
  }
}
</script>

<style>

</style>