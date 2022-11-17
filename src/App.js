import "./App.css";
import Home from "./home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./navigation/Navigation";
import { Routes, Route } from 'react-router-dom';
import { navigationItems } from "./navigation/models/NavigationItems";
function App() {
  var menuItems = JSON.parse(navigationItems);
  return (
    <div className="App">
      <Navigation navigationItems={menuItems}></Navigation>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
    </div>
  );
}

export default App;
