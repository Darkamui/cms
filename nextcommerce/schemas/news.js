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
			name: "link",
			title: "Adresse du lien",
			type: "string",
		},
		{
			name: "linkName",
			title: "Texte cliquable du lien",
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
