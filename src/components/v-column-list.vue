<template>
  <div>
    <div class="column__list">
      <v-icon class="icon" icon="" hover_color="true" :action="function(){show_list = !show_list}" :class="{'index11': show_list}" />
      <div v-if="show_list" class="column__block" :class="{'index11': show_list}">
        <div class="colimn__items" :class="{'pr10': list.length > 9}">
          <draggable ghost-class="ghost">
            <v-column-item v-for="(item, index) in list" :key="index" :text="item" :action="function(){item_value = item}" :item_value="item_value" :action_minus="action_minus" />
          </draggable>
        </div>
        <div class="icons__block" :class="{'pr20': list.length > 9}">
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
const VIcon = () => import('@/components/v-icon')
const VColumnItem = () => import('@/components/v-column-item')
import draggable from 'vuedraggable'

export default {
	props: {
		list: {},
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
		show_list: false,
	}),
	methods: {
		pickItem(item) {
			this.item_value = item
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
  background-color: #f5f4ed;
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