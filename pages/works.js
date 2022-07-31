import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import {WorkGridItem, GridItemStyle} from '../components/grid-item'
import thumbInkdrop from '../public/img/works/inkdrop_eyecatch.png'
import Layout from '../components/layouts/article'

const Works = () => {
	return (
		<Layout title="works">
		<Container>
			<GridItemStyle />
			<Heading as="h3" fontSize={20} mb={4}>
				Works
			</Heading>
			<SimpleGrid columns={[1,1,2]} gap={6}>
				<Section>
					<WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
						A markdown note-taking app
					</WorkGridItem>
				</Section>
			</SimpleGrid>
		</Container>
		</Layout>
	)
}

export default Works