window.onload = function () {
  var items = document.getElementsByClassName("song");
  var artists = document.getElementsByClassName("artist");
  var titles = document.getElementsByClassName("song-title");
  var pre = document.getElementsByClassName("fa-step-backward");
  var next = document.getElementsByClassName("fa-step-forward");
  var cover = document.getElementsByClassName("cover");
  var artist = document.getElementById("artist");
  var title = document.getElementById("song-title");
  var pause = document.getElementById("pauseBtn");
  var index = 0;

  var clearActive = function () {
    for (var i = 0; i < items.length; i++) {
      items[i].className = "song";
    }
  };

  var goIndex = function () {
    clearActive();
    artist.innerHTML = artists[index].innerHTML;
    title.innerHTML = titles[index].innerHTML;
    var src = index + 1 + ".png";
    cover[0].setAttribute("src", src);
    items[index].className = "song song-active";
    pause.className = "fa fa-pause";
  };

  var goNext = function () {
    index++;
    if (index == items.length) {
      index = 0;
    }
    goIndex();
  };

  var goPre = function () {
    index--;
    if (index == -1) {
      index = items.length - 1;
    }
    goIndex();
  };

  next[0].addEventListener("click", function () {
    goNext();
  });

  pre[0].addEventListener("click", function () {
    goPre();
  });

  pause.addEventListener("click", function () {
    if (pause.className == "fa fa-pause") {
      pause.className = "fa fa-play";
    } else {
      pause.className = "fa fa-pause";
    }
  });

  for (var i = 0; i < titles.length; i++) {
    titles[i].addEventListener("click", function () {
      index = parseInt(this.getAttribute("data-index"));
      console.log(index);
      goIndex();
    });
  }
};
