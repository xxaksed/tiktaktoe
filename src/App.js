
import React, { useState } from "react";
import Board from "./components/Board";
import "./App.css";


function App() {
  return (
  <Board>

  </Board>
  );
}
export default App;










// CreateBord();

// import SwapiHero from "./components/SwapiHero";
// import db from './db/db';

// function ShowSomething(props) {
//   console.log(props)
//   return (
//     <div>{props.children}</div>
//   )
// }

// function HomePage() {
//   let [selectedHero, setSelectedHero] = useState(db[0].name);
//   let [input, setInput] = useState('');

//   function searchHero(event) {
//     const { value } = event.target;
//     setInput(value.toLowerCase())
//   }

  // return (
  //   <div className="App">
  //     <div><input onChange={searchHero} placeholder="Hero name:" /></div>
  //     {db
  //       .filter(item => item.name.toLowerCase().includes(input))
  //       .map(({ name }) => {
  //         return (
  //           <SwapiHero onClickFunc={() => setSelectedHero(name)} key={name} name={name}></SwapiHero>
  //         )
  //       })}

//       <div style={{ color: 'green' }}>Selected hero: {selectedHero}</div>
//       <div>{input}</div>

//     <ShowSomething>
//         <h1>Hello something!!!</h1>
//         <SwapiHero />
//         <SwapiHero />
//         <SwapiHero />
//         <SwapiHero />
//     </ShowSomething>
    
//     </div>
//   );
// }

// Tic Tac Toe -> Egor
// SwapiHeroes -> Ciri
// Extra task -> https://prettier.io
// Tuesday 17th

// **Egor -> ADD SCSS support to CRA Bolilerplate next sunday task
// **Ciri -> StyledComponents https://styled-components.com -> VMESTO SCSS
// Until 22 of January







