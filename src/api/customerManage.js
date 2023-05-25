import request from '@/utils/request'


export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export default{
  getUserList(searchModel){   //searchModel 搜索
    return request({
      url: '/customer/list',
      method: 'get',
      params:{
        pageNo: searchModel.pageNo,
        pageSize: searchModel.pageSize,
        Name: searchModel.Name,
        TelCode: searchModel.TelCode
      }
    });
  },
  // getTable(){
  //   return request({
  //     url: 'customer/find1',
  //     method: 'get',
  //   });
  // },
  getPerson(){
    return request({
      url: 'customer/user',
      method: 'get'
    });
  },
  addUser(customer){ //增加
    return request({
      url: '/customer',
      method: 'post',
      data: customer
    });
  },
  updateUser(customer){   //修改
    return request({
      url: '/customer',
      method: 'put',
      data: customer
    });
  },
  saveUser(customer){
    if(customer.id == null && customer.id == undefined){
      return this.addUser(customer);
    }
    return this.updateUser(customer);
  },
  getUserById(id){   //修改
    return request({
      //url: '/user/' + id,
      url: `/customer/${id}`,
      method: 'get'
    });
  },
  deleteUserById(id){   //删除
    return request({
      url: `/customer/${id}`,
      method: 'delete'
    });
  },
}

