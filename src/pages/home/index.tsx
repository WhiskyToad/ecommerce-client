import Image from 'next/image'
import PostcodeSearch from '../../components/widgets/PostcodeSearch/PostcodeSearch'
import styles from './styles.module.scss'
import BannerPic from '../../../public/homepage.jpg'

const Home = () => (
    <div className={styles.container}>
      <Image
        src={BannerPic}
        alt='Picture of food'
        />
          <PostcodeSearch />
    </div>
  )

export default Home
