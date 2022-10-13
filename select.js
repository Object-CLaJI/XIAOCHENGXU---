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
    nowIndex: '',
    open: false
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

  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: function () { },
  },

  methods: {
    comfirnSelect: function (e) {
    const index = e.currentTarget.dataset.index
    this.triggerEvent("changeVal", this.properties.pickedList[index] )
    this.setData({
      // 更新属性和数据的方法与更新页面数据的方法类似
      choosedValue: this.properties.pickedList[index].name,
      open: false,
      nowIndex: index
    })
    },
    openSelect: function () {
      this.setData({
        open: true
      })
    },
    close: function () {
      this.setData({
        open: false
      })
    }
  }
})