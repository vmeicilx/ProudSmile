$(function () {
  return;
  const videoFwd = document.querySelector("#bgVideoFwd");
  const videoBwd = document.querySelector("#bgVideoBwd");

  var times = [];
  var pos = [];
  var fps;
  var viewportHeight = window.innerHeight;
  var container = document.querySelector("#scroll-container");
  var viewport = document.querySelector("#viewport");
  var scrollerY = 0;
  var scrollEase = 0.05;
  var scrollRequest = 0;
  var offset = 0;
  //var info = createInfo();
  var requestId = null;

  // TweenLite.set(document.body, {
  //   height: 50000,
  // });

  // TweenLite.set(container, {
  //   height: 50000,
  //   force3D: true,
  // });

  // TweenLite.set(viewport, {
  //   height: window.innerHeight,
  // });

  //TweenLite.set("#bgVideoBwd", { autoAlpha: 0 })
  videoFwd.playbackRate = 0;
  videoBwd.playbackRate = 0;

  videoFwd.addEventListener(
    "canPlay",
    function (e) {
      videoFwd.currentTime = 0;
      videoBwd.currentTime = videoBwd.duration;
      window.addEventListener("wheel", onScroll);
    },
    false
  );

  function updateScroller() {
    var scrollY = window.pageYOffset;
    scrollerY += (scrollY - scrollerY) * scrollEase;

    if (Math.abs(scrollY - scrollerY) < 0.05) {
      scrollerY = scrollY;
      scrollRequest = 0;
      pos = [];
      times = [];
    }

    const timenow = performance.now();
    const posnow = scrollerY;
    if (times.length == 0) {
      times[0] = timenow;
      pos[0] = posnow;
      velocity = 0;
    } else if (times.length == 1) {
      times[1] = timenow;
      pos[1] = posnow;
      velocity = ((pos[1] - pos[0]) / (times[1] - times[0])) * 1000;
    } else {
      times = [times[1], timenow];
      pos = [pos[1], posnow];
      velocity = ((pos[1] - pos[0]) / (times[1] - times[0])) * 1000;
    }

    console.log(Math.round(scrollerY) + " px");
    //info.currPos = Math.round(scrollerY) + " px";
    //info.currVel = Math.round(velocity) + " px/s";

    var videoRate = Math.round(velocity) / 250;
    var limitLow = 0.15; //playbackRate min
    var limitHigh = 15; //playbackRate max
    var duration = 60.12; // video duration

    if (videoRate >= limitLow && videoRate <= limitHigh) {
      videoFwd.play();
      TweenLite.set("#bgVideoFwd", { autoAlpha: 1 });
      TweenLite.set("#bgVideoBwd", { autoAlpha: 0 });
      videoFwd.playbackRate = Math.abs(videoRate);
      videoBwd.currentTime = duration - videoFwd.currentTime;
    } else if (videoRate <= -limitLow && videoRate >= -limitHigh) {
      videoBwd.play();
      TweenLite.set("#bgVideoBwd", { autoAlpha: 1 });
      TweenLite.set("#bgVideoFwd", { autoAlpha: 0 });
      videoBwd.playbackRate = Math.abs(videoRate);
      videoFwd.currentTime = duration - videoBwd.currentTime;
    } else if (videoRate > 0 && videoRate < limitLow) {
      videoFwd.playbackRate = 0;
      videoBwd.playbackRate = 0;
      videoBwd.currentTime = duration - videoFwd.currentTime;
    } else if (videoRate > -limitLow && videoRate < 0) {
      videoFwd.playbackRate = 0;
      videoBwd.playbackRate = 0;
      videoFwd.currentTime = duration - videoBwd.currentTime;
    } else if (videoRate == 0) {
      videoFwd.playbackRate = 0;
      videoBwd.playbackRate = 0;
    }

    requestId =
      scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
  }

  function onScroll() {
    scrollRequest++;
    if (!requestId) {
      requestId = requestAnimationFrame(updateScroller);
    }
  }

  //   function createInfo() {
  //     var info = {};
  //     var items = Array.from(document.querySelectorAll(".info .value"));

  //     items.forEach(function (element) {
  //       Object.defineProperty(info, element.id, {
  //         set: function (value) {
  //           element.textContent = value;
  //         },
  //       });
  //     });

  //     return info;
  //   }
});
