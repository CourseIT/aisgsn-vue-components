<template>
  <div v-if="visible" :class="{'read-only': readOnly == true}">
    <v-simple-table fixed-header :height="height" class="checkup-card-list__table">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left" v-for="(th, index) in thead" :key="index">{{th}}</th>
          </tr>
        </thead>
        <tbody>
          <tr @click="action" v-for="(item, index) in docs" :key="index" class="table__tr">
            <td class="table__name">{{ item.name }}</td>
            <td class="table__text">{{ item.author }}</td>
            <td class="table__text">{{ item.type }}</td>
            <td class="table__text">{{ item.podpisan }}</td>
            <td class="table__text">{{ item.status }}</td>
            <td class="table__text">{{ item.date }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  props: {
    docs: {},
    thead: {},
    height: {},
    read_only: {},
    visible: {
      default: true
    },
    action: {
      default: function() {
        return () => ({})
      }
    }
  },
  data: () => ({
  }),
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

<style>
.theme--light.checkup-card-list__table thead tr:last-child th {
  height: 30px;
  border: none !important;
  font-family: Roboto;
  font-size: 11px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: normal;
  text-align: center !important;
  color: var(--dark);
  z-index: 1;
  border: none !important;
  border-bottom: none !important;
}
.theme--light.checkup-card-list__table tbody tr:not(:last-child) td:not(.v-data-table__mobile-row) {
  border: none !important;
}
.theme--light.v-data-table thead tr:last-child th {
  background: var(--pale-grey) !important;
}
.theme--light.v-data-table thead tr th {
  border: none !important;
}
.checkup-card-list__table tbody tr:hover {
  box-shadow: 0 7px 10px 0 rgba(0, 0, 0, 0.22);
  background-color: var(--white) !important;
  cursor: pointer;
}
.checkup-card-list__table tbody tr {
  height: 50px;
  border-radius: 4px !important;
  background-color: var(--white);
}
.checkup-card-list__table {
  background: none !important;
}
.checkup-card-list__table table {
  border-spacing: 0 10px !important;
}
.checkup-card-list__table .table__tr {
  background: var(--white);
}
.checkup-card-list__table .table__tr td:first-child {
  border-radius: 4px 0px 0px 4px;
}
.checkup-card-list__table .table__tr td:last-child {
  border-radius: 0px 4px 4px 0px;
}
.checkup-card-list__table .table__tr td{
  transition: all 0.2s ease-out;
}
.checkup-card-list__table .table__tr:hover td{
  color: var(--bright-orange);
  background-color: var(--pale-lilac);
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
.checkup-card-list__table .table__text {
  min-width: 100px;
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
.checkup-card-list__table .v-data-table__wrapper {
  padding-right: 20px;
  padding-left: 10px;
  margin-left: -10px;
}
.checkup-card-list__table .v-data-table__wrapper thead tr th {
  background: none;
}
.checkup-card-list__table .v-data-table__wrapper::-webkit-scrollbar {
  width: 11px;
  height: 8px;
  background-color: rgba(0, 0, 0, 0);
}
.checkup-card-list__table .v-data-table__wrapper::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: var(--pale-lilac);
}
</style>