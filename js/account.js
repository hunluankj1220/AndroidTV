/* focus control */
var focusFile = true;
var focus = '';

// focus active
function selected () {
	$('#' + focus).addClass('active');
}

function cancel () {
	$('#' + focus).removeClass('active');
}


// doUp
function doUp () {
	if (focusFile == true) {
		focusFile = false;
		$('.file-account').addClass('file-lose');
		focus = 'focus1';
		selected();
	} else {
		switch (focus) {
			case 'focus1':
				cancel();
				focus = 'focus0';
				selected();
				break;
		}
	}
}

// doDown 
function doDown () {
	if (focusFile == false) {
		switch (focus) {
			case 'focus0':
				cancel();
				focus = 'focus1';
				selected();
				break;
			case 'focus1':
				cancel();
				focusFile = true;
				$('.file-account').removeClass('file-lose');
				focus = '';
				break;
		}
	}
}

// doEnter
function doEnter () {
	switch (focus) {
		case 'focus0':
			window.location.href = './search.html?html=account';
			break;
		case 'focus1':
			window.location.href = './charge.html';
			break;
	}
}

// doRight 
function doRight () {
	if (focusFile) {
		window.location.href = './charge.html';
	}
}

// doQuit
function doQuit () {
	if (focusFile) {
		window.location.href = './home.html';
	}
}

// doLeft
function doLeft () {
	if (focusFile) {
		window.location.href = './home.html';
	}
}

/* function */

// 信息加载中
function infoLoading () {
	$('.account-text li').css({
		opacity: 0
	});
	loading();
}

// 信息加载完毕
function infoLoaded () {
	$('.account-text li').css({
		opacity: 1
	});
	loaded();
}

/* 数据加载 */
$(function(){
	// 加载中
	infoLoading();
	getInfo();
	// getCardRolls();
	setQuitToAndr('false');
});







