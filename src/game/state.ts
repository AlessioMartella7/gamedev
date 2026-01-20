import type { Camera, Player } from "../types/entities";

export const gameState = {
  canvas: {
    width: 800,
    height: 600
  },

  world: {
    width: 2000,
    height: 2000,
  },

  player: {
    x: 100,
    y: 100,
    width: 50,
    height: 50,
    speed: 200,
  } as Player,

  camera: {
    x: 0,
    y: 0,
    width: 800,
    height: 600,
  } as Camera,

  obstacles: [
    { x: 300, y: 200, width: 200, height: 40 },
    { x: 150, y: 400, width: 100, height: 100 }
  ],
}