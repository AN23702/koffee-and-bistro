import BackToTopBar from "../../components/common/BackToTopBar"
import MiniGame from "../../components/common/MiniGame"
import Messenger from "../../components/common/Messenger"
import Banner from "../../components/home/Banner"
import MainContent from "../../components/home/MainContent"


const Home = () => {

  return (
  <>

    {/* Banner */}
    <Banner/>

    {/* Main content */}
    <MainContent/>


    {/* Back to top bar */}
    <BackToTopBar/>

    {/* mini game */}
    <MiniGame placement="bottom" name="MiniGame"/>

    {/* Messenger */}
    <Messenger/>

  </>

  )
}

export default Home