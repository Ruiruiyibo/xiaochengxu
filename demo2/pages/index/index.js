Page({
  /**
   * 页面的初始数据
   */
  data: {
    src:'/images/1.png',
    name:'Hello World'
  },
  /** 
   * 自定义函数--获取微信用户信息
  */
   getMyInfo: function(e){
    let info = e.detail.userInfo;
    this.setData({
      src: info.avatarUrl,  //更新图片来源
      name: info.nickName   //更新昵称
    })
  }
})

