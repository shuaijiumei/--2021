// 获取运动申请
// 传入的参数即为限制条件

// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
const req = db.collection("SPORT_REQUEST")
const sport = db.collection("SPORT")

// 云函数入口函数
exports.main = async (event, context) => {
  var ans = await req.where(event).get()
  var valList = ans.data

  for (var i = 0; i < valList.length; ++i) {
    var s = await sport.where({
      sport_type: valList[i].sport_type
    }).get()

    for (var p in s.data[0]) {
      if (p === "_id")
        continue
      valList[i][p] = s.data[0][p]
    }
  }
  ans.data = valList
  return ans
}