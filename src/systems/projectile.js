import System from "./system.js";
import Entity from "../entities/entity.js";
import Position from "../components/position.js";
import Velocity from "../components/velocity.js";
import Size from "../components/size.js";
import Projectile from "../components/projectile.js";

class ProjectileSystem extends System {
  constructor(canvas) {
    super();
    this.canvas = canvas;
    this.projectileSpeed = 600;
    this.mouseX = 0;
    this.mouseY = 0;
  }

  setMousePosition(x, y) {
    this.mouseX = x;
    this.mouseY = y;
  }

  fireProjectile(player) {
    const playerPosition = player.getComponent("Position");

    const dx = this.mouseX - playerPosition.x;
    const dy = this.mouseY - playerPosition.y;

    const length = Math.sqrt(dx * dx + dy * dy);
    const directionX = dx / length;
    const directionY = dy / length;

    const projectile = new Entity();
    projectile.addComponent(
      new Position(playerPosition.x + 10, playerPosition.y + 10)
    );
    projectile.addComponent(
      new Velocity(
        directionX * this.projectileSpeed,
        directionY * this.projectileSpeed
      )
    );
    projectile.addComponent(new Size(5, 5));
    projectile.addComponent(new Projectile());

    return projectile;
  }

  update(entities, deltaTime) {
    entities.forEach((entity) => {
      const position = entity.getComponent("Position");
      const velocity = entity.getComponent("Velocity");
      const projectile = entity.getComponent("Projectile");

      if (projectile) {
        position.x += velocity.dx * deltaTime;
        position.y += velocity.dy * deltaTime;

        if (
          position.x < 0 ||
          position.x > this.canvas.width ||
          position.y < 0 ||
          position.y > this.canvas.height
        ) {
          entities.splice(entities.indexOf(entity), 1);
        }
      }
    });
  }
}

export default ProjectileSystem;
