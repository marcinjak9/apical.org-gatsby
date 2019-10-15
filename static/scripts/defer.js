function _deferIframes() {
    var vidDefer = document.getElementsByTagName('iframe');
    for (var i=0; i<vidDefer.length; i++) {
            if(vidDefer[i].getAttribute('data-defer-src')) {
            vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-defer-src'));
        }
    }
}

function _deferImages() {
    var imgDefer = document.getElementsByTagName('img');
    for (var i = 0; i < imgDefer.length; i++) {
        if(imgDefer[i].getAttribute('data-defer-src')) {
            imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-defer-src'));
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    _deferIframes();
    _deferImages();
});