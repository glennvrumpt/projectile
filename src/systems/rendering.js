import System from "./system.js";

class RenderingSystem extends System {
  constructor(canvas) {
    super();
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
  }

  update(entities) {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    entities.forEach((entity) => {
      const position = entity.getComponent("Position");
      const projectile = entity.getComponent("Projectile");

      if (projectile) {
        this.context.fillStyle = "black";
        this.context.beginPath();
        this.context.arc(position.x, position.y, 5, 0, Math.PI * 2);
        this.context.fill();
      }

      if (position && !projectile) {
        if (entity.name === "player") {
          this.context.fillStyle = "green";
          this.context.fillRect(position.x, position.y, 20, 20);
        } else if (entity.name === "enemy") {
          this.context.fillStyle = "red";
          this.context.fillRect(position.x, position.y, 20, 20);
        }
      }
    });
  }
}

export default RenderingSystem;
