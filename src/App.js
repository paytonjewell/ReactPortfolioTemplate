import React from 'react';
import './App.module.scss';
import BaseLayout from "./components/legacy/BaseLayout";
import {BrowserRouter, HashRouter} from "react-router-dom";

function App() {
   const ua = () => {
      const isUa = (OS) => {
         return navigator.userAgent.indexOf(OS) !== -1;
      }
      if (isUa('Win')) {
         return "Windows"
      } else if (isUa('Mac')) {
         return "Apple"
      } else if (isUa('Linux')) {
         return "Linux"
      } else if (isUa('Android')) {
         return "Android"
      } else if (isUa('like Mac')) {
         return "iOS"
      }
   }

   console.log(`The viewer is using ${ua()}.`)

   return (
      <div>
         <BrowserRouter>
             <BaseLayout/>
         </BrowserRouter>
      </div>
   );
}


export default App;
