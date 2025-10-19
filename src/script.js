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
// دکمه ی play
let isPlaying = false;
play.addEventListener("click", function () {
  if (isPlaying) {
    player.pause();
    playIcon.innerHTML = `
      <path stroke-linecap="round" stroke-linejoin="round"
      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"/>
    `;
  } else {
    player.play();
        playIcon.innerHTML = `
      <path stroke-linecap="round" stroke-linejoin="round"
      d="M5.25 4.5h3v15h-3V4.5Zm10.5 0h3v15h-3V4.5Z"/>
    `;
  }

  isPlaying = !isPlaying;
});
