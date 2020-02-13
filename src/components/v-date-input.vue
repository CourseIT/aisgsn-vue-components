<template>
  <div class="date-input">
    <p v-if="label" class="label">{{label}}</p>
    <input v-model="date" type="text" placeholder="дд.мм.гггг">
  </div>
</template>

<script>
export default {
  props: {
    label: {}
  },
  data: () => ({
    date: '',
  }),
  watch: {
    date(value, pevValue) {
      let date1
      let date2
      let date3

      if(value.length == 2 && pevValue.length < value.length) {
        date1 = value.split('')
        date2 = date1.push('.')
        date3 = date1.join('')
        this.date = date3
        window.console.log(date2)
      } else if(value.length == 5 && pevValue.length < value.length) {
        date1 = value.split('')
        date2 = date1.push('.')
        date3 = date1.join('')
        this.date = date3
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
  margin-left: 7px;
}
</style>