//index.js
//获取应用实例
var util = require('../../utils/util.js');
var app = getApp();
Page({
    data: {
        materialList: [],
        userInfo: {}
    },

    onLoad: function () {

    },
    onPullDownRefresh: function () {
      wx.stopPullDownRefresh();
    },

});
