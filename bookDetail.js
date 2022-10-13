// pages/bookDetail/bookDetail.js
var app = new getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowMore: false,
    bookDetail: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id
    if (id) {
      this.getData(id)
    }
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
  
  getData(id) {
    app.httpGet(`/read/app/home/queryBookDetail/${id}`, p => {
      this.setData({
        bookDetail: p
      })
      wx.setNavigationBarTitle({
        title: p.name
      })
    })
  },
  isShowMore() {
    this.setData({
      isShowMore: !this.data.isShowMore
    })
  },
  toEvaluate() {
    let isUserLogin = wx.getStorageSync('isUserLogin')
    if (!isUserLogin) {
      return wx.navigateTo({
        url: '/pages/login/login',
      })
    }
    if (this.data.bookDetail.bookReviewList && this.data.bookDetail.bookReviewList.length) {
      wx.navigateTo({
        url: `/pages/bookReviewList/bookReviewList?id=${this.data.bookDetail.id}`,
      })
    } else {
      wx.navigateTo({
        url: `/pages/evaluate/evaluate?id=${this.data.bookDetail.id}&name=${this.data.bookDetail.name}&url=${this.data.bookDetail.url}`,
      })
    }
  },
  toRead() {
    wx.navigateTo({
      url: `/pages/reader/reader?id=${this.data.bookDetail.id}&name=${this.data.bookDetail.name}&url=${this.data.bookDetail.bookPdfUrl}&columnId=${this.data.bookDetail.columnId}`,
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