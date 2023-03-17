import "./Projects.css"
import ornamante from "../../assets/ornamante.png"
import calculadora from "../../assets/calculadora.png"
import RickMorty from "../../assets/Rick&Morty.png"
import Vicio from "../../assets/Vicio.png"

import { Flex, Box ,Image , Button  } from '@chakra-ui/react'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
  } from '@chakra-ui/react'

const Projects = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
        <div >
            <Flex  width={700} justify={'center'} wrap={'wrap'}  margin={'0 auto'}>
            <Box>
            <Image  
            onClick={onOpen}
            margin={5} 
            borderRadius='5px'
            htmlWidth='300px'
            objectFit='cover'
            src={ornamante}
            alt='Ornamante'></Image>

            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Ornamante</ModalHeader>
                <ModalCloseButton />
                <ModalBody>E-commerce web responsive</ModalBody>
                <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
            </Box>    
            <Box>
            <Image 
            onClick={onOpen} 
            margin={5} 
            borderRadius='5px'
            htmlWidth='300px'
            src={RickMorty}
            alt='Ornamante'></Image>
            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Rick & Morty</ModalHeader>
                <ModalCloseButton />
                <ModalBody>Wiki de la serie realizada en JS plano, con SASS y Metodolgía BEN, usando API.</ModalBody>
                <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
            </Box> 
            
            <Box>
            <Image  
            onClick={onOpen}
            margin={5} 
            borderRadius='5px'
            htmlWidth='300px'
            src={calculadora}
            alt='Ornamante'></Image>
            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Calculadora</ModalHeader>
                <ModalCloseButton />
                <ModalBody>Calculadora realizada en JS plano, con SASS y Metodolgía BEN.</ModalBody>
                <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
            </Box> 
            <Box>
            <Image 
            onClick={onOpen} 
            margin={5} 
            borderRadius='5px'
            htmlWidth='300px'
            src={Vicio}
            alt='Ornamante'></Image>
            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Vicio</ModalHeader>
                <ModalCloseButton />
                <ModalBody>Web responsive básica con comentarios de clientes del restaurante Vicio realizada en JS plano, con SASS y Metodolgía BEN.</ModalBody>
                <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
            </Box> 

            </Flex>
            
        </div>
    )
}
export default Projects;