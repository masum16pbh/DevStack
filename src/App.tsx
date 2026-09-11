import { Suspense, useState } from 'react'
import Techonology from './components/techonology'

import type { Itecnology } from './type'
import NavBar from './components/nav'
const techonologyPromise = async (): Promise<Itecnology[]> => {
  const respons = await fetch("/dev.json")
  const data = respons.json()
  return data
}

function App() {


  return (
    <>
      <NavBar></NavBar>
      <Suspense fallback={<h2>Loding .. .. .. </h2>}>
        <Techonology aItProp={techonologyPromise()} ></Techonology>
      </Suspense>
    </>
  )
}

export default App
