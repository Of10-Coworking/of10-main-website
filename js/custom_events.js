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

function toggleOverlay() {
    var toggle = document.getElementById("nav-toggle")
    toggle.classList.toggle( "active" );
    var el = document.getElementById("navigation");
    el.style.height = (el.style.height != '100%' ? '100%' : '0%' );
}
