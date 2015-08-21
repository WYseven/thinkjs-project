module.exports = Controller("Home/BaseController",function (){
	"use strict"
	return {
		indexAction:function (){
			var self = this;
			this.session("userInfo").then(function (data){
				if( isEmpty(data) ){
					self.redirect("/login/");
				}else{
					self.assign("userName",data);
					self.display();
				}
			});
		}
	}	
});