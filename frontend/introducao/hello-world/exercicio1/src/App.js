const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const TaskArray = ["Dormir", "Comer", "Codar", "Treinar"];

function App() {
  return (
    <div className="App">
      <ul>
        { TaskArray.map((task) => Task(task)) }
      </ul>
    </div>
  );
}

export default App;
