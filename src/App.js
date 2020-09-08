import React, {createContext} from 'react';
import Style from './App.module.scss';
import BaseLayout from "./Components/BaseLayout";
import { BrowserRouter } from 'react-router-dom';
import Home from "./Components/Home";


const { Provider, Consumer } = createContext({
    darkmode: {}
})
function App() {
  return (
      <BrowserRouter>
          <div className={Style.app}>
              <BaseLayout>
                  <Home />
              </BaseLayout>
          </div>
      </BrowserRouter>
  );
}



export default App;
