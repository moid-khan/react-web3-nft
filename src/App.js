import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';
import PunkList from './components/PunkList';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Main from './components/Main';


function App() {

  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)

  useEffect(() => {
    const getNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x3fE8395415e9bE51bDD971CA5ec4ce3634339289&order_direction=asc')
      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets)
    }
    return getNfts()
  }, [])


  return (
    <div className='app'>
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  )
}

export default App;
