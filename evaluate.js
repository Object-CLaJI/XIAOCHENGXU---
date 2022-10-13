// pages/evaluate/evaluate.js
var app = new getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookName: '',
    postData: {
      bookId: "",
      content: "",
      memberId: "",
      score: 1
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.postData.bookId = options.id
    this.setData({
      bookName: options.name
    })
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
    let userInfo = JSON.parse(wx.getStorageSync('userInfo') || '{}')
    this.data.postData.memberId = userInfo.id || ''
  },
  changeStar(e) {
    let stars = e.detail
    this.data.postData.score = stars
  },
  inputValue(e) {
    console.log(e)
    let data = e.currentTarget.dataset.bindname
    this.data.postData[data] = e.detail.value
  },
  toSubmit() {
    console.log(this.data.postData)
    app.httpPost(`/read/app/home/addBookReview`, this.data.postData, p => {
      wx.showToast({
        title: '评价成功',
        icon: 'none',
        duration: 2000
      })
      setTimeout(() => {
        wx.navigateBack()
      }, 1500)
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