class Player {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      /*The player's position on the canvas. */

      this.width = 40;
      this.height = 60;
      this.color = 'deepskyblue';
      /*The players size and color. */
  
      this.vx = 0; 
      this.vy = 0; 
      /*Velocity in the x (horizontal) and y (vertical) directions. */
  
      this.speed = 3; 
      /*speed = move speed left/right. */

      this.jumpStrength = -10; 
      /*jumpStrength = negative because "up" is negative in canvas coordinates. */
  
      this.onGround = false;
      /*onGround = true if player is standing on the floor. */  

      this.attacking = false;
      /*attacking = true if currently attacking. */      

      this.attackCooldown = false;
      /*attackCooldown = to prevent an endless spam of attacks. */
    }
  
    update() {
      
      if (keys['a']) {
        this.vx = -this.speed;
      } else if (keys['d']) {
        this.vx = this.speed;
      } else {
        this.vx = 0;
      }
      /*Handles left/right movement based on input. */
  
      
      if (keys['w'] && this.onGround) {
        this.vy = this.jumpStrength;
        this.onGround = false;
      }
      /*Handles jumping - only useable if on the ground. */
  
      
      this.vy += 0.5; 
      /*Gravity always pulls the player down. */
  
      
      this.x += this.vx;
      this.y += this.vy;
      /*Apply velocity to update position. */
  
      
      if (this.y + this.height >= canvas.height) {
        this.y = canvas.height - this.height;
        this.vy = 0;
        this.onGround = true;
      }
      /*Ground collision - prevent falling through the floor. */

      if (keys['j'] && !this.attacking && !this.attackCooldown) {
        this.attacking = true;

        setTimeout(() => {
            this.attacking = false;
            this.attackCooldown = true;

            setTimeout(() => {
                this.attackCooldown = false;
            }, 300)
        }, 100)
      }
      /*Pressing j triggers an attack for 100ms, then a cooldown prevents instant re-attacking */

    }
  
    draw(ctx) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
      /*Draw the player. */

      if (this.attacking) {
        ctx.fillStyle = 'yellow';
        ctx.fillRect(
            this.x + this.width,
            this.y + this.height / 3,
            10,
            10
        );
      }
      /*Draw the attack hitbox when attacking. */
    }
  }
  