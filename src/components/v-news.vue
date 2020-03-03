<template>
  <div v-if="visible" :class="{'read-only': readOnly == true}" @click="action" class="news">
    <div class="text_block">
      <div class="df">
        <div class="type" :style="`background: ${bgColor}`">{{type}}</div>
        <p class="date">{{news.date}}</p>
        <p class="time">{{news.time}}</p>
      </div>
      <div class="main-text">
        <p class="text">{{maxText}}</p>
      </div>
      <div class="df">
        <p class="author">{{news.author}}</p>
        <p class="provider">{{news.provider}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    news: {},
    max_text_length: {},
    read_only: {},
    visible: {
      default: true
    },
    action: {
      default: function() {
        return () => ({})
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
    maxText() {
      if (this.news.text.length > this.max_text_length) {
        return `${this.news.text.substr(0, this.max_text_length)}...`
      }
      return this.news.text
    },
    bgColor() {
      switch (this.news.type) {
        case 'notification':
          return 'var(--weird-green)'
        case 'warning':
          return '#de251d'
        case 'advertisement':
          return '#5ac8fa'
        default:
          return 'title'
      }
    },
    type() {
      switch (this.news.type) {
        case 'notification':
          return 'УВЕДОМЛЕНИЕ'
        case 'warning':
          return 'ПРЕДУПРЕЖДЕНИЕ'
        case 'advertisement':
          return 'ОБЪЯВЛЕНИЕ'
        default:
          return 'title'
      }
    }
  }
}
</script>

<style scoped>
.news {
  width: 100%;
  height: 86px;
  margin-bottom: 22px;
  cursor: pointer;
}
.type {
  padding: 2px;
  width: 113px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  height: 15px;
  margin-right: 15px;
  font-family: Roboto;
  font-size: 0.5625rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.56;
  letter-spacing: normal;
  text-align: left;
  color: var(--white);
  text-transform: uppercase;
}
.author {
  font-family: Roboto;
  font-size: 0.5625rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: left;
  color: var(--brown);
  margin-bottom: 0;
  margin-right: 15px;
}
.date, .time {
  font-family: Roboto;
  font-size: 0.5625rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  margin-top: 1px;
  letter-spacing: normal;
  text-align: left;
  color: var(--brown);
  margin-bottom: 0;
  margin-right: 11px;
  margin-bottom: 12px;
}
.text {
  font-family: Roboto;
  font-size: 0.6875rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  line-height: 1.27;
  color: var(--brown-dark);
  margin-bottom: 7px;
}
.provider {
  font-family: Roboto;
  font-size: 0.5625rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: left;
  color: var(--brown);
  margin-bottom: 0;
}
.main-text {
  height: 42px;
  margin-bottom: 8px;
  overflow: hidden;
}
</style>