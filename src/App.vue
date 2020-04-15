<template>
    <div id="app">
        <complex-table
                :gridTable="gridTable"
                :gridColumn="gridColumn"
                :gridData="gridData"
                :paginationInfo="paginationInfo"
                @getTableData="getTableData"
        ></complex-table>
        <complex-form
                :formInfo="formInfo"
                :formItem="formItem"
                @getFormData="getFormData"
        ></complex-form>
        <table-text
                ref="tableText"
                :gridTable="gridTable"
                :gridColumn="gridColumn"
                :gridData="gridData"
                :paginationInfo="paginationInfo"
                @getTableData="getTableData"
        ></table-text>
    </div>
</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue'
    // import ComplexTable from '../packages/Table/src/ComplexTable'
    import TableText from '../packages/Table/src/TableText'
    import ComplexTable from '../packages/Table/src/ComplexTable'
    import ComplexForm from '../packages/Form/src/ComplexForm'

    export default {
        name: 'app',
        components: {
            ComplexForm,
            ComplexTable,
            TableText
        },
        data:()=> {
            return {
                gridColumn: [
                    {
                        label: '选择',
                        key: 'radioItem',
                        property: 'radioItem',
                        type: 'selection',
                    }, {
                        label: '性别',
                        key: 'sex',
                        property: 'sex',
                        type: 'select',
                        attributes: {
                            options: [
                                {
                                    label: "男",
                                    value: "0"
                                }, {
                                    label: "女",
                                    value: "1"
                                }
                            ]
                        }
                    }, {
                        label: '日期',
                        key: 'date',
                        property: 'date',
                        // width: 260,
                        type: 'datePicker',
                    },
                    {
                        label: '姓名',
                        key: 'name',
                        property: 'name',
                        type: 'stringInput',
                    },
                    {
                        label: '地址',
                        key: 'address',
                        property: 'address',
                        type: '',
                    },
                    {
                        label: '地址1',
                        key: 'num',
                        property: 'num',
                        type: 'inputNum',
                        controls: true,
                        precision: 2
                    }
                ],
                gridTable: {
                    stripe: false,
                    border: true,
                    // height: "180",
                },
                gridData: [
                    {
                        radioItem: 0,
                        sex: '1',
                        date: '',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄',
                        num: 0
                    },
                    {
                        radioItem: 0,
                        sex: '1',
                        date: '2016-05-04',
                        name: '张三',
                        address: '上海市普陀区金沙江路 1518 弄',
                        num: 0
                    }, {
                        radioItem: 0,
                        sex: '0',
                        date: '2016-05-01',
                        name: '李四',
                        address: '上海市普陀区金沙江路 1518 弄',
                        num: 0
                    }, {
                        radioItem: 0,
                        sex: '0',
                        date: '2016-05-03',
                        name: '王五',
                        address: '上海市普陀区金沙江路 1518 弄',
                        num: 0
                    }
                ],
                paginationInfo: {
                    layout: 'total, sizes, prev, pager, next, jumper',
                    paginationTitle: '',
                    pageSizes: [10, 20, 30, 40, 50, 100],
                    pageSize: 10,
                    total: 240,
                    currentPage: 1,
                },

                formInfo: {
                    form: {
                        name: '123',
                        inline: true,
                        region: '',
                        labelWidth: '300px',
                        date1: '',
                        date2: '',
                        delivery: false,
                        type: [],
                        resource: '',
                        desc: '',
                        rules: '',
                    },
                },
                formItem: [
                    {
                        label: '输入框1',
                        labelWidth: '130px',
                        rowSpan: [24, 24, 24, 12, 12],
                        required: '',
                        rules: '',
                        error: '',
                        showMessage: '',
                        inlineMessag: '',
                        size: '',
                        type: 'numberInput',
                        value: '',

                    },
                    {
                        label: '输入框2',
                        labelWidth: '130px',
                        rowSpan: [24, 24, 24, 12, 12],
                        required: '',
                        rules: '',
                        error: '',
                        showMessage: '',
                        inlineMessag: '',
                        size: '',
                        type: 'stringInput',
                        value: '',

                    },
                    {
                        label: '输入框3',
                        labelWidth: '130px',
                        rowSpan: [24, 24, 24, 12, 12],
                        required: '',
                        rules: '',
                        error: '',
                        showMessage: '',
                        inlineMessag: '',
                        size: '',
                        type: 'textareaInput',
                        value: '',

                    },
                    {
                        label: '输入框4',
                        labelWidth: '130px',
                        rowSpan: [24, 24, 24, 12, 12],
                        required: '',
                        rules: '',
                        error: '',
                        showMessage: '',
                        inlineMessag: '',
                        size: '',
                        type: 'select',
                        attributes: {
                            options: [
                                {label: '上海', value: '0'},
                                {label: '北京', value: '1'},
                                {label: '广州', value: '2'},
                                {label: '深圳', value: '3'}
                            ]
                        },
                        value: '',

                    },
                    {
                        label: '输入框5',
                        labelWidth: '130px',
                        rowSpan: [24, 24, 24, 12, 12],
                        required: '',
                        rules: '',
                        error: '',
                        showMessage: '',
                        inlineMessag: '',
                        size: '',
                        type: 'radio',
                        attributes: {
                            options: [
                                {label: '上海'},
                                {label: '北京'},
                                {label: '广州'},
                                {label: '深圳'}
                            ]
                        },
                        value: '上海',

                    },
                    {
                        label: '输入框6',
                        labelWidth: '130px',
                        rowSpan: [24, 24, 24, 12, 12],
                        required: '',
                        rules: '',
                        error: '',
                        showMessage: '',
                        inlineMessag: '',
                        size: '',
                        type: 'checkbox',
                        attributes: {
                            options: [
                                {label: '上海'},
                                {label: '北京'},
                                {label: '广州'},
                                {label: '深圳'}
                            ]
                        },
                        value: [],

                    },
                    {
                        label: '输入框7',
                        labelWidth: '130px',
                        rowSpan: [24, 24, 24, 12, 12],
                        required: '',
                        rules: '',
                        error: '',
                        showMessage: '',
                        inlineMessag: '',
                        size: '',
                        type: 'datePicker',
                        value: ''

                    }
                ],

            }
        },
        methods: {
            //获取table表格数据
            getTableData(data) {
                console.log({...data});

            },
            //获取from表单数据
            getFormData(data) {
                console.log({...data})
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
