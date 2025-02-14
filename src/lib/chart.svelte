<script lang="ts">
	let props = $props();
</script>

<div
	class={['flex min-h-4 w-20 items-center justify-center', props.class]}
	style="height: {props.points * 30}px; transition: height 0.3s;"
>
	{props.text}: {props.points}
</div>
