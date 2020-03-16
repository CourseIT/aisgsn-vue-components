<template>
    <div>
        <v-tool-icons :class="{pl305: $store.state.menu_visibility}" class="transition" left="350px" top="97px">
            <v-icon :action="load" :hover_color="true" font_size="21px" icon="" prompt="Загрузка YAML-файла"/>
            <v-icon :action="upload" :hover_color="true" font_size="21px" icon="" prompt="Выгрузка YAML-файла"/>
        </v-tool-icons>
        <input @change="onFileChange" id="yaml_file" style="display:none" type="file"/>
    </div>
</template>

<script>
    import YAML from "yamljs";

    const VToolIcons = () => import('@/components/v-tool-icons');
    const VIcon = () => import('@/components/v-icon');

    export default {
        name: "v-input-tab-table",
        components: {
            VToolIcons,
            VIcon
        },
        props: {
            model: {
                defailt: {}
            }
        },
        data: () => ({}),
        methods: {
            load() {
                if (window.File && window.FileReader && window.FileList && window.Blob) {
                    document.getElementById('yaml_file').click();
                } else {
                    alert('The File APIs are not fully supported in this browser.');
                }
            },
            onFileChange(e) {
                let files = e.target.files || e.dataTransfer.files;
                if (files.length) {
                    let reader = new FileReader();
                    reader.onload = (e) => {
                        let result_yaml = e.target.result;
                        let result_json = YAML.parse(result_yaml);
                        this.$emit('update-model', result_json);
                    };
                    reader.readAsText(files[0]);
                }
            },
            upload() {
                let yaml_text = YAML.stringify(this.model, 10, 4);

                let element = document.createElement('a');
                element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(yaml_text));
                element.setAttribute('download', 'model.yaml');
                element.style.display = 'none';
                document.body.appendChild(element);

                element.click();

                document.body.removeChild(element);
            }
        }
    }
</script>

<style scoped>
</style>