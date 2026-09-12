
import Nav from './component/Nav'
import Hero from './component/Hero'
import Technologies from './component/Technologies'
import type { DataType } from './component/type'
import { Suspense, useState } from 'react'
import LoadingSkin from './component/LoadingSkin'
import Footer from './component/Footer'
const technologiesjson = async (): Promise<DataType[]> => {
  const res = await fetch("/technologies.json")
  const data = await res.json()
  return data
}

const App = () => {
  const [technologiesdata] = useState(() => technologiesjson())
  const [addstack, setaddstack] = useState<DataType[]>([])
  return (
    <>
      <Nav />
      <Hero />
      <Suspense fallback={<LoadingSkin />}>
        <Technologies technologiesdata={technologiesdata} addstack={addstack} setaddstack={setaddstack} />
      </Suspense>
      <Footer />

    </>
  )
}

export default App