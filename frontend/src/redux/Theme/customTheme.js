import {extendTheme} from '@chakra-ui/react'

const customTheme = extendTheme({
    color : {
        brand : {
            light : "white",
            dark : "black"
        }
    }
})

export default customTheme;