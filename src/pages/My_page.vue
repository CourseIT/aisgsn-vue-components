<template>
    <div>
        My tests PAGE
        <br/>
        <br/>

        <v-load-upload-yaml :model="model" @update-model="value => {this.model = value}"/>

        <v-input-tab-table :label="label" :placeholder="placeholder"
                           @update-model="value => {this.model.table = value}" v-model="model.table.value"/>

        <br/>
        <br/>
        <v-button-merge-model :model_f="model" :model_s="model_s"
                              @update-model="value => {this.model = value}"/>

    </div>
</template>

<script>

    const VInputTabTable = () => import('@/components/v-input-tab-table');
    const VLoadUploadYaml = () => import('@/components/v-load-upload-yaml');
    const VButtonMergeModel = () => import('@/components/v-button-merge-model');

    export default {
        components: {
            VInputTabTable,
            VLoadUploadYaml,
            VButtonMergeModel
        },
        methods: {},
        data: () => ({
            label: 'Таблица CSV(Tab Separated)',
            placeholder: 'Текст в формате CSV(Tab Separated)',
            model: {
                "entity": {
                    "data": {
                        "data_id": "data",
                        "integrity_fixed": "false\n- section_id: s0\n  section_type: hidden \n  list:\n    - list_id: l0\n      type: various\n      group:\n        - group_id: g0\n          integrity_fixed: false\n          doc_proc_context: always\n          item:\n            - item_id: display\n              label: Название заявки\n              type: edit\n              value: 10\n              service: true",
                        "section": [
                            {
                                "section_id": "s1",
                                "section_type": "persist",
                                "list": [
                                    {
                                        "list_id": "l1",
                                        "type": "various",
                                        "group": [
                                            {
                                                "group_id": "g1",
                                                "integrity_fixed": false,
                                                "doc_proc_context": "always",
                                                "item": [
                                                    {
                                                        "item_id": "registr_nom",
                                                        "label": "Рег.№",
                                                        "type": "edit",
                                                        "value": 10
                                                    },
                                                    {
                                                        "item_id": "registr_data",
                                                        "label": "от",
                                                        "type": "date",
                                                        "value": "[native Date Thu Jan 01 2015 03:00:00 GMT+0300 (Москва, стандартное время)]"
                                                    },
                                                    {
                                                        "item_id": "zayavitelq",
                                                        "source": "С1",
                                                        "label": "Заявитель",
                                                        "type": "server-select",
                                                        "id": "s1-1",
                                                        "value": "Объект 1"
                                                    },
                                                    {
                                                        "item_id": "obqqekt_ks",
                                                        "source": "С2",
                                                        "hint": "Наименование объекта капитального строительства, ФЯО",
                                                        "label": "Поднадзорный объект",
                                                        "type": "server-select",
                                                        "id": "s2-1",
                                                        "value": "Объект 1"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "section_id": "s2",
                                "name": "Информация о требуемых работах",
                                "list": [
                                    {
                                        "list_id": "l2",
                                        "type": "various",
                                        "group": [
                                            {
                                                "group_id": "g2",
                                                "integrity_fixed": false,
                                                "item": [
                                                    {
                                                        "item_id": "status_obqqekta",
                                                        "label": "Состояние объекта",
                                                        "hint": "завершён строительством и/или указать этапы работ, выполненные по объекту)",
                                                        "type": "edit",
                                                        "template": [
                                                            "завершён строительством"
                                                        ],
                                                        "value": "Объект 1"
                                                    },
                                                    {
                                                        "item_id": "nalichie_monitoringa_meteousloviq",
                                                        "label": "Наличие на объекте системы мониторинга метеоусловий",
                                                        "hint": "АСКРО, метеостанция. метеопост и т.п.",
                                                        "type": "edit",
                                                        "value": "метеостанция"
                                                    },
                                                    {
                                                        "item_id": "osn_vklyuchen_plan",
                                                        "label": "Основание для включения в план",
                                                        "hint": "дата, номера актов и нарушений из материалов проверки, проведённой ОГСН",
                                                        "type": "text",
                                                        "value": null
                                                    },
                                                    {
                                                        "item_id": "srok_rabot",
                                                        "label": "Срок проведения работ",
                                                        "hint": "дата начала и окончания работ по неразрушающему контролю на поднадзорном объекте",
                                                        "type": "date-range",
                                                        "date_start": "[native Date Tue Dec 03 2019 03:00:00 GMT+0300 (Москва, стандартное время)]",
                                                        "date_end": "[native Date Thu Dec 05 2019 03:00:00 GMT+0300 (Москва, стандартное время)]"
                                                    },
                                                    {
                                                        "item_id": "obqqekty_kontrolya",
                                                        "label": "Объекты контроля",
                                                        "hint": "наименование зданий, сооружений их элементов с указанием отметок, осей, узлов. Объекты контроля нумеруются по порядку",
                                                        "type": "text"
                                                    },
                                                    {
                                                        "item_id": "proekt_dok",
                                                        "label": "Проектная документация по объекту контроля",
                                                        "hint": "наименование, инв.№, шифр, номер листа и/или чертежа",
                                                        "type": "text",
                                                        "value": "Проектная документация\\n  объекта капитального строительства 1"
                                                    },
                                                    {
                                                        "item_id": "nalichie_isp_dok",
                                                        "label": "Наличие исполнительной документации по объекту контроля",
                                                        "hint": "имеется, имеется частично, отсутствует",
                                                        "type": "select",
                                                        "value": "имеется"
                                                    },
                                                    {
                                                        "item_id": "vklyuchitq_oczenku_harakteristik",
                                                        "label": "Включить в план оценку соответствия следующих характеристик на заявляемых объектах контроля",
                                                        "hint": "указать номер объекта контроля согласно настоящей заявке и характеристику, подлежащую исследованию: тепловая защита; прочность бетонных конструкций; толщина защитного слоя бетонных конструкций; геометрические размеры, положение строительных конструкций и качество сварных соединений; прочность сцепления гидроизоляционных слоев с основанием кровли и между собой; характер и величина раскрытия трещин строительных конструкций; освещённость; толщина лакокрасочного покрытия; скорость воздушных потоков и производительность систем вентиляции",
                                                        "type": "text",
                                                        "value": "Характеристика 1, Характеристика 2"
                                                    },
                                                    {
                                                        "item_id": "po_rezultatam_predstavitq",
                                                        "label": "По результатам выполнения планируемых на объектах контроля измерений представить",
                                                        "hint": "указать номер объекта контроля согласно настоящей заявке и наименование итогового документа: заключение, акт, протокол",
                                                        "type": "text",
                                                        "value": "Перечень документов"
                                                    }
                                                ]
                                            },
                                            {
                                                "group_id": "sotrudnik_no",
                                                "show_as": "card",
                                                "item": [
                                                    {
                                                        "item_id": "no_sotrudnik",
                                                        "label": "ФИО",
                                                        "type": "server-select",
                                                        "value": "Сергеев Сергей Сергеевич",
                                                        "source": "С8"
                                                    },
                                                    {
                                                        "item_id": "no_dolzhnostq",
                                                        "label": "Сотрудник НО",
                                                        "type": "edit",
                                                        "value": "Государственный инспектор"
                                                    },
                                                    {
                                                        "item_id": "no_podpisq",
                                                        "signature_date": "[native Date Mon Jan 01 2018 03:00:00 GMT+0300 (Москва, стандартное время)]",
                                                        "label": "Подпись",
                                                        "type": "concurrent-act",
                                                        "transition": "napravitq_otki",
                                                        "signed": false
                                                    }
                                                ]
                                            },
                                            {
                                                "group_id": "rasporyazhenie_metki",
                                                "show_as": "no-group",
                                                "item": [
                                                    {
                                                        "item_id": "metka_rasporyazhenie_zagolovok",
                                                        "type": "label:h1",
                                                        "label": "Распоряжение по ОТКИ УГСН на проведение работ"
                                                    },
                                                    {
                                                        "item_id": "metka_provesti_ispytaniya",
                                                        "type": "label:h2",
                                                        "label": "Провести испытания (измерения) объектов контроля следующим работникам"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "section_id": "s3",
                                "name": "Сведения об участниках проведения испытаний",
                                "list": [
                                    {
                                        "list_id": "sotrudnik_otki",
                                        "type": "similar",
                                        "group": [
                                            {
                                                "group_id": "g3",
                                                "show_as": "card",
                                                "group_num": 1,
                                                "item": [
                                                    {
                                                        "item_id": "sotrudnik",
                                                        "label": "ФИО",
                                                        "type": "server-select",
                                                        "value": "Кузнецов Андрей Александрович",
                                                        "source": "С8"
                                                    },
                                                    {
                                                        "item_id": "dolzhnostq",
                                                        "label": "Должность",
                                                        "type": "edit",
                                                        "value": "Главный специалист"
                                                    },
                                                    {
                                                        "item_id": "podpisq",
                                                        "signature_date": "[native Date Mon Jan 01 2018 03:00:00 GMT+0300 (Москва, стандартное время)]",
                                                        "label": "Подпись",
                                                        "type": "signature",
                                                        "transition": "peredatq_na_podpisq_nachalniku_otki",
                                                        "signed": false
                                                    }
                                                ]
                                            },
                                            {
                                                "group_id": "g3",
                                                "show_as": "card",
                                                "group_num": 2,
                                                "item": [
                                                    {
                                                        "item_id": "sotrudnik",
                                                        "label": "ФИО",
                                                        "type": "server-select",
                                                        "value": "Смирнов Сергей Сергеевич",
                                                        "source": "С8"
                                                    },
                                                    {
                                                        "item_id": "dolzhnostq",
                                                        "label": "Должность",
                                                        "type": "edit",
                                                        "value": "Главный специалист"
                                                    },
                                                    {
                                                        "item_id": "podpisq",
                                                        "signature_date": "[native Date Mon Jan 01 2018 03:00:00 GMT+0300 (Москва, стандартное время)]",
                                                        "label": "Подпись",
                                                        "type": "signature",
                                                        "transition": "peredatq_na_podpisq_nachalniku_otki",
                                                        "signed": false
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "list_id": "sotrudnik_otki",
                                        "group": [
                                            {
                                                "group_id": "nachalqnik_otki",
                                                "show_as": "group",
                                                "item": [
                                                    {
                                                        "item_id": "nachalqnik_sotrudnik",
                                                        "label": "ФИО",
                                                        "type": "server-select",
                                                        "value": "Сергеев Сергей Сергеевич",
                                                        "source": "С8"
                                                    },
                                                    {
                                                        "item_id": "nachaknik_dolzhnostq",
                                                        "label": "Начальник ОТКИ",
                                                        "type": "edit",
                                                        "value": "Главный специалист"
                                                    },
                                                    {
                                                        "item_id": "nachalqnik_podpisq",
                                                        "signature_date": "[native Date Mon Jan 01 2018 03:00:00 GMT+0300 (Москва, стандартное время)]",
                                                        "label": "Подпись",
                                                        "type": "signature",
                                                        "transition": "soglasovatq",
                                                        "signed": false
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                },
                "value": "",

                table: {
                    value: 'ИОЗ\tЗаочная\tСоциальная работа\t1\t08-01\n' +
                        'ИОЗ\tЗаочная\tСоциальная работа\t1\t08-01\n' +
                        'ИОЗ\tЗаочная\tСоциальная работа\t1\t08-01',
                    table: {
                        row: []
                    }
                }
            },
            model_s: {
                "entity": {
                    "data": {
                        "data_id": "data",
                        "integrity_fixed": "false\n- section_id: s0\n  section_type: hidden \n  list:\n    - list_id: l0\n      type: various\n      group:\n        - group_id: g0\n          integrity_fixed: false\n          doc_proc_context: always\n          item:\n            - item_id: display\n              label: Название заявки\n              type: edit\n              value: 10\n              service: true",
                        "section": [
                            {
                                "section_id": "s1",
                                "section_type": "persist",
                                "list": [
                                    {
                                        "list_id": "l1",
                                        "type": "various",
                                        "group": [
                                            {
                                                "group_id": "g1",
                                                "integrity_fixed": false,
                                                "doc_proc_context": "always",
                                                "item": [
                                                    {
                                                        "item_id": "registr_nom",
                                                        "label": "Рег.№",
                                                        "type": "edit",
                                                        "value": 120,
                                                        "qwe": 120,
                                                        "test": {
                                                            "test": "test"
                                                        }
                                                    },
                                                    {
                                                        "item_id": "obqqekt_kssdf",
                                                        "source": "С2",
                                                        "hint": "Наименование объекта капитального строительства, ФЯО",
                                                        "label": "Поднадзорный объект",
                                                        "type": "server-select",
                                                        "id": "s2-1",
                                                        "value": "Объект 1"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "section_id": "s3",
                                "name": "Сведения об участниках проведения испытаний",
                                "list": [
                                    {
                                        "list_id": "sotrudnik_otki",
                                        "type": "similar",
                                        "group": [
                                            {
                                                "group_id": "g3",
                                                "show_as": "card",
                                                "group_num": 1,
                                                "item": [
                                                    {
                                                        "item_id": "sotrudnik_1",
                                                        "label": "ФИО",
                                                        "type": "server-select",
                                                        "value": "Кузнецов Андрей Александрович",
                                                        "source": "С8"
                                                    },
                                                    {
                                                        "item_id": "dolzhnostq",
                                                        "label": "Должность  sdfadfefadaw",
                                                        "type": "edit",
                                                        "value": "Главный специалист"
                                                    },
                                                    {
                                                        "item_id": "podpisq",
                                                        "signature_date": "[native Date Mon Jan 01 2018 03:00:00 GMT+0300 (Москва, стандартное время)]",
                                                        "label": "Подпись",
                                                        "type": "signature",
                                                        "transition": "peredatq_na_podpisq_nachalniku_otki",
                                                        "signed": false
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "list_id": "sotrudnik_otki",
                                        "group": [
                                            {
                                                "group_id": "nachalqnik_otki",
                                                "show_as": "group",
                                                "item": [
                                                    {
                                                        "item_id": "nachalqnik_sotrudnikasd",
                                                        "label": "ФИО",
                                                        "type": "server-select",
                                                        "value": "Сергеев Сергей Сергеевич",
                                                        "source": "С8"
                                                    },
                                                    {
                                                        "item_id": "nachaknik_dolzhnostq",
                                                        "label": "Начальник ОТКИ",
                                                        "type": "edit",
                                                        "value": "Главный специалист"
                                                    },
                                                    {
                                                        "item_id": "nachalqnik_podpisq",
                                                        "label": "Подпис123ь",
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                },
                "value": ""
            }
        })
    }
</script>

<style>
</style>