/* focus control */
var focusKeyall = true;
var focusT9 = false;
var focusEdit = false;
var focus = 'key-1';
selected();
var searchText = '';

/* 焦点模式 */
//  *inputModel/输入模式 
// *editModel/编辑模式 
// *tabModel/切换模式 
// *selectModel/搜索选择模式
// *detailModel/详情模式

var focusModel = '';

// key active / cancel
function selected () {
	$('#' + focus).addClass('b-active');
}
function cancel () {
	$('#' + focus).removeClass('b-active');
}
// btn active
function selectedRes () {
	$('#' + focus).addClass('item-active');
}
function cancelRes () {
	$('#' + focus).removeClass('item-active');
}

// doUp 
function doUp () {
	// 全键盘模式
	if (focusKeyall == true && focusT9 == false && focusEdit == false) {
		var curKey = parseInt(focus.split('-')[1]);
		if (curKey > 5) {
			curKey = curKey - 5;
			cancel();
			focus = 'key-' + curKey;
			selected();
		} else {
			// 进入编辑模式
			focusEdit = true;
			focusKeyall = false;
			cancel();
			focus = 'empty';
			selected();
		}
		// 搜索选择模式
	} else if (focusKeyall == false && focusT9 == false && focusEdit == false) {
		var curRes = parseInt(focus.split('-')[1]);
		if (curRes > 1) {
			cancelRes();
			focus = 'res-' + (curRes - 1);
			selectedRes();
			scroll();
		}
	}
}

// doDown
function doDown () {
	// 全键盘模式
	if (focusKeyall == true && focusT9 == false && focusEdit == false) {
		var curKey = parseInt(focus.split('-')[1]);
		if (curKey <= 30) {
			curKey = curKey + 5;
			cancel();
			focus = 'key-' + curKey;
			selected();
		}
	// 编辑模式
	} else if (focusKeyall == false && focusT9 == false && focusEdit == true) {
		cancel();
		focus = 'key-1';
		focusKeyall = true;
		focusEdit = false;
		selected();
	// 搜索选则模式
	} else if (focusKeyall == false && focusT9 == false && focusEdit == false) {
		var curRes = parseInt(focus.split('-')[1]);
		// 如果存在下一个
		if ($('#res-' + (curRes + 1))[0]) {
			cancelRes();
			focus = 'res-' + (curRes + 1);
			// console.log(focus);
			selectedRes();
			scroll();
		} 
	}
}

// doLeft
function doLeft () {
	// 全键盘模式
	if (focusKeyall == true && focusT9 == false && focusEdit == false) {
		var curKey = parseInt(focus.split('-')[1]);
		if (curKey > 1) {
			curKey = curKey -1;
			cancel();
			focus = 'key-' + curKey;
			selected();
		}
	// 编辑模式
	} else if (focusKeyall == false && focusT9 == false && focusEdit == true) {
		switch (focus) {
			case 'empty':
				cancel();
				focus = 'back';
				selected();
				break;
			case 'back':
				cancel();
				focus = 'empty';
				selected();
				break;
		}
		// 搜索选择模式
	} else if (focusKeyall == false && focusT9 == false && focusEdit == false) {
		// 变更为输入模式
		focusKeyall = true;
		cancelRes();
		focus = 'key-5';
		selected();
	}
}

// doRight
function doRight () {
	// 全键盘模式
	if (focusKeyall == true && focusT9 == false && focusEdit == false) {
		var curKey = parseInt(focus.split('-')[1]);
		if (curKey % 5 !== 0) {
			curKey = curKey + 1;
			cancel();
			focus = 'key-' + curKey;
			selected();
		}  else if (curKey % 5 == 0) {
			cancel();
			// 更换到搜索选择模式
			focusKeyall = false;
			focusT9 = false;
			focusEdit = false;
			focus = 'res-1';
			selectedRes();
		}
	// 编辑模式
	} else if (focusKeyall == false && focusT9 == false && focusEdit == true) {
		switch (focus) {
			case 'empty':
				cancel();
				focus = 'back';
				selected();
				break;
			case 'back':
				cancel();
				focus = 'empty';
				selected();
				break;
		}
	}
}

// doEnter
function doEnter () {
	if (focusKeyall == true && focusT9 == false) {
		// 全键盘模式输入
		searchText += $('#' + focus + ' span').html();
		$('.searchText').html(searchText);
	} else if (focusKeyall == false && focusT9 == false && focusEdit == true) {
		switch (focus) {
			case 'empty':
				empty();
				break;
			case 'back':
				back();
				break;
		}
	}
}


/* function */

// 清空搜索框
function empty () {
	searchText = '';
	$('.searchText').html(searchText);
}

// 搜索框回退
function back () {
	searchText = searchText.substring(0,searchText.length-1);
	$('.searchText').html(searchText);
}

// scroll
function scroll () {
	console.log(focus);
	var curRes = parseInt(focus.split('-')[1]);
	if (curRes >= 7) {
		$('.content-inner ul').animate({top: (curRes - 7) * -90 + 'px'}, 200);
	} 
}



