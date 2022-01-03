import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

const IndexPage = () => {
	const { blog: { posts } } = useStaticQuery( postsQuery );

	console.log( posts );

	return (
		<div>
			{posts.map( post => (
				<div key={post.id}>
					<h2>{post.title}</h2>
					<Link to={post.slug}>Read more</Link>
				</div>
			) )}
		</div>
	);
};

const postsQuery = graphql`
  query PostsQuery {
    blog {
      posts {
        id
        title
        slug
      }
    }
  }
`;

export default IndexPage;
