/* focus control
   修改：wusiliang
   日期：2019-12
 */

// 焦点模式 
// *fileModel *mainModel  *alertModel *confirmModel
focusModel = 'fileModel';
// init focus
var orderFocus = '';
var focus = '';
var curPage = 1;
var totalPage = 2;
// init focus
var detailFocus = '';
var listFocus = '';
// 退订或续订 Flag
var orderFlag = '';
var tuidingFlag = '';
var focusMenu = ''; //缓存左侧菜单焦点
// channel get focus
function channelGetFocus() {
	$('#' + focus).addClass('channel-active');
}

// channel lose focus
function channelLoseFoucs() {
	$('#' + focus).removeClass('channel-active');
}
// focus active / cancel
function selected() {
	switch (focusModel) {
		case 'mainModel':
			var outFocus = focus.split('-')[0] + '-' + focus.split('-')[1];
			$('#' + outFocus).addClass('active');
			$('#' + outFocus + ' .btn-box span').addClass('selected');
			$('#' + focus).addClass('active');
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
// goods loading
function goodsLoading() {
	$('#orders').css('width', '100%').html('');
	loading();
}
// doUp
function doUp() {
	// 主菜单模式
	if (focusModel == 'fileModel') {
		//2019-12-12
		channelLoseFoucs();
		// 变为主模式
		focusModel = 'mainModel';
		$('.file-order').addClass('file-lose');
		$('#' + focusMenu).removeClass('channel-cash');
		focus = 'focus00';
		focusMenu = '';
		selected();
		// 左侧菜单模式
	} else if (focusModel == 'menuModel') {
		switch (focus) {
			case 'channel-focus1':
				//2019-12-12
				channelLoseFoucs();
				focus = '';
				$('.channel-active').addClass('hidden');
				// 变为主菜单模式
				focusModel = 'fileModel';
				$('.file-order').removeClass('file-lose');
				break;
			case 'channel-focus2':
				channelLoseFoucs();
				focus = 'channel-focus1';
				channelGetFocus();
				ordersLoading();
				initOrders();
				break;
		}
		// 主模式
	} else if (focusModel == 'mainModel') {
		switch (focus) {
			case 'page' + curPage + '-focus1-l':
			case 'page' + curPage + '-focuss1-l':
			case 'page' + curPage + '-focus1-r':
			case 'page' + curPage + '-focus2-l':
			case 'page' + curPage + '-focuss2-l':
			case 'page' + curPage + '-focus2-r':
			case 'page' + curPage + '-focus3-l':
			case 'page' + curPage + '-focuss3-l':
			case 'page' + curPage + '-focus3-r':
				// cancel();
				// focus = 'focus0';
				// selected();
				mainToFile();

				break;
			case 'page' + curPage + '-focus4-l':
			case 'page' + curPage + '-focuss4-l':
			case 'page' + curPage + '-focus4-r':
				if (hasGood('focus1')) {
					cancel();
					focus = 'page' + curPage + '-focus1-l';
					selected();
				} else if (hasGood('focuss1')) {
					cancel();
					focus = 'page' + curPage + '-focuss1-l';
					selected();
				}
				break;
			case 'page' + curPage + '-focus5-l':
			case 'page' + curPage + '-focuss5-l':
			case 'page' + curPage + '-focus5-r':
				if (hasGood('focus2')) {
					cancel();
					focus = 'page' + curPage + '-focus2-l';
					selected();
				} else if (hasGood('focuss2')) {
					cancel();
					focus = 'page' + curPage + '-focuss2-l';
					selected();
				}
				break;
			case 'page' + curPage + '-focus6-l':
			case 'page' + curPage + '-focuss6-l':
			case 'page' + curPage + '-focus6-r':
				if (hasGood('focus3')) {
					cancel();
					focus = 'page' + curPage + '-focus3-l';
					selected();
				} else if (hasGood('focuss3')) {
					cancel();
					focus = 'page' + curPage + '-focuss3-l';
					selected();
				}
				break;
		}
		// 弹框模式
	} else if (focusModel == 'alertModel') {
		switch (orderFocus) {
			case 'order-2':
				if (hasList('order-1')) {
					cancel();
					orderFocus = 'order-1';
					selected();
				}
				break;
			case 'order-3':
				if (hasList('order-2')) {
					cancel();
					orderFocus = 'order-2';
					selected();
				}
				break;
			case 'order-4':
				if (hasList('order-3')) {
					cancel();
					orderFocus = 'order-3';
					selected();
				}
				break;
			case 'order-5':
				if (hasList('order-4')) {
					cancel();
					orderFocus = 'order-4';
					selected();
				}
				break;
		}
	}
}

// doLeft 
function doLeft() {
	// 菜单模式
	if (focusModel == 'fileModel') {
		window.location.href = './charge.html';
		// 主模式
	} else if (focusModel == 'mainModel') {
		switch (focus) {
			case 'focus01':
				cancel();
				$('.file-order').addClass('file-lose'); //给.file-home添加一个类file-lose
				focus = 'focus0';
				selected();
				break;
			case 'focus0':
				cancel();
				$('.file-order').addClass('file-lose'); //给.file-home添加一个类file-lose
				focus = 'focus00';
				selected();
				break;
			case 'focus00':
				cancel();
				$('.file-order').addClass('file-lose'); //给.file-home添加一个类file-lose
				focus = 'focus01';
				selected();
				break;
			case 'page' + curPage + '-focus1-l':
				// 判断是否翻页
				if (curPage > 1) {
					// 向上翻页
					cancel();
					toPage(curPage - 1);
					focus = 'page' + curPage + '-focus1-l';
					selected();
				} else {
					cancel();
					// 变为左侧菜单模式
					focusModel = 'menuModel';
					focus = focusMenu;
					$('#' + focus).removeClass('channel-cash');
					channelGetFocus();
				}
				break;
			case 'page' + curPage + '-focus1-r':
				cancel();
				focus = 'page' + curPage + '-focus1-l';
				selected();
				break;
			case 'page' + curPage + '-focus2-l':
				if (hasGood('focus1')) {
					cancel();
					focus = 'page' + curPage + '-focus1-l';
					selected();
				}
				break;
			case 'page' + curPage + '-focus2-r':
				cancel();
				focus = 'page' + curPage + '-focus2-l';
				selected();
				break;
			case 'page' + curPage + '-focus3-l':
				if (hasGood('focus2')) {
					cancel();
					focus = 'page' + curPage + '-focus2-l';
					selected();
				}
				break;
			case 'page' + curPage + '-focus3-r':
				cancel();
				focus = 'page' + curPage + '-focus3-l';
				selected();
				break;
			case 'page' + curPage + '-focus4-l':
				// 判断是否翻页
				if (curPage > 1) {
					// 向上翻页
					cancel();
					toPage(curPage - 1);
					focus = 'page' + curPage + '-focus1-l';
					selected();
				} else {
					if (hasGood('focus3')) {
						cancel();
						focus = 'page' + curPage + '-focus3-l';
						selected();
					}
				}
				break;
			case 'page' + curPage + '-focus4-r':
				cancel();
				focus = 'page' + curPage + '-focus4-l';
				selected();
				break;
			case 'page' + curPage + '-focus5-l':
				if (hasGood('focus4')) {
					cancel();
					focus = 'page' + curPage + '-focus4-l';
					selected();
				}
				break;
			case 'page' + curPage + '-focus5-r':
				cancel();
				focus = 'page' + curPage + '-focus5-l';
				selected();
				break;
			case 'page' + curPage + '-focus6-l':
				if (hasGood('focus5')) {
					cancel();
					focus = 'page' + curPage + '-focus5-l';
					selected();
				}
				break;
			case 'page' + curPage + '-focus6-r':
				cancel();
				focus = 'page' + curPage + '-focus6-l';
				selected();
				break;
			//退订记录
			case 'page' + curPage + '-focuss1-l':
				// 判断是否翻页
				if (curPage > 1) {
					// 向上翻页
					cancel();
					toPage(curPage - 1);
					focus = 'page' + curPage + '-focuss1-l';
					selected();
				} else {
					cancel();
					// 变为左侧菜单模式
					focusModel = 'menuModel';
					focus = focusMenu;
					$('#' + focus).removeClass('channel-cash');
					channelGetFocus();
				}
				break;
			case 'page' + curPage + '-focuss2-l':
				if (hasGood('focuss1')) {
					cancel();
					focus = 'page' + curPage + '-focuss1-l';
					selected();
				}
				break;
			case 'page' + curPage + '-focuss3-l':
				if (hasGood('focuss2')) {
					cancel();
					focus = 'page' + curPage + '-focuss2-l';
					selected();
				}
				break;
			case 'page' + curPage + '-focuss4-l':
				// 判断是否翻页
				if (curPage > 1) {
					// 向上翻页
					cancel();
					toPage(curPage - 1);
					focus = 'page' + curPage + '-focuss1-l';
					selected();
				} else {
					if (hasGood('focuss3')) {
						cancel();
						focus = 'page' + curPage + '-focuss3-l';
						selected();
					}
				}
				break;
			case 'page' + curPage + '-focuss5-l':
				if (hasGood('focuss4')) {
					cancel();
					focus = 'page' + curPage + '-focuss4-l';
					selected();
				}
				break;
			case 'page' + curPage + '-focuss6-l':
				if (hasGood('focuss5')) {
					cancel();
					focus = 'page' + curPage + '-focuss5-l';
					selected();
				}
				break;
		}
	}
}

function judgebtn_r(focus) {
	if ($('#' + focus).css('display') == 'none') {
		return false;
	} else {
		return true;
	}
}

// doRight 
function doRight() {
	// 菜单模式
	if (focusModel == 'fileModel') {
		// window.location.href = './unsubscribe.html';
		// 主模式
	} else if (focusModel == 'menuModel') {
		// 变为主模式
		if ($('#orders .noOrders')[0] == undefined && focus == 'channel-focus1') {
			focusMenu = focus;
			channelLoseFoucs();
			$('#' + focus).removeClass('channel-active').addClass('channel-cash');
			focusModel = 'mainModel';
			focus = 'page1-focus1-l';
			selected();
		} else {
			focusMenu = focus;
			channelLoseFoucs();
			$('#' + focus).removeClass('channel-active').addClass('channel-cash');
			focusModel = 'mainModel';
			focus = 'page1-focuss1-l';
			selected();
		}
		// 主模式
	} else if (focusModel == 'mainModel') {
		switch (focus) {
			case 'focus00':
				cancel();
				$('.file-order').addClass('file-lose'); //给.file-home添加一个类file-lose
				focus = 'focus0';
				selected();
				break;
			case 'focus0':
				cancel();
				$('.file-order').addClass('file-lose'); //给.file-home添加一个类file-lose
				focus = 'focus01';
				selected();
				break;
			case 'focus01':
				cancel();
				$('.file-order').addClass('file-lose'); //给.file-home添加一个类file-lose
				focus = 'focus00';
				selected();
				break;
			case 'page' + curPage + '-focus1-l':
				// 判断续订按钮是否存在是否存在
				if (judgebtn_r('page' + curPage + '-focus1-r')) {
					// 存在
					cancel();
					focus = 'page' + curPage + '-focus1-r';
					selected();
				} else {
					// 不存在 判断下一个模块是否存在
					if (hasGood('focus2')) {
						cancel();
						focus = 'page' + curPage + '-focus2-l';
						selected();
					}
				}
				break;
			case 'page' + curPage + '-focus1-r':
				if (hasGood('focus2')) {
					cancel();
					focus = 'page' + curPage + '-focus2-l';
					selected();
				}
				break;
			case 'page' + curPage + '-focus2-l':
				if (judgebtn_r('page' + curPage + '-focus2-r')) {
					// 存在
					cancel();
					focus = 'page' + curPage + '-focus2-r';
					selected();
				} else {
					// 不存在 判断下一个模块是否存在
					if (hasGood('focus3')) {
						cancel();
						focus = 'page' + curPage + '-focus3-l';
						selected();
					}
				}
				break;
			case 'page' + curPage + '-focus2-r':
				if (hasGood('focus3')) {
					cancel();
					focus = 'page' + curPage + '-focus3-l';
					selected();
				}
				break;
			case 'page' + curPage + '-focus3-l':
				if (judgebtn_r('page' + curPage + '-focus3-r')) {
					cancel();
					focus = 'page' + curPage + '-focus3-r';
					selected();
				} else {
					// 判断是否翻页
					if (curPage < totalPage) {
						// 翻页
						toPage(curPage + 1);
						cancel();
						focus = 'page' + curPage + '-focus1-l';
						selected();
					} else {
						if (hasGood('focus4')) {
							cancel();
							focus = 'page' + curPage + '-focus4-l';
							selected();
						}
					}
				}
				break;
			case 'page' + curPage + '-focus3-r':
				// 判断是否翻页
				if (curPage < totalPage) {
					// 翻页
					// getOrders(curPage +1);
					toPage(curPage + 1);
					cancel();
					focus = 'page' + curPage + '-focus1-l';
					selected();
				} else {
					if (hasGood('focus4')) {
						cancel();
						focus = 'page' + curPage + '-focus4-l';
						selected();
					}
				}
				break;
			case 'page' + curPage + '-focus4-l':
				if (judgebtn_r('page' + curPage + '-focus4-r')) {
					cancel();
					focus = 'page' + curPage + '-focus4-r';
					selected();
				} else {
					if (hasGood('focus5')) {
						cancel();
						focus = 'page' + curPage + '-focus5-l';
						selected();
					}
				}
				break;
			case 'page' + curPage + '-focus4-r':
				if (hasGood('focus5')) {
					cancel();
					focus = 'page' + curPage + '-focus5-l';
					selected();
				}
				break;
			case 'page' + curPage + '-focus5-l':
				if (judgebtn_r('page' + curPage + '-focus5-r')) {
					cancel();
					focus = 'page' + curPage + '-focus5-r';
					selected();
				} else {
					if (hasGood('focus6')) {
						cancel();
						focus = 'page' + curPage + '-focus6-l';
						selected();
					}
				}
				break;
			case 'page' + curPage + '-focus5-r':
				if (hasGood('focus6')) {
					cancel();
					focus = 'page' + curPage + '-focus6-l';
					selected();
				}
				break;
			case 'page' + curPage + '-focus6-l':
				if (judgebtn_r('page' + curPage + '-focus6-r')) {
					cancel();
					focus = 'page' + curPage + '-focus6-r';
					selected();
				} else {
					// 判断是否翻页
					if (curPage < totalPage) {
						// 翻页
						// getOrders(curPage + 1);
						toPage(curPage + 1);
						cancel();
						focus = 'page' + curPage + '-focus1-l';
						selected();
					}
				}
				break;
			case 'page' + curPage + '-focus6-r':
				// 判断是否翻页
				if (curPage < totalPage) {
					// 翻页
					// getOrders(curPage + 1);
					toPage(curPage + 1);
					cancel();
					focus = 'page' + curPage + '-focus1-l';
					selected();
				}
				break;
			// 退订记录
			case 'page' + curPage + '-focuss1-l':
				// 不存在 判断下一个模块是否存在
				if (hasGood('focuss2')) {
					cancel();
					focus = 'page' + curPage + '-focuss2-l';
					selected();

				}
				break;
			case 'page' + curPage + '-focuss2-l':
				// 不存在 判断下一个模块是否存在
				if (hasGood('focuss3')) {
					cancel();
					focus = 'page' + curPage + '-focuss3-l';
					selected();
				}
				break;
			case 'page' + curPage + '-focuss3-l':

				// 判断是否翻页
				if (curPage < totalPage) {
					// 翻页
					toPage(curPage + 1);
					cancel();
					focus = 'page' + curPage + '-focuss1-l';
					selected();
				} else {
					if (hasGood('focuss4')) {
						cancel();
						focus = 'page' + curPage + '-focuss4-l';
						selected();
					}

				}
				break;
			case 'page' + curPage + '-focuss4-l':
				if (hasGood('focuss5')) {
					cancel();
					focus = 'page' + curPage + '-focuss5-l';
					selected();
				}
				break;
			case 'page' + curPage + '-focuss5-l':
				if (hasGood('focuss6')) {
					cancel();
					focus = 'page' + curPage + '-focuss6-l';
					selected();
				}
				break;
			case 'page' + curPage + '-focuss6-l':
				// 判断是否翻页
				if (curPage < totalPage) {
					// 翻页
					// getOrders(curPage + 1);
					toPage(curPage + 1);
					cancel();
					focus = 'page' + curPage + '-focuss1-l';
					selected();
				}
				break;
		}
	}
}

// doDown 
function doDown() {
	// 主模式
	if (focusModel == 'fileModel') {
		// 变为左侧菜单模式
		focusModel = 'menuModel';
		$('.file-order').addClass('file-lose');
		$('.channel-active').removeClass('hidden');
		focus = 'channel-focus1';
		channelGetFocus();
		ordersLoading();
		initOrders();
		toPage(1);
		// 获取第一个频道下的商品
		// getChannel($('#channel-focus1').attr('data-code'));
		// focus = 'page1-focus1-l';
		// selected();
		// 左侧菜单模式
	} else if (focusModel == 'menuModel') {
		switch (focus) {
			case 'channel-focus1':
				channelLoseFoucs();
				focus = 'channel-focus2';
				channelGetFocus();
				// setQuitToAndr('false');
				goodsLoading();
				// // 请求数据
				loading();
				getTuidingGoods();
				break;
			case 'channel-focus2':
				//2019-12-13
				channelLoseFoucs();
				focus = '';
				$('.channel-active').addClass('hidden');
				// 变为主菜单模式
				focusModel = 'fileModel';
				$('.file-order').removeClass('file-lose');
				break;
		}
		// 主模式
	} else if (focusModel == 'mainModel') {
		switch (focus) {
			case 'focus00':
			case 'focus0':
			case 'focus01':
				cancel();
				// focus = 'page' + curPage + '-focus1-l';
				// selected();

				//2019-12-13
				channelLoseFoucs();
				focus = '';
				$('.channel-active').addClass('hidden');
				// 变为主菜单模式
				focusModel = 'fileModel';
				$('.file-order').removeClass('file-lose');
				break;
			case 'page' + curPage + '-focus1-l':
			case 'page' + curPage + '-focuss1-l':
			case 'page' + curPage + '-focus1-r':
				if (hasGood('focus4')) {
					cancel();
					focus = 'page' + curPage + '-focus4-l';
					selected();
				} else if (hasGood('focuss4')) {
					cancel();
					focus = 'page' + curPage + '-focuss4-l';
					selected();
				} else {
					// 从主模式变为主菜单模式
					mainToFile();
				}
				break;
			case 'page' + curPage + '-focus2-l':
			case 'page' + curPage + '-focuss2-l':
			case 'page' + curPage + '-focus2-r':
				if (hasGood('focus5')) {
					cancel();
					focus = 'page' + curPage + '-focus5-l';
					selected();
				} else if (hasGood('focuss5')) {
					cancel();
					focus = 'page' + curPage + '-focuss5-l';
					selected();
				} else if (!hasGood('focus4') && !hasGood('focus5') && !hasGood('focuss4') && !hasGood('focuss5')) {
					mainToFile();
				}
				break;
			case 'page' + curPage + '-focus3-l':
			case 'page' + curPage + '-focuss3-l':
			case 'page' + curPage + '-focus3-r':
				if (hasGood('focus6')) {
					cancel();
					focus = 'page' + curPage + '-focus6-l';
					selected();
				} else if (hasGood('focuss6')) {
					cancel();
					focus = 'page' + curPage + '-focuss6-l';
					selected();
				} else if (!hasGood('focus4') && !hasGood('focus5') && !hasGood('foucus6') && !hasGood('focuss4') && !hasGood('focuss5') && !hasGood('foucuss6')) {
					mainToFile();
				}
				break;
			case 'page' + curPage + '-focus4-l':
			case 'page' + curPage + '-focuss4-l':
			case 'page' + curPage + '-focus4-r':
			case 'page' + curPage + '-focus5-l':
			case 'page' + curPage + '-focuss5-l':
			case 'page' + curPage + '-focus5-r':
			case 'page' + curPage + '-focus6-l':
			case 'page' + curPage + '-focuss6-l':
			case 'page' + curPage + '-focus6-r':
				mainToFile();
				break;
		}
		// 弹框模式
	} else if (focusModel == 'alertModel') {
		switch (orderFocus) {
			case 'order-1':
				if (hasList('order-2')) {
					cancel();
					orderFocus = 'order-2';
					selected();
				}
				break;
			case 'order-2':
				if (hasList('order-3')) {
					cancel();
					orderFocus = 'order-3';
					selected();
				}
				break;
			case 'order-3':
				if (hasList('order-4')) {
					cancel();
					orderFocus = 'order-4';
					selected();
				}
				break;
			case 'order-4':
				if (hasList('order-5')) {
					cancel();
					orderFocus = 'order-5';
					selected();
				}
				break;
		}
	}
}

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

// doEnter
function doEnter() {
	// 主模式
	if (focusModel == 'mainModel') {
		if (focus !== 'focus0' && focus !== 'focus00' && focus !== 'focus01') {
			if (focus.split('-')[2] == 'l') {
				// 续订
				orderFlag = '续订';
				var outFocus = focus.split('-')[0] + '-' + focus.split('-')[1];
				// console.log('退订记录:' + outFocus.indexOf("-focuss") + ":" + outFocus);
				if (outFocus.indexOf("-focuss") != -1) {
					console.log('退订记录' + outFocus.indexOf("-focuss"));
				} else {
					// 查询续订详情
					getOrderDetail($('#' + outFocus).attr('data-code'));
				}

			} else if (focus.split('-')[2] == 'r') {
				// 退订
				orderFlag = '退订';
				var outFocus = focus.split('-')[0] + '-' + focus.split('-')[1];
				// 展示退订提示框
				focusModel = 'confirmModel';
				var proState = $('#' + outFocus).attr('proState');
				$('#wxtips').html('是否退订当前产品？');
				boxShow();
			}
		} else if (focus == 'focus00') {
			//个人中心
			window.location.href = './personal.html?html=order';
		} else if (focus == 'focus0') {
			window.location.href = './search.html?html=order';
		} else if (focus == 'focus01') {
			window.location.href = './help.html?html=order'
		}
		// 弹框模式
	} else if (focusModel == 'alertModel') {
		if (orderFlag == '续订') {
			var goodsid = $('#' + orderFocus).attr('data-goodsid');
			var orderInfo = $('#' + orderFocus).attr('data-orderid');
			getXuding(orderInfo, goodsid);
		} else if (orderFlag == '退订') {
			alert('退订' + $('#' + orderFocus).attr('data-goodsid'));
		}
		// 确认模式
	} else if (focusModel == 'confirmModel') {
		var outFocus = focus.split('-')[0] + '-' + focus.split('-')[1];
		var dataCode = $('#' + outFocus).attr('data-code');
		var proId = $('#' + outFocus).attr('proId');
		var proName = $('#' + outFocus + ' .title').html();
		// 调用退订接口
		getTuiding(dataCode, proId, proName);
	}
}

//doQuit
function doQuit() {
	// 弹框模式
	if (focusModel == 'alertModel') {
		detailClose();
		// 变为主模式
		focusModel = 'mainModel';
	} else if (focusModel == 'fileModel') {
		// 回到首页
		window.location.href = './home.html';
	} else if (focusModel == 'confirmModel') {
		boxClose();
		// 变为主模式
		focusModel = 'mainModel';
	}
}

// 安卓退出键调用的方法

// jsObject.doQuit = function () {
// 	alert('点击退出键');
// }

/* function */

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
$(function () {
	ordersLoading();
	initOrders();
	// 向安卓传递数据
	setQuitToAndr('false');
});
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
// 判断是否为包年包月还是包季
function isData(item) {
	console.log(item.hasvod)
	if (item.hasvod == 1) {
		return 'item—year';
	} else if (item.hasvod == 2) {
		return 'item—moth';
	} else if (item.hasvod == 3) {
		return 'item—season';
	} else {
		return 'items';
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
					html += '<li id="page' + i + '-focus' + (j + 1 - (6 * (i - 1))) + '" proId="' + lists[j].productId + '" data-code="' + lists[j].goodscode + '" proState="' + lists[j].state + '" class="item ' + isData(lists[j]) + '">'
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
					html += '<li id="page' + i + '-focus' + (j + 1 - (6 * (i - 1))) + '" proId="' + lists[j].productId + '" data-code="' + lists[j].goodscode + '" proState="' + lists[j].state +  '" class="item ' + isData(lists[j]) + '">'
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
					html += '<li id="page' + i + '-focus' + (j + 1 - (pages - 1) * 6) + '" proId="' + lists[j].productId + '" data-code="' + lists[j].goodscode + '" proState="' + lists[j].state +  '" class="item ' + isData(lists[j]) + '">'
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
			html += '<li id="page1-focus' + (i + 1) + '" proId="' + lists[i].productId + '" proState="' + lists[i].state + '" data-code="' + lists[i].goodscode +  '" class="item ' + isData(lists[j]) + '">'
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

// 页面加载完成后
window.onload = function () {
	// 0.5秒后调用 doUp
	// setTimeout(doUp, 500)
}

function initTemps(pages, counts, lists) {
	totalPage = pages;
	$('#orders').css('width', 1086 * pages + 'px');
	var html = '';
	// 多页时
	if (pages > 1) {
		for (var i = 1; i <= pages; i++) {
			if (i == 1) {
				html += '<ul class="clear page">'
				for (var j = (i - 1) * 6; j < i * 6; j++) {
					html += '<li id="page' + i + '-focuss' + (j + 1 - (6 * (i - 1))) + '" data-code="' + lists[j].goodscode + '" class="item items">'
						+ '<p class="title">' + lists[j].goodsname + '</p>'
						+ '<div class="time">'
						+ '<p>退订日期 </p>'
						+ '<p>' + lists[j].endtime + '</p>'
						+ '</div>'
						+ '</li>';
				}
				html += '</ul>';
			} else if (i > 1 && i < pages) {
				html += '<ul class="clear page">'
				for (var j = (i - 1) * 6; j < i * 6; j++) {
					html += '<li id="page' + i + '-focuss' + (j + 1 - (6 * (i - 1))) + '" class="item items">'
						+ '<p class="title">' + lists[j].goodsname + '</p>'
						+ '<div class="time">'
						+ '<p>退订日期 </p>'
						+ '<p>' + lists[j].endtime + '</p>'
						+ '</div>'
						+ '</li>';
				}
				html += '</ul>';
			} else if (i == pages) {
				html += '<ul class="clear page">'
				for (var j = (i - 1) * 6; j < counts; j++) {
					html += '<li id="page' + i + '-focuss' + (j + 1 - (pages - 1) * 6) + '" class="item items">'
						+ '<p class="title">' + lists[j].goodsname + '</p>'
						+ '<div class="time">'
						+ '<p>退订日期 </p>'
						+ '<p>' + lists[j].endtime + '</p>'
						+ '</div>'
						+ '</li>';
				}
				html += '</ul>';
			}
		}
		// 只有一页时
	} else if (pages == 1) {
		html += '<ul class="clear page">'
		for (var i = 0; i < counts; i++) {
			html += '<li id="page1-focuss' + (i + 1) + '" class="item items">'
				+ '<p class="title">' + lists[i].goodsname + '</p>'
				+ '<div class="time">'
				+ '<p>退订日期 </p>'
				+ '<p>' + lists[i].endtime + '</p>'
				+ '</div>'
				+ '</li>';
		}
	}
	// 向页面填充数据
	$('#orders').html(html);
}