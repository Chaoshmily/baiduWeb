var float = document.getElementById('float');
var body = document.getElementsByTagName('body')[0];
var modal;
var overlay;

float.onclick = function() {
    createModal();
    createOverlay();
    modal = document.getElementsByClassName('modal')[0];
    overlay = document.getElementsByClassName('overlay')[0];
    modal.onclick = function() {

    }
    overlay.onclick = function() {
        body.removeChild(modal);
        body.removeChild(overlay);
    }
}

function createModal() {
    var f = document.createElement('div');
    var tittle = document.createElement('div');
    tittle.className = 'tittle';
    tittle.innerHTML = '我是标题';
    f.appendChild(tittle);
    f.className = 'modal';
    body.appendChild(f);
}

function createOverlay() {
    var o = document.createElement('div');
    o.className = 'overlay';
    body.appendChild(o);
}