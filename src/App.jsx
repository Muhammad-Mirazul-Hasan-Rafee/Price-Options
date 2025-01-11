
import './App.css'
import LineChart from './Components/LineChart/LineChart'
import NavBar from './Components/NavBar/NavBar'
import Phones from './Components/Phones/Phones'
import PriceOptions from './Components/priceOptions/priceOptions'
// import DaisyNav from './Components/DaisyNav/DaisyNav'


function App() {
 

  return (
    <>
        <NavBar></NavBar>
        {/* <DaisyNav></DaisyNav> */}

        <PriceOptions></PriceOptions>
        <LineChart></LineChart>
        <Phones></Phones>
    
    </>
  )
}

export default App
