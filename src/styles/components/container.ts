import {ComponentStyleConfig} from "@chakra-ui/theme";

const Container: ComponentStyleConfig = {
    baseStyle: {
        padding: 10
    },
    sizes: {
        '2xl': {
            width: '1550px'
        },
        xl: {
            width: '1400px'
        },
        lg: {
            width: '1150px'
        },
        md: {
            width: '800px'
        },
        sm: {
            width: '600px'
        },
        xs: {
            width: '400px'
        }
    },
// The default size values
    defaultProps: {
        sizes: 'lg',
    },
}



export default Container
