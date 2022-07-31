import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import  { GridItem } from '../components/grid-item'

import thumbInkdrop from '../public/img/works/inkdrop_eyecatch.png'
const Posts = () => (
	<Layout title="Posts">
		<Container>
			<Heading as="h3" fontSize={20} mb={4}>
				Popular Posts
			</Heading>

			<Section delay={0.1}>
				<SimpleGrid columns={[1,2,2]} gap={6}>
					<GridItem title="First post" thumbnail={thumbInkdrop} href="https://github.com"></GridItem>
				</SimpleGrid>
			</Section>
		</Container>
	</Layout>
)

export default Posts