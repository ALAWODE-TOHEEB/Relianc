
import './App.css'
import ContainerSection from './components/ContainerSection'
import DivSection from './components/DivSection'
import FeatureSection from './components/FeatureSection'
import ImageSection from './components/ImageSection'
import InfoSection from './components/InfoSection.jsx'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <div className="">
        <Navbar/>
        <ImageSection/>
        <InfoSection/>
        <FeatureSection/>
        <ContainerSection/>
        <DivSection/>
    </div>
  )
}

export default App
