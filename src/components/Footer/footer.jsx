import React, { useState } from "react";

function FooterComponent(props) {
  // let email = "";
  const clickedBtnHandler = () => {
    alert("LOGIN BUTTON CLIKCED ");
  };
  const [email, setEmail] = useState("");

  console.log(email, "the emailllll");
  return (
    <section>
      <footer>
        THIS IS THE FOOTER OF OUR WEBSITE
        <p>All right Reserved @ {props.year}</p>
        <button onClick={clickedBtnHandler}>LOGIN BUTTON</button>
        <input
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </footer>
    </section>
  );
}

export default FooterComponent;
