export default {
	name: "team",
	title: "Team",
	type: "document",
	fields: [
		{
			name: "image",
			title: "Image",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "name",
			title: "Name",
			type: "string",
		},
		{
			name: "job",
			title: "Rôle",
			type: "string",
		},
	],
};
