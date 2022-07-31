import {
	Container,
	Badge,
	Link,
	List,
	ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
	<Layout title="inkdrop">
		<Container>
			<Title>
				Inkdrop <Badge>2016</Badge>
			</Title>
			<Paragraph>
				A markdown note-taking app with 100+ plugins, cross-platform and encrypted data sync support.
			</Paragraph>
			<List ml={4} my={4}>
				<ListItem>
					<Meta>Platform</Meta>
					<span>Windows/macOs/Linux/iOS/Android</span>
				</ListItem>
				<ListItem>
					<Meta>Stack</Meta>
					<span>Node JS, Electron, React Native</span>
				</ListItem>
				<ListItem>
					<Meta>Repository</Meta>
					<Link href='https://github.com/aahmadhaidaralbaqir'>Github <ExternalLinkIcon /></Link>
				</ListItem>
			</List>

			<WorkImage src="https://www.craftz.dog/images/works/inkdrop_01.png" alt="inkdrop" />
		</Container>
	</Layout>
)

export default Work