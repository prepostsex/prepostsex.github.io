$(document).ready(function(){

  var projectScrollPosition = window.pageXOffset + 400;
  var winWidth = $(window).width();

  $('.entry-container').each(function(){
    var entryPos = $(this).offset().left;
    var entryWidth = $(this).outerWidth();
    var entryDif = entryPos + entryWidth;
    if ((entryPos < projectScrollPosition) && (projectScrollPosition < entryDif)){
      $(this).children(".entry-description").addClass('in-view');
    } else {
      $(this).children(".entry-description").removeClass('in-view');
    }

    console.log(entryWidth, entryPos, )
  });

  $(document).mousemove(function(e){
    var winHeight = $(window).height();
    $('.entry-description').each(function(){
      var moveable = $(this);
      var descHeight = moveable.outerHeight();
      var maxMoveHeight = winHeight - descHeight;
      var mousePos = e.pageY - descHeight/2+20;
        moveable.addClass('visible')
        if (mousePos < 60){
          moveable.css({'top': '60px'});
        } else if (mousePos > maxMoveHeight){
          moveable.css({'top': maxMoveHeight});
        } else {
          moveable.css({'top': mousePos});
        }
    });
  });

  $(window).on('scroll', function() {
    var projectScrollPosition = window.pageXOffset + 400;
    var winWidth = $(window).width();

    $('.entry-container').each(function(){
      var entryPos = $(this).offset().left;
      var entryWidth = $(this).outerWidth();
      var entryDif = entryPos + entryWidth;
      if ((entryPos < projectScrollPosition) && (projectScrollPosition < entryDif)){
        $(this).children(".entry-description").addClass('in-view');
      } else {
        $(this).children(".entry-description").removeClass('in-view');
      }

      console.log(entryWidth, entryPos, )
    });
  });
});
