<template>
  <div class="calendar">


    <div class="pl315 df jcsb w91 aic mb20">
      <v-radio-buttons>
        <v-radio :value="1" label="1 месяц"></v-radio>
        <v-radio :value="3" label="Квартал"></v-radio>
        <v-radio :value="6" label="Полгода"></v-radio>
        <v-radio :value="12" label="Год"></v-radio>
      </v-radio-buttons>
      <img src="../assets/calendar_line.png" alt="">
    </div>

    <div v-if="pick_date === 1" class="pl315 df jcsb w91 mb20">
      <v-calendar-btn @click="decrementMonth" :disabled="month == 0">
        <v-icon v-if="month !== 0" icon="" class="mr18" width="5" font_size="13px"/>
        {{getMonthName(month - 1)}}
      </v-calendar-btn>
      <v-calendar-btn :disabled="true">
        {{getMonthName(month)}}
      </v-calendar-btn>
      <v-calendar-btn @click="incrementMonth" :disabled="month == 11">
        {{getMonthName(month + 1)}}
        <v-icon v-if="month !== 11" icon="" class="ml18" width="5" font_size="13px"/>
      </v-calendar-btn>
    </div>
    <!-- <div v-if="pick_date === 3" class="pl315 df jcsb w91 mb20">
      <v-calendar-btn  @click="decrementQuarter">
        <v-icon v-if="month !== 0" icon="" class="mr18" width="5" font_size="13px"/>
        {{getQuarterName(month - 3)}}
      </v-calendar-btn>
      <v-calendar-btn :disabled="true">
        {{getQuarterName(month)}}
      </v-calendar-btn>
      <v-calendar-btn v-if="month < 9" @click="incrementQuarter">
        {{getQuarterName(month + 3)}}
        <v-icon icon="" class="ml18" width="5" font_size="13px"/>
      </v-calendar-btn>
    </div> -->

    <div v-if="pick_date === 1" class="calendar__days pl315 df">
      <v-calendar-day v-for="(day, index) in all_days" :day_name="day.day_name" :day_date="day.day_date" :active="day.active" :key="index"/>
    </div>

    <div v-if="pick_date === 3" class="calendar__days pl315 w94">
      <div v-if="month < 3" class="w100 df jcsb">
        <VCalendarMonthBtn width="32%" :month="0">
          Январь
        </VCalendarMonthBtn>
        <VCalendarMonthBtn width="32%" :month="1">
          Февраль
        </VCalendarMonthBtn>
        <VCalendarMonthBtn width="32%" :month="2">
          Март
        </VCalendarMonthBtn>
      </div>
      <div v-if="month > 2 && month < 6" class="w100 df jcsb">
        <VCalendarMonthBtn width="32%" :month="3">
          Апрель
        </VCalendarMonthBtn>
        <VCalendarMonthBtn width="32%" :month="4">
          Май
        </VCalendarMonthBtn>
        <VCalendarMonthBtn width="32%" :month="5">
          Июнь
        </VCalendarMonthBtn>
      </div>
      <div v-if="month > 5 && month < 9" class="w100 df jcsb">
        <VCalendarMonthBtn width="32%" :month="6">
          Июль
        </VCalendarMonthBtn>
        <VCalendarMonthBtn width="32%" :month="7">
          Август
        </VCalendarMonthBtn>
        <VCalendarMonthBtn width="32%" :month="8">
          Сентябрь
        </VCalendarMonthBtn>
      </div>
      <div v-if="month > 8" class="w100 df jcsb">
        <VCalendarMonthBtn width="32%" :month="9">
          Октябрь
        </VCalendarMonthBtn>
        <VCalendarMonthBtn width="32%" :month="10">
          Ноябрь
        </VCalendarMonthBtn>
        <VCalendarMonthBtn width="32%" :month="11">
          Декабрь
        </VCalendarMonthBtn>
      </div>
      
    </div>

    <!-- <div v-if="pick_date === 1" class="calendar__objs">
      <div v-for="(obj, index) in calendars_obj" :key="index" class="mb20">
        <div class="df">
          <v-calendar-user  v-if="obj.user.user_name" :user_name="obj.user.user_name" :user_position="obj.user.user_position" />
          <div class="df calendar__actions w100">
            <v-calendar-action v-for="(action, index) in obj.months[month].actions" :key="index"
              :action_date="action.action_date"
              :action_name="action.action_name"
              :action_desc="action.action_desc"
              :days="action.days"
              :days_ago="action.days_ago"
              :pick_date="pick_date"
            />
          </div>
        </div>
        <div class="calendar__clear-actions pl315">
          <v-calendar-clear-action v-for="(day, index) in all_days" :key="index"/>
        </div>
      </div>
    </div> -->

    <!-- ----- -->
    <div class="calendar__objs">
      <div v-for="(arr, index) in dep_arr" :key="index" class="mb40">
        <p class="calendar__departament">{{arr[0].user.department_name}}</p>
        <div v-for="(obj, index) in arr" :key="index" class="calendar__user-actions">
          <div class="df">
          <v-calendar-user  v-if="obj.user.name" :user_name="obj.user.name"  />
          <div class="df calendar__actions w100">
            <div v-for="(action, index) in obj.actions" :key="action.id">
              <v-calendar-action
                :date_from="action.date_from"
                :date_to="action.date_to"
                :details="action.details"
                :head="action.head"
                :id="action.id"
                :name="action.name"
                :show_range_as="action.show_range_as"
                :color="action.color"
                :pick_date="pick_date"
                :actions="action.actions"
                :index="index"
                :month="month + 1"
              />
              <div v-for="(action, index2) in action.actions" :key="index2">
                <v-calendar-line-action 
                  :date_from="action.date_from"
                  :date_to="action.date_to"
                  :details="action.details"
                  :head="action.head"
                  :id="action.id"
                  :name="action.name"
                  :show_range_as="action.show_range_as"
                  :color="action.color"
                  :pick_date="pick_date"
                  :index="index"
              />
              </div>
            
            </div>  
            
          </div>
        </div>
        <div v-if="pick_date == 1" class="calendar__clear-actions pl315">
          <v-calendar-clear-action v-for="(day, index) in all_days" :key="index"/>
        </div>
        <div v-else class="calendar__clear-actions pl315">
          <div class="gray_blok"></div>
        </div>
        </div>
        
      </div>
    </div>
    <!-- ----- -->


    <!-- <div v-if="pick_date === 3" class="calendar__objs">
      <div v-for="(obj, index) in calendars_obj" :key="index" class="mb20">
        <div class="df">
          <v-calendar-user  v-if="obj.user.user_name" :user_name="obj.user.user_name" :user_position="obj.user.user_position" />
          <div class="df calendar__actions w100">
            <v-calendar-action v-for="(action, index) in obj.months[month].actions" :key="index +1"
              :action_date="action.action_date"
              :action_name="action.action_name"
              :action_desc="action.action_desc"
              :days="action.days"
              :days_ago="action.days_ago"
              :month_days_ago="obj.months[month - 1].days"
              :pick_date="pick_date"
            />
          </div>
        </div>
        <div class="calendar__clear-actions pl315">
          <v-calendar-clear-action v-for="(day, index) in (obj.months[month - 1].days + obj.months[month].days + obj.months[month + 1].days)" :key="index" :pick_date="pick_date"/>
        </div>
      </div>
    </div> -->

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
const VRadioButtons = () => import('@/components/v-radio-buttons')
const VCalendarLineAction = () => import('./v-calendar-line-action')


export default {
  components: {
    VCalendarDay,
    VCalendarUser,
    VCalendarAction,
    VCalendarClearAction,
    VCalendarMonthBtn,
    VCalendarBtn,
    VIcon,
    VRadioButtons,
    VCalendarLineAction
  },
  data: () => ({
    calendars_obj: [
      {
        user: {
            user_name: 'Иванов Т. Т.',
            user_position: 'Должность'
        },
        months: [
            {
              days: 31,
              actions: [
                {
                  action_date: '02.01.20 – 05.01.20',
                  action_name: 'ВНИИЭФ',
                  action_desc: 'Название проверки',
                  days: 3,
                  days_ago: 1
                },
                {
                  action_date: '08.01.20 – 11.01.20',
                  action_name: 'НАЗВАНИЕ',
                  action_desc: 'Название проверки',
                  days: 4,
                  days_ago: 7
                },
                {
                  action_date: '21.01.20',
                  action_name: 'НАЗВАНИЕ',
                  action_desc: 'Название проверки',
                  days: 1,
                  days_ago: 20
                },
              ]
            },
            {
              days: 31,
              actions: [
                {
                  action_date: '02.02.20 – 05.01.20',
                  action_name: 'ВНИИЭФ',
                  action_desc: 'Название проверки',
                  days: 3,
                  days_ago: 1
                },
                {
                  action_date: '08.02.20 – 11.01.20',
                  action_name: 'НАЗВАНИЕ',
                  action_desc: 'Название проверки',
                  days: 4,
                  days_ago: 7
                },
                {
                  action_date: '21.02.20',
                  action_name: 'НАЗВАНИЕ',
                  action_desc: 'Название проверки',
                  days: 1,
                  days_ago: 20
                },
              ]
            },
            {
              days: 31,
              actions: [
                {
                  action_date: '02.03.20 – 05.01.20',
                  action_name: 'ВНИИЭФ',
                  action_desc: 'Название проверки',
                  days: 3,
                  days_ago: 1
                },
                {
                  action_date: '08.03.20 – 11.01.20',
                  action_name: 'НАЗВАНИЕ',
                  action_desc: 'Название проверки',
                  days: 4,
                  days_ago: 7
                },
                {
                  action_date: '21.03.20',
                  action_name: 'НАЗВАНИЕ',
                  action_desc: 'Название проверки',
                  days: 1,
                  days_ago: 20
                },
              ]
            },
            {
              days: 31,
              actions: [
                {
                  action_date: '02.04.20 – 05.01.20',
                  action_name: 'ВНИИЭФ',
                  action_desc: 'Название проверки',
                  days: 3,
                  days_ago: 1
                },
                {
                  action_date: '08.04.20 – 11.01.20',
                  action_name: 'НАЗВАНИЕ',
                  action_desc: 'Название проверки',
                  days: 4,
                  days_ago: 7
                },
                {
                  action_date: '21.04.20',
                  action_name: 'НАЗВАНИЕ',
                  action_desc: 'Название проверки',
                  days: 1,
                  days_ago: 20
                },
              ]
            },
            {
              days: 31,
              actions: [
                {
                  action_date: '02.05.20 – 05.01.20',
                  action_name: 'ВНИИЭФ',
                  action_desc: 'Название проверки',
                  days: 3,
                  days_ago: 1
                },
                {
                  action_date: '08.05.20 – 11.01.20',
                  action_name: 'НАЗВАНИЕ',
                  action_desc: 'Название проверки',
                  days: 4,
                  days_ago: 7
                },
                {
                  action_date: '21.05.20',
                  action_name: 'НАЗВАНИЕ',
                  action_desc: 'Название проверки',
                  days: 1,
                  days_ago: 20
                },
              ]
            },
            {
              days: 31,
              actions: [
                {
                  action_date: '02.06.20 – 05.01.20',
                  action_name: 'ВНИИЭФ',
                  action_desc: 'Название проверки',
                  days: 3,
                  days_ago: 1
                },
                {
                  action_date: '08.06.20 – 11.01.20',
                  action_name: 'НАЗВАНИЕ',
                  action_desc: 'Название проверки',
                  days: 4,
                  days_ago: 7
                },
                {
                  action_date: '21.06.20',
                  action_name: 'НАЗВАНИЕ',
                  action_desc: 'Название проверки',
                  days: 1,
                  days_ago: 20
                },
              ]
            },
            {
              days: 31,
              actions: [
                {
                  action_date: '02.07.20 – 05.01.20',
                  action_name: 'ВНИИЭФ',
                  action_desc: 'Название проверки',
                  days: 3,
                  days_ago: 1
                },
                {
                  action_date: '08.07.20 – 11.01.20',
                  action_name: 'НАЗВАНИЕ',
                  action_desc: 'Название проверки',
                  days: 4,
                  days_ago: 7
                },
                {
                  action_date: '10.07.20 – 13.01.20',
                  action_name: 'НАЗВАНИЕ',
                  action_desc: 'Название проверки',
                  days: 4,
                  days_ago: 10
                },
                {
                  action_date: '10.07.20 – 13.01.20',
                  action_name: 'НАЗВАНИЕ',
                  action_desc: 'Название проверки',
                  days: 4,
                  days_ago: 10
                },
                {
                  action_date: '21.07.20',
                  action_name: 'НАЗВАНИЕ',
                  action_desc: 'Название проверки',
                  days: 1,
                  days_ago: 20
                },
              ]
            },
            {
              days: 31,
              actions: [
                {
                  action_date: '02.08.20 – 05.01.20',
                  action_name: 'ВНИИЭФ',
                  action_desc: 'Название проверки',
                  days: 3,
                  days_ago: 1
                },
                {
                  action_date: '08.08.20 – 11.01.20',
                  action_name: 'НАЗВАНИЕ',
                  action_desc: 'Название проверки',
                  days: 4,
                  days_ago: 7
                },
                {
                  action_date: '31.08.20',
                  action_name: 'НАЗВАНИЕ',
                  action_desc: 'Название проверки',
                  days: 1,
                  days_ago: 30
                },
              ]
            },
            {
              days: 31,
              actions: [
                {
                  action_date: '02.09.20 – 05.01.20',
                  action_name: 'ВНИИЭФ',
                  action_desc: 'Название проверки',
                  days: 3,
                  days_ago: 1
                },
                {
                  action_date: '08.09.20 – 11.01.20',
                  action_name: 'НАЗВАНИЕ',
                  action_desc: 'Название проверки',
                  days: 4,
                  days_ago: 7
                },
                {
                  action_date: '21.09.20',
                  action_name: 'НАЗВАНИЕ',
                  action_desc: 'Название проверки',
                  days: 1,
                  days_ago: 20
                },
              ]
            },
            {
              days: 31,
              actions: [
                {
                  action_date: '02.10.20 – 05.01.20',
                  action_name: 'ВНИИЭФ',
                  action_desc: 'Название проверки',
                  days: 3,
                  days_ago: 1
                },
                {
                  action_date: '08.10.20 – 11.01.20',
                  action_name: 'НАЗВАНИЕ',
                  action_desc: 'Название проверки',
                  days: 4,
                  days_ago: 7
                },
                {
                  action_date: '21.10.20',
                  action_name: 'НАЗВАНИЕ',
                  action_desc: 'Название проверки',
                  days: 1,
                  days_ago: 20
                },
              ]
            },
            {
              days: 31,
              actions: [
                {
                  action_date: '02.11.20 – 05.01.20',
                  action_name: 'ВНИИЭФ',
                  action_desc: 'Название проверки',
                  days: 3,
                  days_ago: 1
                },
                {
                  action_date: '08.11.20 – 11.01.20',
                  action_name: 'НАЗВАНИЕ',
                  action_desc: 'Название проверки',
                  days: 4,
                  days_ago: 7
                },
                {
                  action_date: '21.11.20',
                  action_name: 'НАЗВАНИЕ',
                  action_desc: 'Название проверки',
                  days: 1,
                  days_ago: 20
                },
              ]
            },
            {
              days: 31,
              actions: [
                {
                  action_date: '02.12.20 – 05.01.20',
                  action_name: 'ВНИИЭФ',
                  action_desc: 'Название проверки',
                  days: 3,
                  days_ago: 1
                },
                {
                  action_date: '08.12.20 – 11.01.20',
                  action_name: 'НАЗВАНИЕ',
                  action_desc: 'Название проверки',
                  days: 4,
                  days_ago: 7
                },
                {
                  action_date: '21.12.20',
                  action_name: 'НАЗВАНИЕ',
                  action_desc: 'Название проверки',
                  days: 1,
                  days_ago: 20
                },
              ]
            },
        ],
        actions: [
          {
            id: 1,
            name: '1',
            date_start: '2020-01-08',
            date_end: '2020-01-10',
            user_id: 1
          }
        ]
      },
    ],
    actions: [
      {
        id: 1,
        name: 'ФГУП «ПСЗ»',
        head: "",
        date_from: '2020-08-03',
        date_to: '2020-08-10',
        user_id: 1,
        show_range_as: '',
        details: 'Название проверки',
        color: '#007aff'
      },
      {
        id: 2,
        name: 'ФГУП «ПО «Маяк»',
        head: "",
        date_from: '2020-08-07',
        date_to: '2020-08-17',
        user_id: 1,
        show_range_as: '',
        details: 'Название проверки',
        color: '#ff3b30'
      },
      {
        id: 3,
        name: 'ВНИИЭФ',
        head: "",
        date_from: '2020-08-20',
        date_to: '2020-08-28',
        user_id: 1,
        show_range_as: '',
        details: 'Название проверки',
        color: '#4cd964'
      },
      {
        id: 4,
        name: 'ВНИИА',
        head: "",
        date_from: '2020-08-31',
        date_to: '2020-08-31',
        user_id: 1,
        show_range_as: '',
        details: 'Название проверки',
        color: '#ff3b30'
      },
      {
        id: 4,
        name: 'ВНИИЭФ',
        head: "",
        date_from: '2020-08-01',
        date_to: '2020-08-13',
        user_id: 2,
        show_range_as: '',
        details: 'Название проверки',
        color: '#ff3b30'
      },
      {
        id: 4,
        name: 'ФГУП «НИТИ им. А. П. Александрова»',
        head: "",
        date_from: '2020-08-14',
        date_to: '2020-08-17',
        user_id: 2,
        show_range_as: '',
        details: 'Название проверки',
        color: '#4cd964'
      },
      {
        id: 2,
        name: 'ФГУП «ПСЗ»',
        head: "",
        date_from: '2020-08-19',
        date_to: '2020-08-28',
        user_id: 2,
        show_range_as: '',
        details: 'Название проверки',
        color: '#007aff'
      },
      {
        id: 2,
        name: 'ВНИИА',
        head: "",
        date_from: '2020-08-12',
        date_to: '2020-08-29',
        user_id: 3,
        show_range_as: '',
        details: 'Название проверки',
        color: '#ff3b30'
      },
      {
        id: 4,
        name: 'Отпуск',
        head: "",
        date_from: '2020-07-16',
        date_to: '2020-08-10',
        user_id: 3,
        show_range_as: '',
        details: 'Дополнительное поле',
        color: '#8e8e93'
      },
      {
        id: 4,
        name: 'Отпуск',
        head: "",
        date_from: '2020-07-16',
        date_to: '2020-08-10',
        user_id: 3,
        show_range_as: '',
        details: 'Дополнительное поле',
        color: '#8e8e93'
      },
      {
        id: 5,
        name: 'Обучение',
        head: "",
        date_from: '2020-07-07',
        date_to: '2020-09-01',
        user_id: 4,
        show_range_as: '',
        details: 'Дополнительное поле',
        color: '#8e8e93'
      },
      {
        id: 6,
        name: 'ВНИИА',
        head: "",
        date_from: '2020-08-25',
        date_to: '2020-08-31',
        user_id: 5,
        show_range_as: '',
        details: 'Название проверки',
        color: '#ff3b30'
      },
      {
        id: 9,
        name: 'ФГУП «Атомфлот»',
        head: "",
        date_from: '2020-08-03',
        date_to: '2020-08-21',
        user_id: 5,
        show_range_as: '',
        details: 'Название проверки',
        color: '#007aff'
      },
      {
        id: 7,
        name: 'Больничный',
        head: "",
        date_from: '2020-07-20',
        date_to: '2020-08-21',
        user_id: 6,
        show_range_as: '',
        details: 'Дополнительное поле',
        color: '#8e8e93'
      },
      {
        id: 7,
        name: 'ВНИИЭФ',
        head: "",
        date_from: '2020-08-24',
        date_to: '2020-08-28',
        user_id: 6,
        show_range_as: '',
        details: 'Дополнительное поле',
        color: '#ff3b30'
      }
    ],
    users: [
      {
        id: 1,
        name: 'Куликов Б. Ю.',
        department: 1,
        department_name: 'Отдел государственного строительного надзора'
      },
      {
        id: 2,
        name: 'Сидельников А. Г.',
        department: 1,
        department_name: 'Отдел государственного строительного надзора'
      },
      {
        id: 3,
        name: 'Морозов М. А.',
        department: 1,
        department_name: 'Отдел государственного строительного надзора'
      },
      {
        id: 4,
        name: 'Куприянов В. Ю.',
        department: 1,
        department_name: 'Отдел государственного строительного надзора'
      },
      {
        id: 5,
        name: 'Бегларян В. В.',
        department: 2,
        department_name: 'Отдел технического контроля и испытаний'
      },
      {
        id: 6,
        name: 'Сотрудник А. А.',
        department: 2,
        department_name: 'Отдел технического контроля и испытаний'
      },
    ],
    test_arr: [],
    test_actions: [],
    month: '',
    week_day: '',
    last_day_of_month: '',
    all_days: [],
    pick_date: 1,
    departments: [],
    dep_arr: []
  }),
  created() {
    let departments_id = []
    this.users.forEach((user) => {
      departments_id.push(user.department)
    })
    let uniqueArray = departments_id.filter(function(item, pos) {
      return departments_id.indexOf(item) == pos;
    }) 

    uniqueArray.forEach((id) => {
      let user_by_dep = this.users.filter((user) => {return user.department == id})
      this.departments.push({
        users: user_by_dep,
        users_department: user_by_dep[0].department_name
      })
    })


    this.departments.forEach((dep)=>{
      let dep_obj = []
      dep.users.forEach((user) => {
        let user_actions = this.actions.filter((action_) => {return action_.user_id == user.id})
        //window.console.log(user_actions)

        user_actions.forEach((action) => {
          let date_from_month = action.date_from.substr(5, 2)
          let date_from_days = action.date_from.substr(8, 2)

          //let date_to_month = action.date_to_.substr(5, 2)
          let date_to_days = action.date_to.substr(8, 2)

          let actions_by_month = user_actions.filter((action_) => {return action_.date_from.substr(5, 2) === date_from_month})

          let actions_by_days = actions_by_month.filter((action_) => {
            if( action_.date_from.substr(8, 2) >= date_from_days && action_.date_from.substr(8, 2) <= date_to_days && action_.id !== action.id) {
              return action_
            } else if (action_.date_to.substr(8, 2) >= date_from_days && action_.date_to.substr(8, 2) <= date_to_days && action_.id !== action.id) {
              return action_
            }
          })
          action.actions = actions_by_days
        })
        
        dep_obj.push({
          actions: user_actions,
          user: user
        })
      })
      this.dep_arr.push(dep_obj)
    })

    this.users.forEach((user) => {
      let user_actions = this.actions.filter((action_) => {return action_.user_id == user.id})
      //window.console.log(user_actions)

      user_actions.forEach((action) => {
        let date_from_month = action.date_from.substr(5, 2)
        let date_from_days = action.date_from.substr(8, 2)

        //let date_to_month = action.date_to_.substr(5, 2)
        let date_to_days = action.date_to.substr(8, 2)

        let actions_by_month = user_actions.filter((action_) => {return action_.date_from.substr(5, 2) === date_from_month})

        let actions_by_days = actions_by_month.filter((action_) => {
          if( action_.date_from.substr(8, 2) >= date_from_days && action_.date_from.substr(8, 2) <= date_to_days && action_.id !== action.id) {
            return action_
          } else if (action_.date_to.substr(8, 2) >= date_from_days && action_.date_to.substr(8, 2) <= date_to_days && action_.id !== action.id) {
            return action_
          }
        })
        action.actions = actions_by_days
      })

      this.test_arr.push({
        actions: user_actions,
        user: user
      })
    })
  },
  mounted() {
    let date = new Date();
    let year = date.getFullYear()
    let month = date.getMonth()
    this.month = month
    let max_day_in_month = this.getLastDayOfMonth(year, month)
    let today = date.getDate()

    this.week_day = this.getWeekDay(date)
    this.last_day_of_month = this.getLastDayOfMonth(year, month)

    //let actions_arr = new Array(max_day_in_month)
    
    

    for (let i = 0; i < max_day_in_month; i++) {
      this.all_days[i] = {
        day_date: i+1,
        day_name: this.getWeekDay(new Date(year, this.month, i+1)),
        active: today == (i+1) ? true : false
      }
    }

    // this.all_days.forEach((day)=>{
    //   window.console.log(day)
    // })
    this.test_arr.forEach((test_obj)=> {
      test_obj.actions.forEach((action)=> {
        action.actions.forEach((action) => {
          window.console.log(action)
        })
      })
    })
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
        'Октябрь',
        'Ноябрь',
        'Декабрь',
      ];
      return months[month]
    },
    getQuarterName(month) {
      switch (month) {
        case 0 || 1 || 2:
          return 'I  квартал'
        case 3 || 4 || 5:
          return 'II  квартал'
        case 6 || 7 || 8:
          return 'III  квартал'
        case 9 || 10 || 11:
          return 'IV квартал'
        default:
          return 0
      }
    },
    incrementMonth() {
      this.month++
      this.getAllDays()
    },
    decrementMonth() {
      this.month--
      this.getAllDays()
    },

    incrementQuarter() {
      if(this.month <= 2) {
        this.month = 4
      }
      if(this.month >= 3 && this.month <=5) {
        this.month = 7
      }
      if(this.month >= 6 && this.month <=8) {
        this.month = 10
      }
    },
    
    decrementQuarter() {
      if(this.month >= 3 && this.month <=5) {
        this.month = 1
      }
      if(this.month >= 6 && this.month <=8) {
        this.month = 4
      }
      if(this.month >= 9 && this.month <=11) {
        this.month = 7
      }
    }
  }
}
</script>

<style scoped>
.pl315{
  padding-left: 315px;
}
.mb40 {
  margin-bottom: 40px;
}
.w91 {
  width: 91%;
}
.w94 {
  width: 94%;
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
  z-index: 8;
}
.calendar__clear-actions{
  position: relative;
  width: 100%;
  display: flex;
  bottom: 80px;
  margin-bottom: -80px;
}
.calendar__objs {
}
.calendar__user-actions {
  margin-bottom: 7px;
}
.calendar__departament {
  font-family: Roboto;
  font-size: 15px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
  margin-bottom: 25px;
  max-width: 270px;
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
.calendar__text {
  font-family: Roboto;
  font-size: 15px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
}
.clear_action_line {
  width: 93%;
  height: 80px;
  border-radius: 8px;
  background-color: var(--pale-lilac);
}
.gray_blok {
  height: 80px;
  width: 92.7%;
  background-color: var(--pale-lilac);
}
</style>