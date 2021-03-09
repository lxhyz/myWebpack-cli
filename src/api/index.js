// 配置axios请求实例
// 1.请求地址 2.超时 3.请求和响应的拦截器
import axios from "axios"
const instance = axios.create({
    baseURL: 'heep://127.0.0.1:4000/',
    timeout: 5000,
    headers: {'X-Custom-Header': 'foobar'}
  });
  // 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
// 暴露处理
export default instance