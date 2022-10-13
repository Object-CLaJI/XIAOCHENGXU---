// pages/searchPage/searchPage.js
var app = new getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowMore: false,
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
    // this.getAllList(1)
  },
  toSearch(){
    this.getAllList(1)
  },
  inputValue(e) {
    console.log(e)
    let data = e.currentTarget.dataset.bindname
    console.log(data)
    this.data.postData[data] = e.detail.value
  },
  loadMore: function () {
    if (this.data.totalCount !== this.data.showList.length) {
      const pageNum = this.data.postData.current + 1
      this.getAllList(pageNum)
    }
  },
  toRead(e){
    let item = e.currentTarget.dataset.item
    wx.navigateTo({
      url: `/pages/bookDetail/bookDetail?id=${item.id}`,
    })
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