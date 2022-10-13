var app = new getApp();
// pages/bookReviewList/bookReviewList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
  toEvaluate() {
    wx.navigateTo({
      url: `/pages/evaluate/evaluate?id=${this.data.bookDetail.id}&name=${this.data.bookDetail.name}&url=${this.data.bookDetail.url}`,
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