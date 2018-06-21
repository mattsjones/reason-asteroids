

import * as Vec from "./Vec.js";
import * as $$Math from "./Math.js";

var shipAngleModifier = $$Math.degreesToRadians(90);

function make(position, angle) {
  return /* record */[
          /* velocity */Vec.angle(Vec.make(10, 10), angle - shipAngleModifier),
          /* position */position
        ];
}

function update(state) {
  return /* record */[
          /* velocity */state[/* velocity */0],
          /* position */Vec.add(state[/* position */1], state[/* velocity */0])
        ];
}

function draw(ctx, param) {
  var position = param[/* position */1];
  ctx.beginPath();
  ctx.arc(position[/* x */0], position[/* y */1], 1, 0, $$Math.doublePI);
  ctx.stroke();
  return /* () */0;
}

var bulletVelocity = 10;

export {
  bulletVelocity ,
  shipAngleModifier ,
  make ,
  update ,
  draw ,
  
}
/* shipAngleModifier Not a pure module */