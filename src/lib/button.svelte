<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	let props = $props();
	function clickhandler() {
		console.log('click');
		dispatch('click');
	}
</script>

<button class={['cursor-pointer rounded-sm p-3', props.class]} onclick={clickhandler}>
	{props.text}
</button>
