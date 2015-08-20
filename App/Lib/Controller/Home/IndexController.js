/**
 * controller
 * @return 
 */
module.exports = Controller("Home/BaseController", function(){
  "use strict";
  return {
    indexAction: function(){
      var self = this;

      var userModel = D('User');

      var userList = userModel.getUserList();

      console.dir( userList );

      //将数据库中的值传入userList变量中
      self.assign('userList', userList);
      //渲染到页面上，默认会渲染index_index.html页面
      self.display();
    },
    loginAction:function (){
      this.end("login2");    
    }
  };
});