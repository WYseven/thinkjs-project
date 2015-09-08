module.exports = Controller("Home/BaseController",function (){
	"use strict"
	return {
		indexAction:function (){
			
		      self.display();
		},
		student_20150908Action:function(){
			var self = this;
		  var userModel = D('student_20150908');
		  userModel.field().select().then(function(data){
		  	self.assign( "student_name",data );
		  	 self.display("Home/student_20150908.html");
		  });
		},
		addStudentAction:function(){
			var self  = this;
			if(this.isPost() ){
				var userName = self.post("user");
	            var password = self.post("password");
	
	            D("student_20150908").where({student_name:userName}).find().then(function (data){
	             
	               if( !data.name ){
	                  D("student_20150908").add({
	                    student_name:userName
	                  });
	                  self.success({isOk:false});
	               }else{
	                  self.error({isOk:true});
	               }
	            });
			}
		}
	}	
});