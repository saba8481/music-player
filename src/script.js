const $ = document;
let img = $.getElementById("img");
let Music = $.getElementById("Music");
let nameArtist = $.getElementById("nameArtist");
let navar = $.getElementById("navar");
let pest = $.getElementById("pest");
let play = $.getElementById("play");
let next = $.getElementById("next");
let player = $.getElementById("player");
let playIcon = $.getElementById("playIcon");
let currentTimeEl = $.getElementById("currentTime");
let totalTimeEl = $.getElementById("totalTime");

let isPlaying = false;

// تابع تبدیل ثانیه به دقیقه:ثانیه
function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${sec < 10 ? "0" : ""}${sec}`;
}

// زمان کل آهنگ وقتی لود شد
player.addEventListener("loadedmetadata", () => {
  totalTimeEl.textContent = formatTime(player.duration);
});

// هر بار زمان آهنگ تغییر کرد
player.addEventListener("timeupdate", () => {
  currentTimeEl.textContent = formatTime(player.currentTime);
  const progressPercent = (player.currentTime / player.duration) * 100;
  navar.style.width = progressPercent + "%";
});

// دکمه پخش / توقف
play.addEventListener("click", function () {
  if (isPlaying) {
    player.pause();
    playIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"/>`;
  } else {
    player.play();
    playIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="M5.25 4.5h3v15h-3V4.5Zm10.5 0h3v15h-3V4.5Z"/>`;
  }
  isPlaying = !isPlaying;
});

pest.addEventListener("click" , function(){
document.body.style.background = "linear-gradient(to top,rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 41%, rgba(0, 212, 255, 1) 100%)";
// document.body.style.background = "linear-gradient(180deg, #ff7e5f, #feb47b)";

})