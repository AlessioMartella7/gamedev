import { gameState } from "./state";
import { inputState } from "./input";
import { rectsOverlap, CheckTileCollision } from "./collision";
import { TILE_SIZE, isSolidAtWorldPos } from "./tilemap";

const getPlayer = () => gameState.player;

function moveAndCollideAxis(axis: "x" | "y", amount: number) {
  const player = getPlayer();

  if (amount === 0) return;

  player[axis] += amount;

  for (const obs of gameState.obstacles) {
    if (!rectsOverlap(player, obs)) continue;

    if (axis === "x") {
      if (amount > 0) {
        // moving right
        player.x = obs.x - player.width;
      } else {
        // moving left
        player.x = obs.x + obs.width;
      }
    } else {
      if (amount > 0) {
        // moving down
        player.y = obs.y - player.height;
      } else {
        // moving up
        player.y = obs.y + obs.height;
      }
    }

    break; // importante
  }
  // CLAMP X
  player.x = Math.min(
    Math.max(player.x, 0),
    gameState.world.width - player.width
  );

  // CLAMP Y
  player.y = Math.min(
    Math.max(player.y, 0),
    gameState.world.height - player.height
  );
}

export function updatePlayer(delta: number) {
  const player = getPlayer();

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

  moveAndCollideAxis("x", moveX);
  moveAndCollideAxis("y", moveY);

}