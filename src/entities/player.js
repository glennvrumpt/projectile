import Entity from "./entity.js";
import Position from "../components/position.js";
import Velocity from "../components/velocity.js";
import Size from "../components/size.js";
import Input from "../components/input.js";

const player = new Entity();
player.addComponent(new Position(100, 100));
player.addComponent(new Velocity(0, 0));
player.addComponent(new Size(20, 20));
player.addComponent(new Input());
player.name = "player";

export default player;
