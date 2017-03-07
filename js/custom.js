function init() {
  var imgDefer = document.getElementsByTagName('img');
  for (var i=0; i<imgDefer.length; i++) {
    if(imgDefer[i].getAttribute('data-src')) {
    imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
    }
  }
  var imgAmp = document.getElementById('of10-gif');
  for (var i=0; i<imgDefer.length; i++) {
    if(imgDefer[i].getAttribute('data-src')) {
    imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
    }
  }
}
window.onload = init;
$("#imgAnimate").hover(
    function()
    {
        $(this).attr("src", "img/brickwall/hustle.gif");
    },
    function()
    {
        $(this).attr("src", "img/brickwall/hustle.gif");
    });
function toggleOverlay() {
    console.log("Clicked");
    var toggle = document.getElementById("nav-toggle")
    toggle.classList.toggle( "active" );
    var el = document.getElementById("navigation");
    el.style.height = (el.style.height != '100%' ? '100%' : '0%' );
}
$('#datepicker').datepicker({
  inline: true,
  showOtherMonths: true,
  dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  dateFormat: 'd MM, y'
 });
