import "./App.css";
import React from "react";
import Header from "./Components/Header";
import home from "./Components/home";
import Navbar from "./Components/navbar";
import videoIndex from "./Components/videosIndex";
import videoListing from "./Components/videoListing";

function App() {
  return (
    <div className="App">
      <h1 className="title"> </h1>

      <home />
      <Header />
      <navBar />
      <videoIndex />
      <videoListing />
      <videoEdit />
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
