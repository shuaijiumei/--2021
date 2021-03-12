// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const db = cloud.database()
  const cuser = db.collection("CLIENT_USER")
  return await cuser.add({
    data: {
      name: event.name,
      gander: event.gander,
      iq: event.iq
    }
  }).then(res=>{
    console.log('添加成功', res)
  }).catch(err=>{
    console.log('添加失败', err)
  });
}