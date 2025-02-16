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
		if (pointsNo > 0) {
			pointsNo -= 1;
		}
	}
	function decreaseYes() {
		if (pointsYes > 0) {
			pointsYes -= 1;
		}
	}
	function reset() {
		console.log('rest');
		pointsYes = 0;
		pointsNo = 0;
	}

	$: diff = Math.max(pointsYes, pointsNo) - Math.min(pointsYes, pointsNo);
</script>

<div class="mt-4 flex flex-row items-center justify-center">
	<h1 class="mb-4 text-4xl">Welcome to Kingsdilemma!</h1>
</div>
<div class=" flex flex-col items-center justify-center space-y-2">
	<div class="flex flex-row space-x-2">
		<div class="flex flex-col space-y-2">
			<Button variant="blue" text="+1" on:click={increaseYes} />
			<Button variant="blue" text="-1" on:click={decreaseYes} />
		</div>

		<div class="flex flex-row items-end space-x-1">
			<Chart variant="blue" points={pointsYes} text="JA!" />
			<Chart variant="red" points={pointsNo} text="Nein!" />
		</div>

		<div class="flex flex-col space-y-2">
			<Button variant="red" text="+1" on:click={increaseNo} />
			<Button variant="red" text="-1" on:click={decreaseNo} />
		</div>
	</div>

	<div
		class="rounded-xl p-1"
		class:bg-blue-500={pointsYes > pointsNo}
		class:bg-red-200={pointsYes < pointsNo}
	>
		Diff: {diff}
	</div>
	<Button variant="gold" text="Zurücksetzen" on:click={reset} />
</div>
