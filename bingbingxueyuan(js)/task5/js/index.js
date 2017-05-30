window.onload = function() {
    var leftIn = document.getElementById("left-in");
    var rightIn = document.getElementById("right-in");
    var leftOut = document.getElementById("left-out");
    var rightOut = document.getElementById("right-out");
    var sort = document.getElementById("sort");
    leftIn.addEventListener("click", leftInsert, false);
    rightIn.addEventListener("click", rightInsert, false);
    leftOut.addEventListener("click", leftRemove, false);
    rightOut.addEventListener("click", rightRemove, false);
    sort.addEventListener("click", sortQueue, false);
}

// 获取并且判断num
function getNum() {
    var num = document.getElementById("num").value;
    if(num >= 10 && num <= 100) {
        return num;
    } else {
        alert("请输入10-100间的数字");
        return false;
    }
}

// 判断队列是否大于60
function limit(num) {
    var li = document.getElementsByTagName("li");
    console.log(li.length);
    if (li.length >= num) {
        alert("队列最大只能为：" + num);
        return true;
    } else {
        return false;
    }
}

// 左侧入
function leftInsert() {
    // 判断队列是否超限
    if (limit(60)) {return;}
    var queue = document.getElementById("queue");
    var num;
    // 判断数值是否符合要求
    if(getNum() === false) {
        return;
    } else {
        num = getNum();
    }
    var li = document.createElement("li");
    li.style.height = num + "px";
    // var text = document.createTextNode(num);
    // li.appendChild(text);
    queue.insertBefore(li, queue.firstChild);
}

//右侧入
function rightInsert() {
    // 判断队列是否超限
    if (limit(60)) {return;}
    var queue = document.getElementById("queue");
    var num;
    // 判断数值是否符合要求
    if(getNum() === false) {
        return;
    } else {
        num = getNum();
    }
    var li = document.createElement("li");
    li.style.height = num + "px";
    // var text = document.createTextNode(num);
    // li.appendChild(text);
    queue.appendChild(li);
}

//左侧出
function leftRemove() {
    var queue = document.getElementById("queue");
    var li = queue.getElementsByTagName("li");
    if(li.length != 0) {
        console.log(li.length);
        queue.removeChild(li[0]);
    }
}

//右侧出
function rightRemove() {
    var queue = document.getElementById("queue");
    var li = queue.getElementsByTagName("li");
    if(li.length != 0) {
        console.log(li.length);
        queue.removeChild(li[li.length - 1]);
    }
}

//队列排序
function sortQueue() {
    var li = document.getElementsByTagName("li");
    var newQueue = new Array();
    // 把高度赋值给一个数组用于排序
    for(var i = 0; i < li.length; i++) {
        newQueue[i] = parseFloat(li[i].style.height);
    }
    // 进行冒泡排序
    for(var i = 0; i < li.length; i++) {
        for(var j = 0; j < li.length - i - 1; j++) {
            if(newQueue[j] < newQueue[j + 1]) {
                var t = newQueue[j];
                newQueue[j] = newQueue[j + 1];
                newQueue[j + 1] = t;
            }
        }
    }
    // 给队列重设高度
    for(var i = 0; i < li.length; i++) {
        li[i].style.height = newQueue[i] + "px";
    }
}