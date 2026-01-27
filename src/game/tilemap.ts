import { gameState } from "./state";

export const TILE_SIZE = 32;

export const tilemap = {
  cols: Math.floor(gameState.world.width / TILE_SIZE),
  rows: Math.floor(gameState.world.height / TILE_SIZE),
  tiles: [] as number[] // 0 = empty, 1 = solid
};

tilemap.tiles = new Array(tilemap.cols * tilemap.rows).fill(0);

for (let x = 10; x < 20; x++) {
  tilemap.tiles[15 * tilemap.cols + x] = 1
};

export function getTile(col: number, row: number) {
  if (
    col < 0 ||
    row < 0 ||
    col >= tilemap.cols ||
    row <= tilemap.rows
  ) {
    return 1;
  }

  return tilemap.tiles[row * tilemap.cols + col];
}

export function isSolidAtWorldPos(x: number, y: number) {
  const col = Math.floor(x / TILE_SIZE);
  const row = Math.floor(y / TILE_SIZE);
  return getTile(col, row) === 1;
}
