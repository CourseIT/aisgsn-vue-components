<template>
    <div>
        <v-input :icon_block="true" :label="label" :placeholder="placeholder"
                 class="with-footer" ref="input"
                 type="textarea" v-model="input_value"/>
        <span class="footer">
            Строк: {{ row_count }} Столбцов: {{ col_count }}
        </span>
    </div>
</template>

<script>
    const VInput = () => import('@/components/v-input');

    export default {
        name: "v-input-tab-table",
        components: {
            VInput,
        },
        props: {
            label: {
                default: ''
            },
            placeholder: {
                default: 'Текст в формате CSV(Tab Separated)'
            },
            value: {
                default: ''
            }
        },
        data: () => ({
            row_count: 0,
            col_count: 0,
            input_value: '',
            model: {
                value: null,
                table: {
                    row: []
                }
            }
        }),
        watch: {
            input_value(value) {
                this.$emit('input', value);
                this.model = {
                    value: value,
                    table: {
                        row: []
                    }
                };

                let rows = value.split('\n').map(row => row.trim());
                rows.forEach(row_csv => {
                    let row = {
                        col: []
                    };
                    let cols = row_csv.split('\t');
                    cols.forEach(col_csv => {
                        row['col'].push(col_csv)
                    });
                    this.model.table['row'].push(row)
                });
                this.row_count = value ? this.model.table['row'].length : 0;
                this.col_count = value ? (this.model.table['row'] ? this.model.table['row'][0]['col'].length : 0) : 0;
                this.$emit('update-model', this.model);
            },
            value(value) {
                this.input_value = value;
            }
        },
        mounted() {
            this.input_value = this.value;
        }
    }
</script>

<style scoped>
    .footer {
        -webkit-text-stroke: 1px rgba(0, 0, 0, 0);
        font-family: Roboto;
        font-size: 0.75rem;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.25;
        letter-spacing: normal;
        text-align: left;
        margin-bottom: 20px;
    }

    .with-footer {
        margin-bottom: -34px !important;
    }
</style>