import "./App.css";
import { AppContextProvider } from "./data/AppContext";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <header className="App-header">
          <HomePage />
        </header>
      </div>
    </AppContextProvider>
  );
}

export default App;
