class Bot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height = 60;
        this.color = "tomato";

        this.speed = 2;
        this.attackRange= 50;
    }

    update(player) {
        const distance = player.x - this.x;
        /*Measures distance to player. */

        if (Math.abs(distance) > this.attackRange) {

            if (distance > 0) {
                this.x += this.speed;
            } else {
                this.x -= this.speed;
            }
        }
        /*Move toward player unless already close enough. */
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}