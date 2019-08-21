/* focus control */
var focus = 'page1-focus1';
selected();
var focusDetail = false;
var curPage = 1;
var totalPage = 2;


// focus active
function selected () {
	$('#' + focus).addClass('active');
}
function cancel () {
	$('#' + focus).removeClass('active');
}

// doUp
function doUp () {
	if (focusDetail == false) {
		switch (focus) {
			case 'page' + curPage + '-focus1':
			case 'page' + curPage + '-focus2':
			case 'page' + curPage + '-focus3':
			case 'page' + curPage + '-focus4':
				// 判断是否翻页
				if (curPage > 1) {
					cancel();
					toPage(curPage - 1);
					focus = 'page' + curPage + '-focus1';
					selected();
				}
				break;
			case 'page' + curPage + '-focus5':
				if (hasGood('focus1')) {
					cancel();
					focus = 'page' + curPage + '-focus1';
					selected();
				}
				break;
			case 'page' + curPage + '-focus6':
				if (hasGood('focus2')) {
					cancel();
					focus = 'page' + curPage + '-focus2';
					selected();
				}
				break;
			case 'page' + curPage + '-focus7':
				if (hasGood('focus3')) {
					cancel();
					focus = 'page' + curPage + '-focus3';
					selected();
				}
				break;
			case 'page' + curPage + '-focus8':
				if (hasGood('focus4')) {
					cancel();
					focus = 'page' + curPage + '-focus4';
					selected();
				}
				break;
		}
	}
}

// doDown
function doDown () {
	if (focusDetail == false) {
		switch (focus) {
			case 'page' + curPage + '-focus1':
				if (hasGood('focus5')) {
					cancel();
					focus = 'page' + curPage + '-focus5';
					selected();
				}
				break;
			case 'page' + curPage + '-focus2':
				if (hasGood('focus6')) {
					cancel();
					focus = 'page' + curPage + '-focus6';
					selected();
				}
				break;
			case 'page' + curPage + '-focus3':
				if (hasGood('focus7')) {
					cancel();
					focus = 'page' + curPage + '-focus7';
					selected();
				}
				break;
			case 'page' + curPage + '-focus4':
				if (hasGood('focus8')) {
					cancel();
					focus = 'page' + curPage + '-focus8';
					selected();
				}
				break;
			case 'page' + curPage + '-focus5':
			case 'page' + curPage + '-focus6':
			case 'page' + curPage + '-focus7':
			case 'page' + curPage + '-focus8':
				// 判断是否翻页
				if (curPage < totalPage) {
					cancel();
					toPage(curPage + 1);
					focus = 'page' + curPage + '-focus1';
					selected();
				}
				break;
		}
	}
}

// doLeft
function doLeft () {
	if (focusDetail == false) {
		switch (focus) {
			case 'page' + curPage + '-focus1':
				// 判断是否翻页
				if (curPage > 1) {
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
				if (hasGood('focus3')) {
					cancel();
					focus = 'page' + curPage + '-focus3';
					selected();
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
			case 'page' + curPage + '-focus7':
				if (hasGood('focus6')) {
					cancel();
					focus = 'page' + curPage + '-focus6';
					selected();
				}
				break;
			case 'page' + curPage + '-focus8':
				if (hasGood('focus7')) {
					cancel();
					focus = 'page' + curPage + '-focus7';
					selected();
				}
				break;
		}
	} else if (focusDetail == true) {
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
	if (focusDetail == false) {
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
				if (hasGood('focus4')) {
					cancel();
					focus = 'page' + curPage + '-focus4';
					selected();
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
				if (hasGood('focus7')) {
					cancel();
					focus = 'page' + curPage + '-focus7';
					selected();
				}
				break;
			case 'page' + curPage + '-focus7':
				if (hasGood('focus8')) {
					cancel();
					focus = 'page' + curPage + '-focus8';
					selected();
				}
				break;
			case 'page' + curPage + '-focus8':
				// 判断是否翻页
				if (curPage < totalPage) {
					cancel();
					toPage(curPage + 1);
					focus = 'page' + curPage + '-focus1';
					selected();
				}
				break;
		}
	} else if (focusDetail == true) {
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
	if (focusDetail == false) {
		showDetail();
		$('#back').addClass('hidden');
		focusDetail = true;
		detailFocus = 'order';
		dSelected();
	} else if (focusDetail) {
		switch (detailFocus) {
			case 'order':
				alert('order');
				break;
			case 'cancel':
				dCancel();
				hideDetail();
				focusDetail = false;
				$('#back').removeClass('hidden');
				break;
		}
	}
}

// doQuit
function doQuit () {
	if (focusDetail == false) {
		window.location.href = './goods.html';
	}
}


/* function */

// toPage
function toPage (page) {
	curPage = page;
	$('.content-inner').animate({
		top: (1-page) * 654 + 'px'
	},300, function() {
		console.log('ok');
	});
}



