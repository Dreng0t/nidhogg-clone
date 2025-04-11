const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const player = new Player(100, 300);  // x, y starting position

function update() {
  player.update();  // Update player movement + physics
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Optional: draw a floor
  ctx.fillStyle = '#444';
  ctx.fillRect(0, canvas.height - 40, canvas.width, 40);

  player.draw(ctx);
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

gameLoop();
