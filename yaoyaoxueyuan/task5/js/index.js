var canvas = document.getElementById('can');
if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    // 绘制格子
    ctx.strokeStyle = '#aaa';
    ctx.beginPath();
    for (var i = 2; i < 11; i++) {
        ctx.moveTo(i * 40, 40);
        ctx.lineTo(i * 40, 440);
    }
    for (var i = 2; i < 11; i++) {
        ctx.moveTo(40, i * 40);
        ctx.lineTo(440, i * 40);
    }
    ctx.stroke();
    // 绘制边框
    ctx.beginPath();
    ctx.strokeStyle = '#000';
    ctx.moveTo(40, 40);
    ctx.lineTo(40, 440);
    ctx.lineTo(440, 440);
    ctx.lineTo(440, 40);
    ctx.lineTo(40, 40);
    ctx.stroke();
    // 绘制序号
    ctx.beginPath();
    ctx.font = "20px 微软雅黑";
    for (var i = 1; i < 11; i++) {
        ctx.fillText(i, 10 + i * 40, 30);
    }
    for (var i = 1; i < 11; i++) {
        ctx.fillText(i, 10, i * 40 + 30);
    }
    ctx.closePath();
}

// 小方格的移动
var direction = 'top'; //方向
var order = document.getElementById('order'); //包含指令和按钮的div
var command; //指令
var rect = document.getElementById('rect'); //小方格
var run = order.getElementsByTagName('button')[0]; //指令提交按钮
var style = getComputedStyle(rect, null);
var styleLeft = parseInt(style.left);; //小方格的left
var styleTop = parseInt(style.top);; //小方格的top
var deg = 0 //小方格的角度
run.onclick = function() {
    // 获取指令大写
    command = order.getElementsByTagName('input')[0].value.toUpperCase();
    switch (command) {
        // 前进
        case 'GO':
            if ((direction == 'top' && styleTop == 40) ||
                (direction == 'left' && styleLeft == 40) ||
                (direction == 'bottom' && styleTop == 400) ||
                (direction == 'right' && styleLeft == 400)) {
                break;
            } else {
                switch (direction) {
                    case 'top':
                        styleTop -= 40;
                        rect.style.top = styleTop + "px";
                        break;
                    case 'left':
                        styleLeft -= 40;
                        rect.style.left = styleLeft + "px";
                        break;
                    case 'bottom':
                        styleTop += 40;
                        rect.style.top = styleTop + "px";
                        break;
                    case 'right':
                        styleLeft += 40;
                        rect.style.left = styleLeft + "px";
                        break;
                }
            }
            break;
            // 左转
        case 'TUN LEF':
            switch (direction) {
                case 'top':
                    rect.style.transform = 'rotate(' + (deg -= 90) + 'deg)';
                    direction = 'left';
                    break;
                case 'left':
                    rect.style.transform = 'rotate(' + (deg -= 90) + 'deg)';
                    direction = 'bottom';
                    break;
                case 'bottom':
                    rect.style.transform = 'rotate(' + (deg -= 90) + 'deg)';
                    direction = 'right';
                    break;
                case 'right':
                    rect.style.transform = 'rotate(' + (deg -= 90) + 'deg)';
                    direction = 'top';
                    break;
            }
            break;
            // 右转
        case 'TUN RIG':
            switch (direction) {
                case 'top':
                    rect.style.transform = 'rotate(' + (deg += 90) + 'deg)';
                    direction = 'right';
                    break;
                case 'left':
                    rect.style.transform = 'rotate(' + (deg += 90) + 'deg)';
                    direction = 'top';
                    break;
                case 'bottom':
                    rect.style.transform = 'rotate(' + (deg += 90) + 'deg)';
                    direction = 'left';
                    break;
                case 'right':
                    rect.style.transform = 'rotate(' + (deg += 90) + 'deg)';
                    direction = 'bottom';
                    break;
            }
            break;
            // 后转
        case 'TUN BAC':
            switch (direction) {
                case 'top':
                    rect.style.transform = 'rotate(' + (deg += 180) + 'deg)';
                    direction = 'bottom';
                    break;
                case 'left':
                    rect.style.transform = 'rotate(' + (deg += 180) + 'deg)';
                    direction = 'right';
                    break;
                case 'bottom':
                    rect.style.transform = 'rotate(' + (deg += 180) + 'deg)';
                    direction = 'top';
                    break;
                case 'right':
                    rect.style.transform = 'rotate(' + (deg += 180) + 'deg)';
                    direction = 'left';
                    break;
            }
            break;

    }
    console.log(command + ' ' + direction + ' ' + styleLeft + ' ' + styleTop);
}