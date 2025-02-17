<script lang="ts">
	let { variant = 'blue', text = 'Punkte', points = 0 } = $props();
	import { variants } from './variants';
</script>

<div
	class={[
		'flex min-h-4 w-20 items-center justify-center',
		variants[variant].border,
		`bg-gradient-to-b ${variants[variant].from} ${variants[variant].to}`,
		variants[variant].textColor,
		variants[variant].shadow
	]}
	style="height: {points * 30}px; transition: height 0.3s;"
>
	{text}: {points}
</div>
