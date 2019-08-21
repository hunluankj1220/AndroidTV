/* focus control */

// init focus
var focusFile = true; // 是否在主菜单
var focusPage = false; // 是否在控制翻页上
var focus = '';

// focus active/cancel
function selected () {
	$('#' + focus).addClass('active');
}
function cancel () {
	$('#' + focus).removeClass('active');
}

function pageSelected () {
	$('#' + focus).addClass('page-active');
}
function pageCancel () {
	$('#' + focus).removeClass('page-active');
}

// function up
function doUp () {
	if (focusFile == true && focusPage == false) {
		focusFile = false;
		$('.file-help').addClass('file-lose');
		focus = 'focus1';
		toItem(1);
		selected();
	} else if (focusFile == false && focusPage == true) {
		pageCancel();
		toPage(1);
		focus = 'focus3';
		focusPage = false;
		selected();
	} else if (focusFile == false && focusPage == false) {
		switch (focus) {
			case 'focus1':
			case 'focus2':
			case 'focus3':
			case 'focus4':
				cancel();
				focus = 'focus0';
				toItem(1);
				selected();
				break;
		}
	}
}

// function down
function doDown () {
	if (focusFile == false && focusPage == false) {
		switch (focus) {
			case 'focus0':
				cancel();
				focus = 'focus1';
				selected();
				break;
			case 'focus1':
			case 'focus2':
			case 'focus4':
				cancel();
				focus = '';
				toItem(1);
				focusFile = true;
				$('.file-help').removeClass('file-lose');
				break;
			case 'focus3':
				cancel();
				focus = 'page-num-1';
				focusPage = true;
				pageSelected();
				break;
		}
	} else if (focusFile == false && focusPage == true) {
		switch (focus) {
			case 'page-num-1':
			case 'page-num-2':
			case 'page-num-3':
			case 'page-num-4':
			case 'page-num-5':
				// 进入菜单模式
				pageCancel();
				focusFile = true;
				focusPage = false;
				focus = '';
				$('.file-help').removeClass('file-lose');
				break;
		}
	}
}

// function left
function doLeft () {
	if (focusFile == true) {
		window.location.href = './unsubscribe.html';
	} else if (focusFile == false && focusPage == false) {
		switch (focus) {
			case 'focus2':
				cancel();
				focus = 'focus1';
				toItem(1);
				selected();
				break;
			case 'focus3':
				cancel();
				focus = 'focus2';
				toItem(2);
				selected();
				break;
			case 'focus4':
				cancel();
				focus = 'focus3';
				toItem(3);				
				selected();
				break;
		}
	} else if (focusFile == false && focusPage == true) {
		switch (focus) {
			case 'page-num-2':
				pageCancel();
				focus = 'page-num-1';
				toPage(1);
				pageSelected();
				break;
			case 'page-num-3':
				pageCancel();
				focus = 'page-num-2';
				toPage(2);
				pageSelected();
				break;
			case 'page-num-4':
				pageCancel();
				focus = 'page-num-3';
				toPage(3);
				pageSelected();
				break;
			case 'page-num-5':
				pageCancel();
				focus = 'page-num-4';
				toPage(4);
				pageSelected();
				break;
			// case 'page-num-6':
			// 	pageCancel();
			// 	focus = 'page-num-5';
			// 	toPage(5);
			// 	pageSelected();
			// 	break;
		}
	}
}

// function right
function doRight () {
	// focus not in file
	if (focusFile == false && focusPage == false) {
		switch (focus) {
			case 'focus1':
				cancel();
				focus = 'focus2';
				toItem(2);
				selected();
				break;
			case 'focus2':
				cancel();
				focus = 'focus3';
				toItem(3);
				selected();
				break;
			case 'focus3':
				cancel();
				focus = 'focus4';
				toItem(4);
				selected();
				break;
		}
	} else if (focusFile == false && focusPage == true) {
		switch (focus) {
			case 'page-num-1':
				pageCancel();
				focus = 'page-num-2';
				toPage(2);
				pageSelected();
				break;
			case 'page-num-2':
				pageCancel();
				focus = 'page-num-3';
				toPage(3);
				pageSelected();
				break;
			case 'page-num-3':
				pageCancel();
				focus = 'page-num-4';
				toPage(4);
				pageSelected();
				break;
			case 'page-num-4':
				pageCancel();
				focus = 'page-num-5';
				toPage(5);
				pageSelected();
				break;
			// case 'page-num-5':
			// 	pageCancel();
			// 	focus = 'page-num-6';
			// 	toPage(6);
			// 	pageSelected();
			// 	break;
		}
	}
}

// doEnter
function doEnter () {
	if (focus == 'focus0') {
		window.location.href = './search.html?html=help';
	}
}

// doQuit
function doQuit () {
	if (focusFile) {
		window.location.href = './home.html';
	}
}

/* animate */
function toItem (item) {
	$('.content-wrapper').animate({
		left: (1-item) * 1192 + 'px'
	}, 300);
}

function toPage (page) {
	$('.problem-wrapper').animate({
			left: (1-page) * 1192 + 'px'
	},300);
}




