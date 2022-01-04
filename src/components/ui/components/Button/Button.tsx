import { Button as ChakraButton } from "@chakra-ui/react"
import { ButtonPropTypes } from "./Button.types"

const Button = (props: ButtonPropTypes) => {
    const {variant, className = '', size, onClick, text } = props

    const handleClick = (event: React.MouseEvent | React.KeyboardEvent <HTMLButtonElement>) => {
        event.preventDefault()
        onClick()
    }

    return (
        <ChakraButton variant={variant} className={className} size={size} onClick={handleClick} onKeyPress={handleClick} colorScheme='purple'>
            {text}
        </ChakraButton>
    )
}

export default Button
