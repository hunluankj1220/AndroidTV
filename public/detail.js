document.writeln("<div id=\'detailWrapper\' class=\'detail-wrapper clear hidden\'>");
document.writeln("	<!-- back -->");
document.writeln("	<div class=\'back\'>");
document.writeln("		<img  src=\'./images/icon-goback.png\' alt=\'\'>");
document.writeln("		返回");
document.writeln("	</div>");
document.writeln("	<!-- load-wrapper -->");
document.writeln("	<div class=\'load-wrapper clear\'>");
document.writeln("		<div class=\'left\'>");
document.writeln("			<img id=\'goodUrl\' src=\'./images/detail.png\' alt=\'\'>");
document.writeln("		</div>");
document.writeln("		<div class=\'right\'>");
document.writeln("			<p id=\'goodTitle\' class=\'title\' style='padding-left:0px'>凤求凰</p>");
document.writeln("			<div class=\'info clear\'>");
document.writeln("				<p class=\'item\' style='text-align: left'>商品介绍:</p>");
document.writeln("				<p id=\'goodInfo\' class=\'content\'></p>");
document.writeln("			</div>");
document.writeln("			<div class=\'info clear\' id=\'goodsprice\'>");
document.writeln("				<p class=\'item\' style='text-align: left'>商品价格:</p>");
document.writeln("				<p id=\'goodPrice\' class=\'content yellow\'></p>");
document.writeln("			</div>");
document.writeln("			<div class=\'info clear\' id=\'prompt\'>");
document.writeln("				<p class=\'item wxtips\' style='text-align: left'>温馨提示:</p>");
document.writeln("				<p id=\'goodTip\' class=\'content wxtips\'></p>");
document.writeln("			</div>");
document.writeln("			<div class=\'btns\'style=\'margin-top:60px\'>");
document.writeln("				<span id=\'order\' class=\'order btn d-active\'>订购</span>");
document.writeln("				<span id=\'yuyue\' class=\'yuyue btn\'>预约</span>");
document.writeln("				<span id=\'cancel\' class=\'cancel btn\'>取消</span>");
document.writeln("			</div>");
document.writeln("		</div>");
document.writeln("	</div>");
document.writeln("	<!-- 模态框 -->");
document.writeln("	<div class=\'xudingtipModal\'>");
document.writeln("		<div class=\'xudingtip\' style=\'width:300px;height:375px;margin-left:-210px\'>");
document.writeln("			<p class=\'title\'>预定二维码</p>");
document.writeln("			<div id=\'qrcode\'></div>");
document.writeln("			<p class=\'btn\' style=\'margin-top:60px;\'>");
document.writeln("				<img src=\'./images/confirm-btn.png\' alt=\'\'>");
document.writeln("			</p>");
document.writeln("		</div>");
document.writeln("	</div>");
document.writeln("</div>");