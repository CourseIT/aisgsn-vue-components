<template>
    <div>
        My tests PAGE
        <br/>
        <br/>

        <VLoadUploadYaml :model="model" @update-model="value => {this.model = value}"/>

        <v-input-tab-table :label="label" :placeholder="placeholder"
                           @update-model="value => {this.model = value}" v-model="model.value"/>

    </div>
</template>

<script>

    const VInputTabTable = () => import('@/components/v-input-tab-table');
    const VLoadUploadYaml = () => import('@/components/v-load-upload-yaml');

    export default {
        components: {
            VInputTabTable,
            VLoadUploadYaml
        },
        methods: {},
        data: () => ({
            label: 'Таблица CSV(Tab Separated)',
            placeholder: 'Текст в формате CSV(Tab Separated)',
            model: {
                value: 'ИОЗ\tЗаочная\tСоциальная работа\t1\t08-01\n' +
                    'ИОЗ\tЗаочная\tСоциальная работа\t1\t08-01\n' +
                    'ИОЗ\tЗаочная\tСоциальная работа\t1\t08-01',
                table: {
                    row: []
                }
            }
        })
    }
</script>

<style>
</style>