const audio = document.querySelector("#custom-audio-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
// replaced all 'video' with 'audio' and hoping ti works out

const backBtn = document.querySelector("#back-btn");
const nextBtn = document.querySelector("#next-btn");
const songTitle = document.querySelector("#song-title");
// adding more features, structured it based on existing code

audio.removeAttribute("controls");
audio.loop = true;
// added autoloop to keep it on the same song instead of playing next and disrupting focus and flow

const songs = [
  {
    title: "Lofi beats",
    file: "track-1.mp3",
  },
  {
    title: "Lofi piano",
    file: "track-2.mp3",
  },
  {
    title: "Rain",
    file: "track-3.mp3",
    // named the tracks
  },
];

let currentSongIndex = 0;

playPauseBtn.addEventListener("click", togglePlayPause);
// this play pause button was just a comment before so i removed the slashes

audio.addEventListener("timeupdate", updateProgressBar);

nextBtn.addEventListener("click", () => {
  currentSongIndex++;

  if (currentSongIndex >= songs.length) {
    currentSongIndex = 0;
  }

  loadSong(currentSongIndex);
});

backBtn.addEventListener("click", () => {
  currentSongIndex--;

  if (currentSongIndex < 0) {
    currentSongIndex = songs.length - 1;
  }

  loadSong(currentSongIndex);
});

function togglePlayPause() {
  if (audio.paused || audio.ended) {
    audio.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    audio.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}
function updateProgressBar() {
  if (audio.duration) {
  const value = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = value + "%";
  }
}

function loadSong(index) {
  audio.src = songs[index].file;
  songTitle.textContent = songs[index].title;

  progressBar.style.width = "0";

  audio.play();
}
// using w3schools, youtube and MDN tutorials/guides i was able to get the next and back song buttons
// with 3 songs. I was very confused but it works






const lightsButton = document.querySelector(".lights");
const lightSwitchImg = document.querySelector("#light-switch-img");


let lightsOn = true;

lightsButton.addEventListener("click", () => {
  if (lightsOn) {
    document.body.style.backgroundImage = "url('dark-bg.png')";
    document.body.style.backgroundColor = "var(--secondary-bg-color)";
    lightSwitchImg.src = "lights-off.png";
    

    lightsOn = false;
  } else {
    document.body.style.backgroundImage = "url('light-bg.png')";
    document.body.style.backgroundColor = "var(--primary-bg-color)";
    lightSwitchImg.src = "lights-on.png";
    

    lightsOn = true;
  }
})
// I based this on the already existing play/pause button and I used the w3schools 'js if else' section to help me 
// I needed the button to do 3 actions simultaniously: swap bg image, swap bg colourand swap the button image. it was all pretty 
// straightforward so the online guides showed me what I needed to do
