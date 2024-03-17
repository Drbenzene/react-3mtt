import React, { useState, useEffect, useMemo, memo } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";

function App() {
  const loggedUser = "";
  const year = 2024;

  const [firstName, setFirstName] = useState("");

  console.log(firstName, "THE USER FIRST NAME");

  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState(1);
  const [bankCode, setBankCode] = useState("049");
  const [accountNumber, setAccountNumber] = useState("");
  const [sum, setSum] = useState(0)

  const getUserInfo = (id) => {
    const myUser = {
      email: "ideyhere@gmail.com",
      firstName: "Adewale",
      lastName: "Ayuba",
      age: 30,
    };

    setUserInfo(myUser);
  };



  let a = 20
  let b = 50


  memo(() => {
    function calculateSum(){
return setSum(a + b)
    }  
    calculateSum()
  }, [a, b])



  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 5000);

    // if (bankCode && accountNumber.length === 10){
    // alert("i'm verifiyinnggu")
    // }
  }, []);

  useMemo(() => {
    getUserInfo(1);
    if (bankCode && accountNumber.length === 10) {
      alert("i'm verifiyinnggu");
    }
  }, [id, bankCode, accountNumber]);

  console.log(userInfo, "THE USER INFO");
  return (
    <div className="App">
      {!loading && <p>I'M STILL LOADING... PLEASE WAIT </p>}

      {loading && (
        <>
          <input
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />

          <button onClick={getUserInfo}>LOGIN HERE USER</button>
          <Home userName={loggedUser} year={year} />
        </>
      )}
    </div>
  );
}

export default App;

//KEY TERMINOLOGIES IN REACT

// 1. Components

// 2. Props

//Events 3.

// Conditional Renderings

///METHOS IN REACT
//  1. useState
// 2. useEffect
//3. useMemo
// 4. memo

