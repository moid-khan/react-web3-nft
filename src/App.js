import "./App.css";
import CollectionCard from "./components/CollectionCard";
import Header from "./components/Header";
import PunkList from "./components/PunkList";
import { useState, useEffect } from "react";
import axios from "axios";
import Main from "./components/Main";

const data = [
  {
    token_id: 1,
    image_original_url: "https://i.ibb.co/Qc6cC92/1.jpg",
    traits: [{ value: "57" }],
    name: "Cyber Punk",
    owner: {
      address: "0x3fE8395415e9bE51bDD971CA5ec4ce3634339289",
      profile_img_url:
        "https://store.playstation.com/store/api/chihiro/00_09_000/container/CH/de/99/EP2402-CUSA05624_00-AV00000000000215/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720",
      name: "trait001",
    },
  },
  {
    token_id: 2,
    image_original_url: "https://i.ibb.co/x1nCf67/1.jpg",
    traits: [{ value: "63" }],
    name: "Cyber Punk",
    owner: {
      address: "0x3fE8395415e9bE51bDD971CA5ec4ce3634339289",
      profile_img_url:
        "https://store.playstation.com/store/api/chihiro/00_09_000/container/CH/de/99/EP2402-CUSA05624_00-AV00000000000215/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720",
      name: "trait001",
    },
  },
  {
    token_id: 3,
    image_original_url: "https://i.ibb.co/cT0M8TR/2.jpg",
    traits: [{ value: "91" }],
    name: "Cyber Punk",
    owner: {
      address: "0x3fE8395415e9bE51bDD971CA5ec4ce3634339289",
      profile_img_url:
        "https://store.playstation.com/store/api/chihiro/00_09_000/container/CH/de/99/EP2402-CUSA05624_00-AV00000000000215/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720",
      name: "trait001",
    },
  },
  {
    token_id: 4,
    image_original_url: "https://i.ibb.co/HHS0mzh/3.jpg",
    traits: [{ value: "109" }],
    name: "Cyber Punk",
    owner: {
      address: "0x3fE8395415e9bE51bDD971CA5ec4ce3634339289",
      profile_img_url:
        "https://store.playstation.com/store/api/chihiro/00_09_000/container/CH/de/99/EP2402-CUSA05624_00-AV00000000000215/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720",
      name: "trait001",
    },
  },
  {
    token_id: 5,
    image_original_url: "https://i.ibb.co/MNLnLc5/4.jpg",
    traits: [{ value: "48" }],
    name: "Cyber Punk",
    owner: {
      address: "0x3fE8395415e9bE51bDD971CA5ec4ce3634339289",
      profile_img_url:
        "https://store.playstation.com/store/api/chihiro/00_09_000/container/CH/de/99/EP2402-CUSA05624_00-AV00000000000215/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720",
      name: "trait001",
    },
  },
  {
    token_id: 6,
    image_original_url: "https://i.ibb.co/zxC0B9c/5.jpg",
    traits: [{ value: "72" }],
    name: "Cyber Punk",
    owner: {
      address: "0x3fE8395415e9bE51bDD971CA5ec4ce3634339289",
      profile_img_url:
        "https://store.playstation.com/store/api/chihiro/00_09_000/container/CH/de/99/EP2402-CUSA05624_00-AV00000000000215/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720",
      name: "trait001",
    },
  },
];

function App() {
  const [punkListData, setPunkListData] = useState(data);
  const [selectedPunk, setSelectedPunk] = useState(0);

  // useEffect(() => {
  //   const getNfts = async () => {
  //     const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x3fE8395415e9bE51bDD971CA5ec4ce3634339289&order_direction=asc')
  //     console.log(openseaData.data.assets);
  //     setPunkListData(openseaData.data.assets)
  //   }
  //   return getNfts()
  // }, [])

  return (
    <div className="app">
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
  );
}

export default App;
