import { Box, Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.8} fontSize="sm" mt={10}>
      Made with <span color='red.500'>❤️</span> by Ahmad Haidar inspired by <Link href='https://www.craftz.dog' isExternal={true}>Takuya Matsuma</Link>
    </Box>
  )
}

export default Footer