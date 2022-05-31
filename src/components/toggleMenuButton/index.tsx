import { Box } from "@chakra-ui/react"
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'

type toggleMenuProps = {
    toggle: () => void,
    isOpen: boolean
}

const ToggleMenuButton = ({ toggle, isOpen }: toggleMenuProps) => {
    return(
        <Box display={{ base: "block", md: "none" }} onClick={toggle}>
            {isOpen ? <CloseIcon /> : <HamburgerIcon />}
        </Box>
    )
}

export default ToggleMenuButton
