import "./App.css";
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import VideoListing from "./VideoListing";



function App() {
  return (
    <div className="app">
      {/* <h1></h1> */}


      <Header />
        <div className="app_page">
        <Sidebar />
        <VideoListing />
      </div>
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
