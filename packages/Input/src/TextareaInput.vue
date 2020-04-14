<template>
    <div>
        <el-input
                :scope="scope"
                :value="value"
                :key="keys"
                type="textarea"
                :resize="attributes.resize ? attributes.resize : 'both'"
                :placeholder="attributes.placeholder ? attributes.placeholder : '请填写'"
                :maxlength="attributes.maxlength ? attributes.maxlength : ''"
                :minlength="attributes.minlength ? attributes.minlength : ''"
                :show-word-limit="attributes.showWordLimit ? attributes.showWordLimit : true"
                :show-password="attributes.showPassword ? attributes.showPassword : false"
                :disabled="attributes.disabled ? attributes.disabled : false"
                :size="attributes.size ? attributes.size : 'small'"
                :autocomplete="attributes.autocomplete ? attributes.autocomplete : 'off'"
                :name="attributes.name ? attributes.name : ''"
                :readonly="attributes.readonly ? attributes.readonly : false"
                :max="attributes.max ? attributes.max : ''"
                :min="attributes.max ? attributes.min : ''"
                :tabindex="attributes.tabindex ? attributes.tabindex : ''"
                :rows="attributes.rows ? attributes.rows : 2"
                :autosize="attributes.autosize ? attributes.autosize : false"

                @input="getCurrentTextareaInputData"

        ></el-input>
    </div>
</template>

<script>
    export default {
        name: "TextareaInput",
        props: {
            scope: null,
            value: null,
            keys:null,
            attributes: null
        },
        created() {

        },
        methods: {
            //返回input数据
            getCurrentTextareaInputData(data) {
                console.log(data,this._props);
                let newData = {
                    scope: this._props.scope,
                    value: data,
                    keys: this._props.keys,
                    itemAttributes: this._props.attributes
                };
                this.$emit('getTextareaInputData', newData)
            },
        }
    }
</script>

<style scoped>

</style>
