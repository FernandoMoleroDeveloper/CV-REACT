import { Flex, Box } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import "./Header.css"

const Header = () => {
    return(
    <div >
        <Flex className='header'>
        <Box textAlign={"start"} className='header__text'>
            <Text  fontSize='6xl' fontWeight='bold'>¡Hola! Me llamo</Text>
            <Text
            
                bgGradient='linear(to-r, teal.300, yellow.400)'
                bgClip='text'
                fontSize='6xl'
                fontWeight='bold'
                >Fernando Molero
            </Text>
            <Text  color='Gray' fontSize='2xl'>Soy Desarrolador Web FullStack en Madrid</Text>
            </Box>
       
        <Image
            borderRadius='full'
            boxSize='200px'
            src='https://media.licdn.com/dms/image/D4D35AQHRPwHDHoSqJQ/profile-framedphoto-shrink_200_200/0/1669652562539?e=1679594400&v=beta&t=BgC5ILYjeb12tbh4fGjq1TIxqmvSonlHYuja8YhJHo0'
            alt='Fernando Molero'
        />
        </Flex>
        
    </div>
    )
}
export default Header;