<template>
  <div v-if="visible" :class="{'read-only': readOnly == true}" class="doc__block df">
    <div class="mr15">
      <img v-if="src" class="doc__img" :src="src" alt="">
      <div v-else class="doc__img">
        <p class="img-preview">DOCS PREVIEW</p>
      </div>
    </div>
    <div class="doc__btns">
      <div>
        <v-icon font_size="21px" prompt="Загрузите файл с устройства" :hover_color="true" class="btns__icon" icon=""  />
        <v-icon font_size="21px" prompt="Очистить" class="btns__icon mb10" :hover_color="true" icon=""  />
      </div>
    </div>
  </div>
</template>

<script>
const VIcon = () => import ('./v-icon')

export default {
  components: {
    VIcon
  },
  props: {
    src: {},
    read_only: {},
    visible: {
      default: true
    }
  },
  data: () => ({
  }),
  computed: {
    readOnly() {
      if(typeof (this.read_only) == 'function') {
        return this.read_only()
      } else if (this.read_only) {
        return this.read_only
      } else {
        return false
      }
    }
  },
}
</script>

<style scoped>
.doc__btns {
  margin-left: 12px;
  display: flex;
  align-items: flex-end;
}
.btns__icon {
  width: 36px;
  height: 36px;
}
.doc__block {
  width: 232px;
  height: 328px;
  margin-bottom: 20px;
}
.doc__img {
  border-radius: 4px;
  display: flex;
  align-items: center;
  object-fit: cover;
  border: dashed 1px #707070;
  width: 100%;
  height: auto;
  width: 232px;
  height: 328px;
}
.img-preview {
  width: 204px;
  width: 100%;
  height: 111px;
  opacity: 0.28;
  font-family: Roboto;
  font-size: 48px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.13;
  letter-spacing: normal;
  text-align: center;
  color: var(--dark);
}
</style>