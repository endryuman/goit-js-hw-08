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
function onTimeupdate(data) {
  localStorage.setItem(lsKey, JSON.stringify(data));
}
const value = localStorage.getItem(lsKey);
const currentValue = JSON.parse(value);
console.log(currentValue.seconds);
player
  .setCurrentTime(currentValue.seconds)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
