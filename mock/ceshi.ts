import mockjs from 'mockjs'
const data = mockjs.mock({
    'data|50': [
        {
            key: '@id()',
            name: '@cname',
            age: '@integer(20,60)',
            score: '@integer(30,100)',
            created_at: '@datetime'
        }
    ]
})
export default {
    'GET /ceshi/info': data,
}