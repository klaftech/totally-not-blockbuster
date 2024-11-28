import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header'
//import CarouselContainer from './CarouselContainer'
import CarouselSlider from './CarouselSlider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Header />
        <main>
            <CarouselSlider />
        </main>
    </div>
  )
}

export default App
