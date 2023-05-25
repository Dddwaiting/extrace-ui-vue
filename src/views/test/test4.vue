<template>
    <el-table
     :data="tableData"
     height="600"
     border
     style="width: 100%">
     <el-table-column
       prop="sn"
       label="ID号"
       width="180">
     </el-table-column>
     <el-table-column
       prop="packageid"
       label="包裹ID"
       width="180">
     </el-table-column>
     <el-table-column
       prop="actTime"
       label="接收时间">
     </el-table-column>
     <el-table-column
       prop="sourceNodename"
       label="来源站点">
     </el-table-column>
     <el-table-column
       prop="targetNodename"
       label="去向站点">
     </el-table-column>
     <el-table-column
       prop="X"
       label="经度">
     </el-table-column>
     <el-table-column
       prop="Y"
       label="纬度">
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
      getTest4List(){
        test.getTest4List().then((response) =>{
          this.tableData = response.data;
        })
      }
    },
    created() {
        this.getTest4List();
      },
   }
 </script>
