/* focus control */

// 焦点模式 
// *fileModel/菜单模式 *mainModel/主模式  *pageModel/翻页模式 *alertModel/弹框模式 *inputModel/输入模式
var focusModel = 'fileModel';
var canCharge = false; // 弹框模式下是否可进行充值
// init focus
var focus = '';
// 初始化数据
var agreeFlag = true;
var deductionAmount = ''; // 即将到期金额
var amount = '';          // 账户总金额
var allUseProductAmount = ''; // 消费总金额 
var chargeMoney = '';  // 充值金额

function selected() {
	$('#' + focus).addClass('active');
}
function cancel() {
	$('#' + focus).removeClass('active');
}
// focus active
function getFocus() {
	var pay = '';
	switch (focus) {
		case 'focus1':
			pay = '50';
			break;
		case 'focus2':
			pay = '100';
			break;
		case 'focus3':
			pay = '300';
			break;
		case 'focus4':
			pay = '500';
			break;
		case 'focus5':
			pay = '1000';
			break;
		case 'focus6':
			pay = 'other';
			$('#focus6').html('请输入充值金额');
			break;
		case 'focus7':
			$('#focus7').addClass('focus7-active');
			return false;
			break;
		case 'focus8':
			$('#focus8').addClass('focus8-active');
			return false;
			break;
	}
	$('#' + focus).addClass('pay-' + pay + '-active');
}

// focus lose
function loseFocus() {
	switch (focus) {
		case 'focus1':
			pay = '50';
			break;
		case 'focus2':
			pay = '100';
			break;
		case 'focus3':
			pay = '300';
			break;
		case 'focus4':
			pay = '500';
			break;
		case 'focus5':
			pay = '1000';
			break;
		case 'focus6':
			pay = 'other';
			$('#focus6').html('其他金额');
			chargeMoney = '';
			break;
		case 'focus7':
			$('#focus7').removeClass('focus7-active');
			return false;
			break;
		case 'focus8':
			$('#focus8').removeClass('focus8-active');
			return false;
			break;
	}
	$('#' + focus).removeClass('pay-' + pay + '-active');
}

// focus page
function pageActive(page) {
	$('.pages .page-num-' + page).addClass('page-active').siblings().removeClass('page-active');
}

// doUp
function doUp() {
	// 菜单模式
	if (focusModel == 'fileModel') {
		// 变为主模式
		focusModel = 'mainModel';
		$('.file-charge').addClass('file-lose');
		// focus = 'focus1';
		// getFocus();

		//2019-12-12
		// loseFocus();
		focus = 'focus00';
		$('#focus00').addClass('active');
		// $('.file-charge').removeClass('file-lose');
		// 主模式
	} else if (focusModel == 'mainModel') {
		switch (focus) {
			case 'focus1':
			case 'focus2':
			case 'focus3':
				// loseFocus();
				// focus = 'focus0';
				// $('#focus0').addClass('active');

				//2019-12-12
				loseFocus();
				focus = '';
				// 进入菜单模式
				focusModel = 'fileModel';
				$('.file-charge').removeClass('file-lose');
				break;
			case 'focus4':
				loseFocus();
				focus = 'focus1';
				getFocus();
				break;
			case 'focus5':
				loseFocus();
				focus = 'focus2';
				getFocus();
				break;
			case 'focus6':
				loseFocus();
				focus = 'focus3';
				getFocus();
				break;
			case 'focus7':
			case 'focus8':
				loseFocus();
				focus = 'focus5';
				getFocus();
				break;
		}
	}
}

// doLeft
function doLeft() {
	// 菜单模式
	if (focusModel == 'fileModel') {
		window.location.href = './goods.html';
		// 主模式
	} else if (focusModel == 'mainModel') {
		switch (focus) {
			case 'focus01':
				cancel();
				$('.file-charge').addClass('file-lose'); //给.file-home添加一个类file-lose
				focus = 'focus0';
				selected();
				break;
			case 'focus0':
				cancel();
				$('.file-charge').addClass('file-lose'); //给.file-home添加一个类file-lose
				focus = 'focus00';
				selected();
				break;
			case 'focus00':
				cancel();
				$('.file-charge').addClass('file-lose'); //给.file-home添加一个类file-lose
				focus = 'focus01';
				selected();
				break;
			case 'focus2':
				loseFocus();
				focus = 'focus1';
				getFocus();
				break;
			case 'focus3':
				loseFocus();
				focus = 'focus2';
				getFocus();
				break;
			case 'focus4':
				loseFocus();
				focus = 'focus3';
				getFocus();
				break;
			case 'focus5':
				loseFocus();
				focus = 'focus4';
				getFocus();
				break;
			case 'focus6':
				loseFocus();
				focus = 'focus5';
				getFocus();
				break;
			case 'focus8':
				loseFocus();
				focus = 'focus7';
				getFocus();
				break;
			case 'focus7':
				loseFocus();
				focus = 'focus8';
				getFocus();
				break;
		}
		// 翻页模式
	} else if (focusModel == 'pageModel') {
		switch (focus) {
			case 'page2':
				focus = 'page1';
				pageActive(1);
				toPage(1);
				break;
			case 'page3':
				focus = 'page2';
				pageActive(2);
				toPage(2);
				break;
			case 'page4':
				focus = 'page3';
				pageActive(3);
				toPage(3);
				break;
		}
	}
}

// doRight
function doRight() {
	// 菜单模式
	if (focusModel == 'fileModel') {
		window.location.href = './order.html';
		// 主模式
	} else if (focusModel == 'mainModel') {
		switch (focus) {
			case 'focus00':
				console.log(focus)
				cancel();
				$('.file-charge').addClass('file-lose'); //给.file-charge添加一个类file-lose
				focus = 'focus0';
				selected();
				break;
			case 'focus0':
				cancel();
				$('.file-charge').addClass('file-lose'); //给.file-charge添加一个类file-lose
				focus = 'focus01';
				selected();
				break;
			case 'focus01':
				cancel();
				$('.file-charge').addClass('file-lose'); //给.file-charge添加一个类file-lose
				focus = 'focus00';
				selected();
				break;
			case 'focus1':
				loseFocus();
				focus = 'focus2';
				getFocus();
				break;
			case 'focus2':
				loseFocus();
				focus = 'focus3';
				getFocus();
				break;
			case 'focus3':
				loseFocus();
				focus = 'focus4';
				getFocus();
				break;
			case 'focus4':
				loseFocus();
				focus = 'focus5';
				getFocus();
				break;
			case 'focus5':
				loseFocus();
				focus = 'focus6';
				chargeMoney = '';
				getFocus();
				break;
			case 'focus7':
				loseFocus();
				focus = 'focus8';
				getFocus();
				break;
			case 'focus8':
				loseFocus();
				focus = 'focus7';
				getFocus();
				break;
		}
		// 翻页模式
	} else if (focusModel == 'pageModel') {
		switch (focus) {
			case 'page1':
				focus = 'page2';
				pageActive(2);
				toPage(2);
				break;
			case 'page2':
				focus = 'page3';
				pageActive(3);
				toPage(3);
				break;
			case 'page3':
				focus = 'page4';
				pageActive(4);
				toPage(4);
				break;
		}
	}
}

// doDown
function doDown() {
	// 主模式
	if (focusModel == 'fileModel') {
		// 变为主模式
		focusModel = 'mainModel';
		$('.file-charge').addClass('file-lose');
		// $('#focus00').removeClass('active');
		focus = 'focus1';
		getFocus();
		// 主模式
	} else if (focusModel == 'mainModel') {
		switch (focus) {
			case 'focus00':
			case 'focus0':
			case 'focus01':
				// focus = 'focus1';
				// getFocus();

				//2019-12-12
				// loseFocus();
				cancel();
				focus = '';
				// 进入菜单模式
				focusModel = 'fileModel';
				$('.file-charge').removeClass('file-lose');
				// $('#focus00').removeClass('active');
				$('.channel-active').addClass('hidden');
				break;
			case 'focus1':
				loseFocus();
				focus = 'focus4';
				getFocus();
				break;
			case 'focus2':
				loseFocus();
				focus = 'focus5';
				getFocus();
				break;
			case 'focus3':
				loseFocus();
				focus = 'focus6';
				chargeMoney = '';
				getFocus();
				break;
			case 'focus4':
			case 'focus5':
			case 'focus6':
				loseFocus();
				focus = 'focus7';
				getFocus();
				break;
			case 'focus7':
			case 'focus8':
				loseFocus();
				focus = '';
				// 进入菜单模式
				focusModel = 'fileModel';
				$('.file-charge').removeClass('file-lose');

				//2019-12-12
				// loseFocus();
				// focus = 'focus00';
				// $('#focus00').addClass('active');
				break;
		}
	}
}

// doEnter 
function doEnter() {
	// 主模式
	if (focusModel == 'mainModel') {
		switch (focus) {
			case 'focus00':
				//人中心
				window.location.href = './personal.html?html=charge';
				return false;
				break;
			case 'focus0':
				window.location.href = './search.html?html=charge';
				return false;
				break;
			case 'focus01':
				window.location.href = './help.html?html=charge';
				return false;
				break;
			case 'focus1':
				chargeMoney = '50';
				break;
			case 'focus2':
				chargeMoney = '100';
				break;
			case 'focus3':
				chargeMoney = '300';
				break;
			case 'focus4':
				chargeMoney = '500';
				break;
			case 'focus5':
				chargeMoney = '1000';
				break;
			case 'focus6':
				// chargeMoney = '';
				break;
			case 'focus7':
				if ($('#focus7 img').hasClass('hidden')) {
					$('#focus7 img').removeClass('hidden');
					agreeFlag = true;
				} else {
					$('#focus7 img').addClass('hidden');
					agreeFlag = false;
				}
				return false;
				break;
			case 'focus8':
				$('.charge-box').addClass('hidden');
				$('.xieyi-box').removeClass('hidden');
				// 进入翻页模式
				focusModel = 'pageModel';
				focus = 'page1';
				pageActive(1);
				return false;
				break;
		}
		// 是否同意充值协议的判断
		if (agreeFlag == false) {
			$('#wxtips').html('请先阅读并同意充值相关协议');
			boxShow();
			canCharge = false;
			focusModel = 'alertModel';
			return false;
		} else {
			canCharge = true;
			focusModel = 'alertModel';
		}
		// 进行充值金额的判断
		if (chargeMoney == '') {
			$('#wxtips').html('请输入充值金额');
			boxShow();
			canCharge = false;
			focusModel = 'alertModel';
			return false;
		}
		if (parseInt(chargeMoney) < 50) {
			$('#wxtips').html('充值金额不能小于50元');
			boxShow();
			canCharge = false;
			focusModel = 'alertModel';
			return false;
		}
		if (parseInt(chargeMoney) > 2000) {
			$('#wxtips').html('充值金额不能大于2000元');
			boxShow();
			canCharge = false;
			focusModel = 'alertModel';
			return false;
		}

		// 续订续扣的提示
		if (parseInt(deductionAmount) == 0) {
			$('#wxtips').html('尊敬的用户，您好，欢迎使用湖南有线电视业务。您现在账户余额为<span id="leftMoney">' + amount + '</span>元，当前在用产品总消费金额为<span id="allxiaofei">' + allUseProductAmount + '</span>元。为保障您的业务到期后能正常使用，请保持账户余额充足，产品到期后将可直接抵扣。');
			boxShow();
			canCharge = true;
			focusModel = 'alertModel';
		} else {
			$('#wxtips').html('尊敬的用户，您好，欢迎使用湖南有线电视业务。您现在账户余额为<span id="leftMoney0">' + amount + '</span>元，当前在用产品总消费金额为<span id="allxiaofei0">' + allUseProductAmount + '</span>元,即将到期产品金额为<span id="xiaofei">' + deductionAmount + '</span>元。为保障您的业务到期后能持续使用，请确保您充值后的账户余额高于<span id="xiaofei0">' + deductionAmount + '</span>元。');
			boxShow();
			canCharge = true;
			focusModel = 'alertModel';
		}
		// 弹框模式
	} else if (focusModel == 'alertModel') {
		if (canCharge) {
			// alert('充值' + chargeMoney);
			getCharge(chargeMoney);
			// 进行充值
		} else {
			boxClose();
			focusModel = 'mainModel';
		}
	}

}



// doQuit
function doQuit() {
	// 翻页模式
	if (focusModel == 'pageModel') {
		toPage(1);
		// 进入主模式
		focusModel = 'mainModel';
		$('.xieyi-box').addClass('hidden');
		$('.charge-box').removeClass('hidden');
		focus = 'focus8';
		getFocus();
		// 主模式下
	} else if (focusModel == 'mainModel') {
		// 删除输入的金额
		if (focus == 'focus6') {
			if (chargeMoney.length > 0) {
				chargeMoney = chargeMoney.substring(0, chargeMoney.length - 1);
				$('#focus6').html(chargeMoney);
			}
		}
		// 主菜单模式
	} else if (focusModel == 'fileModel') {
		// 回到首页
		window.location.href = './home.html';
		// 弹框模式
	} else if (focusModel == 'alertModel') {
		boxClose();
		focusModel = 'mainModel';
	}
}

// doPress
function doPress_0() {
	if (chargeMoney.length < 4 && focus == 'focus6') {
		chargeMoney += 0;
		$('#focus6').html(chargeMoney);
	}
}
function doPress_1() {
	if (chargeMoney.length < 4 && focus == 'focus6') {
		chargeMoney += 1;
		$('#focus6').html(chargeMoney);
	}
}
function doPress_2() {
	if (chargeMoney.length < 4 && focus == 'focus6') {
		chargeMoney += 2;
		$('#focus6').html(chargeMoney);
	}
}
function doPress_3() {
	if (chargeMoney.length < 4 && focus == 'focus6') {
		chargeMoney += 3;
		$('#focus6').html(chargeMoney);
	}
}
function doPress_4() {
	if (chargeMoney.length < 4 && focus == 'focus6') {
		chargeMoney += 4;
		$('#focus6').html(chargeMoney);
	}
}
function doPress_5() {
	if (chargeMoney.length < 4 && focus == 'focus6') {
		chargeMoney += 5;
		$('#focus6').html(chargeMoney);
	}
}
function doPress_6() {
	if (chargeMoney.length < 4 && focus == 'focus6') {
		chargeMoney += 6;
		$('#focus6').html(chargeMoney);
	}
}
function doPress_7() {
	if (chargeMoney.length < 4 && focus == 'focus6') {
		chargeMoney += 7;
		$('#focus6').html(chargeMoney);
	}
}
function doPress_8() {
	if (chargeMoney.length < 4 && focus == 'focus6') {
		chargeMoney += 8;
		$('#focus6').html(chargeMoney);
	}
}
function doPress_9() {
	if (chargeMoney.length < 4 && focus == 'focus6') {
		chargeMoney += 9;
		$('#focus6').html(chargeMoney);
	}
}

/* function */
// toPage
function toPage(page) {
	$('#xieyi').animate({
		left: (1 - page) * 860 + 'px'
	}, 200);
}


// 弹框
function boxShow() {
	$('.modelOver').addClass('modelShow');
	$('.alertBox').addClass('alertShow');
}
function boxClose() {
	$('.modelOver').removeClass('modelShow');
	$('.alertBox').removeClass('alertShow');
}


/* 数据加载 */
$(function () {
	getInfo();
})

// 封装信息加载
function getInfo() {
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
				window.location.href = './resTip.html?status=error&html=charge&title=数据请求失败';
			} else {
				$('#card').html(data.cacard);
				$('#money').html(data.amount);
				deductionAmount = data.deductionAmount;
				amount = data.amount;
				allUseProductAmount = data.allUseProductAmount;
			}
		},
		error: function () {
			window.location.href = './resTip.html?status=error&html=charge&title=网络请求超时';
		}
	});
}




