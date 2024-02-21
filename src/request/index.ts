import axios from 'axios'

const service = axios.create({
    baseURL: 'https://www.fastmock.site/mock/bf1fcb3c2e2945669c2c8d0ecb8009b8/api',
    timeout: 1000,
})

service.interceptors.request.use((config)=>{
    if(localStorage.getItem('token')){
        config.headers.token = localStorage.getItem('token') || ''
    }
    return config;
})
service.interceptors.response.use((res)=>{
    if(res.data.code==200){
        return res.data;
    }
},(err)=>{
    return Promise.reject(err)
})

export default service;