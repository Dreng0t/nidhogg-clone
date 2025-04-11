const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
/*Grab the canvas + drawing context. */

const player = new Player(100, 300);  
const bot = new Bot(600, 300);
/*Create player and bot instances. */

function update() {
  player.update();  
  bot.update(player);
  /*Update all game objects. */

  if(player.attacking) {
    const hitboxX = player.x + player.width;
    const hitboxY = player.y + player.height / 3;
    const hitboxWidth = 10;
    const hitboxHeight = 10;

    if (
        hitboxX < bot.x + bot.width &&
        hitboxX + hitboxWidth > bot.x &&
        hitboxY < bot.y + bot.height &&
        hitboxY + hitboxHeight > bot.y
    ) {
        console.log("Bot hit!")
    }
  }
}
/*Check for attack collision between player and bot. */

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  /*Wipe the screen. */

  
  ctx.fillStyle = '#444';
  ctx.fillRect(0, canvas.height - 40, canvas.width, 40);
  /*Draw the ground. */

  player.draw(ctx);
  bot.draw(ctx);
  /*Draw the player and the bot. */
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

gameLoop();
