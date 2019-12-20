// 焦点模式 fileModel mainModel
var focusModel = 'fileModel';
var curPage = 1;
var totalPage = 1;
var focus = '';

// selected
function selected () {
	if (focusModel == 'mainModel') {
		$('#' + focus).addClass('active');
	}
}

// cancel
function cancel () {
	if (focusModel == 'mainModel') {
		$('#' + focus).removeClass('active');
	}
}

// doUp
function doUp () {
	if (focusModel == 'fileModel' && $('#noGoods').hasClass('hidden')) {
		$('.file-unsubscribe').addClass('file-lose');
		focusModel = 'mainModel';
		focus = 'page1-focus1';
		selected();
	} else if (focusModel == 'mainModel') {
		switch (focus) {
			case 'page' + curPage + '-focus1':
			case 'page' + curPage + '-focus2':
			case 'page' + curPage + '-focus3':
				cancel();
				focus = 'focus0';
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
	}
}

// doLeft
function doLeft () {
	if (focusModel == 'fileModel') {
		window.location.href = './order.html';
	} else if (focusModel == 'mainModel') {
		switch (focus) {
			case 'page' + curPage + '-focus1':
				// 判断是否翻页
				if (curPage > 1) {
					// 向上翻页
					cancel();
					toPage(curPage - 1);
					focus = 'page' + curPage + '-focus1';
					selected();
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
				// 判断是否翻页
				if (curPage > 1) {
					// 向上翻页
					cancel();
					toPage(curPage - 1);
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
	}
}

// doRight
function doRight () {
	if (focusModel == 'fileModel') {
		window.location.href = './help.html';
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
				// 判断是否翻页
				if (curPage < totalPage) {
					// 翻页
					toPage(curPage + 1);
					cancel();
					focus = 'page' + curPage + '-focus1';
					selected();
				} else {
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
				if (hasGood('focus5')) {
					cancel();
					focus = 'page' + curPage + '-focus6';
					selected();
				}
				break;
			case 'page' + curPage + '-focus6':
				// 判断是否翻页
				if (curPage < totalPage) {
					// 翻页
					toPage(curPage + 1);
					cancel();
					focus = 'page' + curPage + '-focus1';
					selected();
				}
				break;
		}
	}
}

// doDown
function doDown () {
	if (focusModel == 'mainModel') {
		switch (focus) {
			case 'focus0':
				cancel();
				focus = 'page' + curPage + '-focus1';
				selected();
				break;
			case 'page' + curPage + '-focus1':
				if (hasGood('focus4')) {
					cancel();
					focus = 'page' + curPage + '-focus4';
					selected();
				} else {
					cancel();
					// 变为菜单模式
					focusModel = 'fileModel';
					$('.file-unsubscribe').removeClass('file-lose');
					focus = '';
					if (curPage !== 1) {
						toPage(1);
					}
				}
				break;
			case 'page' + curPage + '-focus2':
				if (hasGood('focus5')) {
					cancel();
					focus = 'page' + curPage + '-focus5';
					selected();
				} else {
					cancel();
					// 变为菜单模式
					focusModel = 'fileModel';
					$('.file-unsubscribe').removeClass('file-lose');
					focus = '';
					if (curPage !== 1) {
						toPage(1);
					}
				}
				break;
			case 'page' + curPage + '-focus3':
				if (hasGood('focus6')) {
					cancel();
					focus = 'page' + curPage + '-focus6';
					selected();
				} else {
					cancel();
					// 变为菜单模式
					focusModel = 'fileModel';
					$('.file-unsubscribe').removeClass('file-lose');
					focus = '';
					if (curPage !== 1) {
						toPage(1);
					}
				}
				break;
			case 'page' + curPage + '-focus4':
			case 'page' + curPage + '-focus5':
			case 'page' + curPage + '-focus6':
				cancel();
				// 变为菜单模式
				focusModel = 'fileModel';
				$('.file-unsubscribe').removeClass('file-lose');
				focus = '';
				toPage(1);
				break;
		}
	}
}

function doEnter () {
	if (focusModel == 'mainModel') {
		if (focus == 'focus0') {
			window.location.href = './search.html?html=unsubscribe';
		}
	}
}

function doQuit () {
	if (focusModel == 'fileModel') {
		// 回到首页
		window.location.href = './home.html';
	}
}


// 页面加载完成
$(function(){
	// 向安卓传递数据
	setQuitToAndr('false');
	// 请求数据
	loading();
	getTuidingGoods();
});

// toPage
function toPage (page) {
	curPage = page;
	$('.content-inner').animate({
		left: (1-page) * 1086 + 'px'
	},300, function() {
		console.log('ok');
	});
}

// initTemp
function initTemps (pages,counts,lists) {
	totalPage = pages;
	$('#orders').css('width', 1086*pages+'px');
	var html = '';
	// 多页时
	if (pages > 1) {
		for (var i = 1; i <= pages; i++) {
			if (i == 1) {
				html += '<ul class="clear page">'
				for (var j = (i-1)*6; j < i*6; j++) {
					html += '<li id="page'+i+'-focus'+ (j+1-(6*(i-1))) +'" data-code="'+ lists[j].goodscode +'" class="item">'
						+	'<p class="title">'+ lists[j].goodsname +'</p>'
						+	'<div class="time">'
						+		'<p>退订日期 </p>'
						+		'<p>'+ lists[j].endtime +'</p>'
						+	'</div>'
						+ '</li>';
				}
				html += '</ul>';
			} else if (i > 1 && i < pages) {
				html += '<ul class="clear page">'
				for (var j = (i-1)*6; j < i*6; j++) {
					html += '<li id="page'+i+'-focus'+ (j+1-(6*(i-1))) +'" class="item">'
						+	'<p class="title">'+ lists[j].goodsname +'</p>'
						+	'<div class="time">'
						+		'<p>退订日期 </p>'
						+		'<p>'+ lists[j].endtime +'</p>'
						+	'</div>'
						+ '</li>';
				}
				html += '</ul>';
			} else if (i == pages) {
				html += '<ul class="clear page">'
				for (var j = (i-1)*6; j < counts; j++) {
					html += '<li id="page'+ i +'-focus'+ (j+1-(pages-1)*6) +'" class="item">'
						+	'<p class="title">'+ lists[j].goodsname +'</p>'
						+	'<div class="time">'
						+		'<p>退订日期 </p>'
						+		'<p>'+ lists[j].endtime +'</p>'
						+	'</div>'
						+ '</li>';
				}
				html += '</ul>';
			}
		}
		// 只有一页时
	} else if (pages == 1) {
		html += '<ul class="clear page">'
		for (var i = 0; i < counts; i++) {
			html += '<li id="page1-focus'+ (i+1) +'" class="item">'
						+	'<p class="title">'+ lists[i].goodsname +'</p>'
						+	'<div class="time">'
						+		'<p>退订日期 </p>'
						+		'<p>'+ lists[i].endtime +'</p>'
						+	'</div>'
						+ '</li>';
		}
	}
	// 向页面填充数据
	$('#orders').html(html);
}

// noGoods
function noGoods () {
	loaded();
	$('#noGoods').removeClass('hidden');
}