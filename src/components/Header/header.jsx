import React, { memo } from "react";

function HeaderComponent(props) {
  return (
    <div>
      {props.userName && <p>Welcome Back {props?.userName}</p>}

      {!props.userName && (
        <p> THIS IS MY HEADER. WELCOME TO REACT CLASS {props?.userName}</p>
      )}

          {props?.userName ? (
        <p>Welcome Back {props?.userName}</p>
      ) : (
        <p> THIS IS MY HEADER. WELCOME TO REACT CLASS {props?.userName}</p>
      )}
    </div>
  );
}

export default memo(HeaderComponent);
