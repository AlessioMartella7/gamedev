import { gameState } from "./state";

export function updateCamera() {
	const { player, camera, world } = gameState;

	camera.x = (player.x + player.width / 2) - (camera.width / 2);
	camera.y = (player.y + player.height / 2) - (camera.height / 2);

	// CLAMPS

	camera.x = Math.min(
		Math.max(camera.x, 0),
		world.width - camera.width
	);

	camera.y = Math.min(
		Math.max(camera.y, 0),
		world.height - camera.height
	);
}