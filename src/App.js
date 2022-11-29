import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  HeaderCont,
  MainConts,
  RandomConts,
  CoffeViewConts,
  ListConts,
  SelectConts,
  SelectViewConts,
  SearchConts,
} from "./components";

// import MainConts from './components/MainConts'
// import VideoConts from './components/VideoConts'
// import ChannelConts from './components/ChannelConts'
// import SearchConts from './components/SearchConts'

const App = () => {
  return (
    <BrowserRouter>
      <HeaderCont />
      <Routes>
        <Route path="/" element={<MainConts />}></Route>
        <Route path="/random/" element={<RandomConts />}></Route>
        <Route path="/coffeView/:id" element={<CoffeViewConts />}></Route>
        <Route path="/List/:id" element={<ListConts />}></Route>
        <Route path="/select/" element={<SelectConts />}></Route>
        <Route path="/selectview/:id" element={<SelectViewConts />}></Route>
        <Route path="/search/:searchTerm" element={<SearchConts />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
