$(function (){
	
	$("#send").click(function(){
		console.log( 123 );
		$.ajax({
			url:"login/index/login/",
			type:"post",
			data: {user:$("#userName").val(),password:$("password").val()}
		}).then(function (data){
			var jsOk = JSON.parse(data).isOk;
			console.log( jsOk );
			if( jsOk ){
				$("#error").text("用户名已经注册");
			}else{
				$("#error").text("可以注册");
				window.open("/","_self");
			}
		});
	});;

});
