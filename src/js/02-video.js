import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const VPCurrentTime = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const onPlay = function (event) {
  localStorage.setItem(VPCurrentTime, event.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(VPCurrentTime)) || 0);