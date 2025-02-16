<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const variants = {
		blue: {
			border: 'border-blue-600',
			from: 'from-blue-800',
			to: 'to-blue-900',
			textColor: 'text-blue-200',
			shadow: 'shadow-[0px_4px_0px_rgba(37,99,235,0.8)]',
			texture: '' // kein spezielles Texture-Layer
		},
		red: {
			border: 'border-red-600',
			from: 'from-red-800',
			to: 'to-red-900',
			textColor: 'text-red-200',
			shadow: 'shadow-[0px_4px_0px_rgba(220,38,38,0.8)]',
			texture: ''
		},
		gold: {
			border: 'border-yellow-600',
			from: 'from-gray-900',
			to: 'to-black',
			textColor: 'text-yellow-200',
			shadow: 'shadow-[0px_4px_0px_rgba(201,162,39,0.8)]',
			// Falls du eine Textur für Gold/Beige willst, kannst du sie hier hinterlegen:
			texture: '/gold-texture.webp'
		}
	};

	const dispatch = createEventDispatcher();
	let { variant = 'gold', text = 'click me' } = $props();
	function clickhandler() {
		console.log('click');
		dispatch('click');
	}
</script>

<button
	class={[
		'font-medieval relative cursor-pointer overflow-hidden rounded-xl px-6 py-3 text-xl shadow-2xl transition-all hover:scale-105 active:scale-95',
		variants[variant].border,
		`bg-gradient-to-b ${variants[variant].from} ${variants[variant].to}`,
		variants[variant].textColor,
		variants[variant].shadow
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
