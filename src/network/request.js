import axios from 'axios'

export function request(config){
  const instance = axios.create({
<<<<<<< HEAD
    baseURL:'http://106.54.54.237:8000/api/wh' || 'http://123.207.32.32:8000/api/wh'  ,
=======
    baseURL:'http://152.136.185.210:8000/api/h8'  ,
>>>>>>> 完成登录注册开发与测试
    timeout:10000
  })
//请求拦截
instance.interceptors.request.use(config => {
  return config
},err =>{
  console.log(err);
  
})

//响应拦截
instance.interceptors.response.use(res =>{
  return res.data
},err =>{
  console.log(err);
  
})

//发送真正的网络请求
return instance(config)
}

