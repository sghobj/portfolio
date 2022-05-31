import {Container, Grid, GridItem, Heading, Image, Text} from "@chakra-ui/react"
import BackgroundShape from "../backgroundShape/backgroundShape";

const Header = () => {
    return (
            <Grid m={'auto'} w={{base: '95%', sm: '90%', md:'90%', lg: '70%', xl: '75%'}} position={'relative'} p={{base: 5, md: 10}} bg={"white"}
                  templateColumns={{base: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)'}}
                  gap={6}>
                <GridItem m={'auto'} p={{base: 5, md: 10}}>
                    <Heading as={'h1'}>Sarah Ghobj</Heading>
                    <Text>Junior Frontend Web Developer</Text>
                </GridItem>
                <GridItem position={'relative'}>
                    <BackgroundShape />
                    <Image
                        left={'0px'}
                        top={'50px'}
                        transform={{
                            base: 'translate(100%, 0%)',
                            sm: 'translate(100%, 0%)',
                            md: 'translate(100%, 0%)',
                            lg: 'translate(100%, 0%)',
                            xl: 'translate(100%, 0%)',
                            '2xl': 'translate(150%, 0%)'
                        }}
                        position={'absolute'}
                        width={{base: 120, sm: 180}}
                        height={{base: 350, sm: 550}}
                        src={'https://res.cloudinary.com/dsyxohckg/image/upload/v1653943293/MyProfile/IMG_20220507_152421-removebg_evk3rr.png'} />
                </GridItem>
            </Grid>
    )
}

export default Header
