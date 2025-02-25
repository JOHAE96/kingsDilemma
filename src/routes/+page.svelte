<script lang="ts">
	import Button from '$lib/button.svelte';
	import Chart from '$lib/chart.svelte';

	let pointsYes = 0;
	let pointsNo = 0;

	function increaseNo(num: number) {
		pointsNo += num;
	}
	function increaseYes(num: number) {
		pointsYes += num;
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
		<div class="grid h-64 grid-cols-2 gap-2">
			<Button
				classes="col-span-2 row-span-2"
				variant="blue"
				text="+10"
				on:click={() => increaseYes(10)}
			/>
			<Button classes="col-span-2" variant="blue" text="+5" on:click={() => increaseYes(5)} />
			<Button variant="blue" text="+1" on:click={() => increaseYes(1)} />
			<Button variant="blue" text="-1" on:click={decreaseYes} />
		</div>

		<div class="mx-5 flex flex-row items-end space-x-1">
			<Chart variant="blue" points={pointsYes} total={pointsYes + pointsNo} text="JA!" />
			<Chart variant="red" points={pointsNo} total={pointsYes + pointsNo} text="Nein!" />
		</div>

		<div class="grid h-64 grid-cols-2 gap-2">
			<Button
				classes="col-span-2 row-span-2"
				variant="red"
				text="+10"
				on:click={() => increaseNo(10)}
			/>
			<Button classes="col-span-2" variant="red" text="+5" on:click={() => increaseNo(5)} />
			<Button variant="red" text="+1" on:click={() => increaseNo(1)} />
			<Button variant="red" text="-1" on:click={decreaseNo} />
		</div>
	</div>

	{#if diff === 0}
		<img src="/judge-hammer.png" alt="Hand" class="h-20" />
	{:else}
		<div
			class="rounded-xl p-1"
			class:bg-blue-500={pointsYes > pointsNo}
			class:bg-red-200={pointsYes < pointsNo}
		>
			<p class="text-center text-xl">{pointsYes > pointsNo ? 'Ja!' : 'Nein!'}</p>

			<p>mit: {diff} Punkten in Führung</p>
		</div>
	{/if}

	<Button variant="gold" text="Zurücksetzen" on:click={reset} />
</div>
