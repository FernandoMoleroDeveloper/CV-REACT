import { Flex, Box , Text  } from '@chakra-ui/react'
import { BsArrowRightShort } from 'react-icons/bs'
import "./About.css"

const About = () => {
    return(
        <div>
            <Box 
            borderRadius={20}
            padding={5}
            width={700}
            alignItems={"start"}
            margin={'0 auto'}
            >
            <Flex
                direction={'column'}
                justify={'center'}
                align={'flex-start'}
                width={600}
                alignContent={'center'}
                margin={'20px auto'}
                padding={5}>

                <Text
                    margin={'10px auto'}
                    fontSize={30}
                    fontWeight={800}
                >FERNANDO MOLERO MARTÍN
                </Text>
                <Flex
                    direction={'row'}
                    justify={'center'}
                    alignItems='center'
                    margin={'10px 40px'}>
                    <BsArrowRightShort fontSize={30}></BsArrowRightShort>
                    <Text
                        margin={'5px 10px'}
                        fontSize={20}
                        color={'blue.500'}
                        fontWeight= {'700'}
                    >Empleo: <span style={{ color: 'black', fontWeight: '700' }}> Desarrollador Web Full Stack</span>
                    </Text>
                </Flex>
                <Flex
                    direction={'row'}
                    justify={'center'}
                    alignItems='center'
                    margin={'10px 40px'}>
                    <BsArrowRightShort color='blue 500' fontSize={30}></BsArrowRightShort>
                    <Text
                        margin={'5px 10px'}
                        fontSize={20}
                        color={'blue.500'}
                        fontWeight= {'700'}
                    >Fecha de nacimiento: <span style={{ color: 'black', fontWeight: '700' }}>20/01/1985</span>
                    </Text>
                </Flex>
                <Flex
                    direction={'row'}
                    justify={'center'}
                    alignItems='center'
                    margin={'10px 40px'}>
                    <BsArrowRightShort fontSize={30}></BsArrowRightShort>
                    <Text
                        margin={'5px 10px'}
                        fontSize={20}
                        color={'blue.500'}
                        fontWeight= {'700'}
                    >Localización: <span style={{ color: 'black', fontWeight: '700' }}>Madrid, España</span>
                    </Text>
                </Flex>

                <Text
                    margin={'20px 10px'}
                    fontSize={15}
                    color={'black'}
                    textAlign={"start"}
                    padding={10}
                    borderRadius={20}
                    
                >Durante veinte años he desarrollado mi actividad como fotógrafo profesional,
                    con mi propio estudio de fotografía durante los últimos 15 años.
                    <br></br>
                    Durante el confinamiento me decidí a cambiar la web de mi empresa con wordpress y viendo que se me daba bien, decidí formarme en
                    desarrollo web.<br></br>
                    Gracias a la formación intensiva que he llevadoa cabo en la escuela The Valley puedo decir que es mi nueva profesión.
                </Text>

            </Flex>
        </Box>

        </div>
    )
}
export default About;