<template>
    <div>
        <v-icon :action="merge" :hover_color="true" :prompt="prompt" font_size="21px" icon=""/>
    </div>
</template>

<script>
    const VIcon = () => import('@/components/v-icon');

    export default {
        name: "v-button-merge-model",
        components: {
            VIcon
        },
        props: {
            model_f: {
                request: true,
                default: {}
            },
            model_s: {
                request: true,
                default: {}
            },
            prompt: {
                default: 'Совместить модели'
            }
        },
        data: () => ({}),
        methods: {
            merge() {
                let section = null;
                let section_s = null;
                if ('entity' in this.model_f) {
                    section = this.model_f.entity.data.section;
                    section_s = this.model_s.entity.data.section;
                }
                if ('data' in this.model_f) {
                    section = this.model_f.data.section;
                    section_s = this.model_s.data.section;
                }
                if ('section' in this.model_f) {
                    section = this.model_f.section;
                    section_s = this.model_s.section;
                }
                if (section && section_s) {
                    section.forEach(row_section => {
                        row_section.list.forEach(row_list => {
                            let similar_flag = false;
                            if (row_list.type === 'similar') {
                                similar_flag = true
                            }
                            row_list.group.forEach(row_group => {
                                row_group.item.forEach(item_f => {
                                    let item_id = item_f.item_id;

                                    section_s.forEach(row_section_s => {
                                        row_section_s.list.forEach(row_list_s => {
                                            if (similar_flag && row_list_s.list_id !== row_list.list_id)
                                                return false;
                                            row_list_s.group.forEach(row_group_s => {
                                                if (similar_flag) {
                                                    if ((row_group_s.group_id === row_group.group_id)
                                                        && (row_group_s.group_num === row_group.group_num)) {
                                                        row_group_s.item.forEach(item_s => {
                                                            if (item_s.item_id === item_id) {
                                                                item_f = Object.assign(item_f, item_s);
                                                            }
                                                        });

                                                    }
                                                } else {
                                                    row_group_s.item.forEach(item_s => {
                                                        if (item_s.item_id === item_id) {
                                                            item_f = Object.assign(item_f, item_s);
                                                        }
                                                    });
                                                }
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                    if ('entity' in this.model_f) {
                        this.model_f.entity.data.section = section;
                    }
                    if ('data' in this.model_f) {
                        this.model_f.data.section = section;
                    }
                    if ('section' in this.model_f) {
                        this.model_f.section = section;
                    }
                } else {
                    let list = null;
                    let list_s = null;
                    if ('list' in this.model_f) {
                        list = this.model_f.list;
                        list_s = this.model_s.list;
                    }
                    if ('list_id' in this.model_f) {
                        list = this.model_f;
                        list_s = this.model_s;
                    }

                    let similar_flag = false;
                    if (list.type === 'similar') {
                        similar_flag = true
                    }

                    list.group.forEach(row_group => {
                        row_group.item.forEach(item_f => {
                            let item_id = item_f.item_id;

                            if (similar_flag && list_s.list_id !== list.list_id)
                                return false;
                            list_s.group.forEach(row_group_s => {
                                if (similar_flag) {
                                    if ((row_group_s.group_id === row_group.group_id)
                                        && (row_group_s.group_num === row_group.group_num)) {
                                        row_group_s.item.forEach(item_s => {
                                            if (item_s.item_id === item_id) {
                                                item_f = Object.assign(item_f, item_s);
                                            }
                                        });
                                    }
                                } else {
                                    row_group_s.item.forEach(item_s => {
                                        if (item_s.item_id === item_id) {
                                            item_f = Object.assign(item_f, item_s);
                                        }
                                    });
                                }
                            });
                        });
                    });
                    if ('list' in this.model_f) {
                        this.model_f.list = list;
                    }
                    if ('list_id' in this.model_f) {
                        this.model_f = list;
                    }
                }
                this.$emit('update-model', this.model_f);
            },
        }
    }
</script>

<style scoped>
</style>