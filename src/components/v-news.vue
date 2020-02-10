<template>
  <div @click="action" class="news">
    <img class="img" :src="news.src" alt="">
    <div class="text_block">
      <div class="df">
        <p class="date">{{news.date}}</p>
        <p class="time">{{news.time}}</p>
      </div>
      <div class="main-text">
        <h1 class="title">{{maxTitle}}</h1>
        <p class="text">{{maxText}}</p>
      </div>
      <p class="provider">{{news.provider}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    news: {},
    max_title_length: {},
    max_text_length: {},
    action: {
      default: function() {
        return () => ({})
      }
    }
  },
  computed: {
    maxTitle() {
      if (this.news.title.length > this.max_title_length) {
        return `${this.news.title.substr(0, this.max_title_length)}...`
      }
      return this.news.title
    },
    maxText() {
      if (this.news.text.length > this.max_text_length) {
        return `${this.news.text.substr(0, this.max_text_length)}...`
      }
      return this.news.text
    }
  }
}
</script>

<style scoped>
.news {
  width: 100%;
  height: 86px;
  margin-bottom: 20px;
  display: flex;
  cursor: pointer;
}
.img {
  width: 110px;
  height: 86px;
  object-fit: cover;
  margin-right: 25px;
  border-radius: 4px;
}
.date, .time {
  font-family: Roboto;
  font-size: 9px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: var(--brown);
  margin-bottom: 0;
  margin-right: 11px;
  margin-bottom: 7px;
}
.title {
  font-family: Roboto;
  font-size: 15px !important;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: var(--brown);
  margin: 0;
}
.text {
  font-family: Roboto;
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: var(--brown-dark);
  margin-bottom: 7px;
}
.provider {
  font-family: Roboto;
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: left;
  color: var(--green);
  margin-bottom: 0;
  margin-top: 2px;
}
.main-text {
  height: 55px;
  overflow: hidden;
}
</style>