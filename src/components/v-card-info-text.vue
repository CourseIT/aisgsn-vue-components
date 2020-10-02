<template>
  <div class="df carad__info__text" :class="{'read-only': readOnly == true}">
    <p class="title_text" :style="{'width': title_width, 'min-width': min_width}">{{title}}</p>
    <p class="text">{{text}}</p>
  </div>
</template>

<script>
export default {
  props: {
    read_only: {},
    title: {},
    text: {},
    title_width: {
      default: "30%"
    },
    min_width: {
      default: "140px"
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
  }
}
</script>

<style scoped>
p {
  font-family: Roboto;
  font-size: 0.75rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  margin-right: 7px;
  margin-bottom: 6px;
}
.carad__info__text:last-child p{
  margin-bottom: 0px;
}
.title_text {
  width: 85px;
  margin-right: 15px;
  color: var(--blue-grey);
}
.text {
  color: var(--dark);
  font-weight: 400;
}
.card__info:hover .text{
  color: var(--bright-orange);
}
</style>