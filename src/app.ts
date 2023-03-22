// 配置request拦截器
export const request = {
    requestInterceptors: [
        (url:any, options:any) => {
            console.log('请求拦截', url)
            return options
        }
    ],
    responseInterceptors: [
        (response:any, options:any) => {
            console.log('响应拦截', response)
            return response
        }
    ]
}