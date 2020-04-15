<template>
    <div>
        <el-input-number
                class="el-components-input-number"
                :scope="scope"
                :value="value"
                :key="keys"
                :placeholder="attributes.placeholder ? attributes.placeholder : '请填写'"
                :controls="attributes.controls ? attributes.controls : true"
                :step="attributes.step ? attributes.step : 1"
                :disabled="attributes.disabled ? attributes.disabled : false"
                :size="attributes.size ? attributes.size : 'small'"
                :name="attributes.name ? attributes.name : ''"
                :max="attributes.max ? attributes.max : Infinity"
                :min="attributes.max ? attributes.min : -Infinity"
                :precision="attributes.precision ? attributes.precision : 0"
                :controls-position="attributes.controlsPosition ? attributes.controlsPosition : 'right'"

                @change="getCurrentNumberInputData"

        ></el-input-number>
    </div>
</template>

<script>
    export default {
        name: "NumberInput",
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
            getCurrentNumberInputData(data) {
                console.log(data,this._props);
                let newData = {
                    scope: this._props.scope,
                    value: data,
                    keys: this._props.keys,
                    itemAttributes: this._props.attributes
                };
                this.$emit('getNumberInputData', newData)
            },
        }
    }
</script>

<style>
.el-components-input-number{
    width: 100%!important;
}
.el-components-input-number .el-input__inner{
        text-align: left;
    }
</style>
