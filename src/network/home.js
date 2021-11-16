//用{}大括号包着是因为request.js没有用default导出而是使用函数——所以使用{}导入
import {request} from "./request";

//Home.vue面向home.js开发————————封装
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}
