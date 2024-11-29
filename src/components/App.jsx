import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './Layout'
import ErrorPage from './ErrorPage';
import CarouselContainer from './CarouselContainer';
import CartContainer from './CartContainer';
import RequestFormContainer from './RequestFormContainer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} errorElement={<ErrorPage />} >
          <Route index element={<CarouselContainer />} errorElement={<ErrorPage />} />
          <Route path="/wishlist" element={<RequestFormContainer />} errorElement={<ErrorPage />} />
          <Route path="/cart" element={<CartContainer />} errorElement={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} /> {/* Catch-all route */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
