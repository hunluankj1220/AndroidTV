
/* 公共方法 */
// 退出安卓应用
function setQuitToAndr (str) {
	jsObject.quitApply(str);
	return 'true';
}

// 返回按钮获取焦点
function backGetFocus (id) {
	$('#' + id).attr('src', './images/icon-goback-active.png');
}
// 返回按钮失去焦点
function backLoseFocus (id) {
	$('#' + id).attr('src', './images/icon-goback.png');
}

// 焦点监测
// 测试监听焦点
$(document).on('keydown', function(e){
	// alert(Keyboard.BACKSPACE);
	// alert(e.which);
	switch (e.which + '') {
		case '13':
			doEnter();
			return false;
			break;
		case '167':
			doQuit();
			return false;
			break;
		case '40':
			doDown();
			return false;
			break;
		case '38':
			doUp();
			return false;
			break;
		case '37':
			doLeft();
			return false;
			break;
		case '39':
			doRight();
			return false;
			break;
		case '49':
			doPress_1();
			return false;
			break;
		case '50':
			doPress_2();
			return false;
			break;
		case '51':
			doPress_3();
			return false;
			break;
		case '52':
			doPress_4();
			return false;
			break;
		case '53':
			doPress_5();
			return false;
			break;
		case '54':
			doPress_6();
			return false;
			break;
		case '55':
			doPress_7();
			return false;
			break;
		case '56':
			doPress_8();
			return false;
			break;
		case '57':
			// 模拟刷新
			// window.location.reload();
			doPress_9();
			return false;
			break;
		case '48':
			// 模拟回退
			// doQuit();
			// 实际
			doPress_0();
			return false;
			break;
	}
});
// 模拟遥控器

$('#down').click(function(){
	doDown();
});
$('#up').click(function(){
	doUp();
});
$('#left').click(function(){
	doLeft();
});
$('#right').click(function(){
	doRight();
});
$('#ok').click(function(){
	doEnter();
});
$('#quit').click(function(){
	doQuit();
});
$('#tab0').click(function(){
	doPress_0();
});
$('#tab1').click(function(){
	doPress_1();
});
$('#tab2').click(function(){
	doPress_2();
});
$('#tab3').click(function(){
	doPress_3();
});
$('#tab4').click(function(){
	doPress_4();
});
$('#tab5').click(function(){
	doPress_5();
});
$('#tab6').click(function(){
	doPress_6();
});
$('#tab7').click(function(){
	doPress_7();
});
$('#tab8').click(function(){
	doPress_8();
});
$('#tab9').click(function(){
	doPress_9();
});

/* 姓名展示 */
function initName (str) {
	var name = '';
	if (str.length == 1) {
		name = str;
		return name;
	} else if (str.length > 1 && str.length <= 3) {
		name = str.slice(1,str.length); //slice() 方法可从已有的数组中返回选定的元素 有两个参数 参数1 从何处开始  参数从何处
		return '*' + name;
	} else if (str.length > 3) {
		name = str.slice(1,3);
		return '*' + name + '...';
	}
}

/* 详情中公共方法 */

// active
function dSelected () {
	$('#' + detailFocus).addClass('active');//#也是选择器，这样写可以动态的绑定
}

// cancel
function dCancel () {
	$('#' + detailFocus).removeClass('active');
}

// 详情展示
function showDetail () {
	$('#wrapper').addClass('hidden');
	$('#detailWrapper').removeClass('hidden');
	$('#goodsDetails').addClass('hidden');
	$('.file').addClass('hidden');
}

// 详情取消展示
function hideDetail () {
	$('#wrapper').removeClass('hidden');
	$('#detailWrapper').addClass('hidden');
  $('#goodsDetails').addClass('hidden');
	$('.file').removeClass('hidden');
}


// hasGood 
function hasGood (focus) {
	if ($('#page' + curPage + '-' + focus)[0]) {
		return true;
	} else {
		return false;
	}
}
// hasList
function hasList (focus) {
	if ($('#' + focus)[0]) {
		return true;
	} else {
		return false;
	}
}

// loading
function loading (id) {	
	var animateHtml = '<div class="loader">' 
        + '<div class="loader-inner ball-spin-fade-loader">'
        +  	'<div></div>'
        +  	'<div></div>'
        +  	'<div></div>'
        +  	'<div></div>'
        +  	'<div></div>'
        +  	'<div></div>'
        +  	'<div></div>'
        +  	'<div></div>'
        + 	'</div>'
        + '</div>';
    if (id) {
    	$('#' + id).append(animateHtml); //append追加
    } else {
    	$('.load-wrapper').append(animateHtml);
    }
    
}

// loaded
function loaded (id) {
	$('.loader').animate({opacity: 0},200, function() { //animate() 方法执行 CSS 属性集的自定义动画。
		$('#load-wrapper').remove('.loader');
	});
}

// 解析地址栏查询参数
function parseQuery () {
	if (window.location.href.indexOf('?') !== -1) {
		var queryString = window.location.href.split('?')[1];
		var queryArr = queryString.split('&');
		var queryObj = {};
		for (var i = 0; i < queryArr.length; i++) {
			queryObj[queryArr[i].split('=')[0]] = queryArr[i].split('=')[1];
		}
		return queryObj;
	} else {
		return '';
	}
}

//获取时间
function getinitTime(ms){
	var nowDate = new Date(ms);
	var month = nowDate.getMonth() + 1;
	var date = nowDate.getDate();
	var day = nowDate.getDay();
	var arr = ['日','一','二','三','四','五','六'];
	var hour = nowDate.getHours() < 10 ? '0' + nowDate.getHours() : nowDate.getHours();
	var minute = nowDate.getMinutes() < 10 ? '0' + nowDate.getMinutes() : nowDate.getMinutes();
	$('#date').html(month + '月' + date + '日');
	$('#day').html('周' + arr[day]);
	$('#time').html(hour + ':' + minute);
}
// 时间定时器
function startTime (ms) {
	setInterval(function(){
		ms += 1000*60;
		getinitTime(ms);
	}, 1000*60);
}




