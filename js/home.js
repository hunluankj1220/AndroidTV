



/* focus control */

// 焦点模式 
// *fileModel/菜单模式  *mainModel/主模式 *detailModel/详情模式 *listModel/列表模式 
var focusModel = 'fileModel';   //把菜单模式负值给focusModel

// init focus
var focusFile = true;
var focusDetail = false;
var focus = ''; // 主模式下的焦点
var detailFocus = ''; // 详情模式的焦点
var listFocus = '';   //列表模式的焦点

/* 解析参数 */
var currentFocus = parseQuery().focus;   //parsQuery()方法是解析Url地址
// 如果存在指定选择焦点
if (currentFocus) {//判断currentFocus解析的参数
	$('.file-home').addClass('file-lose');  //给.file-home添加一个类file-lose
	focusModel = 'mainModel';   //把主模式负值给focusModel
	focus = currentFocus; //把currentFous解析的参数负值给focus
	selected();//调用selected()判断focusMode传过来的参数在添加样式
}

// focus actived / cancel
function selected() { //selected用来判断focusMode传过来的参数在添加样式
	switch (focusModel) { //focusModel传过来的模式
		case 'mainModel':  //主模式
			$('#' + focus).addClass('active');  //focus主模式下的焦点   添加一个样式
			break;
		case 'detailModel': //详情模式 
			$('#' + detailFocus).addClass('active'); //detailFocus详情模式的焦点   添加一个样式
			break;
		case 'listModel': //列表模式
			$('#' + listFocus).addClass('active'); //listFocus列表模式的焦点    添加一个样式
			break;
	}
}
function cancel() {//cancel函数用来判断focusModel转过来的参数在取消样式
	switch (focusModel) {//focusModel传过来的模式
		case 'mainModel': //主模式
			$('#' + focus).removeClass('active'); //focus主模式下的焦点  取消样式
			break;
		case 'detailModel': //详细模式
			$('#' + detailFocus).removeClass('active'); //detailFocus详情模式的焦点  取消样式
			break;
		case 'listModel'://列表样式
			$('#' + listFocus).removeClass('active');  //listfocus列表模式下的焦点 取消样式
			break;
	}
}


// doup
function doUp() { //doUp函数用来切换模式
	// 菜单模式
	if (focusModel == 'fileModel') { //传过来的focusModel ==菜单模式 
		// 更换为主模式
		focusModel = 'mainModel';
		$('.file-home').addClass('file-lose'); //给.file-home添加一个类file-lose
		focus = 'focus1';  //把focus1id名负值给focus
		selected();  //调用selected()判断focusMode传过来的参数在添加样式
		// 主模式
	} else if (focusModel == 'mainModel') { //传过来的focusModel== 主模式
		switch (focus) {    // 主模式下的焦点
			case 'focus1'://id名
			case 'focus2':
			case 'focus3':
				cancel(); //cancel函数用来判断focusModel转过来的参数在取消样式
				focus = 'focus0'; //focus0负值给focus
				selected();//selected用来判断focusMode传过来的参数在添加样式
				break;
			case 'focus4':
				cancel();//cancel函数用来判断focusModel转过来的参数在取消样式
				focus = 'focus3';//focus0负值给focus
				selected();//selected用来判断focusMode传过来的参数在添加样式
				break;
			case 'focus5':
				cancel();
				focus = 'focus1';
				selected();
				break;
			case 'focus6':
				cancel();
				focus = 'focus1';
				selected();
				break;
			case 'focus7':
				cancel();
				focus = 'focus1';
				selected();
				break;
			case 'focus8':
				cancel();
				focus = 'focus2';
				selected();
				break;
			case 'focus9':
				cancel();
				focus = 'focus4';
				selected();
				break;
		}
		// 详情模式
	} else if (focusModel == 'detailModel') {   //传过来的focusModel==详情模式
		dCancel();   //移除添加的类
		detailFocus = 'focus-d-back';  //  把focus-d-back负值给detailFocus详情焦点
		backGetFocus(detailFocus);    //调用 返回按钮获取焦点
	}
}

// dodown
function doDown() {
	// 主模式
	if (focusModel == 'mainModel') {
		switch (focus) {
			case 'focus0':
				cancel();
				focus = 'focus1';
				selected();
				break;
			case 'focus1':
				cancel();
				focus = 'focus5';
				selected();
				break;
			case 'focus2':
				cancel();
				focus = 'focus8';
				selected();
				break;
			case 'focus3':
				cancel();
				focus = 'focus4';
				selected();
				break;
			case 'focus4':
				cancel();
				focus = 'focus9';
				selected();
				break;
			case 'focus5':
			case 'focus6':
			case 'focus7':
			case 'focus8':
			case 'focus9':
				cancel();
				focus = '';
				// 转为菜单模式
				focusModel = 'fileModel';
				$('.file-home').removeClass('file-lose');
				break;
		}
		// 详情模式
	} else if (focusModel == 'detailModel') {
		backLoseFocus(detailFocus);
		detailFocus = 'order';
		dSelected();
	}
}

// doleft
function doLeft() {
	// 主模式
	if (focusModel == 'mainModel') {
		switch (focus) {
			case 'focus2':
				cancel();
				focus = 'focus1';
				selected();
				break;
			case 'focus3':
				cancel();
				focus = 'focus2';
				selected();
				break;
			case 'focus4':
				cancel();
				focus = 'focus2';
				selected();
				break;
			case 'focus5':
				cancel();
				focus = 'focus4';
				selected();
				break;
			case 'focus6':
				cancel();
				focus = 'focus5';
				selected();
				break;
			case 'focus7':
				cancel();
				focus = 'focus6';
				selected();
				break;
			case 'focus8':
				cancel();
				focus = 'focus7';
				selected();
				break;
			case 'focus9':
				cancel();
				focus = 'focus8';
				selected();
				break;
		}
		// 详情模式
	} else if (focusModel == 'detailModel') { 
		switch (detailFocus) {
			case 'order':
				cancel();
				detailFocus = 'cancel';
				selected();  
				break;
			case 'cancel':
				cancel();
				detailFocus = 'order';
				selected();
				break;
		}
		// 列表模式
	} else if (focusModel == 'listModel') {
		switch (listFocus) {
			case 'list-focus2':
				if (hasList('list-focus1')) {
					cancel();
					listFocus = 'list-focus1';
					selected();
				}
				break;
			case 'list-focus3':
				if (hasList('list-focus2')) {
					cancel();
					listFocus = 'list-focus2';
					selected();
				}
				break;
			case 'list-focus4':
				if (hasList('list-focus3')) {
					cancel();
					listFocus = 'list-focus3';
					selected();
				}
				break;
			case 'list-focus5':
				if (hasList('list-focus4')) {
					cancel();
					listFocus = 'list-focus4';
					selected();
				}
				break;
		}
	}
}

// doright
function doRight() {
	// 菜单模式
	if (focusModel == 'fileModel') {
		window.location.href = './account.html';
		// 主模式
	} else if (focusModel == 'mainModel') {
		switch (focus) {
			case 'focus1':
				cancel();
				focus = 'focus2';
				selected();
				break;
			case 'focus2':
				cancel();
				focus = 'focus3';
				selected();
				break;
			case 'focus3':
			case 'focus4':
				cancel();
				focus = 'focus5';
				selected();
				break;
			case 'focus5':
				cancel();
				focus = 'focus6';
				selected();
				break;
			case 'focus6':
				cancel();
				focus = 'focus7';
				selected();
				break;
			case 'focus7':
				cancel();
				focus = 'focus8';
				selected();
				break;
			case 'focus8':
				cancel();
				focus = 'focus9';
				selected();
				break;
		}
		// 详情模式
	} else if (focusModel == 'detailModel') {
		switch (detailFocus) {
			case 'order':
				cancel();
				detailFocus = 'cancel';
				selected();
				break;
			case 'cancel':
				cancel();
				detailFocus = 'order';
				selected();
				break;
		}
		// 列表模式
	} else if (focusModel == 'listModel') {
		console.log('ok');
		switch (listFocus) {
			case 'list-focus1':
				if (hasList('list-focus2')) {
					cancel();
					listFocus = 'list-focus2';
					selected();
				}
				break;
			case 'list-focus2':
				if (hasList('list-focus3')) {
					cancel();
					listFocus = 'list-focus3';
					selected();
				}
				break;
			case 'list-focus3':
				if (hasList('list-focus4')) {
					cancel();
					listFocus = 'list-focus4';
					selected();
				}
				break;
			case 'list-focus4':
				if (hasList('list-focus5')) {
					cancel();
					listFocus = 'list-focus5';
					selected();
				}
				break;
		}
	}

}

// doenter 
function doEnter() {
	// 主模式
	if (focusModel == 'mainModel') {
		switch (focus) {
			case 'focus0':
				window.location.href = './search.html?html=home';
				break;
			case 'focus2':
				// 变为详情模式
				// showDetail();
				// detailLoading();
				// getGoodDetail($('#focus2').attr('data-tag'),'home');
				var goodsid = $('#focus2').attr('data-tag');
				window.location.href = './homeDetail.html?goodsid=' + goodsid + '&focus=focus2';
				break;
			case 'focus7':
				// 变为详情模式
				// showDetail();
				// detailLoading();
				// getGoodDetail($('#focus7').attr('data-tag'),'home');
				var goodsid = $('#focus7').attr('data-tag');
				window.location.href = './homeDetail.html?goodsid=' + goodsid + '&focus=focus7';
				break;
			case 'focus8':
				// 变为详情模式
				// showDetail();
				// detailLoading();
				// getGoodDetail($('#focus8').attr('data-tag'),'home');
				var goodsid = $('#focus8').attr('data-tag');
				window.location.href = './homeDetail.html?goodsid=' + goodsid + '&focus=focus8';
				break;
			case 'focus9':
				// 变为详情模式
				// showDetail();
				// detailLoading();
				// getGoodDetail($('#focus9').attr('data-tag'),'home');
				var goodsid = $('#focus9').attr('data-tag');
				window.location.href = './homeDetail.html?goodsid=' + goodsid + '&focus=focus9';
				break;
			case 'focus3':
			case 'focus4':
			case 'focus5':
			case 'focus6':
				var code = $('#' + focus).attr('data-code');
				window.location.href = './goods.html?code=' + code;
				break;
		}
		// 详情模式
	} else if (focusModel == 'detailModel') {
		switch (detailFocus) {
			case 'order':
				// var orderinfo = $('#order').attr('data-order');
				// var goodsid = $('#order').attr('data-goodsid');
				// getOrder(orderinfo,goodsid);
				var goodsid = $('#order').attr('data-goodsid'); //通过#order 获取data-goodsid里面的属性值
				var orderid = $('#order').attr('data-order'); //通过#order 获取  里面的属性值
				var isOrder = $('#order').attr('data-isOrder');//通过#order 获取data-isOrder里面的属性值
				var sku = $('#order').attr('data-sku');
				var goodsname = $('#order').attr('data-goodsname');
				// alert('是否续订' + isOrder);
				// 判断是否是优惠订购
				if (sku == favourSku) {
					// 进行优惠订购
					getFavourOrder(sku, orderid, goodsid, goodsname);
				} else {
					// 进行普通订购
					getOrder(orderid, goodsid);
				}
				break;
			case 'cancel':
				dCancel(); //移除添加的类
				hideDetail();//详情取消展示
				// 变为主模式
				focusModel = 'mainModel';
				break;
			case 'focus-d-back':
				backLoseFocus(detailFocus);
				hideDetail(); //详情取消展示
				// 变为主模式
				focusModel = 'mainModel';
				break;
		}
		// 列表模式
	} else if (focusModel == 'listModel') {
		// 变为详情模式
		cancel(); // cancel函数用来判断focusModel转过来的参数在取消样式
		listTabtoDetail();   // list => detail
		detailFocus = 'order';
		selected();  //调用selected()判断focusMode传过来的参数在添加样式
	}
}

// doQuit
function doQuit() {
	// 详情模式
	if (focusModel == 'detailModel') {
		// 变为main模式
		detailTabtoMain();  //模式切换 detail => main
	} else if (focusModel == 'mainModel' || focusModel == 'fileModel') {
		// 向安卓传递退出应用的信息
		setQuitToAndr('true');
	}
}

// 退出安卓应用
function setQuitToAndr() {
	jsObject.quitApply('true');
	return 'true';
}

/* 加载中 */
// 详情加载中
function detailLoading() {
	$('.load-wrapper .left').css('opacity', 0);
	$('.load-wrapper .right').css('opacity', 0);
	loading();
}

// 详情加载完毕
function detailLoaded() {
	$('.load-wrapper .left').css('opacity', 1);
	$('.load-wrapper .right').css('opacity', 1);
	loaded();
	focusModel = 'detailModel';//把类名赋值给变量，在public里面动态的绑定
	detailFocus = 'order';
	dSelected();
}

/* 模式切换 */
// main => detail
function mainTabtoDetail() {
	$('#wrapper').css('display', 'none');
	$('#detailWrapper').css('display', 'block');
	$('.file').css('display', 'none');
	focusModel = 'detailModel';
}

// main => list
function mainTabtoList() {
	$('#wrapper').css('display', 'none');
	$('#listWrapper').css('display', 'block');
	$('.file').css('display', 'none');
	focusModel = 'listModel';
}

// list => detail
function listTabtoDetail() {
	$('#listWrapper').css('display', 'none');
	$('#detailWrapper').css('display', 'block');
	focusModel = 'detailModel';
}

// list => main
function listTabtoMain() {
	$('#wrapper').css('display', 'block');
	$('#listWrapper').css('display', 'none');
	$('.file').css('display', 'block');
	focusModel = 'main';
}

// detail => main
function detailTabtoMain() {
	$('#wrapper').css('display', 'block');
	$('#detailWrapper').css('display', 'none');
	$('.file').css('display', 'block');
	focusModel = 'mainModel';
}


/* 数据请求 */
// 页面加载完成后
$(function () {
	// 向安卓传递信息
	setQuitToAndr('true');
	// 请求首页数据
	getHomeData();
});


// 获取首页数据
function getHomeData() {
	$.ajax({
		type: 'get',
		url: homeDataUrl,
		data: {
			reqvsn: 1,
			para: queryString_home
		},
		dataType: 'json',
		timeout: 10000,
		success: function (data) {
			var list=data.data.list;
			// console.log(list);
			$('#focus1 img').attr('src', list[1].url); 
			$('#focus2 img').attr('src', list[4].url);
			$('#focus2 .good-title').html(list[4].title);
			$('#focus2').attr('data-tag', list[4].tag);
			$('#focus7 img').attr('src', list[5].url);
			$('#focus7 .good-title').html(list[5].title);
			$('#focus7').attr('data-tag', list[5].tag);
			$('#focus8 img').attr('src', list[6].url);
			$('#focus8 .good-title').html(list[6].title);
			$('#focus8').attr('data-tag', list[6].tag);
			$('#focus9 img').attr('src', list[7].url);
			$('#focus9 .good-title').html(list[7].title);
			$('#focus9').attr('data-tag', list[7].tag);
			// 向安卓传递内容
			// setQuitToAndr();
		},
		error: function (error) {
			console.log(error);
			window.location.href = './resTip.html?html=home&status=error&title=网络请求超时';
		}
	});
}






