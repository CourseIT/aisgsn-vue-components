<template>
  <div>
    <div>
      <v-simple-table class="checkup-card-list__table">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Название документа</th>
              <th class="text-left">Автор</th>
              <th class="text-left">Тип</th>
              <th class="text-left">Подписан</th>
              <th class="text-left">Статус</th>
              <th class="text-left">Дата</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in docs" :key="index" class="table__tr">
              <td class="table__name">{{ item.name }}</td>
              <td class="table__text">{{ item.author }}</td>
              <td class="table__text table__type">{{ item.type }}</td>
              <td class="table__text">{{ item.podpisan }}</td>
              <td class="table__text">{{ item.status }}</td>
              <td class="table__text">{{ item.date }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
export default {
  props: ['docs'],
  data: () => ({
  })
}
</script>

<style>
.theme--light.checkup-card-list__table thead tr:last-child th {
  height: 30px;
  border: none;
  font-family: Roboto;
  font-size: 11px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
}
.theme--light.checkup-card-list__table tbody tr:not(:last-child) td:not(.v-data-table__mobile-row) {
  border: none;
}
.checkup-card-list__table tbody tr:hover {
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
  background-color: #fff !important;
  cursor: pointer;
}
.checkup-card-list__table tbody tr {
  height: 50px;
  border-radius: 4px;
  background-color: #fff;
}
.checkup-card-list__table {
  background: none !important;
}
.checkup-card-list__table table {
  border-spacing: 0 10px;
}
.checkup-card-list__table .table__tr {
  transition: all 0.2s ease-out;
}
.checkup-card-list__table .table__tr:hover td{
  color: var(--bright-orange);
}
.checkup-card-list__table .table__name {
  font-family: Roboto;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
}
.checkup-card-list__table .table__text:last-child {
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
.checkup-card-list__table .table__type {
  color: var(--dark) !important;
}
</style>