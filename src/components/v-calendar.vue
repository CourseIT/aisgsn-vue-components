<template>
  <div class="calendar">

    <div class="calendar__days df">
      <v-calendar-day v-for="(day, index) in days" :day_name="day.day_name" :day_date="day.day_date" :active="day.active" :key="index"/>
    </div>
    
    <div class="df" v-for="(obj, index) in calendars_obj" :key="index">
      <v-calendar-user  v-if="obj.user.user_name" :user_name="obj.user.user_name" :user_position="obj.user.user_position" />
      <div class="df calendar__actions-null">
        
        <v-calendar-action v-for="(action, index) in 14" :key="index" />
      </div>
      <div class="df calendar__actions">
        <v-calendar-action v-for="(action, index) in obj.actions" :key="index" :action_date="action.action_date" :action_name="action.action_name" :action_desc="action.action_desc" :days="action.days"/>
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


    



  </div>
</template>

<script>
const VCalendarDay = () => import('./v-calendar-day')
const VCalendarUser = () => import('./v-calendar-user')
const VCalendarAction = () => import('./v-calendar-action')

export default {
  components: {
    VCalendarDay,
    VCalendarUser,
    VCalendarAction
  },
  data: () => ({
    days: [
      {
        day_name: 'ПН',
        day_date: '1',
        active: true
      },
      {
        day_name: 'ВТ',
        day_date: '2'
      },
      {
        day_name: 'СР',
        day_date: '3'
      },
      {
        day_name: 'ЧТ',
        day_date: '4'
      },
      {
        day_name: 'ПТ',
        day_date: '5'
      },
      {
        day_name: 'СБ',
        day_date: '6'
      },
      {
        day_name: 'ВС',
        day_date: '7'
      },{
        day_name: 'ПН',
        day_date: '8'
      },
      {
        day_name: 'ВТ',
        day_date: '9'
      },
      {
        day_name: 'СР',
        day_date: '2'
      },
      {
        day_name: 'ЧТ',
        day_date: '3'
      },
      {
        day_name: 'ПТ',
        day_date: '4'
      },
      {
        day_name: 'СБ',
        day_date: '5'
      },
      {
        day_name: 'ВС',
        day_date: '6'
      },
      {
        day_name: 'ПН',
        day_date: '1',
        active: true
      },
      {
        day_name: 'ВТ',
        day_date: '2'
      },
      {
        day_name: 'СР',
        day_date: '3'
      },
      {
        day_name: 'ЧТ',
        day_date: '4'
      },
      {
        day_name: 'ПТ',
        day_date: '5'
      },
      {
        day_name: 'СБ',
        day_date: '6'
      },
      {
        day_name: 'ВС',
        day_date: '7'
      },{
        day_name: 'ПН',
        day_date: '8'
      },
      {
        day_name: 'ВТ',
        day_date: '9'
      },
      {
        day_name: 'СР',
        day_date: '2'
      },
      {
        day_name: 'ЧТ',
        day_date: '3'
      },
      {
        day_name: 'ПТ',
        day_date: '4'
      },
      {
        day_name: 'СБ',
        day_date: '5'
      },
      {
        day_name: 'ВС',
        day_date: '6'
      }
    ],
    calendars_obj: [
      {
      user: {
        user_name: 'Иванов И. И.',
        user_position: 'Должность'
      },
      actions: [
        {
          action_date: '20.08.20 – 28.08.20',
          action_name: 'ВНИИЭФ',
          action_desc: 'Название проверки',
          days: 5
        },
        {
          action_date: '31.08.20 – 02.09.20',
          action_name: 'НАЗВАНИЕ',
          action_desc: 'Название проверки',
          days: 3
        },
        {
          action_date: '02.09.20 – 03.09.20',
          action_name: 'НАЗВАНИЕ',
          action_desc: 'Название проверки',
          days: 2
        }
      ]
      }
    ]
  })
}
</script>

<style scoped>
.calendar__days {
  padding-left: 338px;
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
</style>