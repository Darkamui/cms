export default {
	name: "ski",
	title: "Ski",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Nom",
			type: "string",
		},

		{
			name: "image",
			title: "Image",
			type: "image",
			options: {
				hotspot: true,
			},
		},
	],
};
