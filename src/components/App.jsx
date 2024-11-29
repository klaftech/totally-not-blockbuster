import Layout from './Layout'
import Header from './Header';
import CarouselContainer from './CarouselContainer';
import CartContainer from './CartContainer';
import RequestFormContainer from './RequestFormContainer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<CarouselContainer />} />
            <Route path="/wishlist" element={<RequestFormContainer />} />
            <Route path="/cart" element={<CartContainer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
