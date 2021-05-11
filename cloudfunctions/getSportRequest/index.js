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

    var sport_imag = s.data[0].sport_imag
    var background_color = s.data[0].sport_background_color
    var color = s.data[0].sport_color

    valList[i]["sport_imag"] = sport_imag
    valList[i]["sport_background_color"] = background_color
    valList[i]["color"] = color
  }

  ans.data = valList
  return ans

}