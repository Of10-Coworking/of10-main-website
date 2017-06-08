function init() {
  var imgDefer = document.getElementsByTagName('img');
  for (var i=0; i<imgDefer.length; i++) {
    if(imgDefer[i].getAttribute('data-src')) {
    imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
    }
  }
  var mobile = (/iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
  if (mobile) {
    console.log("mobile");
    document.getElementsByClassName
  }
}
window.onload = init;
// $("#imgAnimate").hover(
//     function()
//     {
//         $(this).attr("src", "img/brickwall/of10-shared-space-hustle.gif");
//     },
//     function()
//     {
//         $(this).attr("src", "img/brickwall/of10-shared-space-hustle.gif");
//     });
function toggleOverlay() {
    console.log("Clicked");
    var toggle = document.getElementById("nav-toggle")
    toggle.classList.toggle( "active" );
    var el = document.getElementById("navigation");
    el.style.height = (el.style.height != '100%' ? '100%' : '0%' );
}
// $('#datepicker').datepicker({
//   inline: true,
//   showOtherMonths: true,
//   dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
//   dateFormat: 'd MM, y'
//  });
