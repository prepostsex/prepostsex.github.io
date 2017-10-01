$(function() {
  if (navigator.appVersion.indexOf("Win")!=-1) {
    $("html, body").mousewheel(function(event, delta) {
       this.scrollLeft -= (delta * 30);
       event.preventDefault();
    });
  } else {
    $("html, body").mousewheel(function(event, delta) {
       this.scrollLeft -= (delta * 1);
       event.preventDefault();
    });
  }
});
