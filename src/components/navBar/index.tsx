import {Avatar, Box, Flex, HStack, IconButton, Link, Spacer} from "@chakra-ui/react";
import {useState} from "react";
import {CloseIcon, HamburgerIcon} from "@chakra-ui/icons";
import MobileNavBar from "../mobileNavBar";

export type LinkProps = {
    href: string,
    title: string
}
export type NavBarProps = {
    items: Array<LinkProps>
}
const NavBar = ({items}: NavBarProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const Links = [
        {
            title: "Experience",
            href: "#experience"
        },
        {
            title: "Education",
            href: "#education"
        },
        {
            title: "Hobbies",
            href: "#hobbies"
        }
    ];

    return (
        <Box w={'100%'}  px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <IconButton
                    size={'md'}
                    variant={"unstyled"}
                    aria-label={"extend menu"}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    display={{md: "none"}}
                    onClick={toggle}
                />
                <HStack
                    m={'auto'}
                    alignItems={'center'}
                    as={'nav'}
                    spacing={50}
                    display={{base: 'none', md: 'flex'}}>
                    {Links.map((link, index) => (
                        <Link
                            key={index}
                            fontFamily={'monospace'}
                            fontSize={'1.1rem'}
                            textDecoration={'underline'}
                            _hover={{
                                textDecoration: 'none',
                            }}
                            href={link.href}>{link.title}</Link>
                    ))}
                </HStack>
            </Flex>

            {/*Nav Links only to show in small screens*/}
            {isOpen ? (
                <MobileNavBar links={Links} />
            ) : null}
        </Box>
    )
}

export default NavBar
