//getting elements
const container = document.getElementById('container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progressbar = document.getElementById('progressbar');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const startStopBtn = document.querySelector('.startstop')


// Song titles
const songs = ['hey', 'summer', 'ukulele'];

// song status
let songIndex = 2;

// Initially load song
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
  title.innerText = song;
  console.log(song);
  audio.src = `music/${song}.mp3`;
  cover.src = `img/${song}.jpg`;
}

// Play song
function playSong() {
  container.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}

// Pause song
function pauseSong() {
  container.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}

// Previous song
function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Next song
function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

//Progress bar: updating where the song is
function updateProgress(e){
  //console.log(e.srcElement.currentTime)
  const {duration, currentTime} = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progressbar.style.width = `${progressPercent}%`;
}
//Progress bar: navigating through the song on the progressbar
function setProgress(e){
// console.log(width);
  const width = this.clientWidth;
  const clickX = e.offsetX;
  // console.log(clickX);
  const duration = audio.duration;
  audio.currentTime =(clickX / width) * duration;
  
}

// Event listeners
playBtn.addEventListener('click', () => {
  const isPlaying = container.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Change song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

//Everytime the audio updates
audio.addEventListener('timeupdate', updateProgress)

//progress display on the progressbar
progressContainer.addEventListener('click', setProgress)

// Song ends
audio.addEventListener('ended', nextSong);

//start button
startStopBtn.addEventListener('click', () => {
 
  if(startStopBtn.innerText == 'START'){
    startStopBtn.innerText = 'STOP';
  } else{
    startStopBtn.innerText = 'START';
  }
  
})