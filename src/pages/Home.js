import React from "react";
import HeaderComponent from "../components/Header/header";
import FooterComponent from "../components/Footer/footer";

function Home(props) {
  return (
    <main>
      <header>
        <HeaderComponent userName={props.userName} />
        <FooterComponent year={props.year} />
      </header>
    </main>
  );
}

export default Home;
