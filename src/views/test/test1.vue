<template>
   <el-table
    :data="tableData"
    height="600"
    border
    style="width: 100%">
    <el-table-column
      prop="id"
      label="快件ID"
      width="180">
    </el-table-column>
    <el-table-column
      prop="type"
      label="快件类型"
      width="180">
    </el-table-column>
    <el-table-column
      prop="sender"
      label="发送者"
      width="180">
    </el-table-column>
    <el-table-column
      prop="recever"
      label="接收者"
      width="180">
    </el-table-column>
    <el-table-column
      prop="weight"
      label="重量"
      width="180">
    </el-table-column>
    <el-table-column
      prop="tranFee"
      label="运输费用"
      width="180">
    </el-table-column>
    <el-table-column
      prop="packageFee"
      label="包裹费用"
      width="180">
    </el-table-column>
    <el-table-column
      prop="insuFee"
      label="InsuFee"
      width="180">
    </el-table-column>
    <el-table-column
      prop="accepter"
      label="快递从业员"
      width="180">
    </el-table-column>
    <el-table-column
      prop="deliver"
      label="派送从业员"
      width="180">
    </el-table-column>
    <el-table-column
      prop="accepteTime"
      label="接收时间"
      width="180">
    </el-table-column>
    <el-table-column
      prop="deliveTime"
      label="派送时间"
      width="180">
    </el-table-column>
    <el-table-column
      prop="acc1"
      label="Acc1"
      width="180">
    </el-table-column>
    <el-table-column
      prop="acc2"
      label="Acc2"
      width="180">
    </el-table-column>
    <el-table-column
      prop="status"
      label="状态"
      width="180">
    </el-table-column>
  </el-table>
</template>

<script>
import test from '@/api/test'
export default {
    data() {
      return {
        tableData: []
      }
    },
    methods:{
      getTest1List(){
        test.getTest1List().then((response) =>{
          this.tableData = response.data;
        })
      }
    },
    created() {
        this.getTest1List();
      },
  }
</script>

<style>

</style>
