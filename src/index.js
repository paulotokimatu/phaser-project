import Phaser from 'phaser';

import IngameScene from './scenes/ingame.scene';

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 200 }
      }
  },
  scene: IngameScene
};

var game = new Phaser.Game(config);
