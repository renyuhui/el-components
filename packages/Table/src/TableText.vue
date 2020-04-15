<template>
    <div class="table-text">

        <el-table
                ref="multipleTable"
                :border="gridTable.border ? gridTable.border : false"
                :height="gridTable.height ? gridTable.height : 'calc( 100% - 50px )'"
                :stripe="gridTable.stripe ? gridTable.stripe : false"
                :size="gridTable.size ? gridTable.size : 'small'"
                :fit="gridTable.fit ? gridTable.fit : true"
                :row-key="gridTable.rowKey ? gridTable.rowKey : ''"
                :show-header="gridTable.showHeader ? gridTable.showHeader : true"
                :highlight-current-row="gridTable.highlightCurrentRow ? gridTable.highlightCurrentRow : false"
                :row-class-name="gridTable.rowClassName ? gridTable.rowClassName : ''"
                :style="gridTable.style ? gridTable.style : ''"
                :default-expand-all="gridTable.defaultExpandAll ? gridTable.defaultExpandAll : false"
                :tree-props="gridTable.treeProps ? {children: 'children', hasChildren: 'hasChildren'} : {}"
                :data="gridData"
                @selection-change="handleSelectionChange"
        >
            <el-table-column
                    v-for="item in gridColumn"
                    :property="item.property ? item.property : ''"
                    :label="item.label ? item.label : ''"
                    :key="item.label ? item.label : ''"
                    :prop="item.prop ? item.prop : ''"
                    :type="item.type ? item.type : ''"
                    :fixed="item.fixed ? item.fixed : false"
                    :align="item.align ? item.align : 'center'"
                    :class-name="item.className"
                    :resizable="item.resizable ? item.resizable : true"
                    :width="item.width ? item.width : 'clac( 100% / '+ gridColumn.length + ' )'"
            >
                <template v-if="item.type == 'radio'" scope="scope">
                    <el-radio
                            :label="1"
                            v-model="scope.row[scope.column['property']]"
                            @change.native="getCurrentRow(scope,scope.$index,scope.row)">&nbsp;
                    </el-radio>
                </template>
                <template v-else-if="item.type == 'stringInput'" scope="scope">
                    <el-input
                            v-model="scope.row[scope.column['property']]"
                            placeholder="请填写"
                            @change="getCurrentRow(scope,scope.$index,scope.row)"
                    ></el-input>
                </template>
                <template v-else-if="item.type == 'inputNum'" scope="scope">
                    <el-input-number
                            v-model="scope.row[scope.column['property']]"
                            :min="item.min ? item.min : -Infinity"
                            :max="item.max ? item.max : Infinity"
                            :precision="item.precision ? item.precision : 0"
                            :step="item.step ? item.step : 1"
                            :size="item.size ? item.size : 'small'"
                            :disabled="item.disabled ? item.disabled : false"
                            :controls="item.controls ? item.controls : false"
                            :controls-position="item.controlsPosition ? item.controlsPosition : 'right'"
                            placeholder="请输入"
                            :name="item.name ? item.name : ''"
                            @change="getCurrentRow(scope,scope.$index,scope.row)"
                    ></el-input-number>
                </template>
                <template v-else-if="item.type == 'select'" scope="scope">
                    <el-select
                            v-model="scope.row[scope.column['property']]"
                            placeholder="请选择"
                            @change="getCurrentRow(scope,scope.$index,scope.row)"
                    >
                        <el-option v-for="(items,i) in item.attributes.options" :key="i" :label="items.label" :value="items.value">
                            {{items.label}}
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
                </template>
                <!-- <template v-if="item.type == 'button'" scope="scope">
                    <el-button v-if="scope.row.edit" type="text" size="medium" @click="confirmAdd(scope.row)">
                      <i class="el-icon-check" aria-hidden="true"></i>
                    </el-button>
                    <div v-else>
                      <el-button type="text" size="medium" @click="editData(scope.row)">
                        <i class="el-icon-edit" aria-hidden="true"></i>
                      </el-button>
                      <el-button type="text" size="medium" @click="deleteData(scope.row,scope.$index)">
                        <i class="el-icon-delete" aria-hidden="true"></i>
                      </el-button>
                    </div>
                </template>-->

            </el-table-column>
        </el-table>
        <slot name="footer" class="pagination-footer"></slot>
        <div class="pagination-block">
            <el-pagination
                    v-if="paginationInfo"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="paginationInfo.currentPage ? paginationInfo.currentPage : 1"
                    :page-sizes="paginationInfo.pageSizes ? paginationInfo.pageSizes : [10,20,30,50,100]"
                    :page-size="paginationInfo.pageSize ? paginationInfo.pageSize : 10"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="paginationInfo.total ? paginationInfo.total : 0">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TableText",
        // components: {
        // },
        props: {
            gridTable: {
                type: Object,
                default() {
                    return {}
                }
            },
            gridColumn:
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
            gridData: null,
            paginationInfo:null
        },
        created() {

        },
        methods: {
            //返回表格数据
            getCurrentRow(scope, e, row) {
                console.log(scope, e, row, scope.row[scope.column['property']])
                let gridData = this.gridData;
                if (scope.column.type === "radio") {
                    gridData.forEach(function (item, i) {
                        if (i == e) {
                            item.radioItem = 1;
                        } else {
                            item.radioItem = 0;
                        }
                    });
                }

                this.gridData = gridData;
                this.$emit('getTableData', this._props)
            },
            //多选返回表格数据
            handleSelectionChange(val) {
                console.log(val)
                this._props.multipleSelection = val;
                this.$emit('getTableData', this._props)
            },
            //切换每页显示数量
            handleSizeChange(val) {
                let paginationInfo = this.paginationInfo;
                paginationInfo.pageSize = val;
                this.$emit('getTableData', this._props)
                console.log(`每页 ${val} 条`);
            },
            // 切换当前页数
            handleCurrentChange(val) {
                let paginationInfo = this.paginationInfo;
                paginationInfo.currentPage = val;
                this.$emit('getTableData', this._props)
                console.log(`当前页: ${val}`);
            },

            toggleSelection(rows){
                if (rows) {
                    rows.forEach(row => {
                        this.$refs.multipleTable.toggleRowSelection(row);
                    });
                } else {
                    this.$refs.multipleTable.clearSelection();
                }
            }

        }
    }
</script>

<style scoped>
    .complex-table{
        overflow: auto;
        height: 100%;
    }
    .pagination-block{
        float: right;
    }
</style>
