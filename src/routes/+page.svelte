<script lang="ts">
	import Button from '$lib/button.svelte';
	import Chart from '$lib/chart.svelte';

	let pointsYes = 0;
	let pointsNo = 0;

	function increaseNo() {
		pointsNo += 1;
	}
	function increaseYes() {
		pointsYes += 1;
	}
	function decreaseNo() {
		pointsNo -= 1;
	}
	function decreaseYes() {
		pointsYes -= 1;
	}
	function reset() {
		console.log('rest');
		pointsYes = 0;
		pointsNo = 42;
	}
</script>

<h1 class="mb-4 text-3xl">Welcome to Kingsdilemma!</h1>

<div class=" flex flex-col items-center justify-center space-y-2">
	<div class="flex flex-row space-x-2">
		<div class="flex flex-col space-y-2">
			<Button class="bg-blue-300" text="+1" on:click={increaseYes} />
			<Button class="bg-blue-300" text="-1" on:click={decreaseYes} />
		</div>

		<div class="flex flex-row items-end space-x-1">
			<Chart class="bg-blue-500" points={pointsYes} text="JA!" />
			<Chart class="bg-red-500" points={pointsNo} text="Nein!" />
		</div>

		<div class="flex flex-col space-y-2">
			<Button class="bg-red-300" text="+1" on:click={increaseNo} />
			<Button class="bg-red-300" text="-1" on:click={decreaseNo} />
		</div>
	</div>

	<Button class="w-fit bg-orange-300" text="Zurücksetzen" on:click={reset} />
</div>
