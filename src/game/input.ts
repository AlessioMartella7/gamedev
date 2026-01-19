export type InputState = {
  up: boolean
  down: boolean
  left: boolean
  right: boolean
}

export const inputState: InputState = {
  up: false,
  down: false,
  left: false,
  right: false
}

export function setupInput() {
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
      case "w":
      case "W":
        inputState.up = true
        break
      case "ArrowDown":
      case "s":
      case "S":
        inputState.down = true
        break
      case "ArrowLeft":
      case "a":
      case "A":
        inputState.left = true
        break
      case "ArrowRight":
      case "d":
      case "D":
        inputState.right = true
        break
    }
  })

  window.addEventListener("keyup", (e) => {
    switch (e.key) {
      case "ArrowUp":
      case "w":
      case "W":
        inputState.up = false
        break
      case "ArrowDown":
      case "s":
      case "S":
        inputState.down = false
        break
      case "ArrowLeft":
      case "a":
      case "A":
        inputState.left = false
        break
      case "ArrowRight":
      case "d":
      case "D":
        inputState.right = false
        break
    }
  })
}
