import {
  CONFIG
} from './configs/index'
//app.js
App({
  onLaunch: function () {
    // 初始化慧眼实名核身组件
    const Verify = require('/verify_mpsdk/main');
    Verify.init();
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    
    // 获取用户信息

  },
  returnQuery(url, object) {
    if (object) {
      let html = ''
      for (let i in object) {
        html += '&' + i + '=' + encodeURI(object[i])
      }
      html = html.substr(1, html.length - 1)
      return url + '?' + html
    }
  },
  globalRequestUrl(site) {
    return CONFIG.url + site; //本地服务
  },
  httpGet: function (url, success, noLoading) {
    if (!noLoading) {
      wx.showLoading({
        title: '',
        mask: true
      });
    }
    let key = wx.getStorageSync('tokenName')
    let tokenValue = wx.getStorageSync('tokenValue')
    let headerData = {}
    if (key){
      headerData[key] = 'Bearer ' + tokenValue
    }
    wx.request({
      url: this.globalRequestUrl(url),
      header: headerData,
      method: 'GET',
      success: function (res) {
        if (!noLoading) {
          wx.hideLoading();
        }
        if (res.data.code === 200) {
          success(res.data.data, res.data.msg);
        } else if (res.data.code == 401) {
          wx.removeStorageSync('tokenValue')
          wx.removeStorageSync('tokenName')
          wx.removeStorageSync('isLogin')
          wx.removeStorageSync('isUserLogin')
          wx.redirectTo({
            url: '/pages/app/app',
          })
        } else {
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 2000
          })
        }
      },
      fail: function () {
        wx.showToast({
          title: "请求错误",
          icon: 'none',
          duration: 1500
        })
      }
    });
  },
  httpPost: function (url, data, success, noLoading) {
    if (!noLoading) {
      wx.showLoading({
        title: '',
        mask: true
      });
    }
    let key = wx.getStorageSync('tokenName')
    let tokenValue = wx.getStorageSync('tokenValue')
    let headerData = {}
    if (key){
      headerData[key] = 'Bearer ' + tokenValue
    }
    wx.request({
      url: this.globalRequestUrl(url),
      header: headerData,
      data: data,
      method: 'POST',
      success: function (res) {
        if (!noLoading) {
          wx.hideLoading();
        }
        if (res.data.code === 200) {
          success(res.data.data, res.data.msg);
        } else if (res.data.code == 401) {
          wx.removeStorageSync('tokenValue')
          wx.removeStorageSync('tokenName')
          wx.removeStorageSync('isUserLogin')
          wx.removeStorageSync('isLogin')
          wx.redirectTo({
            url: '/pages/app/app',
          })
        } else {
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 2000
          })
        }
      },
      fail: function (res) {
        console.log(res)
        wx.showToast({
          title: "请求超时，请检查网络",
          icon: 'none',
          duration: 2000
        })
      }
    });
  },
  httpDel: function (url, params, success, noLoading) {
    if (!noLoading) {
      wx.showLoading({
        title: '',
        mask: true
      });
    }
    let key = wx.getStorageSync('tokenName')
    let tokenValue = wx.getStorageSync('tokenValue')
    let headerData = {}
    if (key){
      headerData[key] = 'Bearer ' + tokenValue
    }
    wx.request({
      url: url,
      header: headerData,
      data: params,
      method: 'DELETE',
      success: function (res) {
        if (!noLoading) {
          wx.hideLoading();
        }
        if (res.data.code === 200) {
          success(res.data.data, res.data.msg);
        } else if (res.data.code == 401) {
          wx.removeStorageSync('tokenValue')
          wx.removeStorageSync('tokenName')
          wx.removeStorageSync('isUserLogin')
          wx.removeStorageSync('isLogin')
          wx.redirectTo({
            url: '/pages/app/app',
          })
        } else {
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 2000
          })
        }
      },
      fail: function (res) {
        console.log(res)
        wx.showToast({
          title: "请求超时，请检查网络",
          icon: 'none',
          duration: 2000
        })
      }
    });
  },
  globalData: {
    hasJump: false,
    nowVillage: {},
    userInfo: null,
    newUserInfo: null,
    sessionKey: '',
    openId: '',
    discoverType: '1',
    unionId: '',
    isReg: false,
    phoneNumber: '',
    indexSel: 0,
    myHouseList: [],
    villageList: [],
    activityData: {},
    cover: false,
    hosuPostData: {},
    visiter: {
      carNumber: '',
      code: '',
      hasCar: 0,
      name: '',
      phone: '',
      qrContent: '',
      villageId: 0,
      villageName: '',
      visitDate: '',
      sex: '1',
      sexName: '先生'
    }
  }
})