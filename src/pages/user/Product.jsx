import BackToTopBar from "../../components/common/BackToTopBar"
import Messenger from "../../components/common/Messenger"
import MiniGame from "../../components/common/MiniGame"
import MenuProducts from "../../components/products/MenuProducts"

const Product = () => {

  return (
    <>
        {/* Banner product */}
        <div className="banner-product" />

        {/* menu products */}
        <MenuProducts/>

        {/* Back to top bar */}
        <BackToTopBar/>

        {/* mini game */}
        <MiniGame placement="bottom" name="MiniGame"/>

        {/* Messenger */}
        <Messenger/>
    </>

  )
}

export default Product