var game = document.getElementById('game').getElementsByTagName('td'); //所有小方格的集合
var target; //小方格的ele
var number; //小方格的序号
var go = document.getElementById('go');
var left = document.getElementById('left');
var right = document.getElementById('right');
var back = document.getElementById('back');

found();
go.onclick = function() {
    console.log('you click go');
    goo();
}
left.onclick = function() {
    turnLeft();
}
right.onclick = function() {
    turnRight();
}
back.onclick = function() {
    turnBack();
}

// 先找到小方格
function found() {
    for (var i = 0; i < game.length; i++) {
        if (game[i].className != '') {
            number = i;
            target = game[i];
            break;
        }
    }
}

// 左转
function turnLeft() {
    switch (target.className) {
        case 'left':
            target.className = 'bottom';
            break;
        case 'right':
            target.className = 'top';
            break;
        case 'top':
            target.className = 'left';
            break;
        case 'bottom':
            target.className = 'right';
    }
}
// 右转
function turnRight() {
    switch (target.className) {
        case 'left':
            target.className = 'top';
            break;
        case 'right':
            target.className = 'bottom';
            break;
        case 'top':
            target.className = 'right';
            break;
        case 'bottom':
            target.className = 'left';
    }
}
// 后转
function turnBack() {
    switch (target.className) {
        case 'left':
            target.className = 'right';
            break;
        case 'right':
            target.className = 'left';
            break;
        case 'top':
            target.className = 'bottom';
            break;
        case 'bottom':
            target.className = 'top';
    }
}

// 前进
function goo() {
    console.log('number:' + number);
    switch (target.className) {
        case 'left':
            if (number != 0 && number != 10 && number != 20 && number != 30 && number != 40 &&
                number != 50 && number != 60 && number != 70 && number != 80 && number != 90) {
                goLeft();
            }
            break;
        case 'right':
            if (number != 9 && number != 19 && number != 29 && number != 39 && number != 49 &&
                number != 59 && number != 69 && number != 79 && number != 89 && number != 99) {
                goRight();
            }
            break;
        case 'top':
            if (number != 0 && number != 1 && number != 2 && number != 3 && number != 4 &&
                number != 5 && number != 6 && number != 7 && number != 8 && number != 9) {
                goTop();
            }
            break;
        case 'bottom':
            if (
                number != 90 && number != 91 && number != 92 && number != 93 && number != 94 &&
                number != 95 && number != 96 && number != 97 && number != 98 && number != 99) {
                goBottom();
            }
            break;
    }
}

function goLeft() {
    var tClassName = target.className; //临时变量存放class值
    target.className = '';
    target = game[--number];
    target.className = tClassName;
}

function goRight() {
    var tClassName = target.className; //临时变量存放class值
    target.className = '';
    target = game[++number];
    target.className = tClassName;
}

function goTop() {
    var tClassName = target.className; //临时变量存放class值
    target.className = '';
    number -= 10;
    target = game[number];
    target.className = tClassName;
}

function goBottom() {
    var tClassName = target.className; //临时变量存放class值
    target.className = '';
    number += 10;
    target = game[number];
    target.className = tClassName;
}