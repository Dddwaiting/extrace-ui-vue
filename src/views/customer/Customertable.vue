<template>
    <div>
      <!--搜索组件-->
      <el-card id="search" >
        <el-row>
         <el-col :span="20">
            <el-input v-model="searchModel.Name" placeholder="客户姓名"></el-input>
            <el-input v-model="searchModel.TelCode" placeholder="联系电话"></el-input>
            <el-button @click="getUserList" type="primary" round icon="el-icon-search">搜索</el-button>
        </el-col>
         <el-col :span="4" align="right">
            <el-button @click="customeredit(null)" type="primary" icon="el-icon-plus" circle></el-button>
        </el-col>
        </el-row>
      </el-card>

      <!--表格组件-->
      <el-table
      :data="customerList"
      style="width: 100%">
        <el-table-column label="配送信息">
          <el-table-column
            prop="id"
            label="序号"
            width="120">
          </el-table-column>
          <el-table-column
            prop="postcode"
            label="快递编号"
            width="120">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="120">
          </el-table-column>
          <el-table-column
            prop="telCode"
            label="联系电话"
            width="120">
          </el-table-column>
          <el-table-column label="地址">
            <el-table-column
              prop="regioncode"
              label="地区编码"
              width="120">
            </el-table-column>
            <el-table-column
              prop="Prv"
              label="省份"
              width="120">
            </el-table-column>
            <el-table-column
              prop="City"
              label="市区"
              width="120">
            </el-table-column>
            <el-table-column
              prop="Twn"
              label="县区"
              width="120">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址"
              width="300">
            </el-table-column>
            <el-table-column
              prop="department"
              label="楼栋号"
              width="300">
            </el-table-column>
          </el-table-column>

        <el-table-column
            fixed="right"
            prop="edit"
            label="操作"
            width="300">
            <template slot-scope="scope">
                <el-button @click="customeredit(scope.row.id)" type="primary" icon="el-icon-edit" size="mini" circle></el-button>
                <el-button @click="deleteUser(scope.row)" type="danger" icon="el-icon-delete" size="mini" circle></el-button>
            </template>
          </el-table-column>
        </el-table-column>
      </el-table>
    <!--分页组件-->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="searchModel.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>

    <!--客户新增信息-->
    <el-dialog @close="clearForm" :title="title" :visible.sync="dialogFormVisible">
    <el-form :model="customerform" ref="userFormRef" :rules="rules">
        <el-form-item label="姓名" prop="name" :label-width="formLabelWidth">
            <el-input v-model="customerform.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="telCode" :label-width="formLabelWidth">
            <el-input v-model="customerform.telCode" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地区编码" prop="regioncode" :label-width="formLabelWidth">
            <el-input v-model="customerform.regioncode" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="公寓" prop="department" :label-width="formLabelWidth">
            <el-input v-model="customerform.department" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="详细地址" prop="address" :label-width="formLabelWidth">
            <el-input v-model="customerform.address" autocomplete="off"></el-input>
        </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false" >取 消</el-button>
        <el-button type="primary" @click="saveUser" >确 定</el-button>
    </div>
    </el-dialog>
    </div>
</template>

<script>
  import customerManage from '@/api/customerManage'
    export default {
      data() {
        return {
          title:0,
          formLabelWidth:"130px",
          dialogFormVisible: false,
          customerList: [],
          customerform:{},
          total: 0,
          searchModel:{
            pageNo:1,
            pageSize:10
          },
       rules: {
           name: [
          { required: true, message: "请输入客户名", trigger: "blur" },
          {
            min: 2,
            max: 30,
            message: "长度在 2 到 30 个字符",
            trigger: "blur",
          },
        ],
        telCode: [
          { required: true, message: "请输入客户联系方式", trigger: "blur" },
          {
            min: 11,
            max: 11,
            message: "长度是 11 个字符",
            trigger: "blur",
          },
        ],
        regioncode: [
          { required: true, message: "请输入地区编码", trigger: "blur" },
          {
            min: 6,
            max: 6,
            message: "长度是 6 个字符",
            trigger: "blur",
          },
        ],
        department: [
          { required: true, message: "请输入客户所在楼栋", trigger: "blur" },
          {
            min: 6,
            max: 20,
            message: "长度 6 到 20 个字符",
            trigger: "blur",
          },
        ],
        address: [
          { required: true, message: "请输入客户具体地址", trigger: "blur" },
          {
            min: 6,
            max: 30,
            message: "长度 6 到 30 个字符",
            trigger: "blur",
          },
        ],
      },
        }
      },
      methods:{
        deleteUser(user) {
        this.$confirm(`您确认删除用户 ${user.name} ?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          userApi.deleteUserById(user.id).then(response => {
            this.$message({
              type: 'success',
              message: response.message
            });
            this.getUserList();
          });

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
        saveUser() {
      // 触发表单验证
      this.$refs.userFormRef.validate((valid) => {
        if (valid) {
          // 提交请求给后台
          customerManage.saveUser(this.customerform).then(response => {
            // 成功提示
            this.$message({
              message: response.message,
              type: 'success'
            });
            // 关闭对话框
            this.dialogFormVisible = false;
            // 刷新表格
            this.getUserList();
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
        clearForm() {
      this.customerform = {};
      this.$refs.userFormRef.clearValidate();
    },

        handleSizeChange(pageSize){
          this.searchModel.pageSize = pageSize;
          this.getUserList();
        },
        handleCurrentChange(pageNo){
          this.searchModel.pageNo = pageNo;
          this.getUserList();
        },
        customeredit(id) {
      if( id == null){
        this.title = "新增用户";
      }else{
        this.title = "修改用户";
        // 根据id查询用户数据
        customerManage.getUserById(id).then(response => {
          this.customerform = response.data;
        });
      }
      this.dialogFormVisible = true;
    },
        getUserList() {
          customerManage.getUserList(this.searchModel).then((response) => {  //
            this.customerList = response.data.rows;
            this.total = response.data.total;
          });
        }
        },
        // getTable(){
        //   customerManage.getTable().then((response) =>{
        //     this.customerList = response.data;
        //   })
        // }

      created() {
        this.getUserList();
        // this.getTable();
      }
    };
  </script>

  <style>
  #search .el-input {
  width: 200px;
  margin-right: 10px;
  }
  .el-dialog .el-input {
  width: 75%;
}
  </style>
