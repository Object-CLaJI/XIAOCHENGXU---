import { CONFIG } from '../configs/index'
import { fetch } from './fetch'
export class services extends fetch {

  constructor () {
    super()
    this.config = CONFIG
    this.baseUrl = CONFIG.url
  }

  //post方法
  postMessage(data) {
    return this.post({
      url: this.baseUrl + '/api/test',
      data
    })
  }
  //get方法
  getMessage(data) {
    return this.get({
      url: returnQuery(this.baseUrl + '/api/test', data)
    })
  }
  // 获取微信openId
  getOpenId(data) {
    return this.post({
      url: this.baseUrl + '/wechatTwo/openId?code=' + data.code,
      data
    })
  }
  // 获取用户信息
  getUserInfo(data) {
    let url = returnQuery('/customer/gerUserInfo', data)
    return this.post({
      url: this.baseUrl + url,
      data
    })
  }
   // 获取当前用户的小区列表
   getUserVillageCurrent(data) {
    let url = returnQuery('/building/villageCurrent', data)
    return this.post({
      url: this.baseUrl + url,
      data
    })
  }
   // 获取banner
   getBannerList(data) {
    let url = returnQuery('/advice/bannerList', data)
    return this.post({
      url: this.baseUrl + url,
      data
    })
  }
  // 获取活动
  getActivityList(data) {
    let url = returnQuery('/advice/activityList', data)
    return this.post({
      url: this.baseUrl + url,
      data
    })
  }
  // 参加活动
  joinActive (data) {
    let url = returnQuery('/advice/join', data)
    return this.post({
      url: this.baseUrl + url,
      data
    })
  }
  // 获取公告
  getNoticeList(data) {
    let url = returnQuery('/advice/noticeList', data)
    return this.post({
      url: this.baseUrl + url,
      data
    })
  }
  // 获取我的投诉
  getMyComplains(data) {
    let url = returnQuery('/complain/myComplains', data)
    return this.post({
      url: this.baseUrl + url,
      data
    })
  }
   // 获取投诉
   getComplainConfig(data) {
    let url = returnQuery('/complain/complainConfig', data)
    return this.post({
      url: this.baseUrl + url,
      data
    })
  }
  // 编辑投诉
  editComplain(data) {
    let url = returnQuery('/complain/add', data)
    return this.post({
      url: this.baseUrl + url,
      data
    })
  }
  // 获取我的车
  getMyCars(data) {
    let url = returnQuery('/carInfo/myCars', data)
    return this.post({
      url: this.baseUrl + url,
      data
    })
  }
  // 编辑汽车
  editCarInfo(data) {
    let url = returnQuery('/carInfo/add', data)
    return this.post({
      url: this.baseUrl + url,
      data
    })
  }
  // 删除车辆
  delCarInfo(data) {
    let url = returnQuery('/carInfo/delete', data)
    return this.post({
      url: this.baseUrl + url,
      data
    })
  }
  // 报修列表
  getMyRepairs(data) {
    let url = returnQuery('/repair/myRepairs', data)
    return this.post({
      url: this.baseUrl + url,
      data
    })
  }
  // 获取报修类型
  getRepairTypeList(data) {
    let url = returnQuery('/repair/typeList', data)
    return this.post({
      url: this.baseUrl + url,
      data
    })
  }
  // 编辑报修
  editRepair(data) {
    let url = returnQuery('/repair/newRepair', data)
    return this.post({
      url: this.baseUrl + url,
      data
    })
  }
  // 获取我的房子
  getMyHouseList(data) {
    let url = returnQuery('/customer/myHouse', data)
    return this.post({
      url: this.baseUrl + url,
      data
    })
  }
  // 获取社区
  getCommunityList(data) {
    let url = returnQuery('/building/communities', data)
    return this.post({
      url: this.baseUrl + url,
      data
    })
  }
  // 获取小区
  getVillageList(data) {
    let url = returnQuery('/building/getVillageByCommunityId', data)
    return this.post({
      url: this.baseUrl + url,
      data
    })
  }
  // 获取楼栋
  getBuildingList(data) {
    let url = returnQuery('/building/getBuildingByVillageId', data)
    return this.post({
      url: this.baseUrl + url,
      data
    })
  }
  // 获取户号
  getHouseList(data) {
    let url = returnQuery('/building/getHouseByBuilding', data)
    return this.post({
      url: this.baseUrl + url,
      data
    })
  }
  // 编辑我的房屋
  editMyHouse(data) {
    let url = returnQuery('/customer/addCustomer', data)
    return this.post({
      url: this.baseUrl + url,
      data
    })
  }
  // 编辑个人信息
  customerEdit(data) {
    let url = returnQuery('/customer/edit', data)
    return this.post({
      url: this.baseUrl + url,
      data
    })
  }
  // 获取我的房屋信息
  getHouseDetail(data) {
    let url = returnQuery('/customer/myFamily', data)
    return this.post({
      url: this.baseUrl + url,
      data
    })
  }
  // 删除某个成员
  removeByHouse(data) {
    let url = returnQuery('/customer/removeByHouse', data)
    return this.post({
      url: this.baseUrl + url,
      data
    })
  }
  // 实名认证
  validateFace(data) {
    let url = returnQuery('/face/validateFace', data)
    return this.post({
      url: this.baseUrl + url,
      data
    })
  }
  // 是否实名
  validateFace(data) {
    let url = returnQuery('/face/validateFace', data)
    return this.post({
      url: this.baseUrl + url,
      data
    })
  }
  // 获取投诉详情
  getComplainDetail(data) {
    let url = returnQuery('/complain/detail', data)
    return this.post({
      url: this.baseUrl + url,
      data
    })
  }
  // 发送验证码
  sendVeryCode(data) {
    let url = returnQuery('/customer/sendVeryCode', data)
    return this.post({
      url: this.baseUrl + url,
      data
    })
  }
  // 校验短信码
  checkVerycode(data) {
    let url = returnQuery('/customer/checkVerycode', data)
    return this.post({
      url: this.baseUrl + url,
      data
    })
  }
  // 添加访客
  addVisitor(data) {
    let url = returnQuery('/visitor/addVisitor', data)
    return this.post({
      url: this.baseUrl + url,
      data
    })
  }
  // 我得访客
  myVisitor(data) {
    let url = returnQuery('/visitor/myVisitor', data)
    return this.post({
      url: this.baseUrl + url,
      data
    })
  }
  // 重新生成
  reCode(data) {
    let url = returnQuery('/visitor/reCode', data)
    return this.post({
      url: this.baseUrl + url,
      data
    })
  }
   // 添加访客
   getmyCode(data) {
    let url = returnQuery('/customer/myCode', data)
    return this.post({
      url: this.baseUrl + url,
      data
    })
  }
  // 我的访问历史
  getMyFaceHistory(data) {
    let url = returnQuery('/customer/myFaceHistory', data)
    return this.post({
      url: this.baseUrl + url,
      data
    })
  }
   // 我的车辆访问历史
   getMyCarHistory(data) {
    let url = returnQuery('/customer/myCarHistory', data)
    return this.post({
      url: this.baseUrl + url,
      data
    })
  }
  //我参与的活动
  getmyActivity(data) {
    let url = returnQuery('/customer/myActivity', data)
    return this.post({
      url: this.baseUrl + url,
      data
    })
  }
  //校验手机号是否有效
  getphoneValid(data) {
    let url = returnQuery('/customer/phoneValid', data)
    return this.post({
      url: this.baseUrl + url,
      data
    })
  }
  //添加亲属
  addTheRelatives(data, fileData) {
    let url = returnQuery('/customer/addTheRelatives', data)
    return this.post({
      url: this.baseUrl + url,
      fileData
    })
  }
  
  // 获取所有分类
  getAllCate(data) {
    let url = returnQuery('/category', data)
    console.log(this.baseUrl + url)
    return this.get({
      url: this.baseUrl + url
    })
  }

  // 获取所有分期活动

  getStageActivity(data) {
    return this.post({
      url: this.baseUrl + '/priorActivity/c/paging',
      data
    })
  }

  // 获取所有分期活动

  getStageActivity2(data) {
    return this.post({
      url: this.baseUrl + '/activityStageInfo/c/list',
      data
    })
  }
  
  //获取活动详情
  getActivityDetail(id) {
    return this.get({
      url: this.baseUrl + '/activityBasicInfo/' + id
    })
  }


  // code 换取session
  codeToSession (code) {
    return this.get({
      url: this.baseUrl + '/wx/wxfa7e5c8cb6f56ea9/user/login/' + code
    })
  }
  

  // 解密用户信息
  getUserInfoEncript (data) {
    return this.post({
      url: this.baseUrl + '/wx/wxfa7e5c8cb6f56ea9/user/info',
      data
    })
  }
  
  // 获取所有banner
  getAllBanner(data) {
    let url = returnQuery('/banner', data)
    console.log(this.baseUrl + url)
    return this.get({
      url: this.baseUrl + url
    })
  }

  // 判断是否已经是会员
  checkIfRegister(unionId) {
    return this.get({
      url: this.baseUrl + '/user/unionId/' + unionId
    })
  }

 // 解析手机号
  decodePhone(data) {
    return this.post({
      url: this.baseUrl + '/wx/wxfa7e5c8cb6f56ea9/user/phone',
      data
    })
  }
  
  // 注册用户
  registerUser(data) {
    return this.post({
      url: this.baseUrl + '/user',
      data
    })
  }
   
  // 修改用户
  updateUser(data) {
    return this.put({
      url: this.baseUrl + '/user',
      data
    })
  }
  // 下单
  orderPay(data) {
    return this.put({
      url: this.baseUrl + '/order',
      data
    })
  }


  // 打开微信支付
  openWXPay (data) {
    return this.post({
      url: this.baseUrl + '/wx/pay/unifiedOrder',
      data
    })
  }

  // 获取我参与的活动
  getMyOrder (data) {
    return this.post({
      url: this.baseUrl + '/order/list',
      data
    })
  }

  // 获取订单详情
  getOrderDetail (id) {
    return this.get({
      url: this.baseUrl + '/order/' + id
    })
  }

  //
}
function returnQuery (url, object) {
 if (object) {
   let html = ''
   for (let i in object) {
     html += '&' + i + '=' + object[i]
   }
   html = html.substr(1, html.length - 1)
   return url + '?' + html
 }
}
