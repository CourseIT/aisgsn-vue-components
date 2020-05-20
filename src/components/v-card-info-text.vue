<template>
  <div class="df carad__info__text">
    <p class="title_text">{{title}}</p>
    <p class="text">{{text}}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {},
    text: {}
  }
}
</script>

<style scoped>
p {
  font-family: Roboto;
  font-size: 11px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  margin-right: 7px;
  margin-bottom: 5px;
}
.carad__info__text:last-child p{
  margin-bottom: 0px;
}
.title_text {
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