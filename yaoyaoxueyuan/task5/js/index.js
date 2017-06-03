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
var flag = true; //是否延时flag
run.onclick = function() {
    // 获取指令大写
    command = order.getElementsByTagName('input')[0].value.toUpperCase();
    switch (command) {
        // 前进
        case 'GO':
            if ((direction == 'top' && styleTop == 40) ||
                (direction == 'left' && styleLeft == 40) ||
                (direction == 'bottom' && styleTop == 400) ||
                (direction == 'right' && styleLeft == 400)) {} else {
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
            // 左平移
        case 'TRA LEF':
            if (styleLeft == 40) {
                break;
            } else {
                styleLeft -= 40;
                rect.style.left = styleLeft + 'px';
            }
            break;
            // 右平移
        case 'TRA RIG':
            if (styleLeft == 400) {
                break;
            } else {
                styleLeft += 40;
                rect.style.left = styleLeft + 'px';
            }
            break;
            // 上平移
        case 'TRA TOP':
            if (styleTop == 40) {
                break;
            } else {
                styleTop -= 40;
                rect.style.top = styleTop + 'px';
            }
            break;
            // 下平移
        case 'TRA BOT':
            if (styleTop == 400) {
                break;
            } else {
                styleTop += 40;
                rect.style.top = styleTop + 'px';
            }
            break;
            // 方向转向屏幕左侧，并向屏幕的左侧移动一格
        case 'MOV LEF':
            switch (direction) {
                case 'top':
                    rect.style.transform = 'rotate(' + (deg -= 90) + 'deg)';
                    direction = 'left';
                    break;
                case 'left':
                    flag = false;
                    break;
                case 'bottom':
                    rect.style.transform = 'rotate(' + (deg += 90) + 'deg)';
                    direction = 'left';
                    break;
                case 'right':
                    rect.style.transform = 'rotate(' + (deg += 180) + 'deg)';
                    direction = 'left';
                    break;
            }
            if (flag) {
                setTimeout(function() {
                    if (styleLeft == 40) {} else {
                        styleLeft -= 40;
                        rect.style.left = styleLeft + 'px';
                    }
                }, 1000);
            } else {
                if (styleLeft == 40) {} else {
                    styleLeft -= 40;
                    rect.style.left = styleLeft + 'px';
                }
                flag = true;
            }
            break;
            // 方向转向屏幕上面，向屏幕的上面移动一格
        case 'MOV TOP':
            switch (direction) {
                case 'top':
                    flag = false;
                    break;
                case 'left':
                    rect.style.transform = 'rotate(' + (deg += 90) + 'deg)';
                    direction = 'top';
                    break;
                case 'bottom':
                    rect.style.transform = 'rotate(' + (deg += 180) + 'deg)';
                    direction = 'top';
                    break;
                case 'right':
                    rect.style.transform = 'rotate(' + (deg -= 90) + 'deg)';
                    direction = 'top';
                    break;
            }
            if (flag) {
                setTimeout(function() {
                    if (styleTop == 40) {} else {
                        styleTop -= 40;
                        rect.style.top = styleTop + 'px';
                    }
                }, 1000);
            } else {
                if (styleTop == 40) {} else {
                    styleTop -= 40;
                    rect.style.top = styleTop + 'px';
                }
                flag = true;
            }
            break;
            // 方向转向屏幕右侧，向屏幕的右侧移动一格
        case 'MOV RIG':
            switch (direction) {
                case 'top':
                    rect.style.transform = 'rotate(' + (deg += 90) + 'deg)';
                    direction = 'right';
                    break;
                case 'left':
                    rect.style.transform = 'rotate(' + (deg += 180) + 'deg)';
                    direction = 'right';
                    break;
                case 'bottom':
                    rect.style.transform = 'rotate(' + (deg -= 90) + 'deg)';
                    direction = 'right';
                    break;
                case 'right':
                    flag = false;
                    break;
            }
            if (flag) {
                setTimeout(function() {
                    if (styleLeft == 400) {} else {
                        styleLeft += 40;
                        rect.style.left = styleLeft + 'px';
                    }
                }, 1000);
            } else {
                if (styleLeft == 400) {} else {
                    styleLeft += 40;
                    rect.style.left = styleLeft + 'px';
                }
                flag = true;
            }
            break;
            // 方向转向屏幕下面，向屏幕的下面移动一格
        case 'MOV BOT':
            switch (direction) {
                case 'top':
                    rect.style.transform = 'rotate(' + (deg += 180) + 'deg)';
                    direction = 'bottom';
                    break;
                case 'left':
                    rect.style.transform = 'rotate(' + (deg -= 90) + 'deg)';
                    direction = 'bottom';
                    break;
                case 'bottom':
                    flag = false;
                    break;
                case 'right':
                    rect.style.transform = 'rotate(' + (deg += 90) + 'deg)';
                    direction = 'bottom';
                    break;
            }
            if (flag) {
                setTimeout(function() {
                    if (styleTop == 400) {} else {
                        styleTop += 40;
                        rect.style.top = styleTop + 'px';
                    }
                }, 1000);
            } else {
                if (styleTop == 400) {} else {
                    styleTop += 40;
                    rect.style.top = styleTop + 'px';
                }
                flag = true;
            }
            break;
    }
    console.log('command:' + command + '\ndirection:' + direction + '\nleft:' + styleLeft + '\ntop:' + styleTop + '\ndeg:' + deg);

}

var span = document.getElementsByTagName('span');
console.log(span[0]);
for (var i = 0; i < span.length; i++) {
    span[i].onclick = function() {
        var text = this.innerHTML;
        console.log(text);
        order.getElementsByTagName('input')[0].value = text;
    }
}