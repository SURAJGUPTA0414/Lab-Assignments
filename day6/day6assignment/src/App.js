import './App.css';
import ColourSelector from './Component/ColourSelector';
import Inputshow from './Component/Inputshow';
import Users from './Component/Users';
import About from './Component/Users';

function App() {
  const users = [
    { id: 1, name: "Suraj" },
    { id: 2, name: "Anjali" },
    { id: 3, name: "Rahul" },
    { id: 4, name: "Priya" },
  ];

  return (
    <div className="App">
      <Inputshow />
      <Users users={users}/>
      <ColourSelector />


     


    </div>

    
  );
}

export default App;
