import NotFound from './pages/user/NotFound'
import Home from './pages/user/Home'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import LayOut from './pages/user/LayOut'
import Product from './pages/user/Product'
import ProductDetails from './pages/user/ProductDetails'
import BartendingAtHome from './pages/user/BartendingAtHome'
import Store from './pages/user/Store'
import StoreDetails from './pages/user/StoreDetails'
import News from './pages/user/News'
import ContentNews from './pages/user/ContentNews'
import AboutUs from './pages/user/AboutUs'
import History from './pages/user/History'
import Service from './pages/user/Service'
import Job from './pages/user/Job'
import Order from './pages/user/Order'

const App = () => {

  return (

    <BrowserRouter>
      <Routes>

        <Route path='/' element={<LayOut/>}> 
          <Route index element={<Home/>}/>

          <Route path='/product' element={<Product/>}/>

          <Route path='/product-details/:id' element={<ProductDetails/>}/>

          <Route path='/bartending-at-home' element={<BartendingAtHome/>}/>

          <Route path='/store' element={<Store/>}/>

          <Route path='/store-details/:id' element={<StoreDetails/>}/>

          <Route path='/news' element={<News/>}/>

          <Route path='/content-news/:id' element={<ContentNews/>}/>

          <Route path='/about-us' element={<AboutUs/>}/>

          <Route path='/history' element={<History/>}/>

          <Route path='/service' element={<Service/>}/>

          <Route path='/job' element={<Job/>}/>

          <Route path='/order' element={<Order/>}/>

          <Route path='*' element={<NotFound/>}/>




        </Route>


      </Routes>
    </BrowserRouter>

  )
}

export default App