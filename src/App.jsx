import HeaderCMP from "./Components/Header/HeaderCMP";

function print_hello() {
  console.log("hello");
}
print_hello();

function App() {
  return (
    <div className="divAllContent">
      <HeaderCMP />
    </div>
  );
}

export default App;
