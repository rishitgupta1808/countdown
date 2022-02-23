
import React from "react";


function TopBar() {
  return (
      <>
      <div style={{display:`flex`,flexDirection:`row`,justifyContent:`space-between`,margin:`5px 0px`,fontSize:`20px`,fontWeight:`1000`}}>
          <div style={{display:`flex`}}>
              <img src="https://pomofocus.io/icons/icon-white.png" width="20px" height="20px" style={{margin:`3px 3px`}}/>
              Pomofocus
          </div>
          <div>
              Coming Soon Features
          </div>

      </div>
      </>
  );
}

export default TopBar;