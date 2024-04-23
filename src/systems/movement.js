import System from "./system.js";

class MovementSystem extends System {
  constructor(canvas) {
    super();
    this.canvas = canvas;
  }

  update(entities, deltaTime) {
    entities.forEach((entity) => {
      const position = entity.getComponent("Position");
      const velocity = entity.getComponent("Velocity");
      const size = entity.getComponent("Size");

      if (position && velocity) {
        position.x += velocity.dx * deltaTime;
        position.y += velocity.dy * deltaTime;

        if (entity.name === "player") {
          position.x = Math.max(
            0,
            Math.min(this.canvas.width - size.width, position.x)
          );
          position.y = Math.max(
            0,
            Math.min(this.canvas.height - size.height, position.y)
          );
        }
      }
    });
  }
}

export default MovementSystem;
