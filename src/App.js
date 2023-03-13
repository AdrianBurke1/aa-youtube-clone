import {Route, Routes} from "react-router-dom";
import "./App.css";
import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home.jsx";
// import Navbar from "./Components/navbar";
// import videoIndex from "./Components/VideosIndex";
// import videoListing from "./Components/videoListing";

function App() {
  return (
    <div className="App">
      <Header />
     <div className="wrapper">
     <navBar />
     
     <main>
     <Routes>
      <Route path="/" element={<Home />} />
      <videoIndex />
      <videoListing />
      <videoEdit />
      </Routes>
      </main>
      </div>
      <footer />
    </div>
  );
}

export default App;

// This is being done in my branch only push !!!
// Git add .
// Git commit -m “What I did”
// Git push origin Adrian-branch
// ------------------------------
// ONLY PULL IN MAIN !!!!
// Git checkout main
// Git pull origin main
