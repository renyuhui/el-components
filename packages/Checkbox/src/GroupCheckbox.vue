<template>
    <div>
        <el-checkbox-group
                :scope="scope"
                v-model="checkList"
                @change="getCurrentGroupCheckboxData"
        >
            <div
                    v-for="(item ,i) in attributes.options"
                    :key="i"
                    class="el-checkbox-group-div"
            >
                <el-checkbox-button
                        v-if="attributes.type === 'button'"
                        :label="item.label"
                        :disabled="item.disabled ? item.disabled : false"
                ></el-checkbox-button>
                <el-checkbox
                        v-else
                        :label="item.label"
                        :key="item.label"
                        :disabled="item.disabled ? item.disabled : false"
                ></el-checkbox>
            </div>
        </el-checkbox-group>
        <!--<el-checkbox-group
                v-model="checkList"
                @change="getCurrentGroupCheckboxData"
        >
            <el-checkbox
                    v-for="(item ,i) in attributes.options"
                    :label="item.label"
                    :disabled="item.disabled ? item.disabled : false"
            >
                {{item.label}}
            </el-checkbox>
        </el-checkbox-group>-->
    </div>
</template>

<script>
    export default {
        name: "GroupCheckbox",
        data() {
            return {
                checkList: this.value,
            }
        },
        props: {
            scope: null,
            value: null,
            keys: null,
            attributes: null
        },
        created() {

        },
        methods: {
            //返回input数据
            getCurrentGroupCheckboxData(data) {
                console.log(data);
                let newData = {
                    scope: this._props.scope,
                    value: data,
                    keys: this._props.keys,
                    itemAttributes: this._props.attributes
                };
                this.$emit('getGroupCheckboxData', newData)
            },
        }
    }
</script>

<style scoped>
    .el-checkbox-group{
        /*display: flex;*/
        /*justify-content: left;*/
        overflow: hidden;
    }
    .el-checkbox-group-div{
        float: left;
    }
    .el-checkbox{
        height: 32px;
        line-height: 32px;
        padding-right: 16px;
    }
</style>
