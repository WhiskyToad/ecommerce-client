import { Input } from "@chakra-ui/react"
import { ChangeEvent } from "react"
import { SearchInputPropTypes } from "./SearchInput.types"

const SearchInput = (props: SearchInputPropTypes) => {
    const {value, placeholder, onChange} = props

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value)
    }

    return (
        <Input placeholder={placeholder} size='lg' value={value} onChange={handleChange}/>
        )
}
    

export default SearchInput
