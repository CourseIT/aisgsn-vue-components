<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <div class="df jcsb">
          <div class="w95">
            <h1 class="title">
              Заявка на выполнение испытаний (измерений) на объектах 
              капитального строительства для включения в план ОТКИ УГСН
            </h1>
          </div>
          <Icon icon="" class="icon-s"/>
        </div>
        <v-form
          ref="form"
        >

          <div class="input-block">
            <p class="label">Кому</p>
            <div class="df">
              <v-text-field
                placeholder="Заполнено ………"
                flat="true"
                solo
              ></v-text-field>
              <Icon icon="" class="icon"/>
            </div>
          </div>

          <div class="input-block">
            <p class="label">Поднадзорный объект</p>
            <div class="df">
              <v-text-field
                placeholder="Заполнено ………"
                flat="true"
                solo
              ></v-text-field>
              <Icon icon="" class="icon"/>
            </div>
          </div>

          <div class="input-block">
            <p class="label">Состояние объекта</p>
            <div class="df">
              <v-text-field
                placeholder="Заполнено ………"
                flat="true"
                solo
              ></v-text-field>
              <Icon icon="" class="icon"/>
            </div>
          </div>
          
          <div class="input-block">
            <p class="label">Наличие на объекте системы мониторинга метеоусловий</p>
            <div class="df">
              <v-text-field
                placeholder="Заполнено ………"
                flat="true"
                solo
              ></v-text-field>
              <Icon icon="" class="icon"/>
            </div>
          </div>

          <div class="input-block">
            <p class="label">Основание для включения в план</p>
            <div class="df">
              <v-text-field
                placeholder="Заполнено ………"
                flat="true"
                solo
              ></v-text-field>
              <Icon icon="" class="icon"/>
            </div>
          </div>

          <div class="input-block">
            <p class="label">Срок проведения работ</p>
            <div class="df">
              <v-text-field
                placeholder="21.09.20 - 26.09.20"
                flat="true"
                solo
              ></v-text-field>
              <Icon icon="" class="icon"/>
            </div>
          </div>

          <div class="input-block">
            <p class="label">Объекты контроля:</p>
            <div class="df">
              <v-text-field
                placeholder="Заполнено ………"
                flat="true"
                solo
              ></v-text-field>
              <Icon icon="" class="icon"/>
            </div>
          </div>

          <div class="input-block">
            <p class="label">Проектная документация по объекту контроля</p>
            <div class="df">
              <v-text-field
                placeholder="Заполнено ………"
                flat="true"
                solo
              ></v-text-field>
              <Icon icon="" class="icon"/>
            </div>
          </div>

          <div class="input-block">
            <p class="label">Наличие исполнительной документации по объекту контроля </p>
            <div class="df">
              <v-text-field
                placeholder="Заполнено ………"
                flat="true"
                solo
              ></v-text-field>
              <Icon icon="" class="icon"/>
            </div>
          </div>

          <div class="input-block">
            <p class="label">Включить в план оценку соответствия следующих характеристик на заявляемых объектах контроля: </p>
            <div class="df">
              <v-textarea
                placeholder="Заполнено ………"
                flat="true"
                solo
                auto-grow
              ></v-textarea>
              <Icon icon="" class="icon"/>
            </div>
          </div>

          <div class="input-block">
            <p class="label">По результатам выполнения планируемых на объектах контроля измерений представить:</p>
            <div class="df">
              <v-text-field
                placeholder="Заполнено ………"
                flat="true"
                solo
              ></v-text-field>
              <Icon icon="" class="icon"/>
            </div>
          </div>

          <h1 class="title">
            Распоряжение по ОТКИ УГСН на проведение работ
          </h1>
          <div class="df jcsb w95">
            <p class="label">Провести испытания (измерения) объектов контроля следующим работникам:</p>
            <Icon icon="" class="icon-plus"/>
          </div>
          <hr>
            <div class="input-block">
              <div class="df">
                <v-text-field
                  placeholder="Заполнено ………"
                  flat="true"
                  solo
                  auto-grow
                ></v-text-field>
                <Icon icon="" class="icon"/>
              </div>
            </div>
            <div class="input-block">
              <div class="df">
                <v-text-field
                  placeholder="Заполнено ………"
                  flat="true"
                  solo
                  auto-grow
                ></v-text-field>
                <Icon icon="" class="icon"/>
              </div>
            </div>
            <div class="input-block">
              <div class="df">
                <v-text-field
                  placeholder="Заполнено ………"
                  flat="true"
                  solo
                  auto-grow
                ></v-text-field>
                <Icon icon="" class="icon"/>
              </div>
            </div>
            <div class="input-block">
              <div class="df">
                <v-text-field
                  placeholder="Заполнено ………"
                  flat="true"
                  solo
                  auto-grow
                ></v-text-field>
                <Icon icon="" class="icon"/>
              </div>
            </div>
            <div class="input-block">
              <div class="df">
                <v-text-field
                  placeholder="Заполнено ………"
                  flat="true"
                  solo
                ></v-text-field>
                <Icon icon="" class="icon"/>
              </div>
            </div>
            <div class="df jcfe w95">
              <Icon icon="" class="icon-plus"/>
            </div>
          <hr>

        </v-form>
      </v-col>
      <v-col cols="2">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn
              color="primary"
              dark
              v-on="on"
            >
              Dropdown
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const Icon = () => import('../components/Icon')
export default {
  components: {
    Icon
  },
  data: () => ({
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }),
}
</script>

<style scoped>
.df {
  display: flex;
}
.jcsb {
  justify-content: space-between;
}
.jcfe{
  justify-content: flex-end;
}
.w95 {
  width: 95%;
}
hr {
  border: dashed 0.5px #000;
  margin-bottom: 12px;
}
.input-block {
  margin-bottom: -15px;
}
.icon-s {
  font-family: "Font Awesome 5 Pro Light";
  margin-top: 9px;
  font-size: 21px;
  width: 5%;
  text-align: center;
}
.icon {
  font-family: "Font Awesome 5 Pro";
  margin-top: 9px;
  font-size: 21px;
  width: 5%;
  text-align: center;
}
.icon-plus {
  font-family: "Font Awesome 5 Pro";
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0);
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.81;
  letter-spacing: normal;
  text-align: left;
}
.input-block input {
  font-family: Roboto;
  font-size: 15px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.93;
  letter-spacing: normal;
  text-align: left;
  width: 95%;
  margin-bottom: -15px !important;
}
.label {
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0);
  font-family: Roboto;
  font-size: 12px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  margin-bottom: 5px;
}
.title {
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0);
  font-family: Roboto;
  font-size: 24px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.13;
  letter-spacing: normal;
  text-align: left;
  margin-bottom: 12px;
  max-width: 720px;
}
</style>