<template>
    <el-dialog :title="title" :visible.sync="dialogFormVisible" :before-close="handleClose">
        <slot name="header" class="dialog-header"></slot>
        <slot name="body" class="dialog-body"></slot>
        <complex-form
                :formInfo="formInfo"
                :formItem="formItem"
                @getFormData="getFormData"
        >
        </complex-form>
        <slot name="footer" class="dialog-footer"></slot>
        <div slot="footer" class="dialog-footer">
            <el-button @click="onCancel">取 消</el-button>
            <el-button type="primary" @click="onOk">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>
    // import SimpleUploader from '@/components/Upload/SimpleUploader'
    import ComplexForm from '../../Form/src/ComplexForm'

    export default {
        name: "ModalForm",
        components: {
            ComplexForm
        },
        data: ()=> ({

        }),
        props: {
            formLabelWidth: '120px',
            dialogFormVisible: false,
            title: null,
            formInfo: null,
            formItem: null

        },
        methods: {
            onOk() {
                let propsData = this._props;
                this.$emit('dialogFormVisible', propsData)
            },
            onCancel() {
                let propsData = this._props;
                this.$emit('dialogFormVisible', propsData)
            },
            handleClose() {
                let propsData = this._props;
                this.$emit('dialogFormVisible', propsData)
            },
            getFormData(data){
                let propsData = this._props;
                console.log({...data});
                console.log(this,);
                console.log(propsData);
            }
        }
    }
</script>

<style scoped>

</style>
