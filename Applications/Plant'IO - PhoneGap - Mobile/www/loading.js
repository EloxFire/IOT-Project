(function() {

  var preload = document.getElementById("preload");
  var loading = 0;
  var id = setInterval(frame, 64);

  function frame() {
    if(loading == 30) {
      clearInterval(id);
      window.open("app.html", '_self');
    } else {
      loading = loading + 1;
      if(loading == 25) {
        preload.style.animation = "fadeout 1s ease"
      }
    }
  }
})();
