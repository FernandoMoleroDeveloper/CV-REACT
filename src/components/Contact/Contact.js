import "./Contact.css"
import { IconButton ,  HStack} from '@chakra-ui/react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
  } from '@chakra-ui/react'
  import { AiFillLinkedin , AiFillGithub ,  } from "react-icons/ai"

const Contact = () => {
    return(
        <div className="contact">
        
        <HStack justifyContent='center' alignItems='center' spacing='24px'>
        <Popover>
        <PopoverTrigger>
        <IconButton Color='#718096' size='lg' icon={<AiFillLinkedin />}/>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>LinkedIn:</PopoverHeader>
          <PopoverBody>https://www.linkedin.com/in/fernandomoleromartin/</PopoverBody>
        </PopoverContent>
      </Popover>
      
      <Popover>
      <PopoverTrigger>
      <IconButton Color='Gray' size='lg' icon={<AiFillGithub />}/>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Github:</PopoverHeader>
        <PopoverBody>https://github.com/FernandoMoleroDeveloper</PopoverBody>
      </PopoverContent>
    </Popover>
    </HStack>
    
    </div>

    )
}
export default Contact;