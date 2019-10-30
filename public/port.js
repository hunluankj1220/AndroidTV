// 公司
// var host = 'http://192.168.1.192:8090/tvstore/';
// 测试接口地址
// var host = 'http://192.168.0.150:8090/tvstore/';
// var host = 'http://192.168.3.137:8090/tvstore/';  //本地接口
// var host = 'http://testapp.hunancatv.com:9090/tvstore/';
// var host = 'http://192.168.0.150:8090/tvstore/';
/* 测试环境回调地址 */
// var redirectUrl = 'http://172.16.21.22:9090/andriodTv/resTip.html?';

/* 正式环境 */
var host = 'http://tvstore.hunancatv.com:9090/tvstore/';
var redirectUrl ='http://tvstore.hunancatv.com:9090/andriodTv/resTip.html?';

/* 优惠商品sku */
// var favourSku = '300059_9223372024214466856';
var favourSku = '';

// 智能卡
 var cacard;
 var cacard = '8731204033495729';   //正式环境卡号--正式环境需注释
// var cacard = '8731204033541662';     // 测试环境卡号

// var cacard = '8731202953056323';
// var cacard = '8731202245224473';
// var cacard = '8733003512281305';
// var cacard = '8731202953056323';
// var cacard = '8731203589981571';
// cacard = window.localStorage.cacard;
var channelNum = 1;

// 获取智能卡号
function getCardFromAd () {
	var card = jsObject.getCardNumber();
	if (card) {
		cacard = card;
	} 
}
//正式环境需放出来
// getCardFromAd();



// 获取智能卡号
// function getCardFromAd () {
// 	var card = undefined//jsObject.getCardNumber();
// 	if (card) {
// 		cacard = card;
// 	}
// }
// getCardFromAd();



/* 首页 */
var homeDataUrl = host + 'ads/apphomeinfo.htm';
var queryString_home = '{info:{channel:"1",cacard:"' + cacard + '"}}';

/* 商品详情查询 */
var detailDataUrl = host + 'goods/goodsinfo.htm';
// 限定商品描述的字数
function limitLength (str) {
	if (str.length > 120) {
		return str.slice(0,120) + '...';
	} else {
		return str;
	}
}

// 获取详情
function getGoodDetail (tag,originHtml) {
	$.ajax({
		type: 'get',
		url: detailDataUrl,
		data: {
			reqvsn: 1,
			para: '{"info":{"goodsid":"'+ tag +'","channel":"1","cacard":"'+ cacard +'"}}'
		},
		timeout: 10000,
		success: function(data){
			console.log(data);
			if (data.code == '10001701') {
				var info = data.goods_info;
				$('#goodUrl').attr('src', info.picture);
				$('#goodTitle').html(info.goodsname);
				$('#goodInfo').html(limitLength(info.goodsdesc));
				$('#goodPrice').html(info.skudesc);
				$('#order').attr('data-goodsid', info.goodsid);
				$('#order').attr('data-order', info.orderid);
				$('#order').attr('data-isorder', info.isOrder);
				$('#order').attr('data-sku', info.sku);
				$('#order').attr('data-goodsname', info.goodsname);
				// 判断是否可预约
				if (parseInt(info.isMake) == 2) {
					// 可预约
					if(parseInt(info.isActivity) == 2){
						// 为活动产品
						$('#goodsprice').css('display', 'none');
						$('#prompt').css('display', 'none');
						$('#order').css('display', 'none');
				   }
					// $('#goodsprice').hide();
					// $('#prompt').hide();
					$('#yuyue').css('display','inline-block');
					$('#yuyue').attr('data-cacard',data.cacard);
					$('#yuyue').attr('data-goodsid', data.goodsid);
				} else {
					// 不可预约
					$('#yuyue').css('display', 'none');
					$('#goodsprice').css('display','inline-block');
					$('#prompt').css('display','inline-block');
					$('#order').css('display','inline-block');
				}
				if (info.isOrder == 1) {
					// 商品订购
					$('#order').html('续订');
				} else {
					$('#order').html('订购');
				}
				var text = '';
				if(info.isvalid == 1){
					text = '尊敬的客户，您的基本业务为非正常状态，请先充值再订购，如有疑问请联系96531。';
				}else{
					if(info.isMake==2 && info.isActivity==2){
						if(info.isOrder == 1){
							text += '1.该商品属于预约产品，点击预约，微信扫描二维码可预约。';
						}else{
							text += '1.该商品属于预约产品，点击预约，微信扫描二维码可预约。';
						}	
					}else{
						if(info.isOrder == 1){
							text += '1.该商品您已订购，可直接收看，如继续选择订购，则默认为续订。';
						}else{
							text += '1.按月订购的产品，如果不退订产品，默认按月自动续订。';
						}
						if(info.mindeposite != null && info.mindeposite > 0){
							text += '  2.该商品是属于优惠活动产品，需预存' + info.skudesc + '。';
						}
					}
					
				}
				$('#goodTip').html(text);
			} else  {
				window.location.href = './resTip.html?html='+ originHtml +'&status=error&title=数据查询失败';
			}
			detailLoaded();
		},
		error: function(error){
			window.location.href = './resTip.html?html='+ originHtml +'&status=error&title=网络请求超时';
		}
	});
}


/* 账户查询 */
var accountDataUrl = host + 'user/userinfojson.htm';
var queryString_account = '{"info":{"channel":"1","cacard":"'+ cacard +'"}}';
// 获取账户基本信息
function getInfo () {
	$.ajax({
		type: 'get',
		url: accountDataUrl,
		data: {
			reqvsn: 1,
			para: queryString_account
		},
		timeout: 10000,
		success: function (data) {
			if (data.code == '40001101') {
				window.location.href = './resTip.html?status=error&html=account&title=数据查询失败';
			} else {
				$('#account').html(data.tel);
				$('#name').html(data.name);
				$('#phone').html(data.mobile);
				$('#card').html(data.cacard);
				var cardType = '';
				if(data.mainsub == '1'){
					cardType = "主卡";
				} else if(2==mainsub){
					cardType = "副卡";
				}

				$('#cardType').html(cardType);
				$('#money').html(data.amount);
				$('#address').html(data.address);
			}
			infoLoaded();
		},
		error: function () {
			window.location.href = './resTip.html?status=error&html=account&title=网络请求超时';
		}
	});
}
// 获取账户卡券信息
var cardRollsUrl = host + 'user/queryCardRolls.htm';
function getCardRolls () {
	$.ajax({
		type: 'get',
		url: cardRollsUrl,
		timeout: 10000,
		data: {
			reqvsn: 1,
			para: queryString_account
		},
		success: function (res) {
			if (res.cards.length) {
				$('#cardRoll').html(res.cards[0].cardroll);
				$('#rollPwd .value').html(res.cards[0].cardpwd);
			} else {
				$('#cardRoll').html('暂无');
				$('#rollPwd .value').html('暂无');
			}
		},
		error: function (err) {
			console.log(err);
		}
	});
}


/* 订购产品查询 */
var ordersDataUrl = host + 'goods/orderGoodsList.htm';
// 初次加载页面初始化页面结构和第一页
function initOrders () {
	$.ajax({
		url: ordersDataUrl,
		data: {
			reqvsn: 1,
			para: '{"info":{"cur_page":"1","channel":"1","cacard":"'+ cacard +'"}}'
		},
		timeout: 10000,
		success: function (data) {
			if (data.goods_count !== 0) {
				// console.log(data);
				initTemp(data.page_count,data.goods_count,data.goods);
			} else {
				noOrders();
			}
		},
		error: function (error) {
			window.location.href = './resTip.html?html=order&status=error&title=网络请求超时';
		}
	});
}
// 翻页查询
function getOrders (page) {
	$.ajax({
		url: ordersDataUrl,
		data: {
			reqvsn: 1,
			para: '{"info":{"cur_page":"'+ page +'","channel":"1","cacard":"'+ cacard +'"}}'
		},
		timeout: 10000,
		success: function (data) {
			initPage(page,data.goods);
		},
		error: function (error) {
			window.location.href = './resTip.html?html=order&status=error&title=网络请求超时';
		}
	});
}

/* 订购详情 */
var orderDetailUrl = host + 'goods/orderGoodsDetail.htm';
function getOrderDetail (code) {
	$.ajax({
		url: orderDetailUrl,
		data: {
			reqvsn: 1,
			para: '{"info":{"goodscode":"'+ code +'","channel":"1","cacard":"'+ cacard +'"}}'
		},
		timeout: 10000,
		success: function (data) {
			focusModel = 'alertModel';
			if (data.code == '40001902') {
				noOrderDetail();
				detailShow();
			} else {
				console.log(data.goods_info);
				initOrderDetail(data.goods_info);
				detailShow();
				orderFocus = 'order-1';
				selected();
			}
		},
		error: function () {}
	});
}

/* 商品中心 */
var menuListUrl = host + 'goods/goodscls.htm';
var goodsUrl = host + 'goods/goodslist.htm';
var goodsListDetail = host + 'goods/queryGoodsClsInfo.htm';
// var listUrl = host + 'goods/goodsclsList.htm'; // 查询包里的商品
// 请求左侧菜单列表
function getMenu () {
	$.ajax({
		url: menuListUrl,
		data: {
			reqvsn: 1,
			para: '{"info":{"clsid":"0","channel":"1","cacard":"'+ cacard +'"}}'
		},
		timeout: 10000,
		success: function (data) {
			if (data.code == 10001401) {
				initMenuTemp(data.data.list);
				// 如果带有定位参数
				if (parseQuery(window.location)) {
					var code = parseQuery(window.location).code;
					console.log(code)
					for (var i = 0; i < data.data.list.length; i++) {
						if (code == data.data.list[i].clsid) {
							// 选中li
							focusModel = 'menuModel';
							var focusPos = $('[data-code='+ code +']').attr('id');
							focus = focusPos;
							$('#' + focusPos).addClass('channel-active');
							$('.file-goods').addClass('file-lose');
							// 加载此对应的产品
							getChannel(code);
						}
					}
				}
			}

		},
		error: function () {
			window.location.href = './resTip.html?status=error&html=goods&title=网络请求超时';
		}
	});
}
// 根据channelCode请求商品
function getChannel (channelCode) {
	console.log(channelCode)//02 优惠活动
	$.ajax({
		url: goodsUrl,
		data: {
			reqvsn: 1,
			para: '{"info":{"clsid":"'+ channelCode +'","channel":"1","cacard":"'+ cacard +'"}}'
		},
		timeout: 10000,
		success: function (data) {
			if (parseInt(data.data.info.size) == 0) {
				noGoods();
			} else {
				initGoodsTemp(data.data.info.size, data.data.list);
			}
		},
		error: function (error) {
			console.log(error);
		}
	});
}
// 根据clsid加载列表数据
function getGoodslist (clisid) {

	$.ajax({
		url: goodsListDetail,
		data: {
			reqvsn: 1,
			para: '{"info":{"clsid":"'+ clisid +'","channel":"1","cacard":"'+ cacard +'"}}'
		},
		timeout: 10000,
		success: function (data) {
		//	alert(data.code);
			console.log('data:');
			console.log(data);
			initListTemp(data.data);
			detailLoaded();
		},
		// error: function (error) {
		// 	window.location.href = './resTip.html?status=error&html=goods&title=网络请求超时';
		// }
	});
}

/* 搜索 */
var searchUrl = host + 'goods/searchgoods.htm';
function getSearch (text) {
	$.ajax({
		url: searchUrl,
		data: {
			reqvsn: 1,
			para: '{"info":{"skey":"'+ text +'","channel":"1","cacard":"'+ cacard +'"}}'
		},
		success: function (data) {
			if (data.code == '10001601') {
				initSearchTemp(data.goods);
				if (data.goods.length > 9) {
					$('.down-tips').removeClass('hidden');
				} else {
					$('.down-tips').addClass('hidden');
				}
			} else {
				noSearch();
			}
		},
		error: function (error) {
			window.location.href = './resTip.html?status=error&html=goods&title=网络请求超时';
		}
	});
}

// 向安卓传递充值参数

var setDataToAnd = function (url) {
	jsObject.payInterface(url);
}

/* 充值 */
var chargeUrl = host + 'order/recharge.htm';
function getCharge (money) {
	$.ajax({
		url: chargeUrl,
		data: {
			reqvsn: '1.0',
			para: '{"info":{"channel":"1","cacard":"'+ cacard +'","price":"'+ money +'"}}'
		},
		success: function (data) {
			// 开始url拼接
			var url = data.url;
			var req = JSON.parse(data.returnReq);
			// 对req的内容进行转换
			var requestContent = JSON.parse(req.requestContent);
			requestContent.redirectUrl = redirectUrl + 'optype=1';
			req.requestContent = JSON.stringify(requestContent);
			var urlStr = url + '?';

			// 拼接版本
			urlStr += 'version' + '=' + req.andriodversion;
			for (var key in req) {
				if (key !== 'andriodversion' && key !== 'version') {
					urlStr += '&' + key + '=' + req[key]
				}
			}
			alert(urlStr)
			setDataToAnd(urlStr);
		},
		error: function (error) {
			console.log(error);
		}
	});
}

/* 普通商品订购 */
var orderUrl = host + 'order/create.htm';
function getOrder (orderInfo,goodsid) {
	var orderStatus;
	if (orderInfo) {
		orderStatus = orderInfo;
	} else {
		orderStatus = '';
	}
	$.ajax({
		url: orderUrl,
		data: {
			reqvsn: '1.0',
			para: '{"info":{"channel":"1","cacard":"'+ cacard +'","orderid":"'+orderStatus+'","goodsid":"'+goodsid+'"}}'
		},
		success: function (data) {
			// 开始url拼接
			console.log(data);
			//debugger
			var url = data.url;
			var req = JSON.parse(data.returnReq);
			// 对req的内容进行转换
			var requestContent = JSON.parse(req.requestContent);
			requestContent.redirectUrl = redirectUrl + 'optype=0';
			req.requestContent = JSON.stringify(requestContent);
			var urlStr = url + '?';
			// 拼接版本
			urlStr += 'version' + '=' + req.andriodversion;
			for (var key in req) {
				if (key !== 'andriodversion' && key !== 'version') {
					urlStr += '&' + key + '=' + req[key]
				}
			}
			//alert(urlStr)
			console.log('url',urlStr)
			setDataToAnd(urlStr);
		},
		error: function (error) {
			window.location.href = './resTip.html?status=error&html=order&title=网络请求超时';
		}
	});
}

/* 优惠商品订购 */
// 向安卓传递sku和goodsname参数
var setSkuToAnd = function (obj) {
	jsObject.setSkuData(obj);
}
// 从安卓获取sku和goodsname
var getSkuFromAnd = function () {
	return jsObject.getSkuData();
}
var favourOrderUrl = host + 'order/create.htm';
function getFavourOrder (sku,orderid,goodsid,goodsname) {
	// 向安卓发送数据sku和goodsname
	var toAndObj = {};
	toAndObj.sku = sku;
	toAndObj.goodsname = goodsname;
	setSkuToAnd(JSON.stringify(toAndObj));
	// 调用支付接口
	$.ajax({
		url: favourOrderUrl,
		data: {
			reqvsn: '1.0',
			para: '{"info":{"channel":"1","cacard":"'+ cacard +'","sku":"'+sku+'","orderid":"'+orderid+'","goodsid":"'+goodsid+'"}}'
		},
		success: function (data) {
			// 开始url拼接
			var url = data.url;
			var req = JSON.parse(data.returnReq);
			// 对req的内容进行转换
			var requestContent = JSON.parse(req.requestContent);
			requestContent.redirectUrl = redirectUrl + 'optype=3';
			req.requestContent = JSON.stringify(requestContent);
			var urlStr = url + '?';
			// 拼接版本
			urlStr += 'version' + '=' + req.andriodversion;
			for (var key in req) {
				if (key !== 'andriodversion' && key !== 'version') {
					urlStr += '&' + key + '=' + req[key]
				}
			}
			setDataToAnd(urlStr);
		},
		error: function (error) {
			window.location.href = './resTip.html?status=error&html=order&title=网络请求超时';
		}
	});
}

/* 续订 */
var xudingUrl = host + 'order/renew.htm';
function getXuding (orderInfo,goodsid) {
	var orderStatus;
	if (orderInfo) {
		orderStatus = orderInfo;
	} else {
		orderStatus = '';
	}
	$.ajax({
		url: xudingUrl,
		data: {
			reqvsn: '1.0',
			para: '{"info":{"channel":"1","cacard":"'+ cacard +'","orderid":"'+orderStatus+'","goodsid":"'+goodsid+'"}}'
		},
		success: function (data) {
			// 开始url拼接
			var url = data.url;
			var req = JSON.parse(data.returnReq);
			console.log(req);
			// 对req的内容进行转换
			var requestContent = JSON.parse(req.requestContent);
			requestContent.redirectUrl = redirectUrl + 'optype=2';
			req.requestContent = JSON.stringify(requestContent);
			var urlStr = url + '?';
			// 拼接版本
			urlStr += 'version' + '=' + req.andriodversion;
			for (var key in req) {
				if (key !== 'andriodversion' && key !== 'version') {
					urlStr += '&' + key + '=' + req[key]
				}
			}
			setDataToAnd(urlStr);
		},
		error: function () {}
	});
}

/* 产品退订 */
var tuidingUrl = host + 'goods/unsubscribeGoods.htm';
function getTuiding (dataCode,proId,proName) {
	$.ajax({
		url: tuidingUrl,
		data: {
			reqvsn: '1.0',
			para: '{"info":{"channel":"1","cacard":"'+ cacard +'","goodscode":"'+dataCode+'","productId":"'+ proId +'","productName":"'+ proName +'"}}'
		},
		success: function (res) {
			if (res.isSuccess == '1') {
				// 退订成功
				window.location.href = './unsubscribe.html';
			} else {
				// 退订失败
				window.location.href = './resTip.html?status=error&html=order&title=退订失败';
			}
		},
		error: function (err) {
			console.log(err);
		}
	});
}

/* 获取已退订产品 */
var hasTuidingUrl = host + 'goods/queryCancelGoods.htm';
function getTuidingGoods () {
	$.ajax({
		url: hasTuidingUrl,
		data: {
			reqvsn: '1.0',
			para: '{"info":{"channel":"1","cacard":"'+ cacard +'"}}'
		},
		success: function (res) {
			if (res.goods) {
				initTemp(res.page_count,res.goods_cnt,res.goods);
			} else {
				noGoods();
			}
		},
		error: function () {}
	});
}

/* 回调页面请求卡券信息 */
var cardRollsCallbackUrl = host + 'user/cardRoll.htm';
function getCardRollsCallback(sku,goodsname) {
	$.ajax({
		url: cardRollsCallbackUrl,
		data: {
			reqvsn: '1.0',
			para: '{"info":{"channel":"1","cacard":"'+ cacard +'","productName":"'+goodsname+'","sku":"'+sku+'"}}'
		},
		success: function (res) {
			if (res.cards.length) {
				$('.rolls-wrapper').removeClass('hidden');
				$('.rollscard').html(res.cards[0].cardroll);
				$('.rollspwd').html(res.cards[0].cardpwd);
			} else {

			}
		},
		error: function (err) {
			console.log(err);
		}
	});
}

/* 时间接口 */
var timeUrl = host + 'user/getTime.htm';
function getTime () {
	$.ajax({
		url: timeUrl,
		data: {
			reqvsn: '1.0',
			para: '{"info":{"channel":"1","cacard":"'+ cacard +'"}}'
		},
		success: function (data) {
			getinitTime(data.time);
			startTime(data.time);
		}
	});
}
getTime();
