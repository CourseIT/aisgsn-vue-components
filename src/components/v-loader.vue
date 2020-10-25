<template>
  <div v-if="loading" class="v-loader">
    <div class="loader-background"></div>
    <div class="loader-line-1"></div>
    <div class="loader-line-block">
      <div class="loader-line-2"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      default: false
    }
  }
}
</script>

<style scoped>
.v-loader {
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.loader-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  background-color: rgba(0, 0, 0, 1);
  backdrop-filter: blur(10px)
}

.loader-line-1 {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 10px solid var(--pale-lilac);
  position: absolute;
}

.loader-line-2 {
  position: absolute;
  width: 100px;
  height: 50px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  border: 10px solid var(--bright-orange);
  border-bottom: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.loader-line-block {
  width: 100px;
  height: 100px;
  padding-bottom: 50px;
  
  animation: 1s linear 0s normal none infinite running rot;
  -webkit-animation: 1s linear 0s normal none infinite running rot;
}

@keyframes rot {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes rot {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>