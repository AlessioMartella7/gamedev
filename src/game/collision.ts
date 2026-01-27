import { TILE_SIZE, isSolidAtWorldPos } from "./tilemap";

export function rectsOverlap(
  a: { x: number, y: number, width: number, height: number },
  b: { x: number, y: number, width: number, height: number }
) {
  return (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  );
}

export function CheckTileCollision(player: { x: number, y: number, width: number, height: number }) {
  const startCol = Math.floor(player.x / TILE_SIZE);
  const endCol = Math.floor((player.x + player.width) / TILE_SIZE);
  const startRow = Math.floor(player.y / TILE_SIZE);
  const endRow = Math.floor((player.y + player.height) / TILE_SIZE);

  for (let row = startRow; row < endRow; row++) {
    for (let col = startCol; col < endCol; col++) {
      if (isSolidAtWorldPos(col * TILE_SIZE, row * TILE_SIZE)) {
        return true; // collisione rilevata
      }
    }
  }
  return false; //nessuna collisione
}

