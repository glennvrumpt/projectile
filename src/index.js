import InputSystem from "./systems/input.js";
import AISystem from "./systems/ai.js";
import ProjectileSystem from "./systems/projectile.js";
import MovementSystem from "./systems/movement.js";
import CollisionSystem from "./systems/collision.js";
import RenderingSystem from "./systems/rendering.js";

import player from "./entities/player.js";
import enemy from "./entities/enemy.js";

const canvas = document.getElementById("canvas");
const inputSystem = new InputSystem();
const aiSystem = new AISystem();
const projectileSystem = new ProjectileSystem(canvas);
const movementSystem = new MovementSystem(canvas);
const collisionSystem = new CollisionSystem();
const renderingSystem = new RenderingSystem(canvas);

const entities = [player, enemy];

canvas.addEventListener("mousemove", (e) => {
  const rect = canvas.getBoundingClientRect();
  projectileSystem.setMousePosition(
    e.clientX - rect.left,
    e.clientY - rect.top
  );
});

canvas.addEventListener("click", () => {
  const projectile = projectileSystem.fireProjectile(player);
  entities.push(projectile);
});

const mainLoop = (lastTime) => {
  const currentTime = performance.now();
  const deltaTime = (currentTime - lastTime) / 1000;

  inputSystem.update(entities, deltaTime);
  aiSystem.update(entities, deltaTime);
  projectileSystem.update(entities, deltaTime);
  movementSystem.update(entities, deltaTime);
  collisionSystem.update(entities, deltaTime);
  renderingSystem.update(entities, deltaTime);

  requestAnimationFrame(() => mainLoop(currentTime));
};

mainLoop(performance.now());
