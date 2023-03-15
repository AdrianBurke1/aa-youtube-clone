//import{NavLink} from "react-router-dom"
export default function Nav() {
    return (
       <div className="header d-flex align-items-center justify-content-space-between">
        <div className="header-left-itmes d-flex align-items-center mxy-30">
          <div className="menubar">
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              class="style-scope yt-icon"
              style={{"width" : "30px" , "height" : "30px"}}
            >
              <g class="style-scope yt-icon">
                <path
                  d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z"
                  class="style-scope yt-icon"
                ></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
      
    );
}