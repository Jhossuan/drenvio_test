import './App.css'
import Perfil from './components/Perfil'
import Footer from './layouts/Footer'
import Navbar from './layouts/Navbar'

function App() {

  return (
    <div className="App bg-black">
      <Navbar />
      <Perfil />
      <Footer />
    </div>
  )
}

export default App
