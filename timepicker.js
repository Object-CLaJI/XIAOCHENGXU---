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
    changeVal: ''
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
    initPage () {
      console.log(11111111111)
      const that = this
      const date = new Date()
      const years = []
      const months = []
      const days = []
      let nowYear = date.getFullYear()
      let nowMonth = date.getMonth()
      let nowday = date.getDate() - 1
      for (let i = date.getFullYear() - 70; i <= date.getFullYear(); i++) {
        years.push(i)
      }
      for (let i = 1; i <= 12; i++) {
        months.push(i)
      }
      for (let i = 1; i <= 31; i++) {
        days.push(i)
      }
      this.setData({
        years: years,
        months: months,
        days: days,
        year: nowYear,
        month: nowMonth + 1,
        day: nowday,
        pickDate: nowYear + '年' + (nowMonth + 1) + '月' + nowday + '日',
        changeVal: nowYear + '/' + (nowMonth + 1) + '/' + nowday + ' ' + '00:00:00'
      }, function () {
        that.setData({
          value: [35, nowMonth, nowday]
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
      this.data.pickDate = this.data.years[val[0]] + '年' + this.data.months[val[1]] + '月' + this.data.days[val[2]] + '日'
      this.data.changeVal = this.data.years[val[0]] + '/' + this.data.months[val[1]] + '/' + this.data.days[val[2]] + ' ' + '00:00:00'
      this.setData({
        year: this.data.years[val[0]],
        month: this.data.months[val[1]],
        day: this.data.days[val[2]]
      })
      // {{year}}年{{month}}月{{day}}日
    },
    openSelect: function () {
      this.setData({
        open: true
      })
    }
  }
})