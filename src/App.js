import Login from "./login";
import Registration from "./reg";
import Profile from "./profile";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login/>
        <Registration/>
        <Profile/>
      </header>
    </div>
  );
}

export default App;
