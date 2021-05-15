// 获取运动申请
// 传入的参数即为限制条件

// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
const req = db.collection("SPORT_REQUEST")
const booked = db.collection("BOOKED")

// 云函数入口函数
exports.main = async (event, context) => {
  var ans = await booked.where(event).get()
  var valList = ans.data

  for (var i = 0; i < valList.length; ++i) {
    var s = await req.where({
      _id: valList[i].sport_request_id
    }).get()

    for (var p in s.data[0]) {
      valList[i][p] = s.data[0][p]
    }
  }

  ans.data = valList
  return ans

}