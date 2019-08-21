/* focus-control */

/* 焦点模式 */
// *fileModel/主菜单模式 *menuModel/左侧菜单模式 *mainModel/主模式 *listModel/列表模式 */detailModel
var focusModel = 'fileModel';
// init focus
var focusFile = true;
var focusDetail = false;
var detailFocus = '';
var focusGoods = false;
var focus = '';
var curPage = 1;
var totalPage = 2;
var focusMenu = ''; //缓存左侧菜单焦点


// channel get focus
function channelGetFocus () {
	focusMenu = focus;
	var top = 90;
	var focusNum = parseInt(focus.slice(-1));
	if (focusNum == 1) {
		$('#'+focus).addClass('active-color');
	}
	var unActiveClass = $('#' + focus + ' .label').attr('class').split(' ')[1];
	$('#' + focus + ' .label').addClass(unActiveClass + '-active');
	
	$('.channel-active').animate({
		top: top*(focusNum-1) + 'px'
	}, 'fast', function(){
		$('#'+focus).addClass('active-color');
	});
}

// channel lose focus
function channelLoseFoucs () {
	$('#'+focus).removeClass('active-color');
	var activeClass = $('#' + focus + ' .label').attr('class').split(' ')[2];
	$('#' + focus + ' .label').removeClass(activeClass);
}

// good active/cancel
function selected () {
	$('#' + focus).addClass('active');
}

function cancel () {
	$('#' + focus).removeClass('active');
}


// doUp 
function doUp () {
	if (focusFile) {
		focusFile = false;
		$('.file-goods').addClass('file-lose');
		$('.channel-active').removeClass('hidden');
		focus = 'channel-focus1';
		channelGetFocus();
	} else if (focusFile == false && focusDetail == false && focusGoods == false) {
		switch (focus) {
			case 'channel-focus2':
				channelLoseFoucs();
				focus = 'channel-focus1';
				channelGetFocus();
				break;
			case 'channel-focus3':
				channelLoseFoucs();
				focus = 'channel-focus2';
				channelGetFocus();
				break;
			case 'channel-focus4':
				channelLoseFoucs();
				focus = 'channel-focus3';
				channelGetFocus();
				break;
			case 'channel-focus5':
				channelLoseFoucs();
				focus = 'channel-focus4';
				channelGetFocus();
				break;
			case 'channel-focus6':
				channelLoseFoucs();
				focus = 'channel-focus5';
				channelGetFocus();
				break;
		}
	} else if (focusFile == false && focusDetail == false && focusGoods == true) {
		switch (focus) {
			case 'page' + curPage + '-focus4':
				if (hasGood('focus1')) {
					cancel();
					focus = 'page' + curPage + '-focus1';
					selected();
				}
				break;
			case 'page' + curPage + '-focus5':
				if (hasGood('focus2')) {
					cancel();
					focus = 'page' + curPage + '-focus2';
					selected();
				}
				break;
			case 'page' + curPage + '-focus6':
				if (hasGood('focus3')) {
					cancel();
					focus = 'page' + curPage + '-focus3';
					selected();
				}
				break;
		}
	}
}

// doDown 
function doDown () {
	if (focusFile == false && focusDetail == false && focusGoods == false) {
		switch (focus) {
			case 'channel-focus1':
				channelLoseFoucs();
				focus = 'channel-focus2';
				channelGetFocus();
				break;
			case 'channel-focus2':
				channelLoseFoucs();
				focus = 'channel-focus3';
				channelGetFocus();
				break;
			case 'channel-focus3':
				channelLoseFoucs();
				focus = 'channel-focus4';
				channelGetFocus();
				break;
			case 'channel-focus4':
				channelLoseFoucs();
				focus = 'channel-focus5';
				channelGetFocus();
				break;
			case 'channel-focus5':
				channelLoseFoucs();
				focus = 'channel-focus6';
				channelGetFocus();
				break;
			case 'channel-focus6':
				channelLoseFoucs();
				focus = '';
				$('.channel-active').addClass('hidden');
				focusFile = true;
				$('.file-goods').removeClass('file-lose');
				break;
		}
	} else if (focusFile == false && focusDetail == false && focusGoods == true) {
		switch (focus) {
			case 'page' + curPage + '-focus1':
				if (hasGood('focus4')) {
					cancel();
					focus = 'page' + curPage + '-focus4';
					selected();
				}
				break;
			case 'page' + curPage + '-focus2':
				if (hasGood('focus5')) {
					cancel();
					focus = 'page' + curPage + '-focus5';
					selected();
				}
				break;
			case 'page' + curPage + '-focus3':
				if (hasGood('focus6')) {
					cancel();
					focus = 'page' + curPage + '-focus6';
					selected();
				}
				break;
			
		}
	}
}

// doLeft 
function doLeft () {
	if (focusFile) {
		window.location.href = './charge.html';
	} else if (focusFile == false && focusDetail == false && focusGoods == true) {
		switch (focus) {
			case 'page' + curPage + '-focus1':
				// 判断是否进入上页
				if (curPage > 1) {
					cancel();
					// 进入下页
					toPage(curPage-1);
					focus = 'page' + curPage + '-focus1';
					selected();
				} else {
					cancel();
					// 进入左侧菜单
					focusGoods = false;
					focus = focusMenu;
					channelGetFocus();
					$('.channel-active').removeClass('hidden');
				}
				break;
			case 'page' + curPage + '-focus2':
				if (hasGood('focus1')) {
					cancel();
					focus = 'page' + curPage + '-focus1';
					selected();
				}
				break;
			case 'page' + curPage + '-focus3':
				if (hasGood('focus2')) {
					cancel();
					focus = 'page' + curPage + '-focus2';
					selected();
				}
				break;
			case 'page' + curPage + '-focus4':
				// 判断是否进入上页
				if (curPage > 1) {
					cancel();
					toPage(curPage-1);
					focus = 'page' + curPage + '-focus1';
					selected();
				} else {
					if (hasGood('focus3')) {
						cancel();
						focus = 'page' + curPage + '-focus3';
						selected();
					}
				}
				break;
			case 'page' + curPage + '-focus5':
				if (hasGood('focus4')) {
					cancel();
					focus = 'page' + curPage + '-focus4';
					selected();
				}
				break;
			case 'page' + curPage + '-focus6':
				if (hasGood('focus5')) {
					cancel();
					focus = 'page' + curPage + '-focus5';
					selected();
				}
				break;
		}
	} else if (focusFile == false && focusDetail == true && focusGoods == false) {
		switch (detailFocus) {
			case 'order':
				dCancel();
				detailFocus = 'cancel';
				dSelected();
				break;
			case 'cancel':
				dCancel();
				detailFocus = 'order';
				dSelected();
				break;
		}
	}
}

// doRight
function doRight () {
	if (focusFile) {
		window.location.href = './order.html';
	} else if (focusFile == false && focusDetail == false && focusGoods == false) {
		$('.channel-active').addClass('hidden');
		channelLoseFoucs();
		focusGoods = true;
		focus = 'page1-focus1';
		selected();
	} else if (focusFile == false && focusDetail == false && focusGoods == true) {
		switch (focus) {
			case 'page' + curPage + '-focus1':
				if (hasGood('focus2')) {
					cancel();
					focus = 'page' + curPage + '-focus2';
					selected();
				}
				break;
			case 'page' + curPage + '-focus2':
				if (hasGood('focus3')) {
					cancel();
					focus = 'page' + curPage + '-focus3';
					selected();
				}
				break;
			case 'page' + curPage + '-focus3':
				// 判断是否进行翻页
				if (curPage < totalPage) {
					cancel();
					// 进入下页
					toPage(curPage + 1);
					focus = 'page' + curPage + '-focus1';
					selected();
				} else {
					// 不进行翻页
					if (hasGood('focus4')) {
						cancel();
						focus = 'page' + curPage + '-focus4';
						selected();
					}
				}
				break;
			case 'page' + curPage + '-focus4':
				if (hasGood('focus5')) {
					cancel();
					focus = 'page' + curPage + '-focus5';
					selected();
				}
				break;
			case 'page' + curPage + '-focus5':
				if (hasGood('focus6')) {
					cancel();
					focus = 'page' + curPage + '-focus6';
					selected();
				}
				break;
			case 'page' + curPage + '-focus6':
				// 判断是否翻页
				if (curPage < totalPage) {
					cancel();
					// 进入下页
					toPage(curPage + 1);
					focus = 'page' + curPage + '-focus1';
					selected();
				}
				break;	
		}
	} else if (focusFile == false && focusDetail == true && focusGoods == false) {
		switch (detailFocus) {
			case 'order':
				dCancel();
				detailFocus = 'cancel';
				dSelected();
				break;
			case 'cancel':
				dCancel();
				detailFocus = 'order';
				dSelected();
				break;
		}
	}
}

// doEnter
function doEnter () {
	if (focusFile == false && focusGoods == true && focusDetail == false) {
		// 展示详情弹框
		focusDetail = true;
		focusGoods = false;
		showDetail();
		detailFocus = 'order';
		dSelected();
	} else if (focusFile == false && focusGoods == false && focusDetail == true) {
		switch (detailFocus) {
			case 'order':
				alert('order');
				break;
			case 'cancel':
				// 关闭弹框
				dCancel();
				focusDetail = false;
				focusGoods = true;
				hideDetail();
				break;
		}
	}
}


/* function */
// toPage
function toPage (page) {
	curPage = page;
	$('.content-inner').animate({
		left: (1-page) * 1326 + 'px'
	},300, function() {
		console.log('ok');
	});
}


