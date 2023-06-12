const mask=document.getElementsByClassName('mask')
const warpper = document.getElementsByClassName('warpper')
const shell = document.getElementsByClassName('shell')
const body = document.body.style

window.onload = function (e) {
    window.scrollTo(0, -100);
    document.body.scrollTop = -100;
}


setTimeout(() => {
    body.height = 'auto';
    body.overflowY = 'visible';
    document.styleSheets[4].disabled = "disable";
    warpper[0].style.opacity = '0';
    shell[0].style.width = '300px';
}, 2000);


document.onmousemove=function(e){
    
    var xpos = e.pageX;
    var ypos = e.pageY;
    mask[0].style.left=xpos -400 +'px';
    mask[0].style.top=ypos -425 +'px';
    mask[1].style.left=xpos -450 +'px';
    mask[1].style.top=ypos -425 +'px';
    mask[2].style.left=xpos-425 +'px';
    mask[2].style.top=ypos-400 +'px';
}