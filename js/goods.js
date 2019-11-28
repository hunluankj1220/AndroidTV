
// focus-control 
// 焦点模式 
// fileModel主菜单模式
// menuModel左侧菜单模式
// mainModel主模式
// listModel列表模式
// detailModel详情模式
// yuyueModel预约模式
// noGoods产品包内无商品
 var focusModel = 'fileModel';
// init focus
var detailFocus = '';
var focus = '';
var listFocus = '';
var curPage = 1;
var totalPage = 1;
var focusMenu = ''; //缓存左侧菜单焦点
var listToDetail = false; // 是否从list列表模式进入详情模式

var detailList = [];
var detailStatus = '';
var detailListWrap = '';
// channel get focus
function channelGetFocus () {
	$('#' + focus).addClass('channel-active');
}

// channel lose focus
function channelLoseFoucs () {
	$('#' + focus).removeClass('channel-active');
}


// good active/cancel
function selected () {
	switch (focusModel) {
		case 'mainModel':
			$('#' + focus).addClass('active');
			break;
		case 'detailModel':
			$('#' + detailFocus).addClass('active');
			break;
		case 'listModel':
			$('#' + listFocus).addClass('actives');
			break;
		case 'goodsDetails':
// ....................................................................
			//var str = `${detailStatus}-${detailListWrap}`;
			var str = detailStatus + "-" + detailListWrap;
      $('#' + str ).addClass('active');
			break;
	}
}

function cancel () {
	switch (focusModel) {
		case 'mainModel':
			$('#' + focus).removeClass('active');
			break;
		case 'detailModel':
			$('#' + detailFocus).removeClass('active');
			break;
		case 'listModel':
			$('#' + listFocus).removeClass('actives');
			break;
	}
}


// doUp
function doUp () {
	// 主菜单模式
	if (focusModel == 'fileModel') {
		// 变为左侧菜单模式
		focusModel = 'menuModel';
		$('.file-goods').addClass('file-lose');
		$('.channel-active').removeClass('hidden');
		focus = 'channel-focus1';
		channelGetFocus();
		// 获取第一个频道下的商品
		getChannel($('#channel-focus1').attr('data-code'));
		// 左侧菜单模式
	} else if (focusModel == 'menuModel') {
		switch (focus) {
			case 'channel-focus1':
				channelLoseFoucs();
				// 变为主模式
				focusModel = 'mainModel';
				$('#' + focusMenu).removeClass('channel-cash');
				focusMenu = '';
				focus = 'focus0';
				selected();
				break;
			case 'channel-focus2':
				channelLoseFoucs();
				focus = 'channel-focus1';
				channelGetFocus();
				goodsLoading();
				getChannel($('#' + focus).attr('data-code'));
				break;
			case 'channel-focus3':
				channelLoseFoucs();
				focus = 'channel-focus2';
				channelGetFocus();
				goodsLoading();
				getChannel($('#' + focus).attr('data-code'));
				break;
			case 'channel-focus4':
				channelLoseFoucs();
				focus = 'channel-focus3';
				channelGetFocus();
				goodsLoading();
				getChannel($('#' + focus).attr('data-code'));
				break;
			case 'channel-focus5':
				channelLoseFoucs();
				focus = 'channel-focus4';
				channelGetFocus();
				goodsLoading();
				getChannel($('#' + focus).attr('data-code'));
				break;
			case 'channel-focus6':
				channelLoseFoucs();
				focus = 'channel-focus5';
				channelGetFocus();
				goodsLoading();
				getChannel($('#' + focus).attr('data-code'));
				break;
		}
		// 主模式
	} else if (focusModel == 'mainModel') {
		switch (focus) {
			case 'page' + curPage + '-focus1':
			case 'page' + curPage + '-focus2':
			case 'page' + curPage + '-focus3':
				cancel();
				focus = 'focus0';
				$('#' + focusMenu).removeClass('channel-cash');
				focusMenu = '';
				selected();
				break;
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
		// 商品包列表模式
	}
}

// doDown
function doDown () {
	// 左侧菜单模式
	if (focusModel == 'menuModel') {
		switch (focus) {
			case 'channel-focus1':
				channelLoseFoucs();
				focus = 'channel-focus2';
				channelGetFocus();
				// 加载电视回看
				goodsLoading();
				getChannel($('#' + focus).attr('data-code'));
				break;
			case 'channel-focus2':
				channelLoseFoucs();
				focus = 'channel-focus3';
				channelGetFocus();
				// 加载高清频道
				goodsLoading();
				getChannel($('#' + focus).attr('data-code'));
				break;
			case 'channel-focus3':
				channelLoseFoucs();
				focus = 'channel-focus4';
				channelGetFocus();
				// 加载标清频道
				goodsLoading();
				getChannel($('#' + focus).attr('data-code'));
				break;
			case 'channel-focus4':
				channelLoseFoucs();
				focus = 'channel-focus5';
				channelGetFocus();
				// 加载视频点播
				goodsLoading();
				getChannel($('#' + focus).attr('data-code'));
				break;
			case 'channel-focus5':
				channelLoseFoucs();
				focus = 'channel-focus6';
				channelGetFocus();
				// 加载宽带专区
				goodsLoading();
				getChannel($('#' + focus).attr('data-code'));
				break;
			case 'channel-focus6':
				channelLoseFoucs();
				focus = '';
				$('.channel-active').addClass('hidden');
				// 变为主菜单模式
				focusModel = 'fileModel';
				$('.file-goods').removeClass('file-lose');
				break;
		}
		// 主模式
	} else if (focusModel == 'mainModel') {
		switch (focus) {
			case 'focus0':
				cancel();
				focusModel = 'menuModel';
				focus = 'channel-focus1';
				channelGetFocus();
				// 加载优惠频道
				goodsLoading();
				getChannel($('#' + focus).attr('data-code'));
				break;
			case 'page' + curPage + '-focus1':
				if (hasGood('focus4')) {
					cancel();
					focus = 'page' + curPage + '-focus4';
					selected();
				} else {
					// 从主模式变为主菜单模式
					mainToFile();
				}
				break;
			case 'page' + curPage + '-focus2':
				if (hasGood('focus5')) {
					cancel();
					focus = 'page' + curPage + '-focus5';
					selected();
				} else if (!hasGood('focus4') && !hasGood('focus5')) {
					// 从主模式变为主菜单模式
					mainToFile();
				}
				break;
			case 'page' + curPage + '-focus3':
				if (hasGood('focus6')) {
					cancel();
					focus = 'page' + curPage + '-focus6';
					selected();
				} else if (!hasGood('focus4') && !hasGood('focus5') && !hasGood('focus6')) {
					// 从主模式变为主菜单模式
					mainToFile();
				}
				break;
			case 'page' + curPage + '-focus4':
			case 'page' + curPage + '-focus5':
			case 'page' + curPage + '-focus6':
				// 从主模式变为主菜单模式
				mainToFile();
				break;
		}
		// 商品包列表模式
	} else if (focusModel == 'listModel') {
		switch (listFocus) {
			case 'focus-back':
				backLoseFocus(listFocus);
				listFocus = 'list-focus1';
				selected();
				break;
		}
	} else if (focusModel == 'detailModel') {
		switch (detailFocus) {
			case 'focus-d-back':
				backLoseFocus(detailFocus);
				detailFocus = 'order';
				dSelected();
				break;
		}
	}
}

// 从主模式变为主菜单模式
function mainToFile () {
	cancel();
	focus = '';
	curPage = 1;
	// 变为主菜单模式
	$('#' + focusMenu).removeClass('channel-cash');
	focusMenu = '';
	// 变为主菜单模式
	focusModel = 'fileModel';
	$('.file-goods').removeClass('file-lose');
}


//下面试按钮组件
// doLeft
function doLeft () {

	// 主菜单模式
	if (focusModel == 'fileModel') {// fileModel主菜单模式
		 window.location.href = './charge.html';
		
	} else if (focusModel == 'mainModel') {	// 主模式
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
					// 变为左侧菜单模式
					focusModel = 'menuModel';
					focus = focusMenu;
					$('#' + focus).removeClass('channel-cash');
					channelGetFocus();
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
		// 详情模式
	} else if (focusModel == 'detailModel') {// detailModel详情模式
		
		switch (detailFocus) {
			case 'order':
				dCancel();
				detailFocus = 'cancel';
				dSelected();
				break;
			case 'cancel':
				if ($('#yuyue').css('display') == 'none') {
					// 没有预约
					dCancel();
					detailFocus = 'order';
					dSelected();
				} else {
					// 有预约
					dCancel();
					detailFocus = 'yuyue';
					dSelected();
				}
				break;
			case 'yuyue':
				if ($('#order').css('display') == 'none') {
					// 没有订购
					dCancel();
					detailFocus = 'cancel';
					dSelected();
				} else {
					// 有订购
					dCancel();
					detailFocus = 'order';
					dSelected();
				}

				break;
		}
		// 列表模式
	}  else if (focusModel == 'listModel') {// listModel列表模式
		
		switch (listFocus) {
			case 'list-focus2':
				if (hasList('list-focus1')) {
					cancel();
					listFocus = 'list-focus1';
					selected();
					changeGoodsprice ();
				}
				break;
			case 'list-focus3':
				if (hasList('list-focus2')) {
					cancel();
					listFocus = 'list-focus2';
					selected();
					changeGoodsprice () ;
				}
				break;
			case 'list-focus4':
				if (hasList('list-focus3')) {
					cancel();
					listFocus = 'list-focus3';
					selected();
					changeGoodsprice () ;
				}
				break;
			case 'list-focus5':
				if (hasList('list-focus4')) {
					cancel();
					listFocus = 'list-focus4';
					selected();
					changeGoodsprice () ;
				}
				break;
		}
 	} else if (focusModel === 'goodsDetails') {
		
    if (detailListWrap && detailListWrap === 'listWrap') {
			//detailFocus = `${detailStatus}-listWrap`;
			detailFocus = detailStatus + "-listWrap";
      dCancel();
      var num = detailList.indexOf(detailStatus);
      var str = detailList[num -1];
//............................................................................................
      if (str) {
        detailStatus = str;
				//detailFocus = `${str}-listWrap`;
				detailFocus = str + "-listWrap";
      } else {
        var str = detailList[num + 1];
        detailStatus = str;
				//detailFocus = `${str}-listWrap`;
				detailFocus = str + "-listWrap";
      }
      dSelected();
      tabChangeList();
      detailFocus = 'listWrap';
      return false;
    }
  }
}

// doRight
function doRight () {
	// 主模式
	if (focusModel == 'fileModel') {
		window.location.href = './order.html';
		// 左侧菜单模式
	} else if (focusModel == 'menuModel') {
		// 变为主模式
		if ($('#goods .noGoods')[0] == undefined) {
			focusMenu = focus;
			channelLoseFoucs();
			$('#' + focus).removeClass('channel-active').addClass('channel-cash');
			focusModel = 'mainModel';
			focus = 'page1-focus1';
			selected();
		}
		// 主模式
	} else if (focusModel == 'mainModel') {
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
		// 详情模式
	} else if (focusModel == 'detailModel') {
    // focusModel = 'detailModel';
    // detailFocus='DNLLWuDtFYpk-listWrap'


		switch (detailFocus) {
			case 'order':
				// 判断是否有预约按钮
				if ($('#yuyue').css('display') == 'none') {
					// 没有预约按钮
					dCancel();
					detailFocus = 'cancel';
					dSelected();
				} else {
					// 有预约按钮
					dCancel();
					detailFocus = 'yuyue';
					dSelected();
				}
				break;
			case 'yuyue':
				dCancel();
				detailFocus = 'cancel';
				dSelected();
				break;
			case 'cancel':
				// 没有订购按钮
				if ($('#order').css('display') == 'none') {
					dCancel();
					detailFocus = 'yuyue';
					dSelected();
				} else {
					// 有订购按钮
					dCancel();
					detailFocus = 'order';
					dSelected();
				}
				break;
		}//列表模式
	} else if (focusModel == 'listModel') {
		// console.log('listfocus:' + listFocus);
		switch (listFocus) {
			case 'list-focus1':
				if (hasList('list-focus2')) {
					cancel();
					listFocus = 'list-focus2';
					selected();
					changeGoodsprice ();
				}
				break;
			case 'list-focus2':
				if (hasList('list-focus3')) {
					cancel();
					listFocus = 'list-focus3';
					selected();
					changeGoodsprice ();
				}
				break;
			case 'list-focus3':
				if (hasList('list-focus4')) {
					cancel();
					listFocus = 'list-focus4';
					selected();
					changeGoodsprice ();
				}
				break;
			case 'list-focus4':
				if (hasList('list-focus5')) {
					cancel();
					listFocus = 'list-focus5';
					selected();
					changeGoodsprice ();
				}
				break;
		}
 	} else if (focusModel === 'goodsDetails') {
    if (detailListWrap && detailListWrap === 'listWrap') {
		 // detailFocus = `${detailStatus}-listWrap`;
		 //detailFocus = detailStatus + "-listWrap";
		 detailFocus = (detailStatus + "-listWrap");
      dCancel();
      var num = detailList.indexOf(detailStatus);
      var str = detailList[num + 1];
//....................................................................................................
      if (str) {
        detailStatus = str;
				//detailFocus = `${str}-listWrap`;
				//detailFocus = str + "-listWrap";
				detailFocus = (detailStatus + "-listWrap");
      } else {
        var str = detailList[num - 1];
        detailStatus = str;
			 // detailFocus = `${str}-listWrap`;
			 //detailFocus = str + "-listWrap";
			 detailFocus = (detailStatus + "-listWrap");
      }
      dSelected();
      tabChangeList();
      detailFocus = 'listWrap';
      return false;
    }
	}
}

// doEnter
function doEnter () {
	// 主模式
	if (focusModel == 'mainModel') {
		if (focus !== 'focus0') {
			// 如果该商品是包
			if ($('#' + focus).attr('data-father')) {
				var clsid = $('#' + focus).attr('data-clsid');
				// 展示包列表
				// $('#wrapper').addClass('hidden');
				// $('#listWrapper').removeClass('hidden');
				// $('.file').addClass('hidden');
				// // 变为列表模式隐藏搜索焦点
				// focusModel = 'listModel';
				// $('.search').css('display', 'none');
				// 加载列表数据
				// getGoodslist(clsid);

				/* 新	-》 */
				getGoodslist(clsid);

				/* 新 《- */
			} else {
				console.log('打开详情');
				var goodsid = $('#' + focus).attr('data-goodsid');
				showDetail();
				detailLoading();
				focusModel = 'detailModel';
				$('.search').css('display', 'none');
				getGoodDetail(goodsid, 'goods');
			}
		} else {
			window.location.href = './search.html?html=goods';
		}
		// 详情模式
	} else if (focusModel == 'detailModel') {
		// 详情模式
		switch (detailFocus) {
			case 'order':
				var goodsid = $('#order').attr('data-goodsid');
				var orderid = $('#order').attr('data-order');
				var isOrder = $('#order').attr('data-isOrder');
				var sku = $('#order').attr('data-sku');
				var goodsname = $('#order').attr('data-goodsname');
				
				// alert('是否续订' + isOrder);
				// 判断是否是优惠订购
				if(goodsid=='AxSae5yqtggw'){
					$('.xudingtipModal').addClass('xdtipshow');
					setTimeout(function(){
						var cacard ='8731204033495729';
						var cacard = $('#order').attr('data-cacard');
						alert(goodsid+"=="+cacard);
						// var goodsid = $('#yuyue').attr('data-goodsid');
						// var busitypeon = $('#yuyue').attr('data-busitypeon');
						$('#qrcode').qrcode({
							text: 'http://mobileapp.hunancatv.com/wx/goods/termActiv.htm?reqvsn=1.0&para={"info":{"channel":"1","cacard":"' + cacard + '","goodsid":"'+ goodsid +'","busitypeon":"20"}}'
						})
						},200)
				}
					if (sku == favourSku) {
						// 进行优惠订购
						getFavourOrder(sku,orderid,goodsid,goodsname);
					} else {
						// 进行普通订购
						getOrder(orderid,goodsid);
					}
				
				
				break;
			case 'focus-d-back':
				backLoseFocus(detailFocus);
			case 'cancel':
				dCancel();
				// 如果从列表模式过来的变为列表模式
				if (listToDetail) {
					focusModel = 'listModel';
					$('#wrapper').addClass('hidden');
					$('#listWrapper').removeClass('hidden');
					$('#detailWrapper').addClass('hidden');
					$('#goodsDetails').addClass('hidden');
				} else {
					// 变为主模式 --展示搜索焦点
					$('.search').css('display', 'block');
					focusModel = 'mainModel';
					hideDetail();
				}
				break;
			case 'yuyue':
				// 弹出预约框
				focusModel = 'yuyueModel';
				$('.xudingtipModal').addClass('xdtipshow');

				setTimeout(function(){
					var cacard = $('#yuyue').attr('data-cacard');
					var goodsid = $('#yuyue').attr('data-goodsid');
					var busitypeon = $('#yuyue').attr('data-busitypeon');
					$('#qrcode').qrcode({
						// render: 'table',// canvas
						// width: 200,
						// height: 200,
						// correctLevel: 0,
						text: 'http://mobileapp.hunancatv.com/wx/goods/termActiv.htm?reqvsn=1.0&para={"info":{"channel":"1","cacard":"' + cacard + '","goodsid":"'+ goodsid +'","busitypeon":"20"}}'
					})
					},200)
				break;
		}
		// 列表模式
	} else if (focusModel == 'listModel') {
		var gid = $('#' + listFocus).attr('data-id');
		console.log('gid:' + gid);
		getOrder('', gid);
		// if (listFocus == 'focus-back') {
		// 	// 变为主模式 -- 展示搜索焦点
		// 	$('.search').css('display', 'block');
		// 	cancel();
		// 	listToDetail = false;
		// 	focusModel = 'mainModel';
		// 	$('#wrapper').removeClass('hidden');
		// 	$('#listWrapper').addClass('hidden');
		// 	$('.file').removeClass('hidden');
		// } else {
		// 	var goodsid = $('#' + listFocus).attr('data-goodsid');
		// 	/* 从列表模式变为详情模式 */
		// 	listToDetail = true;
		// 	$('#wrapper').addClass('hidden');
		// 	$('#listWrapper').addClass('hidden');
		// 	$('#detailWrapper').removeClass('hidden');
    //   $('#goodsDetails').addClass('hidden');
		// 	focusModel = 'detailModel';
		// 	/* 加载detail数据 */
		// 	detailLoading();
		// 	getGoodDetail(goodsid,'goods');
		// }
		// 预约模式
	} else if (focusModel == 'yuyueModel') {
		focusModel = 'detailModel';
		$('.xudingtipModal').removeClass('xdtipshow');
		$('#qrcode').html('');
	} else if (focusModel === 'goodsDetails') {
    if (detailListWrap && detailListWrap === 'listWrap') {
      if (goodsList[detailStatus]) {
        const obj = goodsList[detailStatus];
        getFavourOrder (obj.sku, '' , obj.goodsid, obj.name)
        return false;
      }
		}
		// 产品包无产品模式
  } else if (focusModel == 'noGoods') {
		$('#noGoods-box').addClass('hidden');
		focusModel = 'mainModel';
		console.log(focus)
	}
}

// doQuit
function doQuit () {
	if (focusModel == 'listModel') {
		// 变为主模式 --展示搜索按钮焦点
		$('.search').css('display', 'block');
		listToDetail = false;
		focusModel = 'mainModel';
		$('#wrapper').removeClass('hidden');
		$('#goodsDetails').addClass('hidden');
		$('.file').removeClass('hidden');
	} else if (focusModel == 'detailModel') {
		// 判断两种情况
		if (listToDetail) {
			// 从列表模式进入的详情页面 返回列表模式
			focusModel = 'listModel';
			$('#wrapper').addClass('hidden');
			$('#listWrapper').removeClass('hidden');
			$('#detailWrapper').addClass('hidden');
      $('#goodsDetails').addClass('hidden');
		} else {
			// 从主模式进入的详情 返回到主模式 --展示搜索按钮焦点
			$('.search').css('display', 'block');
			focusModel = 'mainModel';
			hideDetail();
		}
	} else if (focusModel == 'fileModel' || focusModel == 'menuModel' || focusModel == 'mainModel') {
		// 返回到首页
		window.location.href = './home.html';
	} else if (focusModel == 'goodsDetails') {
    // 判断两种情况
    if (listToDetail) {
      // 从列表模式进入的详情页面 返回列表模式
      focusModel = 'listModel';
      $('#wrapper').addClass('hidden');
      $('#listWrapper').removeClass('hidden');
      $('#detailWrapper').addClass('hidden');
      $('#goodsDetails').addClass('hidden');
    } else {
      // 从主模式进入的详情 返回到主模式 --展示搜索按钮焦点
      $('.search').css('display', 'block');
      focusModel = 'mainModel';
      hideDetail();
    }
	}
}


/* function */
// toPage
function toPage (page) {
	curPage = page;
	$('.content-inner').animate({
		left: (1-page) * 902 + 'px'
	},300);
}



/* 数据加载 */
$(function(){
	// 页面初次加载
	getMenu();
	goodsLoading();
	getChannel('02');  // 优惠活动
	// 向安卓传递数据
	setQuitToAndr('false');
});
// 初始化左侧菜单模板
function initMenuTemp (menus) {
	console.log(menus)
	var html = '';
	for (var i = 0; i < menus.length; i++) {
		html += '<li id="channel-focus'+ (i+1) +'" data-code="'+ menus[i].clsid +'" class="file-channel">'
				+		'<span class="label">'
				+			'<img class="img-no" src="'+ menus[i].bpicture +'" alt="">'
				+			'<img class="img-active" src="'+ menus[i].picture +'" alt="">'
				+		'</span>'
				+		menus[i].clsname
				+	'</li>';
	}
	$('#menus').html(html);
}

// 初始化商品模板
function initGoodsTemp (counts,lists) {
	var pages = Math.ceil(counts / 6);
	totalPage = pages;
	// 初始化宽度
	$('#goods').css('width', 1326*pages + 'px');
	$('.content-inner').css('left', 0);
	var html = '';
	// 模板循环
	if (pages == 1) {
		html += '<ul class="page clear">';
		for (var i = 0; i < lists.length; i++) {
			if (lists[i].isfather) {
				html += '<li data-father='+ true +' data-clsid='+ lists[i].clsid +' id="page1-focus'+ (i+1) +'">'
			} else {
				html += '<li data-goodsid='+ lists[i].goodsid +' id="page1-focus'+ (i+1) +'">'
			}
			html +=	'<img src="'+ lists[i].picture +'" alt="">'
			+ 	'<p class="goodname">'+ lists[i].goodsname +'</p>'
			+	'</li>';
		}
		html += '</ul>'
	} else if (pages > 1) {
		for (var i = 1; i <= pages; i++) {
			if (i == 1) {
				html += '<ul class="clear page">'
				for (var j = (i-1)*6; j < i*6; j++) {
					if (lists[j].isfather) {
						html += '<li data-father='+true+' data-clsid='+ lists[j].clsid +' id="page'+i+'-focus'+ (j+1-(6*(i-1))) +'">'
					} else {
						html += '<li data-goodsid='+ lists[j].goodsid +' id="page'+i+'-focus'+ (j+1-(6*(i-1))) +'">'
					}
					html += '<img src="'+ lists[j].picture +'" alt="">'
						+ 	'<p class="goodname">'+ lists[j].goodsname +'</p>'
						+ '</li>';
				}
				html += '</ul>';
			} else if (i > 1 & i < pages) {
				html += '<ul class="clear page">'
				for (var j = (i-1)*6; j < i*6; j++) {
					if (lists[j].isfather) {
						html += '<li data-father='+true+' data-clsid='+ lists[j].clsid +' id="page'+i+'-focus'+ (j+1-(6*(i-1))) +'">'
					} else {
						html += '<li data-goodsid='+ lists[j].goodsid +' id="page'+i+'-focus'+ (j+1-(6*(i-1))) +'">'
					}
					html += '<img src="'+ lists[j].picture +'" alt="">'
						+ 	'<p class="goodname">'+ (lists[j].goodsid==='dP9Zamg6vcvS'?'智能机顶盒(老用户置换)':lists[j].goodsname)
						 +'</p>'
						+ '</li>';

				}
				html += '</ul>';
			} else if (i == pages) {
				html += '<ul class="clear page">'
				for (var j = (i-1)*6; j < counts; j++) {
					if (lists[j].isfather) {
						html += '<li data-father='+true+' data-clsid='+ lists[j].clsid +' id="page'+i+'-focus'+ (j+1-(6*(i-1))) +'">'
					} else {
						html += '<li data-goodsid='+ lists[j].goodsid +' id="page'+i+'-focus'+ (j+1-(6*(i-1))) +'">'
					}
						html += '<p class="goodname">'+ lists[j].goodsname +'</p>'
						+ '<img src="'+ lists[j].picture +'" alt="">'
						+ '</li>';
				}
				html += '</ul>';
			}
		}
	}
	// 填充模板
	$('#goods').html(html);
}

var goodsList  = {} ; //商品列表
// 初始化列表模板
function initListTemp (data) {
		// var info = data.info;
		// $('#gd-goodUrl').attr('src', info.picture);
		// $('#gd-goodTitle').html(info.name);
		// $('#gd-goodInfo').html(limitLength(info.goodsdesc));
		var html = '';
		if (data.list && data.list.length > 0 ) {
			var info = data.info;
			$('#gd-goodUrl').attr('src', info.picture);
			$('#nicnoe').attr('src',info.picture);
			$('#gd-goodTitle').html(info.name);
			$('#gd-goodInfo').html(limitLength(info.goodsdesc));
			// 展示listWrapper
			$('#wrapper').addClass('hidden');
			$('#listWrapper').removeClass('hidden');
			$('.file').addClass('hidden');
			$('.search').css('display', 'none');
			$('#gd-goodPrice').html(data.list[0].skudesc);
      focusModel = 'goodsDetails';
			//detailListWrap = `listWrap`;
			detailListWrap = 'listWrap';
			detailStatus = data.list[0].goodsid;
			//新改动态生成温馨提示
			var mindeposite = data.list[0].mindeposite;
			var skudesc = data.list[0].skudesc;
			$('#gd-goodTip').text('')
      if(mindeposite != null && mindeposite > 0){
				var text = '  1.该商品是属于优惠活动产品，需预存' + skudesc + '。';
				$('#gd-goodTip').html(text);				
			}
		// 	if(mindeposite){	// 0 '' false null undefined NaN
		// 	const goodTip = $('#gd-goodTip')
		// 	goodTip.text(mindeposite);
		// }
			// var imgUrls = [
			// 	'http://testapp.hunancatv.com:9090/images/1.png',
			// 	'http://testapp.hunancatv.com:9090/images/2.png',
			// 	'http://testapp.hunancatv.com:9090/images/3.png',
			// 	'http://testapp.hunancatv.com:9090/images/4.png'
			// ]
			var imgUrls = [
				'http://mobileapp.hunancatv.com/images/1.png',
				'http://mobileapp.hunancatv.com/images/2.png',
				'http://mobileapp.hunancatv.com/images/3.png',
				'http://mobileapp.hunancatv.com/images/4.png'
			]
	// 		data.list.forEach((items,index) => {
  //       detailList.push(items.goodsid);
	// 			goodsList[items.goodsid] = items;
	// 			// var prefix = items.priceUnit.startsWith('立减') ? '' : '<span>￥</span>';
	// 			// var  monthPrefix= (items.customPrice.length<=5) ? items.customPrice.substr(0,3) : items.customPrice.substr(0,4)

	// 			// var  prefix= (items.customPrice.length<=5) ? items.customPrice.substr(3,3) : items.customPrice.substr(4,3)
	// 			 var arr = items.customPrice.split('/')//split() 方法用于把一个字符串分割成字符串数组。
	//        var monthPrefix = arr.length?(arr[0]+'/'):''
	//        var prefix = arr.length?arr[1]:''
	// 			//新改循环生成列表
	// 	html += `<li ><div id="list-focus${index+1}" data-mindeposite="${items.mindeposite}"  data-skudesc="${items.skudesc}"  data-id="${items.goodsid}">
	// 				<img src="${imgUrls[index]}" alt="">
	// 				<div class="butto-price">
	// 				<p class="originalPrice">原价${ items.priceUnit}</p>
	// 				<p class="monthPackage">${items.timePrice}</p>
	// 				<p class="presentPrice"><span>现价</span><span class="getsPrice" style='font-family:微软雅黑'><img style='display:inline-block;height:32px;vertical-align:baseline;margin-bottom: -3px;' src='http://tvstore.hunancatv.com:9090/images/rmb.png' />${monthPrefix}</span> <span>${prefix}</span></p>
	// 				</div>
	// 				</div>
	// 				</li>`
		//html += "<li ><div id=\"list-focus" + (index + 1) + "\" data-mindeposite=\"" + items.mindeposite + "\"  data-skudesc=\"" + items.skudesc + "\"  data-id=\"" + items.goodsid + "\">\n\t\t\t\t\t<img src=\"" + imgUrls[index] + "\" alt=\"\">\n\t\t\t\t\t<div class=\"butto-price\">\n\t\t\t\t\t<p class=\"originalPrice\">原价" + items.priceUnit + "</p>\n\t\t\t\t\t<p class=\"monthPackage\">" + items.timePrice + "</p>\n\t\t\t\t\t<p class=\"presentPrice\"><span>现价</span><span class=\"getsPrice\" style='font-family:微软雅黑'><img style='display:inline-block;height:32px;vertical-align:baseline;margin-bottom: -3px;' src='http://tvstore.hunancatv.com:9090/images/rmb.png' />" + monthPrefix + "</span> <span>" + prefix + "</span></p>\n\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t</li>";
//})
		for(var i=0;i<data.list.length;i++){
			console.log(data.list)
			detailList.push(data.list[i].goodsid);
			goodsList[data.list[i].goodsid] = data.list[i];
			if(data.list[i].customPrice.indexOf('/')>=0){
				var arr = data.list[i].customPrice.split('/')//split() 方法用于把一个字符串分割成字符串数组。
				var monthPrefix = arr.length?(arr[0]+'/'):''
				var prefix = arr.length?arr[1]:''
				html += "<li ><div id=\"list-focus" + (i + 1) + "\" data-mindeposite=\"" + data.list[i].mindeposite + "\"  data-skudesc=\"" + data.list[i].skudesc + "\"  data-id=\"" + data.list[i].goodsid + "\">\n\t\t\t\t\t<img src=\"" + imgUrls[i] + "\" alt=\"\">\n\t\t\t\t\t<div class=\"butto-price\">\n\t\t\t\t\t<p class=\"originalPrice\">原价" + data.list[i].priceUnit + "</p>\n\t\t\t\t\t<p class=\"monthPackage\">" + data.list[i].timePrice + "</p>\n\t\t\t\t\t<p class=\"presentPrice\"><span>现价</span><span class=\"getsPrice\" style='font-family:微软雅黑'><img style='display:inline-block;height:32px;vertical-align:baseline;margin-bottom: -3px;' src='http://tvstore.hunancatv.com:9090/images/rmb.png' />" + monthPrefix + "</span> <span>" + prefix + "</span></p>\n\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t</li>";
			}else{
				html += "<li ><div id=\"list-focus" + (i + 1) + "\" data-mindeposite=\"" + data.list[i].mindeposite + "\"  data-skudesc=\"" + data.list[i].skudesc + "\"  data-id=\"" + data.list[i].goodsid + "\">\n\t\t\t\t\t<img src=\"" + imgUrls[i] + "\" alt=\"\">\n\t\t\t\t\t<div class=\"butto-price\">\n\t\t\t\t\t<p class=\"originalPrice\">原价" + data.list[i].priceUnit + "</p>\n\t\t\t\t\t<p class=\"monthPackage\">" + data.list[i].timePrice + "</p>\n\t\t\t\t\t<p class=\"presentPrice\"><span>现价</span><span class=\"getsPrice\" style='font-family:微软雅黑'><img style='display:inline-block;height:32px;vertical-align:baseline;margin-bottom: -3px;' src='http://tvstore.hunancatv.com:9090/images/rmb.png' />" + data.list[i].customPrice + "</span></p>\n\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t</li>";
			}
		}
			// <div class="listWrap" id="${items.goodsid}-listWrap">
			// 			<div class="number">${ items.priceUnit}</div>
			// 			<div class="year">  ${ items.timePrice} </div>						
			// 	    <div class="price"> <span>￥</span>${ items.customPrice}</div>
			// 	    <div class="smallNum"> ${ items.averagePrice} </div>
			//     </div>
			$('#butto-picture').html(html);
					// 变为列表模式隐藏搜索焦点
					focusModel = 'listModel';
					listFocus = 'list-focus1';
			console.log('detailFocus => ', detailFocus)
			selected();
			changeGoodsprice ()
			$('#listWrapper').addClass('detail-wrapper');
			// $('#listWrapper .wrapper').html($('#goodsDetails').html());
			$('#goodsDetails').removeClass('hidden');
			$('#listWrapper').addClass('hidden');
		} else {
			$('#noGoods-box').removeClass('hidden');
			focusModel = 'noGoods';
		}
		
}

function tabChangeList() {
		if (goodsList[detailStatus]) {
      $('#gd-goodPrice').html(goodsList[detailStatus].skudesc ? goodsList[detailStatus].skudesc : '');
			var  mindeposite = goodsList[detailStatus].mindeposite;
			var  skudesc = goodsList[detailStatus].skudesc;
      var text = '';
      if(mindeposite != null && mindeposite > 0){
        text += '  1.该商品是属于优惠活动产品，需预存' + skudesc + '。';
			}
      $('#gd-goodTip').html(text);
		}

	}


// goods loading
function goodsLoading () {
	$('#goods').css('width', '100%').html('');
	loading();
}
// goods loaded
function goodsLoaded () {
	loaded();
}

// detail loading
function detailLoading () {
	$('.load-wrapper .left').css('opacity', 0);
	$('.load-wrapper .right').css('opacity', 0);
	loading();
}

// detail loaded
function detailLoaded () {
	$('.load-wrapper .left').css('opacity', 1);
	$('.load-wrapper .right').css('opacity', 1);
	loaded();
	console.log($('#order').css('display'));
	if ($('#order').css('display') == 'none') {
		detailFocus = 'yuyue';
		selected();
	} else {
		detailFocus = 'order';
		selected();
	}
	// console.log('ok');
}

// no goods
function noGoods () {
	$('#goods').css('width', '100%');
	var text = '<div class="noGoods"><img src="./images/error.png">';
	text += '<p>当前频道暂无产品，敬请期待</p></div>';
	$('#goods').html(text);
}

// show list
function showGoodsList () {
	$('#goods').addClass('hidden');
	$('#listWrapper').removeClass('hidden').addClass('listShow');
}

// 动态改变包内的商品价格  actives 不能在重复
function changeGoodsprice () {
	// var price=$('.actives .getsPrice').text();
	// $('#gd-goodPrice').text(price);
  var skudescPrice =	$('.actives').attr('data-skudesc');
	var mindepositePrice=$('.actives').attr('data-mindeposite')
	var text='';
	if(mindepositePrice != null && mindepositePrice > 0){
		 text = '  1.该商品是属于优惠活动产品，需预存' + skudescPrice + '。';
	}
	$('#gd-goodTip').text(text);		
	$('.data-monthPackages').text(text)
	$('#gd-goodPrice').text(skudescPrice);
}
