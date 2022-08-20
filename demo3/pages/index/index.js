Page({
 /**
   * 页面的初始数据
   */
  data: {
    region:['山东省', '青岛市', '崂山区'],
    now:{
      temp:0,
      text: '未知',
      icon: '999',
      humidity: 0,
      pressure: 0,
      vis: 0,
      windDir: 0,
      windSpeed: 0,
      windScale: 0
    }
  },
  /**
   * 更新省、市、区信息
   */
  regionChange: function(e){
    this.setData({region: e.detail.value});
    this.getWeather();
  },
  /**
   * 获取实况天气数据
   */
  getWeather: function(){
    let utils = require('../../utils/util');
    var that = this;
    wx.request({
      url:'https://devapi.qweather.com/v7/weather/now',
      data: {
        location: utils.getLocationID(that.data.region[1]),
        key:'5e8033f4dbd4402eb7955757a769102e'
      },
      success: function(res){
       that.setData({now:res.data.now});
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getWeather();
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