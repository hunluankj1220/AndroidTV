
$(function(){
	setQuitToAndr('false');
});

/* focus control */
var focus = 'key-1';
console.log(focus)
var t9Focus = ''; // t9输入法时小焦点
selected();
var searchText = '';
var detailFocus = '';

/* 焦点模式 */
// *inputModel/输入模式 根据缓存的输入法确定展现
// *editModel/编辑模式 
// *tabModel/切换模式 
// *selectModel/搜索选择模式
// *detailModel/详情模式
// *yuyueModel/预约模式
var focusModel = 'inputModel';
var cacheInput = 'keyboard'; // keyboard/全键盘模式    t9board/9键输入模式

// key active / cancel
function selected () {
	$('#' + focus).addClass('b-active');
}
function cancel () {
	$('#' + focus).removeClass('b-active');
}

// t9 active / cancel
function tSelected () {
	if (focus == 't-1') {
		$('#' + focus).addClass('t-1-active');
	} else if (focus == 't-7' || focus == 't-9') {
		$('#' + focus).addClass('t-s-active');
	} else {
		$('#' + focus).addClass('t-active');
	}
}

function tCancel () {
	if (focus == 't-1') {
		$('#' + focus).removeClass('t-1-active');
	} else if (focus == 't-7' || focus == 't-9') {
		$('#' + focus).removeClass('t-s-active');
	} else {
		$('#' + focus).removeClass('t-active');
	}
}

// t9输入法小焦点 active / cancel
function smSelected () {
	$('#' + t9Focus).addClass('b-active');
}
function smCancel () {
	$('#' + t9Focus).removeClass('b-active');
}

// btn active
function selectedRes () {
	$('#' + focus).addClass('item-active');
}
function cancelRes () {
	$('#' + focus).removeClass('item-active');
}

// doUp 
function doUp () {
	// 输入模式
	if (focusModel == 'inputModel') {
		// 区分输入法
		switch (cacheInput) {
			// 全键盘输入
			case 'keyboard':
				var curKey = parseInt(focus.split('-')[1]);
				if (curKey > 5) {
					curKey = curKey - 5;
					cancel();
					focus = 'key-' + curKey;
					selected();
				} else {
					// 进入编辑模式
					focusModel = 'editModel';
					cancel();
					focus = 'empty';
					selected();
				}
				break;
			// 9键输入
			case 't9board':
				if (focus == 't-9') {
					switch (t9Focus) {
						case 't-9-1':
							// 进入t-6
							smCancel();
							tCancel();
							focus = 't-6';
							t9Focus = 't-6-1';
							smSelected();
							tSelected();
							break;
						case 't-9-2':
						case 't-9-3':
						case 't-9-4':
							smCancel();
							t9Focus = 't-9-1';
							smSelected();
							break;
						case 't-9-5':
							smCancel();
							t9Focus = 't-9-3';
							smSelected();
							break;
					}
				} else if (focus == 't-8') {
					switch (t9Focus) {
						case 't-8-1':
							// 进入t-5
							smCancel();
							tCancel();
							focus = 't-5';
							t9Focus = 't-5-1';
							smSelected();
							tSelected();
							break;
						case 't-8-2':
						case 't-8-3':
						case 't-8-4':
							smCancel();
							t9Focus = 't-8-1';
							smSelected();
							break;
					}
				} else if (focus == 't-7') {
					switch (t9Focus) {
						case 't-7-1':
							// 进入t-4
							smCancel();
							tCancel();
							focus = 't-4';
							t9Focus = 't-4-1';
							smSelected();
							tSelected();
							break;
						case 't-7-2':
						case 't-7-3':
						case 't-7-4':
							smCancel();
							t9Focus = 't-7-1';
							smSelected();
							break;
						case 't-7-5':
							smCancel();
							t9Focus = 't-7-3';
							smSelected();
							break;
					}
				} else if (focus == 't-6') {
					switch (t9Focus) {
						case 't-6-1':
							// 进入t-3
							smCancel();
							tCancel();
							focus = 't-3';
							t9Focus = 't-3-1';
							smSelected();
							tSelected();
							break;
						case 't-6-2':
						case 't-6-3':
						case 't-6-4':
							smCancel();
							t9Focus = 't-6-1';
							smSelected();
							break;
					}
				} else if (focus == 't-5') {
					switch (t9Focus) {
						case 't-5-1':
							// 进入t-2
							smCancel();
							tCancel();
							focus = 't-2';
							t9Focus = 't-2-1';
							smSelected();
							tSelected();
							break;
						case 't-5-2':
						case 't-5-3':
						case 't-5-4':
							smCancel();
							t9Focus = 't-5-1';
							smSelected();
							break;
					}
				} else if (focus == 't-4') {
					switch (t9Focus) {
						case 't-4-1':
							// 进入t-1
							smCancel();
							tCancel();
							focus = 't-1';
							t9Focus = 't-1-1';
							smSelected();
							tSelected();
							break;
						case 't-4-2':
						case 't-4-3':
						case 't-4-4':
							smCancel();
							t9Focus = 't-4-1';
							smSelected();
							break;
					}
				} else if (focus == 't-3') {
					switch (t9Focus) {
						case 't-3-1':
							// 进入编辑模式
							smCancel();
							tCancel();
							focus = 'back';
							t9Focus = '';
							focusModel = 'editModel';
							selected();
							break;
						case 't-3-2':
						case 't-3-3':
						case 't-3-4':
							smCancel();
							t9Focus = 't-3-1';
							smSelected();
							break;
					}
				} else if (focus == 't-2') {
					switch (t9Focus) {
						case 't-2-1':
							// 进入编辑模式
							smCancel();
							tCancel();
							focus = 'back';
							t9Focus = '';
							focusModel = 'editModel';
							selected();
							break;
						case 't-2-2':
						case 't-2-3':
						case 't-2-4':
							smCancel();
							t9Focus = 't-2-1';
							smSelected();
							break;
					}
				} else if (focus == 't-1') {
					switch (t9Focus) {
						case 't-1-1':
						case 't-1-2':
						case 't-1-3':
							// 进入编辑模式
							smCancel();
							tCancel();
							focus = 'back';
							t9Focus = '';
							focusModel = 'editModel';
							selected();
							break;
					}
				}
				break;
		}
		// 搜索选择模式
		// 搜索选择模式
		// 结果模式
		// 搜索选择模式
		// 搜索选择模式
	} else if (focusModel == 'selectModel') {
		var curRes = parseInt(focus.split('-')[1]);
		if (curRes > 1) {
			stopScroll();
			cancelRes();
			focus = 'res-' + (curRes - 1);
			showGoodInfo();
			selectedRes();
			scroll();
			startScroll();
		}
		// 切换模式
		// 输入切换模式
		// 输入切换模式
	} else if (focusModel == 'tabModel') {
		cancel();
		// 进入输入模式
		focusModel = 'inputModel';
		switch (cacheInput) {
			case 'keyboard':
				focus = 'key-31';
				selected();
				break;
			case 't9board':
				focus = 't-9';
				tSelected();
				t9Focus = 't-9-1';
				smSelected();
				break;
		}
		// 详情模式
	} else if (focusModel == 'detailModel') {
		// dCancel();
		// detailFocus = 'focus-d-back';
		// backGetFocus(detailFocus);
		// 编辑模式
	} else if (focusModel == 'editModel') {
		cancel();
		// 进入切换模式
		focusModel = 'tabModel';
		focus = 'keyboard';
		selected();
	}
}

// doDown
function doDown () {
	// 全键盘模式
	if (focusModel == 'inputModel') {
		switch (cacheInput) {
			// 全键盘输入
			case 'keyboard':
				var curKey = parseInt(focus.split('-')[1]);
				if (curKey <= 30) {
					curKey = curKey + 5;
					cancel();
					focus = 'key-' + curKey;
					selected();
				} else if (curKey > 30 && curKey <= 35) {
					cancel();
					// 进入切换模式
					focusModel = 'tabModel';
					switch (cacheInput) {
						case 'keyboard':
							focus = 'keyboard';
							selected();
							break;
						case 't9board':
							focus = 't9board';
							selected();
							break;
					}
				}
				break;
			// t9输入
			case 't9board':
				if (focus == 't-9') {
					switch (t9Focus) {
						case 't-9-1':
							smCancel();
							t9Focus = 't-9-3';
							smSelected();
							break;
						case 't-9-2':
							smCancel();
							t9Focus = 't-9-5';
							smSelected();
							break;
						case 't-9-3':
							smCancel();
							t9Focus = 't-9-5';
							smSelected();
							break;
						case 't-9-4':
							smCancel();
							t9Focus = 't-9-5';
							smSelected();
							break;
						case 't-9-5':
							smCancel();
							t9Focus = '';
							tCancel();
							// 进入切换模式
							focusModel = 'tabModel';
							focus = 't9board';
							selected();
							break;
					}
				} else if (focus == 't-8') {
					switch (t9Focus) {
						case 't-8-1':
							smCancel();
							t9Focus = 't-8-3';
							smSelected();
							break;
						case 't-8-2':
						case 't-8-3':
						case 't-8-4':
							smCancel();
							t9Focus = '';
							tCancel();
							// 进入切换模式
							focusModel = 'tabModel';
							focus = 't9board';
							selected();
							break;
					}
				} else if (focus == 't-7') {
					switch (t9Focus) {
						case 't-7-1':
							smCancel();
							t9Focus = 't-7-3';
							smSelected();
							break;
						case 't-7-2':
							smCancel();
							t9Focus = 't-7-5';
							smSelected();
							break;
						case 't-7-3':
							smCancel();
							t9Focus = 't-7-5';
							smSelected();
							break;
						case 't-7-4':
							smCancel();
							t9Focus = 't-7-5';
							smSelected();
							break;
						case 't-7-5':
							smCancel();
							t9Focus = '';
							tCancel();
							// 进入切换模式
							focusModel = 'tabModel';
							focus = 't9board';
							selected();
							break;
					}
				} else if (focus == 't-6') {
					switch (t9Focus) {
						case 't-6-1':
							smCancel();
							t9Focus = 't-6-3';
							smSelected();
							break;
						case 't-6-2':
						case 't-6-3':
						case 't-6-4':
							// 进入 t-9
							smCancel();
							tCancel();
							focus = 't-9';
							t9Focus = 't-9-1';
							smSelected();
							tSelected();
							break;
					}
				} else if (focus == 't-5') {
					switch (t9Focus) {
						case 't-5-1':
							smCancel();
							t9Focus = 't-5-3';
							smSelected();
							break;
						case 't-5-2':
						case 't-5-3':
						case 't-5-4':
							// 进入 t-8
							smCancel();
							tCancel();
							focus = 't-8';
							t9Focus = 't-8-1';
							smSelected();
							tSelected();
							break;
					}
				} else if (focus == 't-4') {
					switch (t9Focus) {
						case 't-4-1':
							smCancel();
							t9Focus = 't-4-3';
							smSelected();
							break;
						case 't-4-2':
						case 't-4-3':
						case 't-4-4':
							// 进入 t-7
							smCancel();
							tCancel();
							focus = 't-7';
							t9Focus = 't-7-1';
							smSelected();
							tSelected();
							break;
					}
				} else if (focus == 't-3') {
					switch (t9Focus) {
						case 't-3-1':
							smCancel();
							t9Focus = 't-3-3';
							smSelected();
							break;
						case 't-3-2':
						case 't-3-3':
						case 't-3-4':
							// 进入 t-7
							smCancel();
							tCancel();
							focus = 't-6';
							t9Focus = 't-6-1';
							smSelected();
							tSelected();
							break;
					}
				} else if (focus == 't-2') {
					switch (t9Focus) {
						case 't-2-1':
							smCancel();
							t9Focus = 't-2-3';
							smSelected();
							break;
						case 't-2-2':
						case 't-2-3':
						case 't-2-4':
							// 进入 t-7
							smCancel();
							tCancel();
							focus = 't-5';
							t9Focus = 't-5-1';
							smSelected();
							tSelected();
							break;
					}
				} else if (focus == 't-1') {
					switch (t9Focus) {
						case 't-1-1':
						case 't-1-2':
						case 't-1-3':
							// 进入 t-4
							smCancel();
							tCancel();
							focus = 't-4';
							t9Focus = 't-4-1';
							smSelected();
							tSelected();
							break;
					}
				}
				break;
		}
	// 编辑模式
	} else if (focusModel == 'editModel') {
		cancel();
		// 进入输入模式
		focusModel = 'inputModel';
		switch (cacheInput) {
			case 'keyboard':
				focus = 'key-1';
				selected();
				break;
			case 't9board':
				focus = 't-1';
				t9Focus = 't-1-1';
				tSelected();
				smSelected();
				break;
		}
	// 搜索选则模式
	} else if (focusModel == 'selectModel') {
		var curRes = parseInt(focus.split('-')[1]);
		// 如果存在下一个
		if ($('#res-' + (curRes + 1))[0]) {
			stopScroll();
			cancelRes();
			focus = 'res-' + (curRes + 1);
			showGoodInfo();
			selectedRes();
			scroll();
			// 判断商品名称长度进入滚动播放
			startScroll();
		} 
	// 详情模式
	} else if (focusModel == 'detailModel') {
		switch (detailFocus) {
			case 'focus-d-back':
				backLoseFocus(detailFocus);
				detailFocus = 'order';
				dSelected();
				break;
		}
	// 切换模式
	} else if (focusModel == 'tabModel') {
		// 进入到编辑模式
		cancel();
		focusModel = 'editModel';
		focus = 'empty';
		selected();
	}
}

// doLeft
function doLeft () {
	// 输入模式
	if (focusModel == 'inputModel') {
		switch (cacheInput) {
			// 全键盘输入
			case 'keyboard':
				var curKey = parseInt(focus.split('-')[1]);
				if (curKey > 1) {
					curKey = curKey -1;
					cancel();
					focus = 'key-' + curKey;
					selected();
				}
				break;
			// t9输入
			case 't9board':
				if (focus == 't-9') {
					switch (t9Focus) {
						case 't-9-1':
							smCancel();
							t9Focus = 't-9-2';
							smSelected();
							break;
						case 't-9-2':
							// 进入t-8
							smCancel();
							tCancel();
							focus = 't-8';
							t9Focus = 't-8-1';
							tSelected();
							smSelected();
							break;
						case 't-9-3':
							smCancel();
							t9Focus = 't-9-2';
							smSelected();
							break;
						case 't-9-4':
							smCancel();
							t9Focus = 't-9-3';
							smSelected();
							break;
						case 't-9-5':
							smCancel();
							t9Focus = 't-9-2';
							smSelected();
							break;
					}
				} else if (focus == 't-8') {
					switch (t9Focus) {
						case 't-8-1':
							smCancel();
							t9Focus = 't-8-2';
							smSelected();
							break;
						case 't-8-2':
							// 进入t-7
							smCancel();
							tCancel();
							focus = 't-7';
							t9Focus = 't-7-1';
							smSelected();
							tSelected();
							break;
						case 't-8-3':
							smCancel();
							t9Focus = 't-8-2';
							smSelected();
							break;
						case 't-8-4':
							smCancel();
							t9Focus = 't-8-3';
							smSelected();
							break;
					}
				} else if (focus == 't-7') {
					switch (t9Focus) {
						case 't-7-1':
							smCancel();
							t9Focus = 't-7-2';
							smSelected();
							break;
						case 't-7-2':
							// 进入t-6
							smCancel();
							tCancel();
							focus = 't-6';
							t9Focus = 't-6-1';
							tSelected();
							smSelected();
							break;
						case 't-7-3':
							smCancel();
							t9Focus = 't-7-2';
							smSelected();
							break;
						case 't-7-4':
							smCancel();
							t9Focus = 't-7-3';
							smSelected();
							break;
						case 't-7-5':
							smCancel();
							t9Focus = 't-7-2';
							smSelected();
							break;
					}
				} else if (focus == 't-6') {
					switch (t9Focus) {
						case 't-6-1':
							smCancel();
							t9Focus = 't-6-2';
							smSelected();
							break;
						case 't-6-2':
							// 进入t-5
							smCancel();
							tCancel();
							focus = 't-5';
							t9Focus = 't-5-1';
							smSelected();
							tSelected();
							break;
						case 't-6-3':
							smCancel();
							t9Focus = 't-6-2';
							smSelected();
							break;
						case 't-6-4':
							smCancel();
							t9Focus = 't-6-3';
							smSelected();
							break;
					}
				} else if (focus == 't-5') {
					switch (t9Focus) {
						case 't-5-1':
							smCancel();
							t9Focus = 't-5-2';
							smSelected();
							break;
						case 't-5-2':
							// 进入t-4
							smCancel();
							tCancel();
							focus = 't-4';
							t9Focus = 't-4-1';
							smSelected();
							tSelected();
							break;
						case 't-5-3':
							smCancel();
							t9Focus = 't-5-2';
							smSelected();
							break;
						case 't-5-4':
							smCancel();
							t9Focus = 't-5-3';
							smSelected();
							break;
					}
				} else if (focus == 't-4') {
					switch (t9Focus) {
						case 't-4-1':
							smCancel();
							t9Focus = 't-4-2';
							smSelected();
							break;
						case 't-4-2':
							// 进入t-3
							smCancel();
							tCancel();
							focus = 't-3';
							t9Focus = 't-3-1';
							smSelected();
							tSelected();
							break;
						case 't-4-3':
							smCancel();
							t9Focus = 't-4-2';
							smSelected();
							break;
						case 't-4-4':
							smCancel();
							t9Focus = 't-4-3';
							smSelected();
							break;
					}
				} else if (focus == 't-3') {
					switch (t9Focus) {
						case 't-3-1':
							smCancel();
							t9Focus = 't-3-2';
							smSelected();
							break;
						case 't-3-2':
							// 进入t-2
							smCancel();
							tCancel();
							focus = 't-2';
							t9Focus = 't-2-1';
							smSelected();
							tSelected();
							break;
						case 't-3-3':
							smCancel();
							t9Focus = 't-3-2';
							smSelected();
							break;
						case 't-3-4':
							smCancel();
							t9Focus = 't-3-3';
							smSelected();
							break;
					}
				} else if (focus == 't-2') {
					switch (t9Focus) {
						case 't-2-1':
							smCancel();
							t9Focus = 't-2-2';
							smSelected();
							break;
						case 't-2-2':
							// 进入t-1
							smCancel();
							tCancel();
							focus = 't-1';
							t9Focus = 't-1-1';
							smSelected();
							tSelected();
							break;
						case 't-2-3':
							smCancel();
							t9Focus = 't-2-2';
							smSelected();
							break;
						case 't-2-4':
							smCancel();
							t9Focus = 't-2-3';
							smSelected();
							break;
					}
				} else if (focus == 't-1') {
					switch (t9Focus) {
						case 't-1-3':
							smCancel();
							t9Focus = 't-1-1';
							smSelected();
							break;
						case 't-1-2':
							smCancel();
							t9Focus = 't-1-3';
							smSelected();
							break;
					}
				}
				break;
		}
	// 编辑模式
	} else if (focusModel == 'editModel') {
		switch (focus) {
			case 'empty':
				cancel();
				focus = 'back';
				selected();
				break;
			case 'back':
				cancel();
				focus = 'empty';
				selected();
				break;
		}
		// 搜索选择模式
		// 搜索选择模式
	} else if (focusModel == 'selectModel') {
		cancelRes();
		stopScroll();
		$('.content-inner ul').css('top', 0);
		// 变为输入模式
		hideInfo();
		focusModel = 'inputModel';
		switch (cacheInput) {
			// 全键盘输入
			case 'keyboard':
				focus = 'key-5';
				selected();
				break;
			// 9键输入
			case 't9board':
				focus = 't-3';
				t9Focus = 't-3-1';
				tSelected();
				smSelected();
				break;
		}
		// 输入切换模式
	} else if (focusModel == 'tabModel') {
		switch (focus) {
			case 'keyboard':
				cancel();
				focus = 't9board';
				selected();
				break;
			case 't9board':
				cancel();
				focus = 'keyboard';
				selected();
				break;
		}
	} else if (focusModel == 'detailModel') {
		switch (detailFocus) {
			// case 'order':
			// 	dCancel();
			// 	detailFocus = 'cancel';
			// 	dSelected();
			// 	break;
			// case 'cancel':
			// 	dCancel();
			// 	detailFocus = 'order';
			// 	dSelected();
			// 	break;
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
	}
}

// doRight
function doRight () {
	// 输入模式
	if (focusModel == 'inputModel') {
		switch (cacheInput) {
			// 全键盘模式
			case 'keyboard':
				var curKey = parseInt(focus.split('-')[1]);
				if (curKey % 5 !== 0) {
					curKey = curKey + 1;
					cancel();
					focus = 'key-' + curKey;
					selected();
				}  else if (curKey % 5 == 0) {
					if (hasList('res-1')) {
						cancel();
						// 更换到搜索选择模式
						focusModel = 'selectModel';
						focus = 'res-1';
						showGoodInfo();
						selectedRes();
					}
				}
				break;
			// 9键模式
			case 't9board':
				if (focus == 't-9') {
					switch (t9Focus) {
						case 't-9-1':
							smCancel();
							t9Focus = 't-9-4';
							smSelected();
							break;
						case 't-9-2':
							smCancel();
							t9Focus = 't-9-3';
							smSelected();
							break;
						case 't-9-3':
							smCancel();
							t9Focus = 't-9-4';
							smSelected();
							break;
						case 't-9-4':
							// 进入搜索选择模式
							if (hasList('res-1')) {
								smCancel();
								tCancel();
								t9Focus = '';
								focusModel = 'selectModel';
								focus = 'res-1';
								showGoodInfo();
								selectedRes();
							}
							break;
						case 't-9-5':
							smCancel();
							t9Focus = 't-9-4';
							smSelected();
							break;
					}
				} else if (focus == 't-8') {
					switch (t9Focus) {
						case 't-8-1':
							smCancel();
							t9Focus = 't-8-4';
							smSelected();
							break;
						case 't-8-2':
							smCancel();
							t9Focus = 't-8-3';
							smSelected();
							break;
						case 't-8-3':
							smCancel();
							t9Focus = 't-8-4';
							smSelected();
							break;
						case 't-8-4':
							// 进入t-9
							smCancel();
							tCancel();
							focus = 't-9';
							t9Focus = 't-9-1';
							smSelected();
							tSelected();
							break;
					}
				} else if (focus == 't-7') {
					switch (t9Focus) {
						case 't-7-1':
							smCancel();
							t9Focus = 't-7-4';
							smSelected();
							break;
						case 't-7-2':
							smCancel();
							t9Focus = 't-7-3';
							smSelected();
							break;
						case 't-7-3':
							smCancel();
							t9Focus = 't-7-4';
							smSelected();
							break;
						case 't-7-4':
							// 进入t-8
							smCancel();
							tCancel();
							focus = 't-8';
							t9Focus = 't-8-1';
							smSelected();
							tSelected();
							break;
						case 't-7-5':
							smCancel();
							t9Focus = 't-7-4';
							smSelected();
							break;
					}
				} else if (focus == 't-6') {
					switch (t9Focus) {
						case 't-6-1':
							smCancel();
							t9Focus = 't-6-4';
							smSelected();
							break;
						case 't-6-2':
							smCancel();
							t9Focus = 't-6-3';
							smSelected();
							break;
						case 't-6-3':
							smCancel();
							t9Focus = 't-6-4';
							smSelected();
							break;
						case 't-6-4':
							// 进入搜索选择模式
							if (hasList('res-1')) {
								smCancel();
								tCancel();
								t9Focus = '';
								focusModel = 'selectModel';
								focus = 'res-1';
								showGoodInfo();
								selectedRes();
							}
							break;
					}
				} else if (focus == 't-5') {
					switch (t9Focus) {
						case 't-5-1':
							smCancel();
							t9Focus = 't-5-4';
							smSelected();
							break;
						case 't-5-2':
							smCancel();
							t9Focus = 't-5-3';
							smSelected();
							break;
						case 't-5-3':
							smCancel();
							t9Focus = 't-5-4';
							smSelected();
							break;
						case 't-5-4':
							// 进入t-6
							smCancel();
							tCancel();
							focus = 't-6';
							t9Focus = 't-6-1';
							smSelected();
							tSelected();
							break;
					}
				} else if (focus == 't-4') {
					switch (t9Focus) {
						case 't-4-1':
							smCancel();
							t9Focus = 't-4-4';
							smSelected();
							break;
						case 't-4-2':
							smCancel();
							t9Focus = 't-4-3';
							smSelected();
							break;
						case 't-4-3':
							smCancel();
							t9Focus = 't-4-4';
							smSelected();
							break;
						case 't-4-4':
							// 进入t-5
							smCancel();
							tCancel();
							focus = 't-5';
							t9Focus = 't-5-1';
							smSelected();
							tSelected();
							break;
					}
				} else if (focus == 't-3') {
					switch (t9Focus) {
						case 't-3-1':
							smCancel();
							t9Focus = 't-3-4';
							smSelected();
							break;
						case 't-3-2':
							smCancel();
							t9Focus = 't-3-3';
							smSelected();
							break;
						case 't-3-3':
							smCancel();
							t9Focus = 't-3-4';
							smSelected();
							break;
						case 't-3-4':
							// 进入搜索选择模式
							if (hasList('res-1')) {
								smCancel();
								tCancel();
								t9Focus = '';
								focusModel = 'selectModel';
								focus = 'res-1';
								showGoodInfo();
								selectedRes();
							}
							break;
					}
				} else if (focus == 't-2') {
					switch (t9Focus) {
						case 't-2-1':
							smCancel();
							t9Focus = 't-2-4';
							smSelected();
							break;
						case 't-2-2':
							smCancel();
							t9Focus = 't-2-3';
							smSelected();
							break;
						case 't-2-3':
							smCancel();
							t9Focus = 't-2-4';
							smSelected();
							break;
						case 't-2-4':
							// 进入t-3
							smCancel();
							tCancel();
							focus = 't-3';
							t9Focus = 't-3-1';
							smSelected();
							tSelected();
							break;
					}
				} else if (focus == 't-1') {
					switch (t9Focus) {
						case 't-1-1':
							smCancel();
							t9Focus = 't-1-3';
							smSelected();
							break;
						case 't-1-3':
							smCancel();
							t9Focus = 't-1-2';
							smSelected();
							break;
						case 't-1-2':
							// 进入t-2
							smCancel();
							tCancel();
							focus = 't-2';
							t9Focus = 't-2-1';
							smSelected();
							tSelected();
							break;
					}
				}
				break;
		}
	// 编辑模式
	} else if (focusModel == 'editModel') {
		switch (focus) {
			case 'empty':
				cancel();
				focus = 'back';
				selected();
				break;
			case 'back':
				// 判断是否可进入搜索选择模式
				if (hasList('res-1')) {
						cancel();
						// 更换到搜索选择模式
						focusModel = 'selectModel';
						focus = 'res-1';
						showGoodInfo();
						selectedRes();
				} else {
					cancel();
					focus = 'empty';
					selected();
				}
				break;
		}
		// 输入切换模式
	} else if (focusModel == 'tabModel') {
		switch (focus) {
			case 'keyboard':
				cancel();
				focus = 't9board';
				selected();
				break;
			case 't9board':
				// 判断是否进入搜索选择模式
				// 判断是否可进入搜索选择模式
				if (hasList('res-1')) {
					cancel();
					// 更换到搜索选择模式
					focusModel = 'selectModel';
					focus = 'res-1';
					showGoodInfo();
					selectedRes();
				} else {
					cancel();
					focus = 'keyboard';
					selected();
				}
				break;
		}
	} else if (focusModel == 'detailModel') {
		switch (detailFocus) {
			// case 'order':
			// 	dCancel();
			// 	detailFocus = 'cancel';
			// 	dSelected();
			// 	break;
			// case 'cancel':
			// 	dCancel();
			// 	detailFocus = 'order';
			// 	dSelected();
			// 	break;
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
		}
	}
}

// doEnter
function doEnter () {
	// 输入模式
	if (focusModel == 'inputModel') {
		switch (cacheInput) {
			// 全键盘输入
			case 'keyboard':
				if (searchText.length < 12) {
					searchText += $('#' + focus + ' span').html();
					$('.searchText').html(searchText);
				}
				break;
			// 9键输入
			case 't9board':
				if (t9Focus == 't-1-3') {
					searchText += ' ';
				} else {
					if (searchText.length < 12) {
						searchText += $('#' + t9Focus).html();
					}
				}
				$('.searchText').html(searchText);
				break;
		}
		searching();
		getSearch(searchText);
		// 编辑模式
	} else if (focusModel == 'editModel') {
		switch (focus) {
			case 'empty':
				empty();
				$('#search').html(' ');
				$('.down-tips').addClass('hidden');
				break;
			case 'back':
				back();
				if (searchText == '') {
					$('#search').html(' ');
					$('.down-tips').addClass('hidden');
				} else {
					getSearch(searchText);
				}
				break;
		}
		// 输入切换模式
	} else if (focusModel == 'tabModel') {
		$('#' + focus).addClass('tab-active').siblings().removeClass('tab-active');
		$('.' + focus).removeClass('hidden').siblings().addClass('hidden');
		cacheInput = focus;
		// 搜索选择模式
	} else if (focusModel == 'selectModel') {
		// 变详情模式
		focusModel = 'detailModel';
		// 展示头部并取消搜索焦点
		$('.header').css('display', 'block');
		$('.search').css('display','none');
		showDetail();
		// 加载状态
		detailLoading();
		var goodsid = $('#' + focus).attr('data-goodsid');
		getGoodDetail(goodsid,'search');
	} else if (focusModel == 'detailModel') {
		switch (detailFocus) {
			case 'order':
				// var orderInfo = $('#order').attr('data-order');
				// var goodsid = $('#order').attr('data-goodsid');
				// getOrder(orderInfo,goodsid);
				/////////
				var goodsid = $('#order').attr('data-goodsid');
				var orderid = $('#order').attr('data-order');
				var isOrder = $('#order').attr('data-isOrder');
				var sku = $('#order').attr('data-sku');
				var goodsname = $('#order').attr('data-goodsname');
				// alert('是否续订' + isOrder);
				// 判断是否是优惠订购
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
				// 变搜索选择模式
				focusModel = 'selectModel';
				// 隐藏头部
				$('.header').css('display', 'none');
				hideDetail();
				break;
			case 'yuyue':
				// 弹出预约框
				focusModel = 'yuyueModel';
				$('.xudingtipModal').addClass('xdtipshow');
				// setTimeout(() => {
				// 	var cacard = $('#yuyue').attr('data-cacard');
				// 	var goodsid = $('#yuyue').attr('data-goodsid');
				// 	$('#qrcode').qrcode({
				// 		render: 'table',// canvas 
				// 		width: 200,
				// 		height: 200,
				// 		correctLevel: 0,
				// 		text: 'http://mobileapp.hunancatv.com/wx/goods/termActiv.htm?reqvsn=1.0&para={"info":{"channel":"1","cacard":"' + cacard + '","goodsid":"'+ goodsid +'","busitypeon":"20"}}'
				
				// 	});
				// }, 300);
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
		// 预约模式
	} else if (focusModel == 'yuyueModel') {
		focusModel = 'detailModel';
		$('.xudingtipModal').removeClass('xdtipshow');
		$('#qrcode').html('');
	}
}

/* 回退 */
function doQuit () {
	if (focusModel == 'detailModel') {
		dCancel();
		// 变搜索选择模式
		focusModel = 'selectModel';
		$('.header').css('display', 'none');
		hideDetail();
	} else {
		var originHtml = parseQuery(window.location).html; 
		if (originHtml ) {
			window.location.href = './' + originHtml + '.html';			
		} else {
			window.location.href = './home.html';
		}
		
	}
}


/* function */

/* 文字左右滚动 */
function stopScroll () {
	$('#' + focus + ' .goodsname').html(limitLength($('#' + focus + ' .goodsname').attr('data-name')));
}
function startScroll () {
	var strlength = $('#' + focus + ' .goodsname').attr('data-name').length;
	if (strlength > 16) {
		// 进行滚动播放
		var name = $('#' + focus + ' .goodsname').attr('data-name');
		var html = '<marquee>'+ name +'</marquee>';
		$('#' + focus + ' .goodsname').html(html);
	}
}

/* 展示右侧框 */
function showInfo () {
	$('.right').removeClass('hidden');
}

function hideInfo () {
	$('.right').addClass('hidden');
}

/* 详情加载中 */
function detailLoading () {
	$('.load-wrapper .left').css('opacity', 0);
	$('.load-wrapper .right').css('opacity', 0);
	loading();
}

/* 详情加载完毕 */
function detailLoaded () {
	$('.load-wrapper .left').css('opacity', 1);
	$('.load-wrapper .right').css('opacity', 1);
	loaded();
	// detailFocus = 'order';
	// dSelected();
	if ($('#order').css('display') == 'none') {
		detailFocus = 'yuyue';
		dSelected();
	} else {
		detailFocus = 'order';
		dSelected();
	}

}

// 清空搜索框
function empty () {
	searchText = '';
	$('.searchText').html(searchText);
}

// 搜索框回退
function back () {
	searchText = searchText.substring(0,searchText.length-1);
	$('.searchText').html(searchText);
}

// scroll 上下滚动
function scroll () {
	var curRes = parseInt(focus.split('-')[1]);
	if (curRes >= 9) {
		$('.content-inner ul').animate({top: (curRes - 9) * -90 + 'px'}, 200);
	} 
}


/* 模板 */
function initSearchTemp (lists) {
	console.log(lists);
	var html = '<ul>';
	for (var i = 0; i < lists.length; i++) {
		// html += '<li data-goodsid='+ lists[i].goodsid +' data-name='+ lists[i].goodsname +' data-pic='+ lists[i].picture +' data-desc='+ lists[i].goodsdesc +' id="res-'+ (i+1) +'">'
		html += '<li data-goodsid="'+lists[i].goodsid+'" data-name="'+ lists[i].goodsname +'" data-pic="'+ lists[i].picture +'" data-desc="'+ lists[i].goodsdesc +'" id="res-'+ (i+1) +'">'
			 +	 '<span class="goodsname" data-name="'+ lists[i].goodsname +'">'+ limitLength(lists[i].goodsname) +'</span>'
			 +	 '<span>'+ lists[i].goodstype +'</span>'
			 + '</li>';
	}
	html += '</ul>';
	$('#search').html(html);
}

// 对字数做限制
function limitLength (str) {
	if (str.length > 12) {
		return str.slice(0,12) + '...';
	} else {
		return str;
	}
}

/* 没有搜索结果 */
function noSearch () {
	var text = '<div class="noSearch"><img src="./images/error.png">';
	text += '<p class="noSearch">暂无当前搜索产品</p></div>';
	$('#search').html(text);
}

/* 截取字符串 */
function sliceStr (str) {
	if (str.length > 22) {
		return str.slice(0,22) + '...';
	} else {
		return str;
	}
}

/* searchLoading */
function searching () {
	$('#search').html('');
	loading('search');
}

/* 展示右侧商品信息 */
function showGoodInfo () {
	var name = $('#' + focus).attr('data-name');
	var pic = $('#' + focus).attr('data-pic');
	var desc = $('#' + focus).attr('data-desc');
	$('#good-name').html(name);
	$('#good-info').html(sliceStr(desc));
	$('#good-pic').attr('src', pic);
	$('.right').removeClass('hidden');
}
