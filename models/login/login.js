//初始化框架
mui.init();




document.getElementById('btn-login').addEventListener('tap', function() {
	

	//	获取到用户输入的到的账号和密码
	var usernameInput = document.querySelector('input[name="username"]');
	var passwordInput = document.querySelector('input[name="password"]');
	var usernameVal = usernameInput.value;
	var passwordVal = passwordInput.value;
	//非空校验
	if(!usernameVal || !passwordVal) {
		mui.toast("用户名或者密码不能为空");
		return;
	}
	mui(this).button('loading');//切换为loading状态

	mui.ajax('https://ucowoclx.api.lncld.net/1.1/login', {
		data: {
			username: usernameVal,
			password: passwordVal
		},
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型
		timeout: 5000, //超时时间设置为10秒；
		headers: {
			'Content-Type': 'application/json',
			'X-LC-Id':'UcOwoclxPCRsWntsaYFdIXS6-gzGzoHsz',
			'X-LC-Key': 'uQAcSBgREiymWh6cKS4Qhk8d'
		},
		success: function(data) {
			plus.storage.setItem('sesstionToken',data.sessionToken);
			plus.storage.setItem('username',data.username)
//			mui(document.getElementById('btn-login')).button('reset');//切换为reset状态(即重置为原始的button)
			
			mui.toast("登录成功");
			mui.later(function(){
				mui.openWindow({
					url:'../main/main.html', 
					id:'main',
					show:{
						aniShow:'none'
					},
					styles:{
						hardwareAccelerated:true
					}
				});
			},1000);
			//服务器返回响应，根据响应结果，分析是否登录成功；
		},
		error: function(xhr, type, errorThrown) {
			//异常处理；
			mui.toast("用户名或密码错误");
			mui(document.getElementById('btn-login')).button('reset');//切换为reset状态(即重置为原始的button)
			
		}
	});

});