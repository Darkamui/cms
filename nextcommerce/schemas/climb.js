export default {
	name: "climb",
	title: "Ou grimper",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Type de grimpe",
			type: "string",
		},
		{
			name: "desc",
			title: "Sommaire",
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
