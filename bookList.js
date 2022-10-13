// pages/bookList/bookList.js
var app = new getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postData: {
        columnId: "",
        current: 1,
        name: "",
        size: 10,
        status: "1"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id
    this.data.postData.columnId = id
    this.getAllList(1)
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
  loadMore: function () {
    if (this.data.totalCount !== this.data.showList.length) {
      const pageNum = this.data.postData.current + 1
      this.getAllList(pageNum)
    }
  },
  getAllList(pageNum) {
    let data = JSON.parse(JSON.stringify(this.data.postData))
    data.current = pageNum
    app.httpPost('/read/app/home/queryBookPage', data,
        (p) => {
          if (pageNum === 1) {
            this.setData({
              showList: p.records || [],
              totalCount: p.total
            })
          } else {
            this.setData({
              showList: this.data.showList.concat(p.records || []),
              totalCount: p.total
            })
          }
          this.data.postData.current = pageNum

        })
  },
  toDetail(e){
    let item = e.currentTarget.dataset.item
    wx.navigateTo({
      url: `/pages/bookDetail/bookDetail?id=${item.id}`,
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