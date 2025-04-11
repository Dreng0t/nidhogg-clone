class Player {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.width = 40;
      this.height = 60;
      this.color = 'deepskyblue';
  
      this.vx = 0; // Horizontal velocity
      this.vy = 0; // Vertical velocity
  
      this.speed = 3; // Movement speed
      this.jumpStrength = -10; // Jump velocity
  
      this.onGround = false;
    }
  
    update() {
      // Horizontal Movement
      if (keys['a']) {
        this.vx = -this.speed;
      } else if (keys['d']) {
        this.vx = this.speed;
      } else {
        this.vx = 0;
      }
  
      // Jumping
      if (keys['w'] && this.onGround) {
        this.vy = this.jumpStrength;
        this.onGround = false;
      }
  
      // Gravity
      this.vy += 0.5; // Gravity constant
  
      // Apply movement
      this.x += this.vx;
      this.y += this.vy;
  
      // Ground Collision
      if (this.y + this.height >= canvas.height) {
        this.y = canvas.height - this.height;
        this.vy = 0;
        this.onGround = true;
      }
    }
  
    draw(ctx) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }
  