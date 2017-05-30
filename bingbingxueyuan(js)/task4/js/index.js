window.onload = function() {
    var leftIn = document.getElementById("left-in");
    var rightIn = document.getElementById("right-in");
    var leftOut = document.getElementById("left-out");
    var rightOut = document.getElementById("right-out");
    leftIn.addEventListener("click", leftInsert, false);
    rightIn.addEventListener("click", rightInsert, false);
    leftOut.addEventListener("click", leftRemove, false);
    rightOut.addEventListener("click", rightRemove, false);
}


// 左侧入
function leftInsert() {
    var queue = document.getElementById("queue");
    var num = document.getElementById("num").value;
    if(num == "") {return;}
    var li = document.createElement("li");
    var text = document.createTextNode(num);
    li.appendChild(text);
    queue.insertBefore(li, queue.firstChild);
}

//右侧入
function rightInsert() {
    var queue = document.getElementById("queue");
    var num = document.getElementById("num").value;
    if(num == "") {return;}
    var li = document.createElement("li");
    var text = document.createTextNode(num);
    li.appendChild(text);
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