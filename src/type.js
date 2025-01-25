'use strict';

new TypeIt('.home__title--strong', {
  loop: true,
  speed: 90,
}) // Dream Coder|

  .move(-9) //Front-end| Engineer
  .delete(9) 
  .type('Front-end') //Front-end Engineer|
  .pause(650)
  .move(null, { to: 'END' }) //Amazing Dream Coder|
  .delete()
  .type('Data analyst') //Back-end| Engineer
  .pause(650)
  .delete()
  .go();
