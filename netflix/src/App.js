import React from "react";
import NavBar from "./Components/NavBar/navbar"; 
import Banner from "./Components/Banner/Banner";
import './App.css'
import RowPost from "./Components/RowPost/RowPost";
import {action,ActionMovies,ComedyMovies,Documentaries,HorrorMovies,originals, RomanceMovies} from './urls'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={action} title = 'Action Movies' isSmall= {true} />
      <RowPost url={ComedyMovies} title = 'Comedy Movies' isSmall= {true} />
      <RowPost url={HorrorMovies} title='Horror Movies' />
      <RowPost url={RomanceMovies} title = 'Romance Movies' isSmall= {true} />
      <RowPost url={ActionMovies} title = 'Action Movies' isSmall= {true} />
      <RowPost url={Documentaries} title = 'Documentaries' isSmall= {true} />




      

  
    </div>
  );
}

export default App;
