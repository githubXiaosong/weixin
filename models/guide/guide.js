document.getElementById('btn-start').addEventListener('tap', function() {
	mui.openWindow({
		url:'../login/login.html',
		id:'login',
		style:{
			popGesture:'none'
		},
		show:{
			aniShow:'none'
		}
	});
	plus.storage.setItem('launchFlag','true');
});
	
