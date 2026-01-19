import { gameState } from "./state";
import { inputState } from "./input";
import { rectsOverlap } from "./collision";

export function updatePlayer(delta: number) {
  const player = gameState.player;

  // movimento

  let dirX = 0;
  let dirY = 0;

  if (inputState.up) dirY -= 1
  if (inputState.down) dirY += 1
  if (inputState.left) dirX -= 1
  if (inputState.right) dirX += 1

  // Normalizes so diagonal movement has the same speed as cardinal
  const length = Math.hypot(dirX, dirY);

  if (length > 0) {
    dirX /= length
    dirY /= length
  }

  // Calculating moving position
  const moveX = dirX * player.speed * delta;
  const moveY = dirY * player.speed * delta;


  // X MOVEMENT
  player.x += moveX
  for (const obs of gameState.obstacles) {
    if (rectsOverlap(player, obs)) {
      player.x -= moveX;
      break;
    }
  }
  // CLAMP X
  player.x = Math.min(
    Math.max(player.x, 0),
    gameState.canvas.width - player.width
  );

  // Y MOVEMENT
  player.y += moveY
  for (const obs of gameState.obstacles) {
    if (rectsOverlap(player, obs)) {
      player.y -= moveY;
      break;
    }
  }
  // CLAMP Y
  player.y = Math.min(
    Math.max(player.y, 0),
    gameState.canvas.height - player.height
  );

}