var divSend = document.getElementById('div-send');
var divOther = document.getElementById('div-other');
var chatInput = document.getElementById('chat-input');
var btnSend = document.getElementById('btn-send');
var chatList = document.getElementById('chat-list');

chatInput.addEventListener('input', function() {
	if(this.value.trim().length > 0) {
		//隐藏发送按钮  隐藏表情和更多
		setBtnStatus(1);
	} else {
		//隐藏表情和更多  隐藏发送
		setBtnStatus(0);
	}
});

btnSend.addEventListener('tap', function() {
	var msg = chatInput.value.trim();
	if(msg.length > 0) {
		var willSend = '<div class="chat-box chat-box-right mui-content-padded">' +
			'<img src="../../img/avatar.png" class="chat-avatar" />' +
			'<div class="chat-content">' +
			'<div class="chat-content-inner">' +
			msg +
			'</div>' +
			'<div class="chat-content-arrow ">' +
			'</div>' +
			'</div>' +
			'<div class="clear-both"></div>' +
			'</div>';
		newDom = document.createElement('div');
		newDom.innerHTML = willSend;
		chatList.appendChild(newDom);
		
		chatInput.value = '';
		setBtnStatus(0);
		chatList.scrollTop = chatList.scrollHeight - chatInput.offsetHeight;
	}

});


function setBtnStatus(status){
	if(status == 1){
		if(divSend.style.display == 'none') {
			divSend.style.display = 'block';
		}
		if(divOther.style.display == 'block') {
			divOther.style.display = 'none';
		}
	}else if(status == 0){
		if(divSend.style.display == 'block') {
			divSend.style.display = 'none';
		}
		if(divOther.style.display == 'none') {
			divOther.style.display = 'block';
		}
	}
}