<template>
  <div class="calendar">

    <div class="calendar__days df">
      <v-calendar-day v-for="(day, index) in all_days" :day_name="day.day_name" :day_date="day.day_date" :active="day.active" :key="index"/>
    </div>
    
    <div class="df" v-for="(obj, index) in calendars_obj" :key="index">
      <v-calendar-user  v-if="obj.user.user_name" :user_name="obj.user.user_name" :user_position="obj.user.user_position" />
      <!-- <div class="df calendar__actions-null jcsb">
        
        <v-calendar-action v-for="(action, index) in all_days.length" :key="index" />
      </div> -->
      <div class="df calendar__actions w100 pr20">
        <v-calendar-action v-for="(action, index) in obj.actions" :key="index"
          :action_date="action.action_date"
          :action_name="action.action_name"
          :action_desc="action.action_desc"
          :days="action.days"
          :days_ago="action.days_ago"
        />
      </div>
      
    </div>
    <!-- <div class="calendar__day day-active">
      <div class="day__name day-active">ПН</div>
      <div class="day__date">28</div>
    </div>


    <div class="calendar__user">
      <div class="user__left-border"></div>
      <div class="user__info">
        <div class="info__avatar">
          <img src="" alt="">
        </div>
        <div>
          <p class="info__name">Куликов Б. Ю.</p>
          <p class="info__position">Должность</p>
        </div>
      </div>
    </div>


    <div class="calendar__action">
      <div class="action__top">
        <div class="action__icon">
          <v-icon icon="" font_size="11px"/>
        </div>
        <p class="action__date">20.08.20 – 28.08.20</p>
      </div>
      <p class="action__name">ВНИИЭФ</p>
      <p class="action__desc">Название проверки</p>
      <div class="action__bottom"></div>
      <div class="action__bottom"></div>
    </div> -->


    
    <VCalendarMonthBtn text="test" width="100px"/>
    <VCalendarMonthBtn text="test" width="100px" :active="true"/>

  </div>
</template>

<script>
const VCalendarDay = () => import('./v-calendar-day')
const VCalendarUser = () => import('./v-calendar-user')
const VCalendarAction = () => import('./v-calendar-action')
const VCalendarMonthBtn = () => import('./v-calendar-month-btn')

export default {
  components: {
    VCalendarDay,
    VCalendarUser,
    VCalendarAction,
    VCalendarMonthBtn
  },
  data: () => ({
    calendars_obj: [
      {
        user: {
          user_name: 'Иванов И. И.',
          user_position: 'Должность'
        },
        actions: [
          {
            action_date: '01.06.20 – 05.06.20',
            action_name: 'ВНИИЭФ',
            action_desc: 'Название проверки',
            days: 5,
            days_ago: 0
          },
          {
            action_date: '08.06.20 – 10.06.20',
            action_name: 'НАЗВАНИЕ',
            action_desc: 'Название проверки',
            days: 3,
            days_ago: 7
          },
          {
            action_date: '28.09.20',
            action_name: 'НАЗВАНИЕ',
            action_desc: 'Название проверки',
            days: 1,
            days_ago: 27
          },
        ]
      }
    ],
    week_day: '',
    last_day_of_month: '',
    all_days: []
  }),
  mounted() {
    let date = new Date();
    let year = date.getFullYear()
    let month = date.getMonth()
    let max_day_in_month = this.getLastDayOfMonth(year, month)
    let today = date.getDate()

    this.week_day = this.getWeekDay(date)
    this.last_day_of_month = this.getLastDayOfMonth(year, month)

    for (let i = 0; i < max_day_in_month; i++) {
      this.all_days[i] = {
        day_date: i+1,
        day_name: this.getWeekDay(new Date(year, month, i+1)),
        active: today == (i+1) ? true : false
      }
    }
  },
  methods: {
    getLastDayOfMonth(year, month) {
      let date = new Date(year, month + 1, 0);
      return date.getDate();
    },
    getWeekDay(date) {
      let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
      return days[date.getDay()];
    }
  }
}
</script>

<style scoped>
.calendar__days {
  padding-left: 285px;
  margin-bottom: 40px;
  padding-right: 20px;
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
.pr20{
  padding-right: 15px;
}
</style>