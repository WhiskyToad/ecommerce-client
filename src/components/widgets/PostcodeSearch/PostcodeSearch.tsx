import { useState } from 'react'
import Button from '../../ui/components/Button/Button'
import { ButtonSizes, ButtonVariant } from '../../ui/components/Button/Button.types'
import SearchInput from '../../ui/components/Inputs/SearchInput/SearchInput'
import styles from './styles.module.scss'

const PostcodeSearch = () => {
    const [searchValue, setSearchValue] = useState('')

    const onSearch = () => {
        console.log(searchValue)
    }
    return (
        <div className={styles.container}>
            <h2>What will you find today?</h2>
            <p>Amazing local food, one click away</p>
            <SearchInput
                value={searchValue}
                placeholder='Enter your postcode'
                onChange={(value: string) => setSearchValue(value)}
            />
            <Button size={ButtonSizes.Larger} onClick={onSearch} variant={ButtonVariant.Solid} text='Search'/>
        </div>
    )
}

export default PostcodeSearch
