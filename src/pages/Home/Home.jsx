import Carousel from '../../components/Carousel/Carousel'
import Footer from '../../components/Footer/Footer'
import List from '../../components/List/List'
import Navbar from '../../components/Navbar/Navbar'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Carousel />
      <List />
      <List />
      <List />
      <List />
      <Footer />
    </div>
  )
}

export default Home