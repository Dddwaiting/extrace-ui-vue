<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in images" :key="item.id">
      <img :src="item.idView" class="image">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data(){
    return{
      images:[
        { id:0,idView:require("../../assets/kd.jpg")},
        { id:0,idView:require("../../assets/kd1.jpg")},
        { id:0,idView:require("../../assets/kd2.jpg")},
        { id:0,idView:require("../../assets/kd3.jpg")}
      ]
    };
  },
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style>
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .image{
/*设置图片宽度和浏览器宽度一致*/
  width:100%;
  height:inherit;
}
</style>
