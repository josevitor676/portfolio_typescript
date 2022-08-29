import { Button, Flex, Text, VStack } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";


export const Apresentation = () => {


    return (
        <Flex alignItems={["center","center","flex-start", "flex-start"]} flexDirection="column">
            <Text 
            color="#5b5b5b" 
            fontWeight='bold'
            _dark={{color: "#fff"}} 
            m="10px"
            w={["300px", "350px","400px","500px"]}
             >
                Seja bem-vindo ao meu portfolio
            </Text>
            <Text 
            fontSize={["22px","22px","28px", "37px"]} 
            fontWeight="bold" 
            color="#212121"
            _dark={{color: "#fff"}} 
            m="5px"
            >
                Olá meu nome é Jose Vitor
            </Text>
            <Text 
            color="#1747A6" 
            fontWeight="bold"
            fontSize="20px"
            m="10px"
            textAlign={["center", "center",'left', "left"]}
            w={["300px", "350px","400px","500px"]}
            >
                <Typewriter
                options={{
                    loop: true
                }}
                onInit={(typewriter) => {
                    typewriter
                    .start()
                    .typeString("Desenvolvedor Front-end Junior")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("Desenvolvedor Web Junior")
                    .pauseFor(2000)
                    .deleteAll()
                    .start()
                    
                }}
                />
            </Text>
            <Button 
            borderRadius="10px" 
            p="5" 
            background="#eeeeee"
            color="#5b5b5b"
            m="10px"
            _hover={{color: "#1747A6", transition: "ease 0.6s"}}
            >
                Download CV
            </Button>
        </Flex>
    )
}