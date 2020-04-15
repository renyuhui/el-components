<template>
    <div class="complex-form">
        <slot name="header" class="dialog-header"></slot>

        <el-form
                ref="ruleForm"
                class="ruleForm"
                :model="formInfo.form ? formInfo.form : ''"
                :inline="formInfo.inline ? formInfo.inline : false"
                :label-position="formInfo.labelPosition ? formInfo.labelPosition :  'right'"
                :label-width="formInfo.labelWidth ? formInfo.labelWidth : ''"
                :label-suffix="formInfo.labelSuffix ? formInfo.labelSuffix : ''"
                :hide-required-asterisk="formInfo.hideRequiredAsterisk ?formInfo.hideRequiredAsterisk : false"
                :show-message="formInfo.showMessage ? formInfo.showMessage : true"
                :inline-messag="formInfo.inlineMessage ? formInfo.inlineMessage : false"
                :status-icon="formInfo.statusIcon ? formInfo.statusIcon : false"
                :validate-on-rule-change="formInfo.validateOnRuleChange ? formInfo.validateOnRuleChange : true"
                :size="formInfo.size ? formInfo.size : 'small'"
                :disabled="formInfo.disabled ? formInfo.disabled : false"

        >
            <el-row>
                <slot name="body" class="dialog-body"></slot>
                <el-col
                        v-for="(item,i) in formItem"
                        :xs="item.rowSpan ? item.rowSpan[0] ? item.rowSpan[0] : 24 : 24"
                        :sm="item.rowSpan ? item.rowSpan[1] ? item.rowSpan[1] : 24 : 24"
                        :md="item.rowSpan ? item.rowSpan[2] ? item.rowSpan[2] : 24 : 24"
                        :lg="item.rowSpan ? item.rowSpan[3] ? item.rowSpan[3] : 24 : 24"
                        :xl="item.rowSpan ? item.rowSpan[4] ? item.rowSpan[4] : 24 : 24"
                        :key="i"

                >
                    <el-form-item

                            :label="item.label ? item.label : null"
                            :label-width="item.labelWidth ? item.labelWidth : ''"
                            :required="item.required ? item.required : false"
                            :error="item.error ? item.error : ''"
                            :show-message="item.showMessage ? item.showMessage : true"
                            :inline-messag="item.inlineMessage ? item.inlineMessage : false"
                            :size="item.size ? item.size : 'small'"
                    >
                        <template v-if="item.type === 'stringInput'">
                            <string-input
                                    :value="item.value"
                                    :keys="i"
                                    :attributes="item.attributes ? item.attributes : ''"
                                    @getStringInputData="getStringInputData"
                            ></string-input>
                        </template>
                        <template v-else-if="item.type === 'numberInput'">
                            <number-input
                                    :value="item.value"
                                    :keys="i"
                                    :attributes="item.attributes ? item.attributes : ''"
                                    @getNumberInputData="getNumberInputData"
                            ></number-input>
                        </template>
                        <template v-else-if="item.type === 'textareaInput'">
                            <textarea-input
                                    :value="item.value"
                                    :keys="i"
                                    :attributes="item.attributes ? item.attributes : ''"
                                    @getTextareaInputData="getTextareaInputData"
                            ></textarea-input>
                        </template>
                        <template v-else-if="item.type === 'select'">
                            <group-select
                                    :value="item.value"
                                    :keys="i"
                                    :attributes="item.attributes ? item.attributes : ''"
                                    @getGroupSelectData="getGroupSelectData"
                            ></group-select>
                        </template>
                        <template v-else-if="item.type === 'radio'">
                            <group-radio
                                    :value="item.value"
                                    :keys="i"
                                    :attributes="item.attributes ? item.attributes : ''"
                                    @getGroupRadioData="getGroupRadioData"
                            ></group-radio>
                        </template>
                        <template v-else-if="item.type === 'checkbox'">
                            <group-checkbox
                                    :value="item.value"
                                    :keys="i"
                                    :attributes="item.attributes ? item.attributes : ''"
                                    @getGroupCheckboxData="getGroupCheckboxData"
                            ></group-checkbox>
                        </template>
                        <template v-else-if="item.type === 'datePicker'">
                            <group-date-picker
                                    :value="item.value"
                                    :keys="i"
                                    :attributes="item.attributes ? item.attributes : ''"
                                    @getGroupDatePickerData="getGroupDatePickerData"
                            ></group-date-picker>
                        </template>
                        <!-- <template v-else-if="item.type == 'select'" scope="scope">
                            <el-select
                                    v-model="scope.row[scope.column['property']]"
                                    placeholder="请选择"
                                    @change="getCurrentRow(scope,scope.$index,scope.row)"
                            >
                                <el-option v-for="items in item.selectOption" :label="items.name" :value="items.value">
                                    {{items.name}}
                                </el-option>
                            </el-select>
                        </template>
                        <template v-else-if="item.type == 'datePicker'" scope="scope">
                            <el-date-picker
                                    v-model="scope.row[scope.column['property']]"
                                    :placeholder="item.placeholder ? item.placeholder : '请选择日期'"
                                    :align="item.align ? item.align : 'right'"
                                    :type="item.date ? item.date : 'date'"
                                    :format="item.format ? item.format : 'yyyy-MM-dd'"
                                    @change="getCurrentRow(scope,scope.$index,scope.row)"
                            ></el-date-picker>
                        </template>
                        <template v-else-if="item.type == 'monthRange'" scope="scope">
                            <el-date-picker
                                    v-model="scope.row[scope.column['property']]"
                                    type="monthrange"
                                    range-separator="至"
                                    start-placeholder="开始月份"
                                    end-placeholder="结束月份"
                                    :format="item.format ? item.format : 'yyyy-MM-dd'"
                                    @change="getCurrentRow(scope,scope.$index,scope.row)"
                            ></el-date-picker>
                        </template>-->
                    </el-form-item>
                    <!--<el-form-item label="活动名称" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="活动区域" :label-width="formLabelWidth">
                        <el-select v-model="form.region" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>-->
                </el-col>
            </el-row>
        </el-form>
        <slot name="footer" class="dialog-footer"></slot>


    </div>
</template>

<script>
    import StringInput from '../../Input/src/StringInput'
    import NumberInput from '../../Input/src/NumberInput'
    import TextareaInput from '../../Input/src/TextareaInput'
    import GroupSelect from '../../Select/src/GroupSelect'
    import GroupRadio from '../../Radio/src/GroupRadio'
    import GroupCheckbox from '../../Checkbox/src/GroupCheckbox'
    import GroupDatePicker from '../../DatePicker/src/GroupDatePicker'

    export default {
        name: "ComplexForm",
        components: {
            StringInput,
            NumberInput,
            TextareaInput,
            GroupSelect,
            GroupRadio,
            GroupCheckbox,
            GroupDatePicker
        },
        props: {
            formInfo: {
                type: Object,
                default() {
                    return {}
                }
            },
            formItem:
                {
                    type: Array,
                    default() {
                        return [{
                            // label: {
                            //     type: String,
                            //     default: null
                            // },key: {
                            //     type: String,
                            //     default: null
                            // },type: {
                            //     type: Boolean,
                            //     default: false
                            // },fixed: {
                            //     type: Boolean,
                            //     default: false
                            // },property: {
                            //     type: String,
                            //     default: null
                            // },prop: {
                            //     type: String,
                            //     default: null
                            // },resizable: {
                            //     type: Boolean,
                            //     default: true
                            // },className: {
                            //     type: String,
                            //     default: null
                            // },align: {
                            //     type: String,
                            //     default: 'center'
                            // },width: {
                            //     type: Number,
                            //     default: 150
                            // },
                        }]
                    }

                },
            name: null,
            gridData: null,
            paginationInfo: null
        },
        created() {

        },
        methods: {
            //返回表格数据
            getCurrentFormData(scope) {
                console.log(scope)
                this.$emit('getFormData', this._props)
                // let gridData = this.gridData;
                // if (scope.column.type === "radio") {
                //     gridData.forEach(function (item, i) {
                //         if (i == e) {
                //             item.radioItem = 1;
                //         } else {
                //             item.radioItem = 0;
                //         }
                //     });
                // }
                //
                // this.gridData = gridData;
                // this.$emit('getTableData', this._props)
            },
            //获取StringInput数据
            getStringInputData(data) {
                console.log(data, this._props);
                let props = this._props;
                props.formItem.forEach(function (item, i) {
                    if (i == data.keys) {
                        item.value = data.value;
                    }
                });
                this.$emit('getFormData', this._props)

            },
            //获取NumberInput数据
            getNumberInputData(data) {
                console.log(data, this._props);
                let props = this._props;
                props.formItem.forEach(function (item, i) {
                    if (i == data.keys) {
                        item.value = data.value;
                    }
                });
                this.$emit('getFormData', this._props)
            },
            //获取TextareaInput数据
            getTextareaInputData(data) {
                console.log(data, this._props);
                let props = this._props;
                props.formItem.forEach(function (item, i) {
                    if (i == data.keys) {
                        item.value = data.value;
                    }
                });
                this.$emit('getFormData', this._props)
            },
            //获取Select数据
            getGroupSelectData(data){
                console.log(data, this._props);
                let props = this._props;
                props.formItem.forEach(function (item, i) {
                    if (i == data.keys) {
                        item.value = data.value;
                    }
                });
                this.$emit('getFormData', this._props)
            },
            //获取Radio数据
            getGroupRadioData(data){
                console.log(data);
                let props = this._props;
                props.formItem.forEach(function (item, i) {
                    if (i == data.keys) {
                        item.value = data.value;
                    }
                });
                this.$emit('getFormData', this._props)
            },
            //获取Checkbox数据
            getGroupCheckboxData(data){
                console.log({...data})
                let props = this._props;
                props.formItem.forEach(function (item, i) {
                    if (i == data.keys) {
                        item.value = data.value;
                    }
                });
                this.$emit('getFormData', this._props)

            },
            getGroupDatePickerData(data){
                console.log({...data})
                let props = this._props;
                props.formItem.forEach(function (item, i) {
                    if (i == data.keys) {
                        item.value = data.value;
                    }
                });
                this.$emit('getFormData', this._props)

            }
        }
    }
</script>

<style scoped>

</style>
