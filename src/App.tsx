
import Nav from './component/Nav'
import Hero from './component/Hero'
import Technologies from './component/Technologies'
import type { DataType } from './component/type'
import { Suspense } from 'react'
import LoadingSkin from './component/LoadingSkin'
const technologiesjson = async (): Promise<DataType[]> => {
  const res = await fetch("/technologies.json")
  const data = await res.json()
  return data
}

const App = () => {
  const technologiesdata = technologiesjson()
  return (
    <>
      <Nav />
      <Hero />
      <Suspense fallback={<LoadingSkin/>}>
        <Technologies technologiesdata={technologiesdata} />
      </Suspense>

    </>
  )
}

export default App