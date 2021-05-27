module.exports = {
	target: "serverless",
	// Here we configure and set up the Agility CDN domain config so we can take advantage of the next/image component
	// Read more about next/image here: https://nextjs.org/docs/api-reference/next/image
	images: {

		domains: [
			`cdn.agilitycms.com`,
			`cdn.aglty.io`,
			`cdn-dev.aglty.io`,
			`3440d72f-cdn.agilitycms.cloud`,
			`${process.env.AGILITY_GUID}-cdn.agilitycms.cloud`,
		],
	},
	future: {
		webpack5: true
	},
};
