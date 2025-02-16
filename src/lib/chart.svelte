<script lang="ts">
	let { variant = 'blue', text = 'Punkte', points = 0 } = $props();
	const variants = {
		blue: {
			border: 'border-blue-600',
			from: 'from-blue-800',
			to: 'to-blue-900',
			textColor: 'text-blue-200',
			shadow: 'shadow-[0px_4px_0px_rgba(37,99,235,0.8)]'
		},
		red: {
			border: 'border-red-600',
			from: 'from-red-800',
			to: 'to-red-900',
			textColor: 'text-red-200',
			shadow: 'shadow-[0px_4px_0px_rgba(220,38,38,0.8)]'
		}
	};
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
