
var loginWv;
mui.later(function(){
	loginWv= plus.webview.getLaunchWebview();
},200);


mui('body').on('tap', '.mui-popover-action li>a', function() {
	
		var a = this,
			parent;
		//根据点击按钮，反推当前是哪个actionsheet
		for (parent = a.parentNode; parent != document.body; parent = parent.parentNode) {
			if (parent.classList.contains('mui-popover-action')) {
				break;
			}
		}
		//关闭actionsheet
		mui('#' + parent.id).popover('toggle');
		if(a.id == 'login-out'){
			localStorage.removeItem('sesstionToken');
			localStorage.removeItem('username');
			
			
			loginWv.show();
			
			//由于所有的页面都依托于这个界面 所以只要关闭 main 即可
			plus.webview.close('main','none');
			plus.webview.close('setting','none');
		}
		
	})