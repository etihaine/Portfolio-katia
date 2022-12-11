
$('.m-nav-toggle').click(function(e){
    e.preventDefault();
    $('.m-right').toggleClass('is-open');
    $('.m-nav-toggle').toggleClass('is-open');
})

var num=0

function changer() {
if (num == 0) {
num = 1;
document.image.src = "im/imagb.gif";// grande image
document.image.width = 400;
document.image.height = 388;
}
else {
num = 0;
document.image.src = "im/imaga.gif";// petite image
document.image.width = 200;
document.image.height = 194;
}
}