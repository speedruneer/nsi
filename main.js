const button = document.getElementById("leftmenubutton");
const layout = document.getElementById("layout");

button.addEventListener("click", () => {
    layout.classList.toggle("open");
});

function showVideo() {
  document.getElementById('video-overlay').style.display = 'flex';
}

function closeVideo() {
  const overlay = document.getElementById('video-overlay');
  const video = document.getElementById('mp4-video');
  video.pause();
  video.currentTime = 0;
  overlay.style.display = 'none';
}

for (let i = 0;i<10;i++){closeVideo();}