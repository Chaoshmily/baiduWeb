var school = new Array();
var city = document.getElementById('city');
var university = document.getElementById('university');
school['北京'] = ['北京大学', '清华大学'];
school['湖南'] = ['湖南大学', '长沙理工大学', '湖南农业大学'];

var check = document.getElementById('select').getElementsByTagName('input');
var inSchool = document.getElementById('in-school');
var outSchool = document.getElementById('out-school');
var inDiv = document.getElementById('in');
var outDiv = document.getElementById('out');

init();

// 单选切换页面实现
inSchool.onclick = function() {
    deveSelect();
}

outSchool.onclick = function() {
    deveSelect();
}

//学校切换实现
city.onchange = function() {
    changeSelect();
}

// 初始化页面
function init() {
    city.innerHTML = '';
    university.innerHTML = '';
    for (var name in school) {
        city.innerHTML += "<option value='" + name + "'>" + name + "</option>";
    }
    for (var i = 0; i < school['北京'].length; i++) {
        university.innerHTML += "<option value='" + school['北京'][i] + "'>" + school['北京'][i] + "</option>";
    }
    deveSelect();
}

// 表单切换选项实现
function changeSelect() {
    university.innerHTML = '';
    for (var i = 0; i < school[city.value].length; i++) {
        university.innerHTML += "<option value='" + school[city.value][i] + "'>" + school[city.value][i] + "</option>";
    }
}

function deveSelect() {
    if (check[0].checked) {
        inDiv.style.display = 'block';
        outDiv.style.display = 'none';
    } else if (check[1].checked) {
        inDiv.style.display = 'none';
        outDiv.style.display = 'block';
    }
}