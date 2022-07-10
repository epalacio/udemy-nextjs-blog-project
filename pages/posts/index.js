import Head from 'next/head'

import AllPosts from '../../components/posts/all-posts'
import { getAllPosts } from '../../lib/posts-util'

const AllPostsPage = (props) => {
	return (
		<>
			<Head>
				<title>All Posts</title>
				<meta name='description' content='A list of all programming posts...' />
			</Head>
			<AllPosts posts={props.posts} />
		</>
	)
}

export const getStaticProps = (props) => {
	const allPosts = getAllPosts()

	return {
		props: {
			posts: allPosts,
		},
		revalidate: 1800,
	}
}

export default AllPostsPage
