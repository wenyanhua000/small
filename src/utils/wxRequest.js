import wepy from 'wepy'

// 封装一个用于发送请求函数 wxRequest
// url 请求地址
// params 参数对象
const wxRequest = (url, params = {}) => {
  return wepy.request({
    url: wxRequest.baseUrl + url, // 开发者服务器接口地址",
    data: params.data || {}, // 请求的参数",
    method: params.method || 'GET',
    dataType: params.dataType || 'json', // 如果设为json，会尝试对返回的数据做一次 JSON.parse
    header: params.header || {
      'Content-type': 'application/json'
    }
  })
}
wxRequest.baseUrl = ''
export default wxRequest
