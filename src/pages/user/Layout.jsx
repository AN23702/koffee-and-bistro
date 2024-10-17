import { Outlet } from "react-router-dom"
import TopBar from "../../components/common/TopBar"
import Header from "../../components/common/Header"
import Footer from "../../components/common/Footer"

const Layout = () => {
  return (
    <>
        {/* Top bar */}
        <TopBar/>

        {/* Header */}
        <Header/>

        <Outlet/>

        {/* Footer */}
        <Footer/>
    </>

  )
}

export default Layout