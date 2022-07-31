import { Container, Box, Heading, Image, Button, ListItem, List, Link } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink  from 'next/link'
import Layout from '../components/layouts/article'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio' 
import { IoLogoGithub, IoLogoInstagram, IoLogoTwitter, IoLogoMedium } from 'react-icons/io5'
const Page = () => {
	return (
		<Layout>
		<Container>
			<Box align="center">
				<Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline=block" borderRadius="full" src="/img/ahaidaralbaqir.jpeg" alt="ahmad haidar albaqir" />	
				<Heading as="h2" variant="page-title">
					Ahmad Haidar
				</Heading>
				<p>Long life learner / Software Enginer</p>
			</Box>
			<Section delay={0.1}>
				<Heading as="h3" variant="section-title">
					Work
				</Heading>
				<Paragraph>
					Hello, I&apos;m haidar, I&apos;m a software enginer based on Jakarta, Welcome to the spot on the web for project I&apos;ve created, article I&apos;ve written, and anything else that I want to show the world, I enjoy learning everthing that can make life easier.
				</Paragraph>
				<Box align="center" my={4}>
					<NextLink  href="https://drive.google.com/file/d/1B3k7L8LcIvqmnMwa-8E6sQjBAlFG0g_2/view?usp=sharing" passHref={true}>
						<Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
							Get Resume
						</Button>
					</NextLink>
				</Box>
			</Section>
			<Section delay={0.2}>
				<Heading as="h3" variant="section-title">
					Bio
				</Heading>
				<BioSection>
					<BioYear>2001</BioYear>
					Was born in Karawang, Indonesia
				</BioSection>
				<BioSection>
					<BioYear>
						2019
					</BioYear>
					Graduated from Vocational High School 1 Karawang with Software Engineering major 
				</BioSection>
				<BioSection>
					<BioYear>
						2019 to present 
					</BioYear>
					Working as a Sofware Engineer
				</BioSection>
				<BioSection>
					<BioYear>
						2020 to present
					</BioYear>
					Studying Computer Science at University of Pamulang 
				</BioSection>
			</Section>

			<Section delay={0.3}>
				<Heading as="h3" variant="section-title">
					On the web
				</Heading>
				<List>
					<ListItem>
						<Link href="https://github.com/aahaidaralbaqir" isExternal={true}>
							<Button 
								variant="ghost" 
								colorScheme="teal"
								leftIcon={<IoLogoGithub />}
							>
									@aahaidaralbaqir
								</Button>
						</Link>
					</ListItem>
					<ListItem>
						<Link href="https://instagram.com/a.haidaralbaqir" isExternal={true}>
							<Button 
								variant="ghost" 
								colorScheme="teal"
								leftIcon={<IoLogoInstagram />}
							>
								@a.haidaralbaqir
								</Button>
						</Link>
					</ListItem>
					<ListItem>
						<Link href="https://twitter.com/albaqir_haidar" isExternal={true}>
							<Button 
								variant="ghost" 
								colorScheme="teal"
								leftIcon={<IoLogoTwitter />}
							>
									@albaqir_haidar
								</Button>
						</Link>
					</ListItem>
					<ListItem>
						<Link href="https://medium.com/@ahaidaralbaqir" isExternal={true}>
							<Button 
								variant="ghost" 
								colorScheme="teal"
								leftIcon={<IoLogoMedium />}
							>
									@ahaidaralbaqir
								</Button>
						</Link>
					</ListItem>
				</List>
			</Section>
		</Container>
		</Layout>
	)
}

export default Page