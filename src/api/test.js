import request from '@/utils/request'

export default{
  getTest1List() {
    return request({
      url: '/test1',
      method: 'get',
  })
  },
  getTest2List() {
    return request({
      url: '/test2',
      method: 'get',
  })
  },
  getTest3List() {
    return request({
      url: '/test3',
      method: 'get',
  })
  },
  getTest4List() {
    return request({
      url: '/test4',
      method: 'get',
  })
  },
  route(expressID){
    return request({

      url: `/customer/map/${expressID}`,
      method: 'get',

  })
  }
}
