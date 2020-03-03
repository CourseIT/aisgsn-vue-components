<template>
  <div v-if="visible" :class="{'read-only': readOnly == true}" class="date-input">
    <div class="df">
      <span v-if="obligatory" class="obligatory">*</span>
      <p v-if="label" class="label">{{label}}</p>
    </div>
    <input v-model="date" type="text" placeholder="дд.мм.гггг">
  </div>
</template>

<script>
export default {
  props: {
    label: {},
    obligatory: {
      default: false
    },
    read_only: {},
    visible: {
      default: true
    }
  },
  data: () => ({
    date: '',
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
  watch: {
    date(value, pevValue) {
      let date1
      let date2
      let date3

      if(value.length == 2 && pevValue.length < value.length) {
        if(Number(value) > 31) {
          var day = `${new Date().getDay()+1}`
          if(day < 10){
            this.date = `0${day}.`
          } else {
            this.date = `${day}.`
          }
        } else {
          date1 = value.split('')
          date2 = date1.push('.')
          date3 = date1.join('')
          this.date = date3
        }
        window.console.log(date2)
      } else if(value.length == 5 && pevValue.length < value.length) {
        if(Number(value.substr(3,5)) > 12) {
          var month = `${new Date().getMonth()+1}`
          if(month < 10){
            this.date = `${value.substr(0,3)}0${month}.`
          } else {
            this.date = `${value.substr(0,3)}${month}.`
          }
        } else {
          date1 = value.split('')
          date2 = date1.push('.')
          date3 = date1.join('')
          this.date = date3
        }
        window.console.log(date2)
      } else {
        this.date = value.replace(/[^.\d\s]/g, '').substr(0,10)
      }
      this.$emit('input', this.date)
    }
  },
}
</script>

<style scoped>
.date-input input {
  width: 106px;
  height: 36px;
  border-radius: 4px;
  background-color: var(--white);
  outline: none;
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  color: var(--dark2);
  padding: 5px;
  margin-bottom: 10px;
}
.label {
  opacity: 0.7;
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0);
  font-family: Roboto;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark2);
  margin-bottom: 5px;
}
</style>