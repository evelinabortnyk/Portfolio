import { HashRouter  } from "react-router-dom";

import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./components/App/App";
console.log("test")

createRoot(document.getElementById('root')).render(
  <HashRouter >
    <App />
  </HashRouter >,
)
