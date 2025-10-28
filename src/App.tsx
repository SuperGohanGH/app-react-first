import "./App.css";
// import Ingredients from "./components/Ingredients.tsx";
// import { useState } from "react";
// import Parent from "./components/Parent.tsx";
// import TemperatureConverter from "./components/TemperatureConverter.tsx";
import TodoApp from "./components/TodoApp.tsx";

function App() {
//   const [filter, setFilter] = useState("");
//   const [ingredientsFiltered, setIngredientsFiltered] = useState(Ingredients);

//   const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setFilter(value);
//     const filtered = Ingredients.filter((ingredient) =>
//       ingredient.name.toLowerCase().startsWith(value.toLowerCase())
//     );
//     setIngredientsFiltered(filtered);
//   };
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFilter(e.target.value);
//   };
//   const applyFilter = () => {
//     const text = filter.trim().toLowerCase();
//     if (!text) {
//       setIngredientsFiltered(Ingredients);
//       return;
//     }
//     setIngredientsFiltered(
//       Ingredients.filter((ingredient) =>
//         ingredient.name.toLowerCase().startsWith(text)
//       )
//     );
//   };
//   return (
//     <div className="App">
//       <h1>Ingredient List</h1>
//       <ul>
//         {ingredientsFiltered.map((ingredient) => (
//           <li key={ingredient.id}>
//             {ingredient.name} - {ingredient.quantity} {ingredient.unit}
//           </li>
//         ))}
//       </ul>
//       <input
//         type="text"
//         name="filter"
//         value={filter}
//         onChange={handleInputChange}
//         placeholder="Inserisci testo e clicca Filtra"
//       />
//       <button onClick={applyFilter}>Filtra</button>
//       <p>Seconda variante: </p>
//       <input type="text" name="filter" onChange={handleFilterChange} />
//     </div>
//   );
  // return <Parent />;
  
  // return <TemperatureConverter />;
  return <TodoApp/>;
} 

export default App;
