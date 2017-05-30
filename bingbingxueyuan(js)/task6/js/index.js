$ = function (el) {
    return document.querySelector(el);
}
var dataArray = new Array();
$('#insert').onclick = function () {
    var str = $('#data').value.trim();
    var insertArray = str.split(/[\s,，.。、\\\/]/).filter(function (currentV) {
        if (currentV != null && currentV.length > 0) {
            return true;
        } else {
            return false;
        }
    });
    dataArray = dataArray.concat(insertArray);
    render();
}

$('#search').onclick = function() {
    render($('#str').value);
}

// 渲染
function render(str) {
    $('#queue').innerHTML = dataArray.map(function(currentV) {
        if (str != null && str.length > 0) {
            currentV = currentV.replace(new RegExp(str, 'g'), "<span class='select'>" + str + "</span>");
        }
        return "<li>" + currentV + "</li>";
    }).join('');
}