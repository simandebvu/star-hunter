import sky from '../assets/images/sky.png';
import ground from '../assets/images/platform.png';
import star from '../assets/images/star.png';
import bomb from '../assets/images/bomb.png';
import dude from '../assets/images/dude.png';

function preload() {
  this.load.image('sky', sky);
  this.load.image('ground', ground);
  this.load.image('star', star);
  this.load.image('bomb', bomb);
  this.load.spritesheet('dude', dude, { frameWidth: 32, frameHeight: 48 });
}

export default preload;