// 导入我们封装的的wxRequset 方法
import wxRequest from '../utils/wxRequest'
// 导入全局路径
import appConfig from '../utils/appConfig'

console.log('是否成功导入')

// 设置请求API 的根路径
wxRequest.baseUrl = `${appConfig.HTTP_BAST_URL}/api/public/v1/`

// 封装请求API， 这里的用法类似axios
const getHomeSwiper = params => {
  return wxRequest('home/swiperdata', params).then(res => res.data)
}
const getHomeNav = params => {
  return wxRequest('home/catitems', params).then(res => res.data)
}

// 记得把封装的API方法导出，我们这里是统一导出
export default {
  getHomeSwiper,
  getHomeNav
}

// wepy.request({
//   url: 'https://itjustfun.cn/api/public/v1/home/swiperdata', // 开发者服务器接口地址",
//   method: 'GET',
//   dataType: 'json', // 如果设为json，会尝试对返回的数据做一次 JSON.parse
//   fail: () => {}
// })
// .then(res => {
//   console.log(res)
//   this.swiperArr = res.data.data
//   this.$apply()
// })
