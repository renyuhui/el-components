<template>
    <el-dialog :title="title" :visible.sync="dialogTableVisible" :before-close="handleClose">
        <slot name="header" class="dialog-header"></slot>
        <slot name="body" class="dialog-body"></slot>
        <complex-table
                :gridTable="gridTable"
                :gridColumn="gridColumn"
                :gridData="gridData"
                :paginationInfo="paginationInfo"
                @getTableData="getTableData"
        >

        </complex-table>
        <slot name="footer" class="dialog-footer"></slot>
        <div slot="footer" class="dialog-footer">
            <el-button @click="onCancel">取 消</el-button>
            <el-button type="primary" @click="onOk">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>
    import ComplexTable from '../../Table/src/ComplexTable'

    export default {
        name: "ModalTable",
        components: {
            ComplexTable
        },
        data: ()=> ({

        }),
        props: {
            title: null,
            dialogTableVisible: false,
            gridData: null,
            gridColumn: null,
            gridTable:null,
            paginationInfo: {
                layout: 'total, sizes, prev, pager, next, jumper',
                paginationTitle: '',
                pageSizes: [],
                pageSize: 10,
                total: 0,
                currentPage: 1,
            }
        },

        mounted() {

        },

        methods: {
            //确定
            onOk() {
                let data = this._props;
                this.$emit('dialogTableVisible', data)
            },
            //取消
            onCancel() {
                let gridData = this.gridData;
                gridData.forEach(function (item, i) {
                    item.radioItem = 0;
                });
                this.gridData = gridData;
                let data = this._props;
                this.$emit('dialogTableVisible', data)
            },
            //关闭
            handleClose() {
                let gridData = this.gridData;
                gridData.forEach(function (item, i) {
                    item.radioItem = 0;
                });
                this.gridData = gridData;
                let data = this._props;
                this.$emit('dialogTableVisible', data)
            },

            //切换每页显示数量
            handleSizeChange(val) {
                let gridData = this.gridData;
                gridData.forEach(function (item, i) {
                    item.radioItem = 0;
                });
                this.gridData = gridData;
                this.paginationInfo.pageSize = val;
                this.$emit('getdDialogTableData', this._props)
                console.log(`每页 ${val} 条`);
            },
            // 切换当前页数
            handleCurrentChange(val) {
                let gridData = this.gridData;
                gridData.forEach(function (item, i) {
                    item.radioItem = 0;
                });
                this.gridData = gridData;
                this.paginationInfo.currentPage = val;
                this.$emit('getdDialogTableData', this._props)
                console.log(`当前页: ${val}`);
            },
            getCurrentRow(scope, e, row) {
                console.log(scope, e, row)
                // this.radio = e;
                let gridData = this.gridData;
                gridData.forEach(function (item, i) {
                    if (i == e) {
                        item.radioItem = 1;
                    } else {
                        item.radioItem = 0;
                    }
                });
                this.gridData = gridData;

                this.$emit('getdDialogTableData', this._props)
            },
            getTableData(data){
                let propsData = this._props;
                console.log({...data});
                console.log(this,);
                console.log(propsData);
            }
        }
    }
</script>

<style scoped>
    .pagination-block {
        float: right;
    }
</style>
