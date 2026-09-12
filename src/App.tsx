import { Suspense, useState } from 'react'
import Techonology from './components/techonology'
import "./App.css"
import type { Itecnology } from './type'
import NavBar from './components/nav'
import HeroSection from './components/hero'
const techonologyPromise = async (): Promise<Itecnology[]> => {
  const respons = await fetch("/dev.json")
  const data = respons.json()
  return data
}

function App() {


  return (
    <>
    <div className="container mx-auto">
      <h1>haha</h1>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <Suspense fallback={<h2>Loding .. .. .. </h2>}>
        <Techonology aItProp={techonologyPromise()} ></Techonology>
      </Suspense>
    </div>
    </>
  )
}

export default App
