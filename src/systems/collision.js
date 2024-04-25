import System from "./system.js";

class Collision extends System {
  update(entities) {
    entities.forEach((entity) => {
      const projectile = entity.getComponent("Projectile");
      const entityPosition = entity.getComponent("Position");
      const entitySize = entity.getComponent("Size");

      if (projectile) {
        entities.forEach((otherEntity) => {
          const otherPosition = otherEntity.getComponent("Position");
          const otherSize = otherEntity.getComponent("Size");

          if (otherEntity.name === "enemy") {
            const isColliding =
              entityPosition.x < otherPosition.x + otherSize.width &&
              entityPosition.x + entitySize.width > otherPosition.x &&
              entityPosition.y < otherPosition.y + otherSize.height &&
              entityPosition.y + entitySize.height > otherPosition.y;

            if (isColliding) {
              entities.splice(entities.indexOf(entity), 1);
            }
          }
        });
      }
    });
  }
}

export default Collision;
