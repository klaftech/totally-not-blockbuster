import { useState } from 'react'
import NavBar from './NavBar'
import Header from './Header'
import CarouselContainer from './CarouselContainer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Header>
            <NavBar />
        </Header>
        <main>
            <CarouselContainer />
        </main>
    </div>
  )
}

export default App
