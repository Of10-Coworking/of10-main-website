function init() {

  var imgDefer = document.getElementsByTagName('img');
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

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-64567607-1', 'auto');
ga('send', 'pageview');

 
