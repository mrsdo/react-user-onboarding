import './App.css';
import { useState, useEffect } from 'react';

// import functional utils
import {getRoutesTest} from "./utils/fetch";

function App() {
    //See "../utils/fetch.js"
    const[data, setData] = useState("Hello World");
    useEffect(() => {
       getRoutesTest()
           .then((res) => {
               setData(res.message);
           })
           .catch(error => console.error(error));
    }, []);


  return (
    <div className="App">
      <h1>{data}</h1>
    </div>
  );
}

export default App;
