import React from 'react';

const PostPage = ( { pageContext: { post } } ) => {
	return (
		<div>
			<h1>{post.title}</h1>
			<div dangerouslySetInnerHTML={ {__html: post.content.html} } />
		</div>
	);
};

export default PostPage;
