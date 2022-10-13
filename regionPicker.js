const { LedaoControllar } = require("../../utils/controllar/ledaoControllar");

Component({

  behaviors: [],

  properties: {
    placeholder: { // 属性名
      type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '请选择', // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer: function (newVal, oldVal) { } // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
    },
    pickedList: {
      type: Array,
      observer: function (newVal, oldVal) { console.log(oldVal);console.log(newVal) }
    },
    choosedValue: String // 简化的定义方式,
  },
  data: {
    nowDate: new Date(),
    nowIndex: '',
    open: false,
    years: [],
    year: 2020,
    months: [],
    month: 4,
    days: [],
    day: 30,
    value: [2020, 4, 20],
    pickDate: '',
    changeVal: '',
    provinceList: [],
    cityList: [],
    districtList: [],
    choosePro: 0,
  }, // 私有数据，可用于模版渲染

  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () { },
    moved: function () { },
    detached: function () { },
  },

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached: function () { }, // 此处attached的声明会被lifetimes字段中的声明覆盖
  ready: function() { },
  created:function () {
  },
  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () {
      this.initPage()
    },
  },
  methods: {
    async getProvince() {
      let data = {
        type: 1
      }
      let proviceList = await LedaoControllar.getQueryRegionList(data)
      this.setData({
        provinceList: proviceList.data.data
      }, p => {
        this.getCity(this.data.provinceList[0].id)
      })
    },
    async getCity(parentId) {
      let data = {
        parentId: parentId,
        type: 2
      }
      let city = await LedaoControllar.getQueryRegionList(data)
      this.setData({
        cityList: city.data.data
      }, p => {
        this.getDir(this.data.cityList[0].id)
      })
    },
    async getDir(parentId) {
      let data = {
        parentId: parentId,
        type: 3
      }
      let dir = await LedaoControllar.getQueryRegionList(data)
      this.setData({
        districtList: dir.data.data
      })
    },
    initPage () {
      this.getProvince()
      let that = this
      this.setData({
        pickDate: '',
        changeVal: ''
      }, function () {
        that.setData({
          value: [0, 0, 0]
        })
      })
    },
    closeCom: function () {
      this.setData({
        open: false
      })
    },
    chooseCom : function () {
      this.setData({
        choosedValue: this.data.pickDate,
        open: false
      })
      this.triggerEvent("changeVal", this.data.changeVal)
    },
    bindChange: function (e) {
      const val = e.detail.value
      const beforeValue = this.data.value
      console.log(beforeValue)
      if (beforeValue[0] !== val[0]) {
        this.getCity(this.data.provinceList[val[0]].id)
        this.setData({
          value: [val[0], 0, 0]
        })
      }
      if (beforeValue[1] !== val[1]) {
        this.getDir(this.data.cityList[val[1]].id)
        this.setData({
          value: [val[0], val[1], 0]
        })
      }
      this.data.changeVal = [
        {
          id: this.data.provinceList[val[0]].id,
          name: this.data.provinceList[val[0]].name
        },
        {
          id: this.data.cityList[val[1]].id,
          name: this.data.cityList[val[1]].name
        },
        {
          id: this.data.districtList[val[2]].id,
          name: this.data.districtList[val[2]].name
        }
      ]
      this.data.pickDate = this.data.provinceList[val[0]].name + this.data.cityList[val[1]].name + this.data.districtList[val[2]].name
      // const val = e.detail.value
      // this.data.pickDate = this.data.years[val[0]] + '年' + this.data.months[val[1]] + '月' + this.data.days[val[2]] + '日'
      // this.data.changeVal = this.data.years[val[0]] + '/' + this.data.months[val[1]] + '/' + this.data.days[val[2]] + ' ' + '00:00:00'
      // this.setData({
      //   year: this.data.years[val[0]],
      //   month: this.data.months[val[1]],
      //   day: this.data.days[val[2]]
      // })
      // {{year}}年{{month}}月{{day}}日
    },
    openSelect: function () {
      this.setData({
        open: true
      })
    }
  }
})