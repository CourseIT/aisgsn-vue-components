<template>
  <div v-if="visible" :class="[{'read-only': readOnly == true, 'icon': prompt}, dynamic_class]" :style='{width: `${width}px`, height: `${height}px`}'>
    <div class="hover_prompt" @click="action">
      <div v-if="unicode" class="icon" :class="{'hover-shadow': hover_shadow, 'hover-color': hover_color}" :style='{"background": background, "font-size": `${font_size}`,"padding-left": `${padding_left}`, color: `${color}`, width: `${width}px`, height: `${height}px`}'>
        <i class="fal" v-html="unicode"></i>
      </div>
      <div v-else class="icon" :class="{'hover-shadow': hover_shadow, 'hover-color': hover_color}" :style='{"background": background, "font-size": `${font_size}`,"padding-left": `${padding_left}`, color: `${color}`, width: `${width}px`, height: `${height}px`}'>
        {{icon}}
      </div>
    </div>
    <div v-if="prompt" class="icon__prompt-block" :class="{'dark': prompt_theme === 'dark'}">
      <div class="arrow"></div>
      <div class="icon__prompt">
        <span>{{prompt}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    unicode: {},
    icon: {},
    color: {},
    prompt: {},
    prompt_theme: {},
    hover_shadow: {},
    hover_color: {},
    background: {},
    width: {},
    height: {},
    font_size: {},
    padding_left: {},
    read_only: {},
    visible: {
      default: true
    },
    action: {
      default: function() {
        return () => ({})
      }
    },
    dynamic_class: {}
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
.dark .icon__prompt{
  background-color: var(--dark) !important;
  color: var(--white);
}
.dark::after {
  border-bottom: 8px solid var(--dark) !important;
}
.icon {
  user-select: none;
  cursor: pointer;
  z-index: 7;
  width: 36px;
  font-weight: 300;
  height: 36px;
  justify-content: center;
  display: flex;
  text-align: center;
  align-items: center;
  font-family: var(--font-awesome-5-pro-light);

  position: relative;
}
.hover-color:hover {
  color: var(--bright-orange) !important;
}
.hover-shadow:hover {
  background-color: var(--pale-grey);
  border-radius: 4px;
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
}
.icon:hover .icon__prompt-block {
  display: flex !important;
  height: 32px;
  /* margin-top: -60px; */
  justify-content: center;
  /* margin-left: 12px; */
}
.icon__prompt-block {
  display: none;
  width: 400px;
  position: absolute;
  text-align: center;
  justify-content: center;
  margin-left: 0px;
  top: -37px;
}
.icon__prompt {
  position: absolute;
  z-index: 110;
  padding: 5px 15px;
  border-radius: 4px;
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
  background-color: var(--dark);
  font-family: sans-serif;
  font-size: 12px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: center;
  min-height: 28px;
  display: flex;
  align-items: center;
  color: var(--white);
}
.arrow {
  position: absolute;
  top: 28px;
  display: inline-block;
  color: var(--dark);
  z-index: 111;
  border: 6px solid transparent;	
  border-bottom: 6px solid var(--dark);
  transform: rotate(180deg);
}
</style>