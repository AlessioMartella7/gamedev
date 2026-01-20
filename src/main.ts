import { gameState } from "./game/state"
import { updatePlayer } from "./game/player"
import { updateCamera } from "./game/camera"
import { setupInput } from "./game/input"

setupInput()

const canvasElement = document.getElementById("game")
if (!(canvasElement instanceof HTMLCanvasElement)) throw new Error("Canvas not found!")

const canvas = canvasElement
canvas.width = gameState.canvas.width;
canvas.height = gameState.canvas.height;
const ctx = canvas.getContext("2d")

if (!ctx) throw new Error("Canvas context not found")
const context: CanvasRenderingContext2D = ctx

let lastTime = 0

function loop(time: number) {
  const delta = (time - lastTime) / 1000
  lastTime = time

  updatePlayer(delta);
  updateCamera();


  context.clearRect(0, 0, canvas.width, canvas.height)

  const { player, camera } = gameState;

  // player
  context.fillStyle = "white"
  context.fillRect(player.x - camera.x, player.y - camera.y, player.width, player.height)

  // ostacoli
  context.fillStyle = "red"
  for (const obs of gameState.obstacles) {
    context.fillRect(obs.x - camera.x, obs.y - camera.y, obs.width, obs.height)
  }

  requestAnimationFrame(loop)
}

requestAnimationFrame(loop)
