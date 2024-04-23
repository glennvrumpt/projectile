import Entity from "./entity.js";
import Position from "../components/position.js";
import Velocity from "../components/velocity.js";
import Size from "../components/size.js";
import Projectile from "../components/projectile.js";

const projectile = new Entity();
projectile.addComponent(new Position(0, 0));
projectile.addComponent(new Velocity(0, 0));
projectile.addComponent(new Size(5, 5));
projectile.addComponent(new Projectile());
projectile.name = "projectile";

export default projectile;
