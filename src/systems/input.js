import System from "./system.js";

class Input extends System {
  constructor() {
    super();
    this.keys = {};

    window.addEventListener("keydown", (e) => {
      this.keys[e.key] = true;
    });

    window.addEventListener("keyup", (e) => {
      this.keys[e.key] = false;
    });
  }

  update(entities) {
    const movementSpeed = 300;

    entities.forEach((entity) => {
      const input = entity.getComponent("Input");
      const velocity = entity.getComponent("Velocity");

      if (input && velocity) {
        velocity.dx = 0;
        velocity.dy = 0;

        if (this.keys["w"]) {
          velocity.dy = -movementSpeed;
        }
        if (this.keys["s"]) {
          velocity.dy = movementSpeed;
        }
        if (this.keys["a"]) {
          velocity.dx = -movementSpeed;
        }
        if (this.keys["d"]) {
          velocity.dx = movementSpeed;
        }
      }
    });
  }
}

export default Input;
