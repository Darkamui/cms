export default {
	name: "indoor",
	title: "Intérieur",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Nom",
			type: "string",
		},
		{
			name: "desc",
			title: "Sommaire",
			type: "string",
		},
		{
			name: "city",
			title: "Ville",
			type: "string",
		},
		{
			name: "type",
			title: "Type",
			type: "string",
		},
		{
			name: "tel",
			title: "Téléphone",
			type: "string",
		},
		{
			name: "link",
			title: "Adresse du lien",
			type: "string",
		},
		{
			name: "adresse",
			title: "Adresse",
			type: "string",
		},
		{
			name: "times",
			title: "Horaire",
			type: "array",
			of: [{ type: "string" }],
		},
		{
			name: "cost",
			title: "Tarifs",
			type: "array",
			of: [{ type: "string" }],
		},
		{
			name: "image",
			title: "Image",
			type: "image",
			options: {
				hotspot: true,
			},
		},

		{
			name: "logo",
			title: "Logo",
			type: "image",
			options: {
				hotspot: true,
			},
		},
	],
};
