// pages/loading/loading.js
var app = new getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showDouble: false,
    isAgree: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {


  },
  chnageVal(e){
    if (this.data.isAgree) {
      this.setData({isAgree: false})
    } else {
      this.setData({isAgree: true})
    }
  },
  showModel(){
    this.setData({
      showDouble: true
    })
  },
  doubleComfirn(){
    this.setData({
      showDouble: false,
      isAgree: true
    })
  },
  doubleCancel(){
    this.setData({
      showDouble: false
    })
  },
  handleClick() {
    // 登录
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        let data = {
          appId: "wxc7cd135babf98422",
          // appSource: 2,
          code: '',
          loginType: 'app_wx_ma',
          encryptedData: res.encryptedData,
          iv: res.iv,
          signature: res.signature,
          rawData: res.rawData
        }
        wx.login({
          success: m => {
            console.log(m)
            data.code = m.code
            app.httpPost('/read/upms/auth/appLogin', data, p => {
              wx.setStorageSync('tokenName', p.tokenName)
              wx.setStorageSync('tokenValue', p.tokenValue)
              app.httpPost('/read/app/home/getAppCurrentUser', {}, p => {
                wx.setStorageSync('userInfo', JSON.stringify(p))
                wx.setStorageSync('isUserLogin', true)
                wx.navigateBack()
              }, true)

            }, true)
          },
          fail: res => {
            debugger
          }
        })

      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})