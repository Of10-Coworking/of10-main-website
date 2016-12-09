function init() {

    var imgDefer = document.getElementsByTagName('img');
    for (var i=0; i<imgDefer.length; i++) {
        if(imgDefer[i].getAttribute('data-src')) {
            imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
        }
    }

}

$(document).ready(function() {
    $('#calendar').fullCalendar({
        googleCalendarApiKey: 'AIzaSyBqm8nK6SR7DYVWWICWv7Enpua0H_0pw88',
        defaultView: 'listMonth',
        timezone: 'local',
        events: {
            googleCalendarId: 'fvppr1koot2kderhmnk6iial32ni3d8v@import.calendar.google.com'
        }
    });
});

window.onload = init;

function toggleOverlay() {
    var toggle = document.getElementById("nav-toggle")
    toggle.classList.toggle( "active" );
    var el = document.getElementById("navigation");
    el.style.height = (el.style.height != '100%' ? '100%' : '0%' );
}
