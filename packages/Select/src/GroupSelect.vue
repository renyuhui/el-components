<template>
    <div>
        <el-select
                :scope="scope"
                :value="value"
                :key="keys"
                :multiple="attributes.multiple ? attributes.multiple : false"
                :disabled="attributes.disabled ? attributes.disabled : false"
                :size="attributes.size ? attributes.size : 'small'"
                :clearable="attributes.clearable ? attributes.clearable : false"
                :collapse-tags="attributes.collapseTags ? attributes.collapseTags : false"
                :multiple-limit="attributes.multipleLimit ? attributes.multipleLimit : 0"
                :name="attributes.name ? attributes.name : ''"
                :autocomplete="attributes.autocomplete ? attributes.autocomplete : 'off'"
                :filterable="attributes.filterable ? attributes.filterable : false"
                :no-match-text="attributes.noMatchText ? attributes.noMatchText : '无匹配数据'"
                :no-data-text="attributes.noDataText ? attributes.noDataText : '无数据'"
                :default-first-option="attributes.defaultFirstOption ? attributes.defaultFirstOption : false"
                :placeholder="attributes.placeholder ? attributes.placeholder : '请填写'"
                @change="getCurrentGroupSelectData"
        >
            <el-option
                    v-for="(item ,i) in attributes.options"
                    :key="i"
                    :label="item.label"
                    :value="item.value"
                    :disabled="item.disabled"

            >
            </el-option>
        </el-select>
    </div>
</template>

<script>
    export default {
        name: "GroupSelect",
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
            getCurrentGroupSelectData(data) {
                console.log(data,this._props);
                let newData = {
                    scope: this._props.scope,
                    value: data,
                    keys: this._props.keys,
                    itemAttributes: this._props.attributes
                };
                this.$emit('getGroupSelectData', newData)
            },
        }
    }
</script>

<style scoped>

</style>
