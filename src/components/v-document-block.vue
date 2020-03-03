<template>
  <div v-if="visible" :class="{'read-only': readOnly == true}" class="doc__block df">
    <div class="mr15">
      <img v-if="src" class="doc__img" :src="src" alt="">
      <div v-else class="doc__img">
        <p class="img-preview">DOCS PREVIEW</p>
      </div>
    </div>
    <div class="doc__btns">
      <slot>
        icons
      </slot>
    </div>
  </div>
</template>

<script>

export default {
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
  align-items: center;
  margin-left: 15px;
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
  object-fit: contain;
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