export type Variant = {
	border: string;
	from: string;
	to: string;
	textColor: string;
	shadow: string;
	texture: string;
};

export const variants: { [key: string]: Variant } = {
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
