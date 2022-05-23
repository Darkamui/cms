export default {
	name: "sites",
	title: "Parois",
	type: "document",
	fields: [
		{
			name: "sector",
			title: "Nom de secteur",
			type: "string",
		},

		{
			name: "links",
			title: "Paroi",
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
						{
							name: "status",
							type: "boolean",
							title: "Fermé?",
						},
					],
				},
			],
		},
	],
};
