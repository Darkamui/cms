export default {
	name: "siteDetails",
	title: "Parois en détail",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Nom",
			type: "string",
		},
		{
			name: "directions",
			title: "Directions",
			type: "string",
		},
		{
			name: "desc",
			title: "Description",
			type: "string",
		},
		{
			name: "warning",
			title: "Avertissement",
			type: "string",
		},
		{
			name: "link",
			title: "Lien itinéraire",
			type: "url",
		},
		{
			name: "linkTopo",
			title: "Lien topo",
			type: "url",
		},
		{
			name: "fqme",
			title: "Adhération FQME?",
			type: "boolean",
		},
		{
			name: "images",
			title: "Images",
			type: "array",
			of: [{ type: "image" }],
			options: {
				hotspot: true,
			},
		},
		{
			name: "links",
			title: "Liens utiles",
			type: "array",
			of: [
				{
					name: "linksu",
					title: "Links name",
					type: "object",
					fields: [
						{
							name: "name",
							type: "string",
							title: "Nom",
						},
						{
							name: "address",
							type: "string",
							title: "Adresse",
						},
					],
				},
			],
		},
	],
};
