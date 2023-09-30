let clock, clock1;

window.addEventListener('load', () => {
  'use strict'
  console.log('start');

  clock = new Clock('h:m:s', 'clock1') 
  clock.start()
  clock1 = new UpdatedClock('h:m:s', 'clock2')
  clock1.start(3000, 8000)
});
