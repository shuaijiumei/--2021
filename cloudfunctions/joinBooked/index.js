// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
const booked = db.collection("BOOKED")
const req = db.collection("SPORT_REQUEST")

// 云函数入口函数
exports.main = async (event, context) => {
  let temp = await req.where({
    _id: event.sport_request_id
  }).get()
  signed_num = temp.data[0].signed_person_num
  intend_num = temp.data[0].intend_person_num

  if (signed_num + 1 > intend_num) {
    throw new Error("该申请人员已满")
  }

  booked.add({
    data: event
  })
  req.where({
    _id: event.sport_request_id
  }).update({
    data: {
      signed_person_num: signed_num + 1
    }
  }).finally(res => {
    return res
  })
}