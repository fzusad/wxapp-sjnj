// pages/book-pages/book-page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indexofpages: [
      { index: '1', pagenum: ['1'] },
      { index: '2', pagenum: [] },
      { index: '3', pagenum: ['2'] },
      { index: '4', pagenum: ['7'] },
      { index: '5', pagenum: ['8', '9'] },
      { index: '6', pagenum: ['10', '11'] },
      { index: '7', pagenum: [] },
    ],
    pictrues : []
  },

  previewImg(event){
    let currentUrl = event.currentTarget.dataset.src;
    console.log("pic-index" + event.currentTarget.dataset.index);
    console.log(currentUrl);
    wx.previewImage({
      current: currentUrl, // 当前显示图片的http链接
      urls: this.data.pictrues // 需要预览的图片http链接列表
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {  
    for(var i = 0; i < this.data.indexofpages.length; i++)
    {
      if (this.data.indexofpages[i].index == options.id)
      {
        for(var j = 0; j < this.data.indexofpages[i].pagenum.length; j++)
        {
          var url = "/images/" + this.data.indexofpages[i].pagenum[j] + ".png";
          this.data.pictrues.push(url);
        }        
      }
    }
    this.setData(
      {
        pages: this.data.pictrues
      }
    )
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