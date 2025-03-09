import "./App.css";
import Map from "./map";
import Todo from "./Todo";

function App() {
  // const bikes = ["Suzuki", "Yamaha", "Hero", "Honda"];
  const riders = [
    { id: 1, name: "Rabby", age: 25 },
    { id: 2, name: "Bijoy", age: 26 },
    { id: 3, name: "Roni", age: 35 },
  ];

  return (
    <>
      <h1>Vite + React</h1>
      <MySpeed name="Suzuki" tspeed="120" cc="150"></MySpeed>
      <MySpeed name="Yamaha" tspeed="130" cc="155"></MySpeed>
      <MySpeed name="Hero" tspeed="110" cc="125"></MySpeed>
      <Todo topic="Learn React" isCompleted={true}></Todo>
      <Todo topic="Learn Node" isCompleted={false}></Todo>
      <Todo topic="Learn MongoDB" isCompleted={false}></Todo>
      <Todo topic="Learn Redux" isCompleted={true}></Todo>
      // dynamic map
      {/* {bikes.map((bike) => (
        <Map bike={bike}></Map>
      ))} */}

      {riders.map((rider) => (
        <Map rider={rider}></Map>
      ))}
    </>
  );
}

function MySpeed({ name, tspeed, cc }) {
  // console.log(name, tspeed, cc);
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Top Speed: {tspeed}</p>
      <p>CC: {cc}</p>
    </div>
  );
}

export default App;
