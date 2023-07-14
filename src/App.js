import logo from './logo.svg';
import './App.css';
import AllRoutes from './Components/Route/AllRoutes';
import SimpleSlider from './Components/Frontend/Slider/Slider';
import Cards from './Components/Frontend/Card/Cards';
import data from './Components/jsonData/CardData.json'
import { AuthContext } from './Components/context/contex';
import ViewCard from './Components/Frontend/ViewCard/viewCard';
import { useState } from 'react';
function App() {
  console.log("data==",data);
  const [viewDatas,setViewDatas]=useState();
  return (
   <>
   <AuthContext.Provider value={{data,setViewDatas,viewDatas}}>
   <AllRoutes/>
   {/* <SimpleSlider/> */}
   {/* < ViewCard/> */}
   </AuthContext.Provider>
   </>
  );
}

export default App;
