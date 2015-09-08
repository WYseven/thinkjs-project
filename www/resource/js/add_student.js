$(function (){
	
	$("#send").click(function(){
		$.ajax({
			url:"/Home/student/addStudent/",
			type:"post",
			data: {user:$("#userName").val()}
		}).then(function (data){
			var jsOk = data.isOk;
			if( jsOk ){
				$("#error").text("用户名已经注册");
			}else{
				$("#error").text("可以注册");
				window.open("/student/","_self");
			}
		});
	});;

});
