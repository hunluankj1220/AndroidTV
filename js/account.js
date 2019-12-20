/* focus control */
var focusFile = false;
var focus = 'channel-focus1';
var focusMenu = ''; //缓存左侧菜单焦点
// 焦点模式 
// *fileModel *mainModel  *alertModel *confirmModel
focusModel = 'menuModel';
$('#' + focus).addClass('active');
$('#focus00').addClass('active');
channelGetFocus();
$('.channel-active').removeClass('hidden');
// focus active
// function selected() {
// 	$('#' + focus).addClass('active');
// 	$('#focus00').addClass('active');
// }

// function cancel() {
// 	$('#' + focus).removeClass('active');
// }


// focus active / cancel
function selected() {
	switch (focusModel) {
		case 'mainModel':
			var outFocus = focus.split('-')[0] + '-' + focus.split('-')[1];
			$('#' + outFocus).addClass('active');
			$('#' + outFocus + ' .btn-box span').addClass('selected');
			$('#' + focus).addClass('active');
			$('#focus00').addClass('active');
			break;
		case 'detailModel':
			$('#' + detailFocus).addClass('active');
			break;
		case 'listModel':
			$('#' + listFocus).addClass('actives');
			break;
		case 'alertModel':
			$('#' + orderFocus).addClass('order-active');
			break;
	}

}

function cancel() {
	switch (focusModel) {
		case 'mainModel':
			var outFocus = focus.split('-')[0] + '-' + focus.split('-')[1];
			$('#' + outFocus).removeClass('active');
			$('#' + outFocus + ' .btn-box span').removeClass('selected');
			$('#' + focus).removeClass('active');
			break;
		case 'detailModel':
			$('#' + detailFocus).removeClass('active');
			break;
		case 'listModel':
			$('#' + listFocus).removeClass('actives');
			break;
		case 'alertModel':
			$('#' + orderFocus).removeClass('order-active');
			break;
	}
}

// channel get focus
function channelGetFocus() {
	$('#' + focus).addClass('channel-active');
}

// channel lose focus
function channelLoseFoucs() {
	$('#' + focus).removeClass('channel-active');
}

// doUp
function doUp() {
	if (focusModel == 'menuModel') {
		switch (focus) {
			case 'channel-focus1':
				//2019-12-12
				cancel()
				channelLoseFoucs();
				focus = 'focus0';
				$('.channel-active').addClass('hidden');
				// 变为主菜单模式
				focusModel = 'mainModel';
				selected();
				break;
			case 'channel-focus2':
				channelLoseFoucs();
				focus = 'channel-focus1';
				$("#accounts").show();//显示
				$("#wximg").show();//显示
				$("#orderlist").attr("style", "display:none");
				channelGetFocus();
				infoLoading();
				getInfo();
				setQuitToAndr('false');
				break;
		}
	} else if (focusModel == 'mainModel') {
		switch (focus) {
			case 'focus1':
				// 变为主菜单模式
				cancel();
				channelLoseFoucs();
				$('.channel-active').addClass('hidden');
				$('#' + focusMenu).removeClass('channel-cash');
				focus = 'focus0';
				selected();
				break;
		}
	}
}

// doDown 
function doDown() {
	// 主模式
	if (focusModel == 'mainModel') {
		switch (focus) {
			case 'focus0':
			case 'focus01':
				// 变为左侧菜单模式
				$("#accounts").show();//显示
				$("#wximg").show();//显示
				$("#orderlist").attr("style", "display:none");
				focusModel = 'menuModel';
				$('.channel-active').removeClass('hidden');
				focus = 'channel-focus1';
				channelGetFocus()
				// 加载中
				infoLoading();
				getInfo();
				setQuitToAndr('false');
				break;
			case 'focus1':
				cancel()
				channelLoseFoucs();
				focus = 'focus0';
				$('.channel-active').addClass('hidden');
				$('#' + focusMenu).removeClass('channel-cash');
				// 变为主菜单模式
				focusModel = 'mainModel';
				selected();
				break;
		}
		// 左侧菜单模式
	} else if (focusModel == 'menuModel') {
		switch (focus) {
			case 'channel-focus1':
				channelLoseFoucs();
				focus = 'channel-focus2';
				$("#orderlist").show();//显示
				$("#accounts").attr("style", "display:none");
				$("#wximg").attr("style", "display:none");
				channelGetFocus();
				infoLoading();
				getInfo();
				setQuitToAndr('false');
				break;
			case 'channel-focus2':
				// 变为主菜单模式
				$('#' + focusMenu).removeClass('channel-cash');
				channelLoseFoucs();
				focus = 'focus00';
				$('.channel-active').addClass('hidden');
				// 变为主菜单模式
				focusModel = 'mainModel';
				break;
		}
		// 主模式
	}
}

// doEnter
function doEnter() {
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
function doRight() {
	if (focusModel == 'menuModel') {
		// 变为主模式
		if (focus == 'channel-focus1') {
			focusMenu = focus;
			channelLoseFoucs();
			$('#' + focus).removeClass('channel-active').addClass('channel-cash');
			focusModel = 'mainModel';
			focus = 'focus1';
			selected();
		}
		// 主模式
	} else if (focusModel == 'mainModel') {
		if (focus == 'focus0') {
			cancel();
			focus = 'focus01';
			selected();
		} else if (focus == 'focus01') {
			cancel();
			focus = 'focus0';
			selected();
		}
	}
}

// doQuit
function doQuit() {
	if (focusFile) {
		window.location.href = './home.html';
	}
}

// doLeft
function doLeft() {
	if (focusFile) {
		window.location.href = './charge.html';
	} else if (focus == 'focus0') {
		cancel();
		focus = 'focus01';
		selected();
	} else if (focus == 'focus01') {
		cancel();
		focus = 'focus0';
		selected();
	}
}
// doEnter
function doEnter() {
	if (focus == 'focus0') {
		window.location.href = './search.html?html=account';
	} else if (focus == 'focus01') {
		window.location.href = './help.html?html=account';
	}
}

/* function */

// 信息加载中
function infoLoading() {
	$('.account-text li').css({
		opacity: 0
	});
	loading();
}

// 信息加载完毕
function infoLoaded() {
	$('.account-text li').css({
		opacity: 1
	});
	loaded();
}

/* 数据加载 */
$(function () {
	// 加载中
	infoLoading();
	getInfo();
	// getCardRolls();
	setQuitToAndr('false');
});

// 从主模式变为主菜单模式
function mainToFile() {
	cancel();
	focus = '';
	curPage = 1;
	// 变为主菜单模式
	$('#' + focusMenu).removeClass('channel-cash');
	focusMenu = '';
	// 变为主菜单模式
	focusModel = 'fileModel';
	$('.file-order').removeClass('file-lose');
}

/***
 * 已订产品
 */
// toPage
function toPage(page) {
	curPage = page;
	$('.content-inner').animate({
		left: (1 - page) * 1086 + 'px'
	}, 300, function () {
		// console.log('ok');
	});
}

// 展示详情弹框
function detailShow() {
	$('.orderDetail').addClass('orderDetailShow');
	$('.orders').addClass('orderShow');
}
// 关闭详情弹框
function detailClose() {
	$('.orderDetail').removeClass('orderDetailShow');
	$('.orders').removeClass('orderShow');
}

// 展示确认弹框
function boxShow() {
	$('.modelOver').addClass('modelShow');
	$('.alertBox').addClass('alertShow');
}
// 关闭确认弹框
function boxClose() {
	$('.modelOver').removeClass('modelShow');
	$('.alertBox').removeClass('alertShow');
}

/* 数据加载 */
// $(function () {
// 	ordersLoading();
// 	initOrders();
// 	// 向安卓传递数据
// 	setQuitToAndr('false');
// });
// ordersLoading
function ordersLoading() {
	loading();
}

// 判断是否展示退订按钮
function judgeTdBtn(item) {
	if (item.state == '到期暂停' && item.goodsname !== '单向基本包') {
		return 'inline-block';
	} else {
		return 'none';
	}
}
// 封装模板
function initTemp(pages, counts, lists) {
	totalPage = pages;
	$('#orders').css('width', 1086 * pages + 'px');
	var html = '';
	// 多页时
	if (pages > 1) {
		for (var i = 1; i <= pages; i++) {
			if (i == 1) {
				html += '<ul class="clear page">'
				for (var j = (i - 1) * 6; j < i * 6; j++) {
					html += '<li id="page' + i + '-focus' + (j + 1 - (6 * (i - 1))) + '" proId="' + lists[j].productId + '" data-code="' + lists[j].goodscode + '" proState="' + lists[j].state + '" class="item">'
						+ '<p class="title">' + lists[j].goodsname + '</p>'
						+ '<p class="time">'
						+ '<span>到期日期</span>'
						+ '<span class="endTime">' + lists[j].enddate + '</span>'
						+ '</p>'
						+ '<div class="btn-box">'
						+ '<span id="page' + i + '-focus' + (j + 1 - (6 * (i - 1))) + '-l' + '" class="xudingBtn noselected">续订</span>'
						+ '<span style="display: ' + judgeTdBtn(lists[j]) + '" id="page' + i + '-focus' + (j + 1 - (6 * (i - 1))) + '-r' + '"  class="tuidingBtn noselected">退订</span>'
						+ '</div>'
						+ '</li>';
				}
				html += '</ul>';
			} else if (i > 1 && i < pages) {
				html += '<ul class="clear page">'
				for (var j = (i - 1) * 6; j < i * 6; j++) {
					html += '<li id="page' + i + '-focus' + (j + 1 - (6 * (i - 1))) + '" proId="' + lists[j].productId + '" data-code="' + lists[j].goodscode + '" proState="' + lists[j].state + '" class="item">'
						+ '<p class="title">' + lists[j].goodsname + '</p>'
						+ '<p class="time">'
						+ '<span>到期日期</span>'
						+ '<span class="endTime">' + lists[j].enddate + '</span>'
						+ '</p>'
						+ '<p class="btn-box">'
						+ '<span id="page' + i + '-focus' + (j + 1 - (6 * (i - 1))) + '-l' + '" class="xudingBtn noselected">续订</span>'
						+ '<span style="display: ' + judgeTdBtn(lists[j]) + '" id="page' + i + '-focus' + (j + 1 - (6 * (i - 1))) + '-r' + '"  class="tuidingBtn noselected">退订</span>'
						+ '</p>'
						+ '</li>';
				}
				html += '</ul>';
			} else if (i == pages) {
				html += '<ul class="clear page">'
				for (var j = (i - 1) * 6; j < counts; j++) {
					html += '<li id="page' + i + '-focus' + (j + 1 - (pages - 1) * 6) + '" proId="' + lists[j].productId + '" data-code="' + lists[j].goodscode + '" proState="' + lists[j].state + '" class="item">'
						+ '<p class="title">' + lists[j].goodsname + '</p>'
						+ '<p class="time">'
						+ '<span>到期日期</span>'
						+ '<span class="endTime">' + lists[j].enddate + '</span>'
						+ '</p>'
						+ '<p class="btn-box">'
						+ '<span id="page' + i + '-focus' + (j + 1 - (6 * (i - 1))) + '-l' + '" class="xudingBtn noselected">续订</span>'
						+ '<span style="display: ' + judgeTdBtn(lists[j]) + '" id="page' + i + '-focus' + (j + 1 - (6 * (i - 1))) + '-r' + '"  class="tuidingBtn noselected">退订</span>'
						+ '</p>'
						+ '</li>';
				}
				html += '</ul>';
			}
		}
		// 只有一页时
	} else if (pages == 1) {
		html += '<ul class="clear page">'
		for (var i = 0; i < counts; i++) {
			html += '<li id="page1-focus' + (i + 1) + '" proId="' + lists[i].productId + '" proState="' + lists[i].state + '" data-code="' + lists[i].goodscode + '" class="item">'
				+ '<p class="title">' + lists[i].goodsname + '</p>'
				+ '<p class="time">'
				+ '<span>到期日期</span>'
				+ '<span>' + lists[i].enddate + '</span>'
				+ '</p>'
				+ '<p class="btn-box">'
				+ '<span id="page1-focus' + (i + 1) + '-l' + '" class="xudingBtn noselected">续订</span>'
				+ '<span style="display: ' + judgeTdBtn(lists[i]) + '" id="page1-focus' + (i + 1) + '-r' + '"  class="tuidingBtn noselected">退订</span>'
				+ '</p>'
				+ '</li>';
		}
	}
	// 向页面填充数据
	$('#orders').html(html);
}

// 没有预定产品
function noOrders() {
	var text = '<div class="noOrders">';
	text += '<img src="./images/error.png">';
	text += '<p class="noOrders-text">您当前没有订购任何产品</p>';
	text += '</div>';
	$('#orders').html(text);
}

// 翻页填充
function initPage(page, list) {
	for (var i = 0; i < list.length; i++) {
		$('#page' + page + '-focus' + (i + 1) + ' .title').html(list[i].goodsname);
		$('#page' + page + '-focus' + (i + 1) + ' .endTime').html(list[i].enddate);
		$('#page' + page + '-focus' + (i + 1)).attr('data-code', list[i].goodscode);
		$('#page' + page + '-focus' + (i + 1)).attr('proId', list[i].productId);
		$('#page' + page + '-focus' + (i + 1)).attr('proState', list[i].state);
		if (list.state == '到期暂停' && list.goodsname !== '单项基本包') {
			// $('#page' + page + '-focus' + (i+1) + '-r').attr('css', 'diblock');
		} else {
			$('#page' + page + '-focus' + (i + 1) + '-r').css('display', 'none');
		}

	}
}

// 续订详情模板
function initOrderDetail(list) {
	var html = '<ul class="orders">';
	for (var i = 0; i < list.length; i++) {
		html += '<li id="order-' + (i + 1) + '" class="order-item" data-goodsid="' + list[i].goodsid + '" data-orderid="">'
			+ '<div>'
			+ '<img class="good-pic" src="' + list[i].picture + '">'
			+ '<span class="good-name">' + list[i].goodsname + '</span>'
			+ '<span class="good-price yellow">' + orderFlag + ' :' + list[i].skudesc + '</span>'
			+ '</div>'
			+ '</li>'
	}
	html += '</ul>';
	$('#orderDetail').html(html);
}

// 续订详情查询失败
function noOrderDetail() {
	var text = '<p class="orders noDetail">该商品可能已下架</p>';
	$('#orderDetail').html(text);
}

// // 页面加载完成后
// window.onload = function () {
// 	// 0.5秒后调用 doUp
// 	setTimeout(doUp, 500)
// }





