<template>
    <div>
        <el-radio-group
                :scope="scope"
                v-model="radioValue"
                @change="getCurrentGroupRadioData"
        >
            <div
                    v-for="(item ,i) in attributes.options"
                    :key="i"
                    class="el-radio-group-div"
            >
                <el-radio-button
                        v-if="attributes.type === 'button'"
                        :label="item.label"
                        :disabled="item.disabled ? item.disabled : false"
                ></el-radio-button>
                <el-radio
                        v-else
                        :label="item.label"
                        :disabled="item.disabled ? item.disabled : false"
                ></el-radio>
            </div>
        </el-radio-group>
    </div>
</template>

<script>
    export default {
        name: "GroupRadio",
        data(){
            return {
                radioValue: this.value,
            }
        },
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
            getCurrentGroupRadioData(data) {
                console.log(data, this._props);
                let newData = {
                    scope: this._props.scope,
                    value: data,
                    keys: this._props.keys,
                    itemAttributes: this._props.attributes
                };
                this.$emit('getGroupRadioData', newData)
            },
        }
    }
</script>

<style scoped>
    .el-radio-group{
        /*display: flex;*/
        /*justify-content: left;*/
        overflow: hidden;
    }
    .el-radio-group-div{
        float: left;
    }
    .el-radio{
        height: 32px;
        line-height: 32px;
        padding-right: 16px;
    }
</style>
