<script lang="ts">
	let props = $props();
</script>

<button class={['cursor-pointer rounded-sm p-3', props.class]}>{props.text} </button>
