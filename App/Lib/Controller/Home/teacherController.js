module.exports = Controller("Home/BaseController",function (){
	"use strict"
	return {
		indexAction:function (){
			this.session("userInfo").then(function (data){
				console.log( isEmpty(data) );	
			});
			// if( this.cookie("userName") !== "" ){
			// 	this.display();
			// }else{
			// 	this.display("login/index_index.html");
			// }

			this.end()
		}
	}	
});