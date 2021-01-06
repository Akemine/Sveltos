import { writable } from 'svelte/store';
import { readable } from 'svelte/store';

export const count = writable(1);

function handleMenu(e) {

	const { subscribe, update } = writable(1);
	return {
		subscribe,
		currentValue: () => update(e => e.target.value)
	};
}

export const handle = handleMenu();

