<template>
    <div class="modal-dialog">
        <el-dialog :title="title" :visible.sync="dialogVisible" :before-close="handleClose">
            <slot name="header" class="dialog-header"></slot>
            <slot name="body" class="dialog-body"></slot>
            <div>

            </div>
            <slot name="footer" class="dialog-footer"></slot>
            <div slot="footer" class="dialog-footer">
                <el-button @click="onCancel">取 消</el-button>
                <el-button type="primary" @click="onOk">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>


    export default {
        name: "ModalDialog",
        props: {
            gridData: null,
            title: '',
            dialogVisible: false
        },

        mounted() {

        },

        methods: {
            //确定
            onOk() {
                let data = this._props;
                this.$emit('modalDialogVisible', data);
                this.$emit('getdDialogData', this._props)
                console.log(data);
            },
            //取消
            onCancel() {

                let gridData = this.gridData;
                gridData.forEach(function (item, i) {
                    item.radioItem = 0;
                });
                this.gridData = gridData;
                let data = this._props;
                console.log(this)
                this.$emit('modalDialogVisible', data);
                this.$emit('getdDialogData', this._props)
            },
            //关闭
            handleClose() {
                let gridData = this.gridData;
                gridData.forEach(function (item, i) {
                    item.radioItem = 0;
                });
                this.gridData = gridData;
                let data = this._props;
                this.$emit('modalDialogVisible', data);
                this.$emit('getdDialogData', this._props)
            },
            // 获取组件数据
            getCurrentData(e) {
                console.log(e)

                this.$emit('getdDialogData', this._props)
            }

        }
    }
</script>

<style scoped>

</style>
