import "./App.css";

function App() {
  return (
    <>
      <div>Hello world!</div>
      <button
        onClick={async () => {
          const response = await fetch("http://localhost:3000/users");
          const data = await response.json();
          console.log(data);
        }}
      >
        click me!!
      </button>
    </>
  );
}

export default App;
