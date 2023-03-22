import {request} from 'umi'
export const getTablesInfo:any = () => {
    return request('/ceshi/info',{
        method: 'GET'
    })
}