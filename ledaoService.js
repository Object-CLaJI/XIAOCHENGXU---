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
  // 获取轮播图
  getBannerList(data) {
    return this.get({
      url: this.baseUrl + '/app/home/queryBannerList/98'
    })
  }
   // 获取所有的index活动图
   getIndexBgImg(data) {
    return this.get({
      url: this.baseUrl + '/app/home/queryBackgroundList'
    })
  }
  // 获取所有的index活动图
  getAllSecCate(data) {
    return this.get({
      url: this.baseUrl + '/app/good/queryCategoryList?name='
    })
  }
  // 获取所有商品
  getAllGoods(data) {
    let url = returnQuery('/app/good/queryGoodPage', data)
    return this.post({
      url: this.baseUrl + url,
      data
    })
  }

  // code 换取session
  codeToSession (data) {
    return this.post({
      url: this.baseUrl + '/app/app/login',
      data
    })
  }

  // 获取商品详情
  getGoodDetail(id) {
    return this.get({
      url: this.baseUrl + '/app/good/getGoodInfo/' + id
    })
  }
  // 查询同类商品
  getSimilarGoodList(id) {
    return this.get({
      url: this.baseUrl + '/app/good/querySimilarGoodList/' + id
    })
  }

  // 获取公告
  getNoticeList () {
    return this.get({
      url: this.baseUrl + '/app/home/queryReleaseList'
    })
  }

   // 获取推荐列表
  geMemberGoodRecommendList () {
    return this.get({
      url: this.baseUrl + '/app/member/queryMemberGoodRecommendList'
    })
  }

  // 领取优惠券
  getCoupon (id) {
    return this.get({
      url: this.baseUrl + '/app/couponCenter/getCoupon/' + id
    })
  }

  // 获取所有优惠券
  getCouponList (data) {
    return this.post({
      url: this.baseUrl + '/app/couponCenter/queryCouponList',
      data
    })
  }

  // 获取我得优惠券
  getMyCouponList (status) {
    return this.get({
      url: this.baseUrl + '/app/good/queryMemberCouponList?status=' + status,
    })
  }

  // 添加至购物车
  addGoodToCart (data) {
    return this.post({
      url: this.baseUrl + '/app/good/addGoodToCart',
      data
    })
  }
  
  // 查询我的购物车
  getMyShopCar (data) {
    return this.post({
      url: this.baseUrl + '/app/good/queryCartGoodPage',
      data
    })
  }
  
  // 修改购物车物品数量
  editCartGoodNum (id, num) {
    return this.get({
      url: this.baseUrl + '/app/good/editCartGoodNum/' + id + '?num=' + num
    })
  }
  

  // 删除购物车商品
  deleteShopCar  (id) {
    return this.delete({
      url: this.baseUrl + '/app/good/removeCartGood/' + id
    })
  }

  // 查询我的地址列表
  getMemberAddress () {
    return this.get({
      url: this.baseUrl + '/app/good/queryMemberAddress'
    })
  }
  

  // 新增我的地址
  addMemberAddress (data) {
    return this.post({
      url: this.baseUrl + '/app/good/addMemberAddress',
      data
    })
  }

  // 编辑我的地址
  editMemberAddress (data) {
    return this.post({
      url: this.baseUrl + '/app/good/editMemberAddress',
      data
    })
  }

  // 删除会员地址
  removeMemberAddress  (id) {
    return this.delete({
      url: this.baseUrl + '/app/good/removeMemberAddress/' + id
    })
  }

  // 获取省市区
  getQueryRegionList (data) {
    return this.post({
      url: this.baseUrl + '/app/good/queryRegionList',
      data
    })
  }

   // 获取对应商品的满件包邮信息
  getGoodFullAmount (goodId) {
    return this.get({
      url: this.baseUrl + '/app/good/queryGoodFullAmount/' + goodId
    })
  }

  // 获取我的个人信息
  getMemberInfo (goodId) {
    return this.get({
      url: this.baseUrl + '/app/member/getMemberInfo'
    })
  }
  
  // 添加收藏
  addFavorite (goodId) {
    let data = {
      goodId: goodId
    }
    return this.post({
      url: this.baseUrl + '/app/member/addFavorite',
      data
    })
  }

  // 移除收藏
  removeFavorite  (id) {
    return this.delete({
      url: this.baseUrl + '/app/member/removeFavorite/' + id
    })
  }


  // 是否被收藏
  queryGoodIsMyFavorite  (id) {
    return this.get({
      url: this.baseUrl + '/app/member/queryGoodIsMyFavorite/' + id
    })
  }


  // 添加活动收藏
  addActiveFavorite (goodId) {
    let data = {
      goodId: goodId
    }
    return this.post({
      url: this.baseUrl + '/app/discovery/collectActivity/' + goodId,
      data
    })
  }

  // 移除活动收藏
  removeActiveFavorite  (id) {
    return this.post({
      url: this.baseUrl + '/app/discovery/removeCollectActivity/' + id
    })
  }


  // 是否活动被收藏
  queryActiveGoodIsMyFavorite  (id) {
    return this.post({
      url: this.baseUrl + '/app/discovery/checkActivityIsCollection/' + id
    })
  }


    // 添加新闻收藏
    addNewsFavorite (goodId) {
      let data = {
        goodId: goodId
      }
      return this.post({
        url: this.baseUrl + '/app/discovery/collectNews/' + goodId,
        data
      })
    }
  
    // 移除新闻收藏
    removeNewsFavorite  (id) {
      return this.post({
        url: this.baseUrl + '/app/discovery/removeCollectNews/' + id
      })
    }
  
  
    // 是否新闻被收藏
    queryNewsGoodIsMyFavorite  (id) {
      return this.post({
        url: this.baseUrl + '/app/discovery/checkNewsIsCollection/' + id
      })
    }


    // 获取小程序二维码
    queryCreateWxaCode  (data) {
      return this.post({
        url: this.baseUrl + '/app/wx/ma/createWxaCode',
        data
      })
    }

  // 收藏列表
  getMemberFavoritePage () {
    let data = {
      currPage: 1,
      pageSize: 999
    }
    return this.post({
      url: this.baseUrl + '/app/member/queryMemberFavoritePage',
      data
    })
  }

  // 获取团购列表
  getGroupBuyingList () {
    return this.get({
      url: this.baseUrl + '/app/groupbuy/queryGroupBuyCampaignList'
    })
  }

  // 获取团购详情
  getGroupBuyCampInfo (id) {
    return this.get({
      url: this.baseUrl + '/app/groupbuy/queryGroupBuyCampInfo/' + id
    })
  }

  // 参团
  inGroup (data) {
    return this.post({
      url: this.baseUrl + '/app/groupbuy/inGroup',
      data
    })
  }

   // 获取满减优惠列表
  getCampaignList (id) {
    return this.get({
      url: this.baseUrl + '/app/fullReduction/queryCampaignList'
    })
  }
  // 满减优惠下单
  fullReductionAdd (data) {
    return this.post({
      url: this.baseUrl + '/app/fullReduction/addOrder',
      data
    })
  }

  // 商城订单下单
  shopAddOrder (data) {
    return this.post({
      url: this.baseUrl + '/app/order/shopAddOrder/3',
      data
    })
  }
  // 
  // 微信支付下单
  wxPay (outTradeNo, orderPayType) {
    let data = {
      orderPayType: orderPayType || 1,
      outTradeNo: outTradeNo,
      uniPayStatus: 0,
      appId: 'wx486023e69dcf5996'
    }
    return this.post({
      url: this.baseUrl + '/app/wx/pay/unifiedOrder/2',
      data
    })
  }
  // 活动微信支付下单
  activeWxPay (outTradeNo) {
    let data = {
      orderPayType: 6,
      outTradeNo: outTradeNo,
      uniPayStatus: 0,
      appId: 'wx486023e69dcf5996'
    }
    return this.post({
      url: this.baseUrl + '/app/wx/pay/unifiedOrder/2',
      data
    })
  }
  // 清空消息
  removeAllMsg () {
    let data = {
    }
    return this.post({
      url: this.baseUrl + '/app/member/removeAllMsg',
      data
    })
  }
  // 新闻查询
  getNews () {
    let data = {
      currPage: 1,
      pageSize: 9999
    }
    return this.post({
      url: this.baseUrl + '/app/discovery/queryNewsPage',
      data
    })
  }
  // 活动查询
  getActivity () {
    let data = {
      currPage: 1,
      pageSize: 9999
    }
    return this.post({
      url: this.baseUrl + '/app/discovery/queryActivityPage',
      data
    })
  }
  

  // 活动报名
  activitySignUp (data) {
    return this.post({
      url: this.baseUrl + '/app/discovery/activitySignUp',
      data
    })
  }
  

  // 获取所有订单
  getAllOrder (data) {
    return this.post({
      url: this.baseUrl + '/app/order/page',
      data
    })
  }


  // 取消订单
  orderdelete (orderNo) {
    let data = {}
    return this.post({
      url: this.baseUrl + '/app/order/delete/' + orderNo,
      data
    })
  }
  // 删除订单
  removeOrder (orderNo) {
    let data = {}
    return this.post({
      url: this.baseUrl + '/app/order/delete/' + orderNo,
      data
    })
  }

   // 申请取消订单
   applyCancelOrder (orderNo, applyCancelReason) {
    let data = {
      applyCancelReason: applyCancelReason,
      orderNo: orderNo
    }
    return this.post({
      url: this.baseUrl + '/app/order/applyCancelOrder',
      data
    })
  }

  // 申请退货
  applyReturnOrder (orderNo) {
    let data = {}
    return this.post({
      url: this.baseUrl + '/app/order/applyReturnOrder/' + orderNo,
      data
    })
  }

  // 确认收获
  sureDelivery (orderNo) {
    let data = {}
    return this.post({
      url: this.baseUrl + '/app/order/sureDelivery/' + orderNo,
      data
    })
  }


  // 退货待寄回
  addReturnOrderLogisticsNum (orderNo, waybillNo) {
    let data = {}
    return this.post({
      url: this.baseUrl + '/app/order/addReturnOrderLogisticsNum/' + orderNo + '/' + waybillNo,
      data
    })
  }
  // 评价
  addEvaluate (orderNo,  score, description) {
    let data = {
      description: description,
      orderNo: orderNo,
      score: score
    }
    return this.post({
      url: this.baseUrl + '/app/order/addEvaluate',
      data
    })
  }

  // 活动报名取消
  activitySignUpCancel (orderNo) {
    return this.post({
      url: this.baseUrl + '/app/discovery/activitySignUpCancel/' + orderNo
    })
  }


  // 查询我的活动
  queryMyPartyInActivityList () {
    return this.get({
      url: this.baseUrl + '/app/discovery/queryMyPartyInActivityList'
    })
  }

  // 查询我的消息
  queryMsgPage () {
    let data = {
      currPage: 1,
      pageSize: 50
    }
    return this.post({
      url: this.baseUrl + '/app/member/queryMsgPage',
      data
    })
  }

  // 查询我的未完成任务
  queryMyUnDoTaskList () {
    return this.get({
      url: this.baseUrl + '/app/member/queryMyUnDoTaskList'
    })
  }
  
  // 查询积分变动记录
  scoreChgRecordPage () {
    let data = {
      currPage: 1,
      pageSize: 50
    }
    return this.post({
      url: this.baseUrl + '/app/member/queryMyScoreChgRecordPage',
      data
    })
  }
  
  //查询我的参团
  queryMyInGroupList () {
    return this.get({
      url: this.baseUrl + '/app/groupbuy/queryMyInGroupList'
    })
  }


  // 删除订单 
  removeOrder (orderNo) {
    return this.delete({
      url: this.baseUrl + '/app/order/removeOrder/' + orderNo
    })
  }

   // 我要退团 
   outGroup (id) {
    return this.delete({
      url: this.baseUrl + '/app/groupbuy/outGroup/' + id
    })
  }
  
  //签到
  signin () {
    return this.get({
      url: this.baseUrl + '/app/member/signin/signIn'
    })
  }
  
  // 解密用户手机号
  decodeMaUser (data) {
    let url = returnQuery('/app/wx/oauth2/decodeMaUser', data)
    return this.get({
      url: this.baseUrl + url
    })
  }
  
  // 完善个人资料
  perfectMemberInfo (data) {
    return this.post({
      url: this.baseUrl + '/app/member/perfectMemberInfo',
      data
    })
  }

  // 获取用户详情
  getActivityInfoDetail (id) {
    return this.get({
      url: this.baseUrl + '/app/discovery/getActivityInfo/' + id
    })
  }
  
  // 会员卡列表
  queryMemberCardPage () {
    let data = {
      currPage: 1,
      pageSize: 9999
    }
    return this.post({
      url: this.baseUrl + '/app/good/queryMemberCardPage',
      data
    })
  }
  // 购买会员卡
  buyMemberCard (cardId, deliveryId) {
    let data = {
    }
    return this.post({
      url: this.baseUrl + '/app/order/addMemberCardOrder/' + cardId + '/' + deliveryId,
      data
    })
  }
  // 绑定会员卡
  bandingCard (data) {
    return this.post({
      url: this.baseUrl + '/app/member/bandingCard',
      data
    })
  }
  // 获取我的会员卡列表
  queryMemberCardOrderList () {
    return this.get({
      url: this.baseUrl + '/app/member/queryMemberCardOrderList'
    })
  }
  
}
function returnQuery (url, object) {
 if (object) {
   let html = ''
   for (let i in object) {
     html += '&' + i + '=' + encodeURIComponent(object[i])
   }
   html = html.substr(1, html.length - 1)
   return url + '?' + html
 }
}
