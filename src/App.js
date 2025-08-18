import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import 'animate.css';
import Header from './Components/Car Travels/Header';
import Footer from './Components/Car Travels/Footer';
import Routing from './Components/Car Travels/Routing';

import { createContext, useState } from 'react';


export const loginStatus = createContext()



function App() {
 const [token,setToken] = useState("")

  return (
    <loginStatus.Provider value={[token,setToken]}>
     <div>
         <Header />
         <Routing />
         <Footer />
     </div>
    </loginStatus.Provider>    
  )
}
      //  <div>
      //    <Header />
      //    <StudentPortal />
      //    <Footer />
      //  </div>
 
export default App;










// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       {/* Edit <code>src/App.js</code> and save to reload. */}
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>


