<template>
  <div v-if="visible" :class="{'read-only': readOnly == true}" class="doc__block df">
    <div class="mr15">
      <v-icon v-if="doc_img" font_size="90px" :hover_color="false" class="doc_preview" icon=""  />
      <img v-if="photo" class="doc__img" :class="{'doc__img-1': size === 1, 'doc__img-2': size === 2}" :src="photo" alt="">
      <div v-else class="doc__preview" :class="{'doc__preview-1': size === 1, 'doc__preview-2': size === 2}" @drop.prevent="addFile" @dragover.prevent>
        <v-icon font_size="21px" icon="" class="icon_preview" :class="{'icon_preview-1': size === 1, 'icon_preview-2': size === 2}" />
        <p class="text__preview" :class="{'text__preview-1': size === 1, 'text__preview-2': size === 2}">Перетащите файл сюда</p>
      </div>
    </div>
    <input @change="getPhoto($event)" ref="inputPhotos" type="file" class="dn" />
    <div class="doc__btns">
      <v-radio-buttons v-model="size" radio_color="green" label="Размер превью">
        <v-radio :value="1" label="1 x"></v-radio>
        <v-radio :value="2" label="2 x"></v-radio>
      </v-radio-buttons>
      <div>
        <v-icon :action="inputClick" font_size="21px" prompt="Загрузить" :hover_color="true" class="btns__icon" icon=""  />
        <v-icon :action="removePhoto" font_size="21px" prompt="Очистить" class="btns__icon mb10" :hover_color="true" unicode="&#xf51a;"  />
      </div>
    </div>
  </div>
</template>

<script>
const VIcon = () => import ('./v-icon')
const VRadioButtons = () => import('./v-radio-buttons')

export default {
  components: {
    VIcon,
    VRadioButtons
  },
  props: {
    src: {},
    read_only: {},
    visible: {
      default: true
    }
  },
  data: () => ({
    photo: '',
    base64: '',
    name: '',
    doc_img: false,
    size: 1
  }),
  mounted() {
    if(this.src) {
      this.photo = this.src
    }
  },
  methods: {
    inputClick() {
      this.$refs.inputPhotos.click()
    },
    removePhoto() {
      this.photo = ''
      this.base64 = ''
      this.doc_img = false
      this.$emit("input", '')
    },
    addFile(e) {

      const selectFile = URL.createObjectURL(e.dataTransfer.files[0])
      window.console.log(e.dataTransfer.files)
      this.photo = selectFile

      this.name = e.dataTransfer.files[0].name
      let type = e.dataTransfer.files[0].type

      if(type !== "image/jpeg") {
        this.doc_img = true
      } else {
        this.doc_img = false
      }



      const file = e.dataTransfer.files[0];
      const reader = new FileReader();

      reader.onload = e => {
        this.base64 = e.target.result
        
        this.$emit("input", {
          base64: this.base64,
          name: this.name
        })
      }
      reader.readAsDataURL(file);
    },
    getPhoto(ev) {
      const selectFile = URL.createObjectURL(this.$refs.inputPhotos.files[0])
      window.console.log(this.$refs.inputPhotos.files)
      this.photo = selectFile

      this.name = this.$refs.inputPhotos.files[0].name
      let type = this.$refs.inputPhotos.files[0].type

      if(type !== "image/jpeg") {
        this.doc_img = true
      } else {
        this.doc_img = false
      }

      const file = ev.target.files[0];
      const reader = new FileReader();

      reader.onload = e => {
        this.base64 = e.target.result
        
        this.$emit("input", {
          base64: this.base64,
          name: this.name
        })
      }
      reader.readAsDataURL(file);
    }
  },
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
  justify-content: space-between;
  flex-direction: column;
}
.btns__icon {
  width: 36px;
  height: 36px;
}
.doc__block {
  max-width: 232px;
  max-height: 328px;
  margin-bottom: 20px;
}
.doc_preview {
  width: 232px;
  height: 328px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border: dashed 1px #707070;
  border-radius: 4px;
}
.doc__img {
  border-radius: 4px;
  display: flex;
  align-items: center;
  object-fit: contain;
  border: dashed 1px #707070;
  width: 100%;
  height: auto;
}
.doc__img-1 {
  width: 116px;
  height: 164px;
}
.doc__img-2 {
  width: 232px;
  height: 328px;
}
.doc__preview {
  border-radius: 4px;
  border: dashed 1px #707070;
}
.doc__preview-1 {
  width: 116px;
  height: 164px;
}
.doc__preview-2 {
  width: 232px;
  height: 328px;
}
.text__preview {
  width: 88px;
  height: 36px;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: var(--blue-grey);
}
.text__preview-1 {
  margin-left: 14px;
}
.text__preview-2 {
  margin-left: 72px;
}
.icon_preview{
  color: var(--blue-grey);
}
.icon_preview-1 {
  margin-top: 45px;
  margin-left: 40px;
  color: var(--blue-grey);
}
.icon_preview-2 {
  margin-top: 128px;
  margin-left: 98px;
}
</style>