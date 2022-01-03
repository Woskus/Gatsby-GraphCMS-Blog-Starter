require( 'dotenv' ).config();

module.exports = {
	plugins: [
		{
			resolve: 'gatsby-source-graphql',
			options: {
				url: process.env.GRAPHCMS_ENDPOINT,
				typeName: 'blog',
				fieldName: 'blog'
			}
		}
	]
};
