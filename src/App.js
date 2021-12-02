import React, { useState } from 'react'
import Header from './Components/Header.jsx'
import NavBar from './Components/NavBar.jsx'
import Products from './Components/Products.jsx'
import Footer from './Components/Footer.jsx'

const App = () => {
  const [searchEngine, setSearchEngine] = useState('')
  console.log(searchEngine)

  return (
    <div>
      <Header searchEngine={searchEngine} setSearchEngine={setSearchEngine} />
      <NavBar />
      <Products searchEngine={searchEngine} setSearchEngine={setSearchEngine} />
      <Footer />
    </div>
  )
}

export default App
