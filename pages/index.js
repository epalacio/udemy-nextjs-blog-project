import Hero from '../components/home-page/Hero'
import FeaturedPosts from '../components/home-page/Featured-posts'

const DUMMY_POSTS = [
	{
		title: 'Getting Started with NextJS',
		image: 'getting-started-nextjs.png',
		excerpt:
			'NextJs is the React framework for production - it makes building React fullstack apps easy to build and scale',
		date: '2022-02-10',
		slug: 'getting-started-with-nextjs',
	},
	{
		title: 'Getting Started with NextJS2',
		image: 'getting-started-nextjs.png',
		excerpt:
			'NextJs is the React framework for production - it makes building React fullstack apps easy to build and scale',
		date: '2022-02-10',
		slug: 'getting-started-with-nextjs2',
	},
	{
		title: 'Getting Started with NextJS3',
		image: 'getting-started-nextjs.png',
		excerpt:
			'NextJs is the React framework for production - it makes building React fullstack apps easy to build and scale',
		date: '2022-02-10',
		slug: 'getting-started-with-nextjs3',
	},
	{
		title: 'Getting Started with NextJS4',
		image: 'getting-started-nextjs.png',
		excerpt:
			'NextJs is the React framework for production - it makes building React fullstack apps easy to build and scale',
		date: '2022-02-10',
		slug: 'getting-started-with-nextjs4',
	},
]

const HomePage = () => {
	return (
		<>
			<Hero />
			<FeaturedPosts posts={DUMMY_POSTS} />
		</>
	)
}

export default HomePage

// 2. Featured Posts
