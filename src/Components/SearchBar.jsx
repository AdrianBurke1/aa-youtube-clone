import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    // handle search with the search term
    console.log("Search term: ", searchTerm);
  };
  return (
    <form className="header_input" onSubmit={handleSubmit}>
      <input placeholder="Search" type="text" value={searchTerm} onChange={handleChange} />
      <SearchIcon className="header_inputButton" type="submit" onClick={handleSearch}/>
    </form>
  );
};

export default SearchBar;


// import React, { useState } from "react";
// import fetchData from "../API/fetch";

// const SearchBar = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [videos, setVideos] = useState([]);

//   const handleSearch = async () => {
//     const data = await fetchData(searchTerm);
//     setVideos(data);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>
//       {videos.map((video) => (
//         <div key={video.id.videoId}>
//           <h3>{video.snippet.title}</h3>
//           <iframe
//             width="560"
//             height="315"
//             src={`https://www.youtube.com/embed/${video.id.videoId}`}
//             title={video.snippet.title}
//           ></iframe>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SearchBar;
