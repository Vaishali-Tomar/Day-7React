import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ImageFetcher from "./ImageFetcher/ImageFetcher.jsx";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Random Image Fetcher</h1>
        </header>
        <ImageFetcher/>
      </div>
    </>
  );
}

export default App;
