import Head from 'next/head'

import Hero from '../components/home-page/Hero'
import FeaturedPosts from '../components/home-page/Featured-posts'
import { getFeaturedPosts } from '../lib/posts-util'

const HomePage = (props) => {
	return (
		<>
			<Head>
				<title>Max's Blog</title>
				<meta name='description' content='I post about programming and web development.' />
			</Head>
			<Hero />
			<FeaturedPosts posts={props.posts} />
		</>
	)
}

export const getStaticProps = (props) => {
	const featuredPosts = getFeaturedPosts()

	return {
		props: {
			posts: featuredPosts,
		},
		revalidate: 1800,
	}
}

export default HomePage

// 2. Featured Posts
