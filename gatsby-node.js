exports.createPages = async( {graphql, actions: {createPage}} ) => {
	const { data: { blog: { posts } } } = await graphql( `
    query PostsQuery {
        blog {
          posts {
            title
            content {
              html
            }
            slug
          }
        }
      }
	` );

	posts.forEach( ( post ) => createPage( {
		path: `/${post.slug}`,
		component: require.resolve( './src/templates/PostPage.js' ),
		context: {
			post
		}
	} )
	);
};
