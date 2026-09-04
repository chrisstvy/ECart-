import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'
import Products from './pages/Products'
import View from './pages/View'
import Wishlist from './pages/Wishlist'
import './App.css'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/product/:id' element={<View />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App