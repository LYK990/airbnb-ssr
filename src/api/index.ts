import { http } from "../utils/http";
import IndexedDB from '../utils/indexDB'
const airbnbDB = new IndexedDB('airbnb')

// 真实接口
export function fetchRoomList () {
  return http.httpRequestGet('https://service-ase3oocp-1302839645.sh.apigw.tencentcs.com/release/api/room/getRoomList?pageNo=1&pageSize=2&cityCode=sz', {})
}
// mock接口
export async function fetchElephant () {
  // return http.httpRequestGet('https://service-ase3oocp-1302839645.sh.apigw.tencentcs.com/release/api/room/getRoomList?pageNo=1&pageSize=2&cityCode=sz', {})
  await airbnbDB.openStore('elephant', 'id', ['nose', 'ear'])
  const result = await airbnbDB.getList('elephant').then(res => {
    return {
      code: '0000',
      message: '操作成功',
      result: res,
      success: true
    }
  })
  console.log('result---', result)
}