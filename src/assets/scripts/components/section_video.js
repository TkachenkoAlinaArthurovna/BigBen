const video = document.getElementById('section_video');
const playButton = document.getElementById('section_video_btn_play');
const closeButton = document.getElementById('section_video_btn_close');

playButton.addEventListener('click', function() {
  video.play();
  closeButton.style.opacity = '1';
  closeButton.style.visibility = 'visible';
  playButton.style.opacity = '0';
  playButton.style.visibility = 'hidden';
});

closeButton.addEventListener('click', function() {
  video.pause();
  playButton.style.opacity = '1';
  playButton.style.visibility = 'visible';
  closeButton.style.opacity = '0';
  closeButton.style.visibility = 'hidden';
});
