// components/stars/stars.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    activeStar: 1,
    noActiveStar: 4
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeStar(e) {
      let in_xin = e.currentTarget.dataset.in;
      let activeStar;
      if (in_xin === 'use_sc2') {
        activeStar = Number(e.currentTarget.id);
      } else {
        activeStar = Number(e.currentTarget.id) + this.data.activeStar;
      }
      this.setData({
        activeStar: activeStar,
        noActiveStar: 5 - activeStar
      })
      this.triggerEvent("changeVal", this.data.activeStar)
    },
  }
})