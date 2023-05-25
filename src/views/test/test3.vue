<template>
    <el-table
     :data="tableData"
     height="600"
     border
     style="width: 100%">
     <el-table-column
       prop="id"
       label="ID号"
       width="180">
     </el-table-column>
     <el-table-column
       prop="sourceNodename"
       label="来源站点"
       width="180">
     </el-table-column>
     <el-table-column
       prop="targetNodename"
       label="目标站点">
     </el-table-column>
     <el-table-column
       prop="createTime"
       label="创造时间">
     </el-table-column>
     <el-table-column
       prop="status"
       label="状态">
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
      getTest3List(){
        test.getTest3List().then((response) =>{
          this.tableData = response.data;
        })
      }
    },
    created() {
        this.getTest3List();
      },
   }
 </script>
