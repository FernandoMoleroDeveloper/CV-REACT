import "./Contact.css"
import { IconButton , HStack } from '@chakra-ui/react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
  } from '@chakra-ui/react'
  import { AiFillLinkedin , AiFillGithub , AiFillMail , AiFillPhone  } from "react-icons/ai"

const Contact = () => {
    return(
        <div className="contact">
        
        <HStack justifyContent='center' alignItems='center' spacing='24px'>
        
        <IconButton onClick={() => window.open('https://www.linkedin.com/in/fernandomoleromartin/')}  Color='#4A5568' size='lg' borderRadius="20px" icon={<AiFillLinkedin />}/>
        <IconButton onClick={() => window.open('https://github.com/FernandoMoleroDeveloper')} Color='Gray' size='lg' borderRadius="20px" icon={<AiFillGithub />}></IconButton>
        
        

        <Popover>
        <PopoverTrigger>
        <IconButton Color='Gray' size='lg' borderRadius="20px" icon={<AiFillMail />}/>
        </PopoverTrigger>
        <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Email:</PopoverHeader>
        <PopoverBody>fmoleromartin@gmail.com</PopoverBody>
        </PopoverContent>
        </Popover>

        <Popover>
        <PopoverTrigger>
        <IconButton Color='Gray 700' size='lg' borderRadius="20px" icon={<AiFillPhone />}/>
        </PopoverTrigger>
        <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Teléfono:</PopoverHeader>
        <PopoverBody>676636001</PopoverBody>
        </PopoverContent>
        </Popover>
        </HStack>
    
    </div>

    )
}
export default Contact;