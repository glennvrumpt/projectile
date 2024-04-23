import Entity from "./entity.js";
import Position from "../components/position.js";
import Velocity from "../components/velocity.js";
import Size from "../components/size.js";

const enemy = new Entity();
enemy.addComponent(new Position(300, 300));
enemy.addComponent(new Velocity(0, 0));
enemy.addComponent(new Size(20, 20));
enemy.name = "enemy";

export default enemy;
