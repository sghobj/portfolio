import {Box, Link, Stack} from "@chakra-ui/react";

export type linkProps = {
    title: string,
    href: string
}
export type linksListProps = {
    links: Array<linkProps>
}

const MobileNavBar = ({links}: linksListProps) => {
    return(
        <Box pb={4} display={{md: 'none'}}>
            <Stack as={'nav'} spacing={4}>
                {links && links.map((link: linkProps, index: number) => (
                    <Link key={index} href={link.href}>{link.title}</Link>
                ))}
            </Stack>
        </Box>
    )
}

export default MobileNavBar
