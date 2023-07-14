import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Frontend/Page/Home";
import Cards from "../Frontend/Card/Cards";
import ViewCard from "../Frontend/ViewCard/viewCard";
const AllRoutes=()=>{
return(

        < BrowserRouter>
        <Routes>
            
            {/* <Route path="/" element={<Home/>}/> */}
            <Route path="/" element={<Cards/>}/>
            <Route path="/view" element={<ViewCard/>}/>
            
        </Routes>
        </BrowserRouter>
  
)
}
export default AllRoutes;