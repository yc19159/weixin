/**
 * 请求网络
 */
function request( url, page, success, fail ) {
  if( typeof success != 'function' || typeof fail != 'function' ) {
    return
  }
  // 6da61d257ff0fc4f056715873aaed3e3
  var app = getApp()
  wx.request( {
    url: url,
    data: {
      // key: "6da61d257ff0fc4f056715873aaed3e3",
      count:100,
      page: page,
      // pagesize: app.globalData.pagesize
    },
    success: function( res ) {
      // if( res.data.error_code == 0 ) {
      //   success( res.data )
          success(res)
      // } else {
      //   fail( res )
      // }
    },
    fail: function() {
      fail( '网络错误' )
    }

  })
}

module.exports = {
  request: request
}
