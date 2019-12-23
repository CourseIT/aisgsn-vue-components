<template >
  <div>
    <p>Страницы:</p>
    <div v-for="(item, index) in items" :key="index">
      <h1 :to="item.path" @click="$router.push({name: `${item.name}`})">
        {{item.name}}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      items: []
    }
  },
  created() {
    this.$router.options.routes.forEach(route => {
      this.items.push({
        name: route.name,
        path: route.path
      })
    })
  }
}
</script>

<style>
.mt65 {
  margin-top: 65px;
}
h1 {
  cursor: pointer;
}
</style>