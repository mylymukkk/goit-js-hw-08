import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const updateTime = function (timeupdate) {
  const currentTime = timeupdate.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
  console.log(currentTime);
};

player.on('timeupdate', throttle(updateTime, 1000));

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {
    console.log('The actual time that the player seeked to: ', seconds);
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        console.log(
          'Error: the time was less than 0 or greater than the video’s duration'
        );
        break;
      default:
        console.log('Error');
        break;
    }
  });
