import React from 'react';
import Style from './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import { HashRouter } from 'react-router-dom';
import Home from "./components/Home";

function App() {
  return (
      <HashRouter>
          <div className={Style.app}>
              <BaseLayout>
                  <Home />
              </BaseLayout>
          </div>
      </HashRouter>
  );
}



export default App;
