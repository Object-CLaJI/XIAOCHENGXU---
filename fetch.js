// let token = wx.getStorageSync('token')
// clearInterval(t)
// let t = setInterval(function(){
//   token = wx.getStorageSync('token')
//   // wx.getStorage({
//   //   key: 'token',
//   //   success(res) {
//   //     token = res.data
//   //   }
//   // })
// }, 100)
/**
 * 公共小程序请求 fetch
 * get
 * post
 * delete
 * put
 * request
 */
export class fetch {
  /**
   * get 请求
   * @param {*}} reqObj 参考request 说明
   */
  get (reqObj) {
    reqObj.method = 'GET'
    return this.request(reqObj)
  }

  /**
   * post 请求
   * @param {*}} reqObj 参考request 说明
   */
  post (reqObj) {
    reqObj.method = 'POST'
    return this.request(reqObj)
  }

  /**
   * delete 请求
   * @param {*}} reqObj 参考request 说明
   */
  delete (reqObj) {
    reqObj.method = 'DELETE'
    return this.request(reqObj)
  }

  /**
   * put 请求
   * @param {*}} reqObj 参考request 说明
   */
  put (reqObj) {
    reqObj.method = 'PUT'
    return this.request(reqObj)
  }

  /**
   * 请求主方法
   * reqObj: object {
   *   data is required
   *   url is required
   *   ?isenc boolean true, if false is not encryption
   * }
   */
  request(reqObj) {
    reqObj.headers = {
      "token": wx.getStorageSync('token')
      // "token": 'A00A11CA5EB59D1BC78CE1B2C366C737'
    }
    return new Promise((resolve, reject) => {
     // console.log("gmj", reqObj.headers)
      let rb = Object.assign({
        header: reqObj.headers,
        method: reqObj.method || 'GET',
        success (res) {
          console.log(res)
          if (res.statusCode > 400) {
            reject(res)
          } else {
            if (res.data.code === 0) {
              resolve(res)
            } else {
              wx.showToast({
                title: res.data.msg || '服务器报错',
                icon: 'none',
                duration: 4000
              })
              reject(res)
            }
          }
        },
        fail (error) {
          console.log(error)
          reject(error)
        }
      }, reqObj)
      wx.request(rb)
    })
  }
}
