import React from 'react';
import './App.css';
import NavBar from "./components/navBar";
import theme from "./styles/theme";
import {Box, ChakraProvider, Grid, GridItem, Heading, Text} from '@chakra-ui/react';
import Header from "./components/header";

export const edus = [
    {
        name: 'Karlsruhe University of Applied Sciences',
        years: '2019-2022',
        country: 'Germany',
        degree: 'Master of Science',
        topic: 'Sensors System Technology',
        image: 'https://res.cloudinary.com/dsyxohckg/image/upload/v1652998577/MyProfile/HKA_Logo_Logoleiste_RGB_wztbrk.png'
    },
    {
        name: 'German Jordanian University',
        years: '2011-2017',
        county: 'Jordan',
        degree: 'Bachelor of Engineering',
        topic: 'Mechatronics Engineering',
        image: 'https://res.cloudinary.com/dsyxohckg/image/upload/v1652998518/MyProfile/2560px-GJU_logo.svg_tccu89.png'
    },
]

export const hobbies = [
    {
        name: 'Art',
        image: 'https://res.cloudinary.com/dsyxohckg/image/upload/v1652998577/MyProfile/HKA_Logo_Logoleiste_RGB_wztbrk.png'
    },
    {
        name: 'Travel',
        image: 'https://res.cloudinary.com/dsyxohckg/image/upload/v1652998518/MyProfile/2560px-GJU_logo.svg_tccu89.png'
    },
    {
        name: 'Basketball',
        image: 'https://res.cloudinary.com/dsyxohckg/image/upload/v1652998518/MyProfile/2560px-GJU_logo.svg_tccu89.png'
    },
]

export const exps = [
    {
        name: 'Schwabeo GmbH',
        years: '2022',
        country: 'Germany',
        position: 'Junior Software Development',
        tools: ['React, NextJs, Material-UI'],
        image: 'https://res.cloudinary.com/dsyxohckg/image/upload/v1652998577/MyProfile/HKA_Logo_Logoleiste_RGB_wztbrk.png'
    },
    {
        name: 'Schwabeo GmbH',
        years: '2021-2022',
        country: 'Germany',
        position: 'Frontend Development - Internship',
        tools: ['React, NextJs, GraphQL, Strapi, TypeScript, Chakra-UI, Material-UI'],
        image: 'https://res.cloudinary.com/dsyxohckg/image/upload/v1652998577/MyProfile/HKA_Logo_Logoleiste_RGB_wztbrk.png'
    },
    {
        name: 'Karlsruhe University of Applied Sciences',
        years: '2019-2020',
        country: 'Germany',
        position: 'Academic Assistant - Part-time',
        tools: ['Inventor, SolidWorks, MS Office, Raspberry Pi, Arduino'],
        image: 'https://res.cloudinary.com/dsyxohckg/image/upload/v1652998577/MyProfile/HKA_Logo_Logoleiste_RGB_wztbrk.png'
    },
    {
        name: 'Nasco Service Center',
        years: '2017-2018',
        county: 'Jordan',
        position: 'Service Consultant',
        tools: '',
        image: 'https://res.cloudinary.com/dsyxohckg/image/upload/v1652998518/MyProfile/2560px-GJU_logo.svg_tccu89.png'
    },
    {
        name: 'Kuka Systems',
        years: '2015',
        country: 'Germany',
        position: 'Software Developer - Internship',
        tools: ['Java, MySQL'],
        image: 'https://res.cloudinary.com/dsyxohckg/image/upload/v1652998577/MyProfile/HKA_Logo_Logoleiste_RGB_wztbrk.png'
    },
]

function App() {

    const links = [
        {
            title: "Experience",
            href: "experience",
        },
        {
            title: "Education",
            href: "education",
        },
        {
            title: "Hobbies",
            href: "hobbies"
        }
    ]

    return (
        <ChakraProvider theme={theme}>
            <Box className="App">
                <NavBar items={links} />
                <Box>
                    <Header />
                    <Box mt={10} p={10} position={'relative'}>
                        <Box
                            sx={{
                                width: {base: '18rem', sm: '30rem'},
                                height: {base: '18rem', sm: '30rem'},
                                background: 'linear-gradient(90deg, rgba(0,27,36,1) 0%, rgba(187,115,205,1) 0%, rgba(82,211,237,1) 100%)',
                                borderRadius: '60% 75% 60% 65%',
                                opacity: '50%',
                                transform: {base: 'translate(-50%, 50%) rotate(85deg) ', md: 'translate(-30%, 20%) rotate(85deg) '},
                                webkitTransform: 'rotate(-45deg)',
                                mozTransform: 'rotate(-45deg)',
                                oTransform: 'rotate(-45deg)',
                                msTransform: 'rotate(-45deg)',
                                boxShadow: '0 1px 0 rgba(255, 255, 255, 0.6)',
                                position: 'absolute',
                                zIndex: '-1',
                            }}
                        />
                        <Box
                            sx={{
                                width: {base: '18rem', sm: '40rem'},
                                height: {base: '18rem', sm: '40rem'},
                                background: 'linear-gradient(90deg, rgba(0,27,36,1) 0%, rgba(187,115,205,1) 0%, rgba(82,211,237,1) 100%)',
                                borderRadius: '60% 75% 60% 75%',
                                opacity: '50%',
                                transform: {base: 'translate(50%, 200%) rotate(25deg) ', md: 'translate(220%, 50%) rotate(25deg) '},
                                webkitTransform: 'rotate(-45deg)',
                                mozTransform: 'rotate(-45deg)',
                                oTransform: 'rotate(-45deg)',
                                msTransform: 'rotate(-45deg)',
                                boxShadow: '0 1px 0 rgba(255, 255, 255, 0.6)',
                                position: 'absolute',
                                zIndex: '-1',
                            }}
                        />
                        <Box
                            sx={{
                                width: {base: '18rem', sm: '30rem'},
                                height: {base: '18rem', sm: '30rem'},
                                background: 'linear-gradient(90deg, rgba(0,27,36,1) 0%, rgba(187,115,205,1) 0%, rgba(82,211,237,1) 100%)',
                                borderRadius: '60% 75% 60% 65%',
                                opacity: '50%',
                                transform: {base: 'translate(-30%, 600%) rotate(85deg) ', md: 'translate(200%, 200%) rotate(85deg) '},
                                webkitTransform: 'rotate(-45deg)',
                                mozTransform: 'rotate(-45deg)',
                                oTransform: 'rotate(-45deg)',
                                msTransform: 'rotate(-45deg)',
                                boxShadow: '0 1px 0 rgba(255, 255, 255, 0.6)',
                                position: 'absolute',
                                zIndex: '-1',
                            }}
                        />
                        <Grid templateColumns={{base: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)'}}
                              gap={6}>
                            <GridItem id={'experience'}>
                                <Heading mb={10} fontFamily={'Roboto'}>Work Experience</Heading>
                                {exps && exps.map((exp, index) =>
                                    <Box
                                        m={'20px auto'}
                                        width={{base: '90%', md: '70%', lg: '50%'}}
                                        border={'1px solid'}
                                        sx={{
                                            borderRadius: '20px',
                                            borderImage: 'linear-gradient(90deg, rgba(0,27,36,1) 0%, rgba(187,115,205,1) 0%, rgba(82,211,237,1) 100%) 1'
                                        }}
                                        p={5}
                                        key={index}>
                                        <Text fontFamily={'Roboto'} fontWeight={"bold"} fontSize={'xl'}>{exp.name}</Text>
                                        <Text fontFamily={'Roboto'} fontSize={'lg'}>{exp.position}</Text>
                                        <Text fontFamily={'Roboto'} fontSize={'lg'}>{exp.years}</Text>
                                        <Text fontFamily={'Roboto'} fontSize={'sm'}>{exp.tools}</Text>
                                    </Box>
                                )}
                            </GridItem>
                            <GridItem id={'education'}>
                                <Heading mb={10} fontFamily={'Roboto'}>Education</Heading>
                                {edus && edus.map((edu, index) =>
                                    <Box
                                        m={'20px auto'}
                                        width={{base: '90%', md: '70%', lg: '50%'}}
                                        border={'1px solid'}
                                        sx={{
                                            borderRadius: '20px',
                                            borderImage: 'linear-gradient(90deg, rgba(0,27,36,1) 0%, rgba(187,115,205,1) 0%, rgba(82,211,237,1) 100%) 1'
                                        }}
                                        p={5}
                                        key={index}>
                                        <Text fontFamily={'Roboto'} fontWeight={"bold"} fontSize={'xl'}>{edu.name}</Text>
                                        <Text fontFamily={'Roboto'} fontSize={'lg'}>{edu.topic}</Text>
                                        <Text fontFamily={'Roboto'} fontSize={'lg'}>{edu.years}</Text>
                                        <Text fontFamily={'Roboto'} fontSize={'sm'}>{edu.degree}</Text>
                                    </Box>
                                )}
                            </GridItem>
                        </Grid>

                        <Box mt={10} p={10} m={'auto'} w={{base: '90%', md: '60%', lg: '50%'}} id={'hobbies'}>
                            <Heading mb={10} fontFamily={'Roboto'}>Hobbies</Heading>
                            <Text textAlign={'justify'} fontFamily={'Roboto'} fontSize={'md'}>
                                In my free time, I love to do some Artwork (Drawing &
                                Resin Art) as it brings me peace and kicks in my
                                creative side. My Active hobbies are Basketball and
                                travelling. I love to play basketball and up until i was
                                injured I played on the international level with the
                                Jordanian National Team, and this is how my passion for
                                travelling was developed. Getting to know new cultures
                                and new places brings me joy and helps me nourish my
                                intercultural skills.</Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </ChakraProvider>
    );
}

export default App;
