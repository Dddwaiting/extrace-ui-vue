<template>
  <el-table
   :data="tableData"
   height="600"
   border
   style="width: 100%">
   <el-table-column
     prop="uid"
     label="用户ID"
     width="180">
   </el-table-column>
   <el-table-column
     prop="pwd"
     label="密码"
     width="180">
   </el-table-column>
   <el-table-column
     prop="name"
     label="姓名">
   </el-table-column>
   <el-table-column
     prop="urull"
     label="URull">
   </el-table-column>
   <el-table-column
     prop="telCode"
     label="联系电话">
   </el-table-column>
   <el-table-column
     prop="status"
     label="状态">
   </el-table-column>
   <el-table-column
     prop="dptID"
     label="部门ID">
   </el-table-column>
   <el-table-column
     prop="receivePackageID"
     label="接收包裹">
   </el-table-column>
   <el-table-column
     prop="delivePackageID"
     label="派送包裹">
   </el-table-column>
   <el-table-column
     prop="transPackageID"
     label="转运包裹">
   </el-table-column>
 </el-table>
</template>

<script>
import customerManage from '@/api/customerManage'
export default {
   data() {
     return {
       tableData: []
     }
   },
   methods:{
    getPerson(){
          customerManage.getPerson().then((response) =>{
            this.tableData = response.data;
          })
        }
   },
   created() {
        this.getPerson();
      },
 }
</script>
