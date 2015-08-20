module.exports = Controller("Home/BaseController",function (){
	"use strict"
	return {
		loginAction:function (){
			this.end("login");		
		}
	}	
});