import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
const lsKey = 'videoplayer-current-time';
player.on('timeupdate', throttle(onTimeupdate, 1000));
function onTimeupdate({ seconds }) {
  localStorage.setItem(lsKey, JSON.stringify(seconds));
}
player.setCurrentTime(localStorage.getItem(lsKey) || 0);
