import type { Player } from "../types/entities";

export const gameState = {
  canvas: {
    width: 800,
    height: 600
  },

  player: {
    x: 100,
    y: 100,
    width: 50,
    height: 50,
    speed: 200,
  } as Player,

  obstacles: [
    { x: 300, y: 200, width: 200, height: 40 },
    { x: 150, y: 400, width: 100, height: 100 }
  ],
}