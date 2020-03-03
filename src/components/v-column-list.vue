<template>
  <div v-if="visible" :class="{'read-only': readOnly == true}">
    <div class="column__list">
      <v-icon class="icon" icon="" hover_color="true" :action="function(){show_list = !show_list}" :class="{'index11': show_list}" />
      <div v-if="show_list" class="column__block" :class="{'index11': show_list}">
        <div class="colimn__items" :class="{'pr10': list.length > 9}">
          <draggable ghost-class="ghost">
            <div v-for="(item, index) in list" :key="index">
              <v-column-item :text="item" :action="pickItem" :item_value="item_value" :only_one="only_one" :action_minus="action_minus" :list="item_list" />
            </div>
          </draggable>
        </div>
        <div v-if="!only_one" class="icons__block" :class="{'pr20': list.length > 9}">
          <div class="icons">
            <v-icon icon="" hover_color="true" :action="action_reset" />
            <v-icon icon="" hover_color="true" :action="action_plus" />
          </div>
        </div>
      </div>
    </div>
    <div class="colse_bg" v-if="show_list" @click="show_list = false"></div>
  </div>
</template>

<script>
const VIcon = () => import('./v-icon')
const VColumnItem = () => import('./v-column-item')
import draggable from 'vuedraggable'

export default {
	props: {
    value: {},
    list: {},
    read_only: {},
    only_one: {
      default: false
    },
    visible: {
      default: true
    },
		action_minus: {
      default: function() {
        return () => ({})
      }
		},
		action_plus: {
      default: function() {
        return () => ({})
      }
		},
		action_reset: {
      default: function() {
        return () => ({})
      }
    },
	},
	components: {
		VIcon,
		VColumnItem,
    draggable
	},
	data: () => ({
    item_value: '',
    item_list: [],
		show_list: false,
  }),
  mounted() {
    if(this.value) {
      this.item_list = this.value
    }
  },
  watch: {
    item_value(value) {
      this.$emit('input', value)
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
  },
	methods: {
		pickItem(option) {
      //this.item_value = option
      if(this.only_one) {
        this.item_list = option
        this.$emit('input', this.item_list)
      } else {
        if(this.item_list.includes(option)) {
          const new_list = this.item_list.filter(item => item != option )
          this.item_list = new_list
          this.$emit('input', this.item_list)
        } else {
          this.item_list.push(option)
          this.$emit('input', this.item_list)
        }
      }
      
		}
	}
}
</script>

<style scoped>
.index11 {
  z-index: 11;
}
.pr10 {
	padding-right: 10px;
}
.pr20 {
	padding-right: 20px;
}
.icon {
	font-family: var(--font-awesome-5-pro-light);
  font-size: 21px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.1;
  letter-spacing: normal;
  text-align: left;
  color: #c58b4a;
	width: 36px;
  height: 36px;
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
  background-color: var(--white);
	border-radius: 4px;
}
.column__block {
  position: absolute;
	margin-top: 10px;
	padding: 10px;
  border-radius: 4px;
  box-shadow: 0 7px 10px 0 rgba(34, 34, 34, 0.22);
  background-color: var(--white);
  max-height: 438px;
	width: 276px;
}
.colimn__items {
	overflow-y: auto;
	overflow-x: hidden;
	max-height: 372px;
}
.colimn__items::-webkit-scrollbar {
  width: 11px;
  height: 8px;
  background-color: rgba(0, 0, 0, 0);
}
.colimn__items::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color:var(--light-grey);
}
.icons__block {
	display: flex;
	justify-content: flex-end;
	margin-top: 10px;
}
.icons {
	display: flex;
	justify-content: space-between;
	border-radius: 4px;
  background-color: var(--pre-light);
	width: 75px;
  height: 36px;
}
.colse_bg {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}
</style>