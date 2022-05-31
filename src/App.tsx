import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from './pages/home'
import NavBar from "./components/navBar";
import theme from "./styles/theme";
import {Box, ChakraProvider} from '@chakra-ui/react';

function App() {

    const links = [
        {
            title: "Experience",
            href: "experience",
        },

    ]

    return (
        <ChakraProvider theme={theme}>
            <Box className="App">
                <NavBar items={links} />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Box>
        </ChakraProvider>
    );
}

export default App;
