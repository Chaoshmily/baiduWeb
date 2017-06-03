var data = new Array();
var arrangeTop = document.getElementsByClassName('top');
var arrangeBottom = document.getElementsByClassName('bottom');
var tbody = document.getElementsByTagName('tbody')[0];
var tr = tbody.getElementsByTagName('tr');

// 第一列排序
arrangeTop[0].onclick = function() {
    // 获取每一行
    for (var i = 0; i < tr.length; i++) {
        var th = tr[i].getElementsByTagName('th')[0];
        var td = tr[i].getElementsByTagName('td');
        var row = [th.innerHTML];
        for (var j = 0; j < td.length; j++) {
            row.splice(j + 1, 0, td[j].innerHTML);
        }
        data[i] = row;
    }
    arrangeData('up', 1);
    console.log(data);
    render();
}
arrangeBottom[0].onclick = function() {
    for (var i = 0; i < tr.length; i++) {
        var th = tr[i].getElementsByTagName('th')[0];
        var td = tr[i].getElementsByTagName('td');
        var row = [th.innerHTML];
        for (var j = 0; j < td.length; j++) {
            row.splice(j + 1, 0, td[j].innerHTML);
        }
        data[i] = row;
    }
    arrangeData('down', 1);
    console.log(data);
    render();
}

// 第二列排序
arrangeTop[1].onclick = function() {
    // 获取每一行
    for (var i = 0; i < tr.length; i++) {
        var th = tr[i].getElementsByTagName('th')[0];
        var td = tr[i].getElementsByTagName('td');
        var row = [th.innerHTML];
        for (var j = 0; j < td.length; j++) {
            row.splice(j + 1, 0, td[j].innerHTML);
        }
        data[i] = row;
    }
    arrangeData('up', 2);
    console.log(data);
    render();
}
arrangeBottom[1].onclick = function() {
    for (var i = 0; i < tr.length; i++) {
        var th = tr[i].getElementsByTagName('th')[0];
        var td = tr[i].getElementsByTagName('td');
        var row = [th.innerHTML];
        for (var j = 0; j < td.length; j++) {
            row.splice(j + 1, 0, td[j].innerHTML);
        }
        data[i] = row;
    }
    arrangeData('down', 2);
    console.log(data);
    render();
}

// 第三列排序
arrangeTop[2].onclick = function() {
    // 获取每一行
    for (var i = 0; i < tr.length; i++) {
        var th = tr[i].getElementsByTagName('th')[0];
        var td = tr[i].getElementsByTagName('td');
        var row = [th.innerHTML];
        for (var j = 0; j < td.length; j++) {
            row.splice(j + 1, 0, td[j].innerHTML);
        }
        data[i] = row;
    }
    arrangeData('up', 3);
    console.log(data);
    render();
}
arrangeBottom[2].onclick = function() {
    for (var i = 0; i < tr.length; i++) {
        var th = tr[i].getElementsByTagName('th')[0];
        var td = tr[i].getElementsByTagName('td');
        var row = [th.innerHTML];
        for (var j = 0; j < td.length; j++) {
            row.splice(j + 1, 0, td[j].innerHTML);
        }
        data[i] = row;
    }
    arrangeData('down', 3);
    console.log(data);
    render();
}

// 第四列排序
arrangeTop[3].onclick = function() {
    // 获取每一行
    for (var i = 0; i < tr.length; i++) {
        var th = tr[i].getElementsByTagName('th')[0];
        var td = tr[i].getElementsByTagName('td');
        var row = [th.innerHTML];
        for (var j = 0; j < td.length; j++) {
            row.splice(j + 1, 0, td[j].innerHTML);
        }
        data[i] = row;
    }
    arrangeData('up', 4);
    console.log(data);
    render();
}
arrangeBottom[3].onclick = function() {
    for (var i = 0; i < tr.length; i++) {
        var th = tr[i].getElementsByTagName('th')[0];
        var td = tr[i].getElementsByTagName('td');
        var row = [th.innerHTML];
        for (var j = 0; j < td.length; j++) {
            row.splice(j + 1, 0, td[j].innerHTML);
        }
        data[i] = row;
    }
    arrangeData('down', 4);
    console.log(data);
    render();
}


// 对data进行排序
function arrangeData(direction, x) {
    switch (direction) {
        case 'up':
            for (var i = 0; i < data.length; i++) {
                for (var j = 0; j < data.length - i - 1; j++) {
                    console.log(parseInt(data[j][x]));
                    console.log(parseInt(data[j + 1][x]));
                    if (parseInt(data[j][x]) > parseInt(data[j + 1][x])) {
                        var temp = data[j];
                        data[j] = data[j + 1];
                        data[j + 1] = temp;
                    }
                }
            }
            break;
        case 'down':
            for (var i = 0; i < data.length; i++) {
                for (var j = 0; j < data.length - i - 1; j++) {
                    console.log(parseInt(data[j][x]));
                    console.log(parseInt(data[j + 1][x]));
                    if (parseInt(data[j][x]) < parseInt(data[j + 1][x])) {
                        var temp = data[j];
                        data[j] = data[j + 1];
                        data[j + 1] = temp;
                    }
                }
            }
            break;
    }
}

//重写dom
function render() {
    console.log(window.tr.length);
    for (var i = window.tr.length - 1; i >= 0; i--) {
        tbody.removeChild(window.tr[i]);
    }
    for (var i = 0; i < data.length; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < data[i].length; j++) {
            if (j == 0) {
                var th = document.createElement('th')
                var text = document.createTextNode(data[i][j]);
                th.appendChild(text);
                tr.appendChild(th);
            } else {
                var td = document.createElement('td')
                var text = document.createTextNode(data[i][j]);
                td.appendChild(text);
                tr.appendChild(td);
            }
        }
        tbody.appendChild(tr);
    }
}