import "./App.css";
import Login from "./components/login/Login";
import Table from "./components/table/Table";




function App() {
  const netIncomes = [
    { brand: "McDonalds", income: 1291283 },
    { brand: "Burger King", income: 1927361 },
    { brand: "KFC", income: 1098463 },
  ];

  const sumIncome = netIncomes.reduce((sum, item) => sum + item.income, 0);
  const averageIncome = sumIncome / netIncomes.length;
  return(
  <div className="App">
    <h1>Practica 2 obligatoria</h1>
    <h2>ejercicio 2</h2>
    <div className="ejer2">   
        <Table netIncomes={netIncomes} />
        <p>Total de ingresos brutos: {averageIncome}</p>
    </div>
    <div>
      <h2>ejercicio 3</h2>
      <Login/>
    </div>
    
  </div>
  );
}

export default App;
