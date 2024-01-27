// import React, {UseState} from "react";
// import Youtube from 'react-youtube';
// import * as youtubeSearch from "youtube-search";
// import SearchIcon from "@mui/icons-material/Search";
// import {getAllVideos} from "./API/fetch";
// var getYoutubeID = require('get-youtube-id');
//  var search = require('youtube-search');


// export default function YtVid () {
//     const [search, setSearch] = useState("");
//      function handleChange(e){
//          console.log(e.target.value)
//        setSearch(youtubeSearch(e.target.value));
//            }
//     var opts = {
//         height: '390',
//         width: '640',
//         playerVars: {
//         maxResults: 10,
//         key: 'AIzaSyCaqMfUjnoFnCJpUyih4VahXsPSwj1URNw',
//         autoplay: 1,
//         },
//        };
   
//      search('jsconf', opts, function(err, results) {
//          if(err) return console.log(err);
      
//         console.dir(results);
//        });
//     var search = require('youtube-search');
//  function handleChange(e){
//         console.log(e.target.value)
//          const [search, setSearch] = UseState("");
//         setSearch(youtubeSearch(e.target.value));
//           }
//      var opts = {
//          height: '390',
//          width: '640',
//          playerVars: {
//          maxResults: 10,
//         key: '',
//          autoplay: 1,
//          },
//        };
// var opts = {
//   maxResults: 10,
//   key: 'AIzaSyCaqMfUjnoFnCJpUyih4VahXsPSwj1URNw'
// };

// search('jsconf', opts, function(err, results) {
//   if(err) return console.log(err);

//   console.dir(results);
// });
//     return (
//         <div className="header_input">
//         <input required placeholder="Search" type="text" for="search" onChange={handleChange}/>
//         <SearchIcon className="header_inputButton" />
//         <Youtube videoID={search} opts={opts} onReady={this._onReady}/>
//       </div>
//     )
// }






