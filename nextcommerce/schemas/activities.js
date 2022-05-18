export default {
	name: "activities",
	title: "Activities",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Nom de l'activité",
			type: "string",
		},
		{
			name: "p1",
			title: "Premier paragraphe",
			type: "string",
		},
		{
			name: "p2",
			title: "Deuxième para",
			type: "string",
		},
		{
			name: "p3",
			title: "Troisième para",
			type: "string",
		},
		{
			name: "p4",
			title: "Quatrième para",
			type: "string",
		},

		{
			name: "time",
			title: "Temps de déroulement",
			type: "string",
		},

		{
			name: "link",
			title: "Lien optionel",
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
