import { Suspense} from 'react'
import Techonology from './components/techonology'
import "./App.css"
import type { Itecnology } from './type'
import NavBar from './components/nav'
import HeroSection from './components/hero'
import Footer from './components/footer'
const techonologyPromise = async (): Promise<Itecnology[]> => {
  const respons = await fetch("/dev.json")
  const data = respons.json()
  return data
}

function App() {


  return (
    <>
    <div className="container mx-auto">
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <Suspense fallback={<h2>Loding .. .. .. </h2>}>
        <Techonology aItProp={techonologyPromise()} ></Techonology>
      </Suspense>
      <Footer></Footer>
    </div>
    </>
  )
}

export default App
