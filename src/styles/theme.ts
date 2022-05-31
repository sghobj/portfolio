import {extendTheme, ThemeConfig} from "@chakra-ui/react";
import container from "./components/container";
import heading from "./components/heading";
import colors from "./foundation/colors"
import fonts from "./foundation/fonts";
import fontSizes from "./foundation/fontSizes";
import textStyles from "./foundation/textStyles";
import breakPoints from "./foundation/breakPoints";


const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false
}

const overrides = {
    config,
    components: {
        container,
        heading
    },
    colors,
    fonts,
    fontSizes,
    textStyles,
    breakPoints
}

export default extendTheme(overrides)
