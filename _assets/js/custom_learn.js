$(document).ready(function() {
    $('#calendar').fullCalendar({
        googleCalendarApiKey: 'AIzaSyBqm8nK6SR7DYVWWICWv7Enpua0H_0pw88',
        defaultView: 'listMonth',
        timezone: 'local',
        events: {
            googleCalendarId: 'of10.in_qe4qjtkpthmseqb8308i5nb9s8@group.calendar.google.com'
        },
        eventColor: '#ec0089',
        noEventsMessage: 'No courses coming up this month'
    });
});

function toggleOverlay() {
    var toggle = document.getElementById("nav-toggle")
    toggle.classList.toggle( "active" );
    var el = document.getElementById("navigation");
    el.style.height = (el.style.height != '100%' ? '100%' : '0%' );
}
