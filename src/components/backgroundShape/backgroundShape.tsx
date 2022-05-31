import {Box} from "@chakra-ui/react";

const BackgroundShape = () => {
    return(
        <Box
            borderRadius={'50%'}
            bgGradient='linear(to-b, blue.100, blue.500)'
            position={'relative'}
            margin={'50px auto'}
            sx={{
                width: {base: '18rem', sm: '30rem'},
                height: {base: '18rem', sm: '30rem'},
                background: 'linear-gradient(90deg, rgba(0,27,36,1) 0%, rgba(187,115,205,1) 0%, rgba(82,211,237,1) 100%)',
                borderRadius: '100% 100% 10% 100%',
                transform: 'rotate(-90deg)',
                webkitTransform: 'rotate(-45deg)',
                mozTransform: 'rotate(-45deg)',
                oTransform: 'rotate(-45deg)',
                msTransform: 'rotate(-45deg)',
                boxShadow: '0 1px 0 rgba(255, 255, 255, 0.6)',
                opacity: '80%'
            }}
        />
    )
}

export default BackgroundShape
