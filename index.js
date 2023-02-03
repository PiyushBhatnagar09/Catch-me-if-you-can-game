var box= document.getElementById('box');

box.style.top= box.offsetTop + "px";

var boxHeight= box.offsetHeight;
var boxWidth= box.offsetWidth;

function setValue(num)
{
    return num + "px";
}

box.addEventListener('mousemove', function() {
    var randValue1= Math.random() * (window.innerHeight - boxHeight- 5);
    var randValue2= Math.random() * (window.innerWidth - boxWidth- 5);

    box.style.top= setValue(randValue1);
    box.style.left= setValue(randValue2);
});