<script lang="ts">
	let props = $props();
	let displayText = `${props.text}: ${props.points}`;
</script>

<div class={['flex min-h-4 w-20 items-center justify-center', props.class]}>
	{displayText}
</div>
