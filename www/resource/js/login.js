$(function (){
	
	$("#send").click(function(){
		$.ajax({
			url:"login/index/login/",
			type:"post",
			data: {user:$("#userName").val(),password:$("password").val()}
		}).then(function (data){
			var jsOk = JSON.parse(data).isOk;
			if( jsOk ){
				$("#error").text("用户名已经注册");
			}else{
				$("#error").text("可以注册");
				window.open("/","_self");
			}
		});
	});;

});
