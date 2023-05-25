<template>
  <div class="BaiDuMap">
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
       prop="expressID"
       label="快件ID"
       width="180">
     </el-table-column>
     <el-table-column
       prop="y"
       label="经度"
       width="180">
     </el-table-column>
     <el-table-column
       prop="x"
       label="纬度"
       width="180" >
     </el-table-column>
     <el-table-column
       prop="tm"
       label="时间"
       width="180">
     </el-table-column>
     <el-table-column
            fixed="right"
            prop="edit"
            label="操作">
            <template slot-scope="scope">
                <el-button @click="route(scope.row.expressID)" type="primary" icon="el-icon-map-location" size="mini" circle></el-button>
            </template>
          </el-table-column>
    </el-table>
    <el-dialog  width="80%" :visible.sync="dialogFormVisible"> 
      <p>当前的快件号是：{{expressID}}</p>
    <baidu-map class="map" :center="{ lng: 113.54236385571967, lat: 34.827571147072646 }" :zoom="15" :scroll-wheel-zoom="true">
      <bm-polyline :path="polylinePath" stroke-color="red" :stroke-opacity="0.5" :stroke-weight="3" :editing="false" @lineupdate="updatePolylinePath"></bm-polyline>
    </baidu-map>
    </el-dialog>
  </div>
 </template>

 <script>
 import test from '@/api/test'
 export default {
     data() {
       return {
         dialogFormVisible: false,
         expressID:'',
         tableData: [],
         polylinePath: []
       }
     },
     methods:{
      updatePolylinePath(e) {
       this.polylinePath = e.target.getPath()
     },
     addPolylinePoint() {
       this.polylinePath.push({ lng: 116.404, lat: 39.915 })
     },
      getTest2List(){
        test.getTest2List().then((response) =>{
          this.tableData = response.data;
        })
      },
      route(expressID){
        test.route(expressID).then((response) =>{
          this.dialogFormVisible = true;
          this.expressID = expressID;
          this.polylinePath=[];
          for(var i=0;i<=20;i++){
           if(response.data[i]==null)
           break;
           this.polylinePath.push(response.data[i]);
          }
          
          // this.polylinePath=[];
          // this.$nextTick(() => {
          //  (res.data.moveList || []).forEach((item) => {
            //  let obj = {
            //    lng: response.data[0].lng,
            //    lat: response.data[0].lat
            //  }
            //  this.polylinePath.push(obj)
        //    })
        //  })
    })
  }
  },
  created() {
     this.getTest2List();
   },
 }

 </script>

<style>
.BaiDuMap {
  width: 100%;
  height: 100%;
}
/* .dialog {
  width: 150%;
  height: 100%;
} */
.map {
  width: 900px;
  height: 400px;
}
</style>
