export default {
	name: "news",
	title: "Nouvelles",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Titre",
			type: "string",
		},
		{
			name: "desc",
			title: "Contenu",
			type: "string",
		},

		{
			name: "links",

			title: "Liens",
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
			name: "files",
			title: "Fichiers",
			type: "array",
			of: [
				{
					title: "File name",
					type: "object",
					fields: [
						{
							name: "name",
							type: "string",
							title: "Nom",
						},
						{
							name: "file",
							type: "url",
							title: "Lien téléchargement",
						},
					],
				},
			],
		},
	],
};
