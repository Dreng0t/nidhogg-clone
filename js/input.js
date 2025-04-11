/*******************************/
/*Tracks which keys are pressed*/
/*******************************/

const keys = {};
/*Empty object to store key states. */

window.addEventListener('keydown', (e) => {
  keys[e.key] = true;
});
/*When a key is pressed, mark it as true in the keys object. */

window.addEventListener('keyup', (e) => {
  keys[e.key] = false;
});
/*When a key is released, mark it as false in the keys object. */
