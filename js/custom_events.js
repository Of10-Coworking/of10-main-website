$(document).ready(function() {
  $("#calendar").fullCalendar({
    googleCalendarApiKey: "AIzaSyDKjprJcWyztXtA1aOABKQyVozAOEedekQ",
    defaultView: "month",
    timezone: "India/Kolkata",
    events: {
      googleCalendarId: "anam@of10.in"
    },
    eventColor: "#ec0089",
    noEventsMessage: "No events coming up this month",
    eventClick: function(calEvent, jsEvent, view) {
      console.log("Event: " + calEvent.title);
      console.log("JsEvent: " + jsEvent);
      console.log("View: " + view.name);
    }
  });
});

function toggleOverlay() {
  var toggle = document.getElementById("nav-toggle");
  toggle.classList.toggle("active");
  var el = document.getElementById("navigation");
  el.style.height = el.style.height != "100%" ? "100%" : "0%";
}
