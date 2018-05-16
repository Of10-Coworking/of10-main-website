function init() {
  var mobile = (/iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
  if (mobile) {
    console.log("mobile");
    var video = document.getElementById("of10-video");
    var gif = document.getElementById("of10-gif");
    video.style.display="none";
    gif.style.display = 'block';
  }else{
    var video = document.getElementById("of10-video");
    var gif = document.getElementById("of10-gif");
    if(gif !== null){
      gif.style.display="none";
      video.style.display = 'block';
    }
  }
}
window.onload = init;

function toggleOverlay() {
    var toggle = document.getElementById("nav-toggle")
    toggle.classList.toggle( "active" );
    var el = document.getElementById("navigation");
    el.style.height = (el.style.height != '100%' ? '100%' : '0%' );
}
