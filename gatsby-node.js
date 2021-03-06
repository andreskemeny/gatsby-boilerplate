exports.onCreatePage = ({ page, actions }) => {
	const { createPage } = actions;
	// Only update the `/app` page.
	if (page.path.match(/^\/app/)) {
		// page.matchPath is a special key that's used for matching pages
		// with corresponding routes only on the client.
		page.matchPath = "/app/*";
		// Update the page.
		createPage(page);
	}
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
	if (stage === "build-html") {
		actions.setWebpackConfig({
			module: {
				rules: [
					{
						test: /@fullcalendar/,
						use: loaders.null(),
					},
				],
			},
		});
	}
};
