<template>
  <div v-if="visible" :class="{'read-only': readOnly == true}" class="time-btn__block">
    <div v-if="time_input_show">
      <div class="time-btn-input">
        <form @submit="pickTime">
          <input v-model="time" placeholder="чч:мм - чч:мм" type="text" autofocus>
        </form>
        <v-icon v-if="time.length == 13 || time.length == 5 " :action="pickTime" class="icon-apply" width="15" icon="" />
        <v-icon v-else :action="clearTime" class="icon-apply" width="15" icon="" />
      </div>
    </div>
    <div v-else class="df time__btn">
      <div @click="clearTime">
        <v-icon v-if="time != currentTime" class="icon-colse" width="15" icon="" />
      </div>
      <div>
        <p @click="time_input_show = true" class="pl25">{{time}} </p>
      </div>
      <v-icon :action="function(){time_input_show = true}" class="icon-clock" width="19" icon="" />
    </div>
  </div>
</template>

<script>
const VIcon = () => import('./v-icon')

export default {
  props: {
    read_only: {},
    visible: {
      default: true
    }
  },
  components: { VIcon },
  data: () => ({
    time: '',
    menu: false,
    modal: false,
    show_close: false,
    time_input_show: false
  }),
  mounted() {
    var time = new Date();
    var h = time.getHours().toString();
    var m = time.getMinutes().toString();
      
    if(h.length < 2){
      h = `0${h}`;
    }
    if(m.length < 2){
      m = `0${m}`;
    }
    this.time = `${h}:${m} - ${Number(h)+1}:${m}`
    this.$emit('input', this.time)
  },
  watch: {
    time(value, pevValue) {
      let time1
      let time2
      let time3

      if(value.length == 2 && pevValue.length < value.length) {
        time1 = value.split('')
        time2 = time1.push(':')
        time3 = time1.join('')
        this.time = time3
        window.console.log(time2)
      } else if(value.length == 5 && pevValue.length < value.length) {
        time1 = value.split('')
        time2 = time1.push(' - ')
        time3 = time1.join('')
        this.time = time3
        window.console.log(time2)
      } else if(value.length == 10 && pevValue.length < value.length) {
        time1 = value.split('')
        time2 = time1.push(':')
        time3 = time1.join('')
        this.time = time3
        window.console.log(time2)
      } else {
        this.time = value.replace(/[^:-\d\s]/g, '').substr(0,13)
      }
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
    },
    currentTime() {
      var time = new Date();
      var h = time.getHours().toString();
      var m = time.getMinutes().toString();
      
      if(h.length < 2){
        h = `0${h}`;
      }
      if(m.length < 2){
        m = `0${m}`;
      }
      return `${h}:${m} - ${Number(h)+1}:${m}`
    }
  },
  methods: {
    clearTime() {
      this.time = this.currentTime
      this.$emit('input', this.time)
      this.time_input_show = false
    },
    pickTime(e) {
      e.preventDefault();
      
      this.$emit('input', this.time)
      this.time_input_show = false
    },
  }
}
</script>

<style scoped>
.time__block button {
  width: 100%;
}
.time-btn__block {
  display: inline-block;
  border-radius: 4px;
}
.time-btn__block:hover {
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
  width: 263px;
}
.time-btn__block .time__btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 263px;
  height: 36px;
  background-color: var(--pale-lilac);
  padding: 0px 10px;
  border-radius: 4px;
  transition: all 0.2s ease-out;
  margin: 0px;
  outline: none;
  cursor: pointer;
}
.time-btn__block .time__btn p {
  margin-bottom: 0;
  font-family: Roboto;
  font-size: 0.6875rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: normal;
  color: var(--dark);
  height: 36px;
  width: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.time-btn__block .icon-clock {
  font-family: var(--font-awesome-5-pro-light);
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  width: 19px;
  letter-spacing: normal;
  text-align: center;
  color: var(--dark);
  transition: all 0.2s ease-out;
}
.time-btn__block .icon-clock:hover {
  color: var(--bright-orange);
}
.time-btn__block .icon-colse {
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0);
  font-family: FontAwesome5Pro;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
  z-index: 7;
  position: absolute;
  margin-top: -17px;
}
.time-btn__block .icon-colse:hover {
  color: var(--bright-orange);
}
.time-btn-input {
  display: flex;
  width: 263px;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: var(--pale-lilac);
  padding: 4px;
  height: 36px;
}
.time-btn-input input {
  outline: none;
  text-align: center;
  border-radius: 4px;
  background-color: var(--white);
  width: 100%;
  font-family: Roboto;
  font-size: 0.6875rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  color: var(--dark);
  padding: 4px 23px;
  padding-top: 5px;
  height: 27px;
  padding-left: 27px;
}
.time-btn-input .icon-apply{
  position: absolute;
  margin-top: -4px;
  margin-left: 230px;
  width: 15px;
  height: 15px;
  font-size: 15px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.53;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
}
.time-btn-input .icon-apply:hover {
  color: var(--bright-orange);
}
</style>