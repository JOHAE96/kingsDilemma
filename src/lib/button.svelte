<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { variants } from './variants';

	const dispatch = createEventDispatcher();
	let { variant = 'gold', text = 'click me', classes = '', disabled = false } = $props();
	function clickhandler() {
		console.log('click');
		dispatch('click');
	}
</script>

<button
	class={[
		classes,
		'font-medieval relative  overflow-hidden rounded-xl px-6 py-3 text-xl shadow-2xl transition-all ',
		variants[variant].border,
		`bg-gradient-to-b ${variants[variant].from} ${variants[variant].to}`,
		variants[variant].textColor,
		variants[variant].shadow,
		{
			'cursor-not-allowed': disabled,
			'cursor-pointer hover:scale-105 active:scale-95': !disabled,
			'opacity-50': disabled
		}
	]}
	onclick={clickhandler}
>
	<!-- Wenn eine Textur vorhanden ist, legen wir sie als halbtransparentes Overlay darüber -->
	{#if variants[variant].texture}
		<div
			class="absolute inset-0 overflow-hidden opacity-20"
			style="background-image: url({variants[variant].texture}); background-size: cover;"
		></div>
	{/if}

	<!-- Button-Text in den Vordergrund -->
	<span class="relative z-10">{text}</span>
</button>
