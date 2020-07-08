<template>
  <div class="calendar">
    <div class="pl285 df jcsb w90 mb20">
    <v-calendar-btn @click="decrementMonth" :disabled="month == 0">
      <v-icon v-if="month !== 0" icon="" class="mr10" width="5" font_size="13px"/>
      {{getMonthName(month - 1)}}
    </v-calendar-btn>
    <v-calendar-btn :disabled="true">
      {{getMonthName(month)}}
    </v-calendar-btn>
    <v-calendar-btn @click="incrementMonth" :disabled="month == 10">
      {{getMonthName(month + 1)}}
      <v-icon v-if="month !== 10" icon="" class="ml10" width="5" font_size="13px"/>
    </v-calendar-btn>
    </div>
    <div class="calendar__days pl285 df">
      <v-calendar-day v-for="(day, index) in all_days" :day_name="day.day_name" :day_date="day.day_date" :active="day.active" :key="index"/>
    </div>
    
    <div class="calendar__objs">
      <div v-for="(obj, index) in calendars_obj[month]" :key="index" class="mb20">
        <div class="df">
          <v-calendar-user  v-if="obj.user.user_name" :user_name="obj.user.user_name" :user_position="obj.user.user_position" />
          <div class="df calendar__actions w100">
            <v-calendar-action v-for="(action, index) in obj.actions" :key="index"
              :action_date="action.action_date"
              :action_name="action.action_name"
              :action_desc="action.action_desc"
              :days="action.days"
              :days_ago="action.days_ago"
            />
          </div>
        </div>
        <div class="calendar__clear-actions pl285">
          <v-calendar-clear-action v-for="(day, index) in all_days" :key="index"/>
        </div>
      </div>
    </div>
    


    <VCalendarMonthBtn text="test" width="100px"/>
    <VCalendarMonthBtn text="test" width="100px" :active="true"/>

  </div>
</template>

<script>
const VIcon = () => import('./v-icon')
const VCalendarDay = () => import('./v-calendar-day')
const VCalendarUser = () => import('./v-calendar-user')
const VCalendarAction = () => import('./v-calendar-action')
const VCalendarClearAction = () => import('./v-calendar-clear-action')
const VCalendarMonthBtn = () => import('./v-calendar-month-btn')
const VCalendarBtn = () => import('./v-calendar-btn')

export default {
  components: {
    VCalendarDay,
    VCalendarUser,
    VCalendarAction,
    VCalendarClearAction,
    VCalendarMonthBtn,
    VCalendarBtn,
    VIcon
  },
  data: () => ({
    calendars_obj: [
      [],[],[],[],[],[],
      [
      {
        user: {
          user_name: 'Иванов И. И.',
          user_position: 'Должность'
        },
        actions: [
          {
            action_date: '01.07.20 – 05.07.20',
            action_name: 'ВНИИЭФ',
            action_desc: 'Название проверки',
            days: 5,
            days_ago: 0
          },
          {
            action_date: '08.07.20 – 10.07.20',
            action_name: 'НАЗВАНИЕ',
            action_desc: 'Название проверки',
            days: 3,
            days_ago: 7
          },
          {
            action_date: '28.07.20',
            action_name: 'НАЗВАНИЕ',
            action_desc: 'Название проверки',
            days: 1,
            days_ago: 27
          },
        ]
      },
      {
        user: {
          user_name: 'Иванов Т. Т.',
          user_position: 'Должность'
        },
        actions: [
          {
            action_date: '02.07.20 – 05.07.20',
            action_name: 'ВНИИЭФ',
            action_desc: 'Название проверки',
            days: 3,
            days_ago: 1
          },
          {
            action_date: '08.07.20 – 11.07.20',
            action_name: 'НАЗВАНИЕ',
            action_desc: 'Название проверки',
            days: 4,
            days_ago: 7
          },
          {
            action_date: '20.07.20',
            action_name: 'НАЗВАНИЕ',
            action_desc: 'Название проверки',
            days: 1,
            days_ago: 19
          },
        ]
      },
      {
        user: {
          user_name: 'Иванов И. И.',
          user_position: 'Должность'
        },
        actions: [
          {
            action_date: '01.07.20 – 05.07.20',
            action_name: 'ВНИИЭФ',
            action_desc: 'Название проверки',
            days: 5,
            days_ago: 0
          },
          {
            action_date: '08.07.20 – 10.07.20',
            action_name: 'НАЗВАНИЕ',
            action_desc: 'Название проверки',
            days: 3,
            days_ago: 7
          },
          {
            action_date: '28.07.20',
            action_name: 'НАЗВАНИЕ',
            action_desc: 'Название проверки',
            days: 1,
            days_ago: 27
          },
        ]
      },
      {
        user: {
          user_name: 'Иванов Т. Т.',
          user_position: 'Должность'
        },
        actions: [
          {
            action_date: '02.07.20 – 05.07.20',
            action_name: 'ВНИИЭФ',
            action_desc: 'Название проверки',
            days: 3,
            days_ago: 1
          },
          {
            action_date: '08.07.20 – 11.07.20',
            action_name: 'НАЗВАНИЕ',
            action_desc: 'Название проверки',
            days: 4,
            days_ago: 7
          },
          {
            action_date: '20.07.20',
            action_name: 'НАЗВАНИЕ',
            action_desc: 'Название проверки',
            days: 1,
            days_ago: 19
          },
        ]
      },
    ], 
      [
        {
        user: {
          user_name: 'Иванов Т. Т.',
          user_position: 'Должность'
        },
        actions: [
          {
            action_date: '02.08.20 – 05.08.20',
            action_name: 'ВНИИЭФ',
            action_desc: 'Название проверки',
            days: 3,
            days_ago: 1
          },
          {
            action_date: '08.08.20 – 11.08.20',
            action_name: 'НАЗВАНИЕ',
            action_desc: 'Название проверки',
            days: 4,
            days_ago: 7
          },
          {
            action_date: '21.08.20',
            action_name: 'НАЗВАНИЕ',
            action_desc: 'Название проверки',
            days: 1,
            days_ago: 20
          },
        ]
      },
      ], [], [], [], []
    ],
    month: '',
    week_day: '',
    last_day_of_month: '',
    all_days: [],
    action_width: 28,
    action_margin_r: 22
  }),
  mounted() {
    let date = new Date();
    let year = date.getFullYear()
    let month = date.getMonth()
    this.month = month
    let max_day_in_month = this.getLastDayOfMonth(year, month)
    let today = date.getDate()

    this.week_day = this.getWeekDay(date)
    this.last_day_of_month = this.getLastDayOfMonth(year, month)

    for (let i = 0; i < max_day_in_month; i++) {
      this.all_days[i] = {
        day_date: i+1,
        day_name: this.getWeekDay(new Date(year, this.month, i+1)),
        active: today == (i+1) ? true : false
      }
    }


    window.console.log(this.getLastDayOfMonth(year, 7))
  },
  methods: {
    getAllDays() {
      let date = new Date();
      let year = date.getFullYear()
      let month = date.getMonth()
      let max_day_in_month = this.getLastDayOfMonth(year, this.month)
      let today = date.getDate()

      this.week_day = this.getWeekDay(date)
      this.last_day_of_month = this.getLastDayOfMonth(year, this.month)

      let days_arr = []

      for (let i = 0; i < max_day_in_month; i++) {
        days_arr[i] = {
          day_date: i+1,
          day_name: this.getWeekDay(new Date(year, this.month, i+1)),
          active: today == (i+1) && month == this.month ? true : false
        }
      }
      this.all_days = days_arr
    },
    getLastDayOfMonth(year, month) {
      let date = new Date(year, month + 1, 0);
      return date.getDate();
    },
    getWeekDay(date) {
      let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
      return days[date.getDay()];
    },
    getMonthName(month) {
      let months=[
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Ноябрь',
        'Декабрь',
      ];
      return months[month]
    },
    incrementMonth() {
      this.month++
      this.getAllDays()
    },
    decrementMonth() {
      this.month--
      this.getAllDays()
    }
  }
}
</script>

<style scoped>
.pl285{
  padding-left: 285px;
}
.calendar__days {
  margin-bottom: 40px;
}
.calendar__actions-null {
  position: absolute;
  margin-left: 325px;
  z-index: 1;
}
.calendar__actions {
  position: relative;
  z-index: 80;
}
.calendar__clear-actions{
  position: relative;
  width: 100%;
  display: flex;
  bottom: 80px;
  margin-bottom: -80px;
}
.calendar__objs {
  /* max-height: 500px;
  overflow: auto;
  padding-top: 100px;
  margin-top: -100px; */
}
.calendar__objs::-webkit-scrollbar {
  width: 11px;
  height: 8px;
  background-color: rgba(0, 0, 0, 0);
}
.calendar__objs::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: var(--pale-lilac);
}
</style>